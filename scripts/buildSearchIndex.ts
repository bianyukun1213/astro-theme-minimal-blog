/**
 * Builds the Site search index by crawling the built site.
 *
 * Post pages render on demand (see `docs/adr/0002-posts-render-on-demand.md`), so the build output
 * holds no Post HTML and Pagefind's ordinary approach — index `dist/client` — would find plenty of
 * listing and static pages and zero Posts (see `docs/adr/0001-build-search-index-by-crawling.md`).
 * This command therefore starts the built preview server on a port of its own choosing, waits for
 * it to answer, enumerates the Posts, fetches each one over HTTP *without credentials*, and hands
 * each response body to Pagefind's Node API keyed by that Post's URL.
 *
 * It aborts instead of writing a wrong index quietly when:
 *
 * - the enumerated Posts and the sitemap disagree about which Posts exist;
 * - any fetched page answers with a status other than 200;
 * - any fetched page contains the marker the Protected component emits only when it rendered a
 *   gated body unlocked;
 * - any fetched page lacks the article-region marker;
 * - the bundle does not hold exactly one index per language present in the content.
 *
 * The preview server is stopped on success and on failure alike.
 *
 * Run it after the site build, because that build clears the output directory and the index lives
 * in it: `bun run build && bun run build:search`. See `bun run test:search` for the integration
 * test that asserts on this command's artifacts.
 */

import type { ChildProcess } from 'node:child_process'
import type { PagefindIndex } from 'pagefind'
import type { ExcludedPost, IndexablePost } from '../src/postEnumeration'
import { spawn, spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { basename, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as pagefind from 'pagefind'
import { CLIENT_OUTPUT_DIRECTORY, LOCALES, SEARCH_INDEX_BUNDLE_NAME, SITE } from '../src/constants'
import { enumeratePosts } from '../src/postEnumeration'

/**
 * Thrown for every condition this command knows how to refuse rather than for a defect in it.
 */
class IndexBuildError extends Error {}

const PROJECT_ROOT = fileURLToPath(new URL('..', import.meta.url))
const CLIENT_DIRECTORY = resolve(PROJECT_ROOT, CLIENT_OUTPUT_DIRECTORY)
const BUNDLE_DIRECTORY = join(CLIENT_DIRECTORY, SEARCH_INDEX_BUNDLE_NAME)

/**
 * The preview server binds this address rather than `localhost`, which resolves to the IPv6
 * loopback only on some machines while the crawl fetches over IPv4.
 */
const PREVIEW_HOST = '127.0.0.1'

/** @astrojs/sitemap's default `filenameBase`, and the file that names the sitemap shards. */
const SITEMAP_INDEX_FILENAME = 'sitemap-index.xml'

/** Pagefind's marker for the region of a page that is safe to index. */
const ARTICLE_REGION_MARKER = 'data-pagefind-body'

/** Emitted only by the unlocked branch of the Protected component. */
const UNLOCKED_PROTECTED_MARKER = 'data-protected-unlocked'

const READINESS_TIMEOUT_MS = 120_000
const READINESS_PROBE_TIMEOUT_MS = 5_000
const READINESS_POLL_INTERVAL_MS = 400
const FETCH_TIMEOUT_MS = 30_000
const SHUTDOWN_TIMEOUT_MS = 10_000

/**
 * A URL is a Post's URL when it addresses a Post's route: `/{locale}/posts/{Display ID}/`. The
 * paging route `/{locale}/posts/p/{page}/` lists Posts and is not one.
 */
const POST_URL_PATTERN = new RegExp(
	`^${escapeForRegExp(`${SITE.url.replace(/\/+$/, '')}${SITE.base.replace(/\/+$/, '')}`)}/(?:${LOCALES.map(escapeForRegExp).join('|')})/posts/(?!p/)`,
)

/**
 * The languages Pagefind wrote into the bundle, with each one's page count.
 */
type LanguagePageCounts = Map<string, number>

/**
 * The `pagefind-entry.json` bundle file, narrowed to what this command reads from it.
 */
interface PagefindEntry {
	languages?: Record<string, { page_count?: number }>
}

try {
	await main()
}
catch (error) {
	if (error instanceof IndexBuildError) {
		console.error(`Site search index build failed. ${error.message}`)
	}
	else {
		console.error(error)
	}
	process.exitCode = 1
}

async function main(): Promise<void> {
	const { indexable, excluded } = enumeratePosts()
	assertSitemapAgreesWith(indexable)

	const port = await findFreePort()
	console.log(`Crawling ${pluralize(indexable.length, 'Post')} from the built preview server on http://${PREVIEW_HOST}:${port}/`)
	const pageCounts = await buildIndex(indexable, port)
	printSummary(pageCounts, excluded)
}

/**
 * Crawls every Post, hands it to Pagefind and writes the bundle.
 * @param indexable The Posts to index.
 * @param port The port the preview server answers on.
 * @returns The page count per language the bundle holds.
 */
async function buildIndex(indexable: IndexablePost[], port: number): Promise<LanguagePageCounts> {
	const server = startPreviewServer(port)
	try {
		await server.waitUntilReady()
		const { index, errors } = await pagefind.createIndex()
		if (!index) {
			throw new IndexBuildError(`Pagefind refused to create an index: ${errors.join('; ')}`)
		}
		try {
			for (const post of indexable) {
				await addPostToIndex(index, post, port)
			}
			return await writeBundle(index, indexable)
		}
		finally {
			await index.deleteIndex()
		}
	}
	finally {
		await pagefind.close()
		await server.stop()
	}
}

/**
 * Fetches a Post the way an anonymous visitor would, and refuses anything that would make the
 * index wrong.
 * @param post The Post to fetch.
 * @param port The port the preview server answers on.
 * @returns The response body.
 */
async function fetchPost(post: IndexablePost, port: number): Promise<string> {
	let response: Response
	try {
		response = await fetch(`http://${PREVIEW_HOST}:${port}${post.path}`, {
			// The credential-free fetch is the only thing keeping a Protected Post's body out of the
			// index, so it is stated here rather than left to the default.
			credentials: 'omit',
			// A Post's URL must be served as spelled; a redirect would index a second spelling of it.
			redirect: 'manual',
			signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
		})
	}
	catch (error) {
		throw new IndexBuildError(`${post.path} could not be fetched: ${(error as Error).message}`)
	}
	if (response.status !== 200) {
		throw new IndexBuildError(`${post.path} answered ${response.status} ${response.statusText}; every Post must answer 200.`)
	}
	const content = await response.text()
	if (content.includes(UNLOCKED_PROTECTED_MARKER)) {
		throw new IndexBuildError(`${post.path} contains ${UNLOCKED_PROTECTED_MARKER}, so gated content reached the crawler unlocked. Refusing to index it.`)
	}
	if (!content.includes(ARTICLE_REGION_MARKER)) {
		throw new IndexBuildError(`${post.path} does not contain ${ARTICLE_REGION_MARKER}, so an indexer would read the whole page instead of the article region. Refusing to index it.`)
	}
	return content
}

/**
 * Hands one fetched Post to Pagefind, keyed by the Post's site-relative path.
 * @param index The index to add the Post to.
 * @param post The Post to add.
 * @param port The port the preview server answers on.
 */
async function addPostToIndex(index: PagefindIndex, post: IndexablePost, port: number): Promise<void> {
	const content = await fetchPost(post, port)
	const { errors, file } = await index.addHTMLFile({ url: post.path, content })
	if (errors.length > 0) {
		throw new IndexBuildError(`Pagefind could not index ${post.path}: ${errors.join('; ')}`)
	}
	if (file.url !== post.path) {
		console.warn(`Warning: Pagefind recorded "${file.url}" for ${post.path}; results will link to what it recorded.`)
	}
}

/**
 * Writes the bundle into the client output and reads back what it holds.
 * @param index The index to write.
 * @param indexable The Posts that were added to it.
 * @returns The page count per language the bundle holds.
 */
async function writeBundle(index: PagefindIndex, indexable: IndexablePost[]): Promise<LanguagePageCounts> {
	const { errors } = await index.writeFiles({ outputPath: BUNDLE_DIRECTORY })
	if (errors.length > 0) {
		throw new IndexBuildError(`Pagefind could not write the index: ${errors.join('; ')}`)
	}
	const entry = readBundleEntry()
	const pageCounts = new Map(Object.entries(entry.languages ?? {}).map(([language, info]) => [language, info.page_count ?? 0]))
	const actualLanguages = [...pageCounts.keys()].sort()
	const expectedLanguages = [...new Set(indexable.map(post => post.locale.toLowerCase()))].sort()
	if (actualLanguages.join() !== expectedLanguages.join()) {
		throw new IndexBuildError(`The bundle holds an index for ${actualLanguages.join(', ') || 'no language'}, but the content holds ${expectedLanguages.join(', ')}. Every Post must land in its own language's index, and nowhere else.`)
	}
	return pageCounts
}

/**
 * Reads the bundle's entry file, which names the language indexes and their page counts.
 * @returns The parsed entry file.
 */
function readBundleEntry(): PagefindEntry {
	const entryPath = join(BUNDLE_DIRECTORY, 'pagefind-entry.json')
	if (!existsSync(entryPath)) {
		throw new IndexBuildError(`Pagefind did not write ${relative(PROJECT_ROOT, entryPath)}.`)
	}
	return JSON.parse(readFileSync(entryPath, 'utf8')) as PagefindEntry
}

/**
 * Refuses to build an index for a set of Posts the sitemap does not agree with.
 * @param indexable The enumerated Posts.
 */
function assertSitemapAgreesWith(indexable: IndexablePost[]): void {
	const sitemapUrls = new Set(readSitemapUrls().filter(url => POST_URL_PATTERN.test(url)))
	const enumeratedUrls = new Set(indexable.map(post => post.url))
	const missing = [...enumeratedUrls].filter(url => !sitemapUrls.has(url))
	const unexpected = [...sitemapUrls].filter(url => !enumeratedUrls.has(url))
	if (missing.length === 0 && unexpected.length === 0) {
		return
	}
	const details = [
		...missing.map(url => `  missing from the sitemap: ${url}`),
		...unexpected.map(url => `  in the sitemap but not in the content tree: ${url}`),
	]
	throw new IndexBuildError(`The sitemap and the content tree disagree about which Posts exist:\n${details.join('\n')}`)
}

/**
 * Reads every URL the built sitemap lists.
 * @returns The sitemap's URLs, in the order the sitemap names them.
 */
function readSitemapUrls(): string[] {
	const indexPath = join(CLIENT_DIRECTORY, SITEMAP_INDEX_FILENAME)
	if (!existsSync(indexPath)) {
		throw new IndexBuildError(`There is no built site at ${toPosixPath(relative(PROJECT_ROOT, CLIENT_DIRECTORY))}: ${SITEMAP_INDEX_FILENAME} is missing. Build the site first: bun run build`)
	}
	const shards = readLocElements(readFileSync(indexPath, 'utf8')).map(loc => basename(new URL(loc).pathname))
	return shards.flatMap(shard => readLocElements(readFileSync(join(CLIENT_DIRECTORY, shard), 'utf8')))
}

/**
 * Reads the `<loc>` elements out of a sitemap document.
 * @param xml The sitemap or sitemap index document.
 * @returns The URLs it lists.
 */
function readLocElements(xml: string): string[] {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].replaceAll('&amp;', '&'))
}

/**
 * Starts the site's built preview server on an explicit port.
 *
 * The server is `bun run preview`, so it is whatever this repository documents as its built
 * preview; the runtime that runs this script is the one that starts it.
 * @param port The port to serve on.
 * @returns Handles for waiting until it answers and for stopping it.
 */
function startPreviewServer(port: number): PreviewServer {
	const child = spawn(
		process.execPath,
		['run', 'preview', '--', '--port', String(port), '--host', PREVIEW_HOST],
		{
			cwd: PROJECT_ROOT,
			stdio: ['ignore', 'pipe', 'pipe'],
			// A process group of its own, so that stopping it also stops the server it starts.
			detached: process.platform !== 'win32',
		},
	)
	let log = ''
	child.stdout?.on('data', (chunk: Buffer) => {
		log += chunk.toString()
	})
	child.stderr?.on('data', (chunk: Buffer) => {
		log += chunk.toString()
	})
	const exited = new Promise<void>((resolveExit) => {
		child.once('exit', () => resolveExit())
	})
	let stopped = false

	return {
		async waitUntilReady(): Promise<void> {
			const deadline = Date.now() + READINESS_TIMEOUT_MS
			while (Date.now() < deadline) {
				if (child.exitCode !== null) {
					throw new IndexBuildError(`The preview server exited with code ${child.exitCode} before it was ready.\n${log}`)
				}
				try {
					// The preview answers its static routes through the same runtime that renders Posts, so
					// a static route answering means the crawl's routes will answer too. `robots.txt` is the
					// cheapest route every build has, and it does not depend on the content tree.
					const response = await fetch(`http://${PREVIEW_HOST}:${port}/robots.txt`, {
						redirect: 'manual',
						signal: AbortSignal.timeout(READINESS_PROBE_TIMEOUT_MS),
					})
					if (response.status === 200) {
						return
					}
				}
				catch {
					// The server is not listening yet; the next poll is the answer.
				}
				await delay(READINESS_POLL_INTERVAL_MS)
			}
			throw new IndexBuildError(`The preview server was not ready within ${READINESS_TIMEOUT_MS / 1000} seconds.\n${log}`)
		},

		async stop(): Promise<void> {
			if (stopped) {
				return
			}
			stopped = true
			if (child.exitCode !== null) {
				return
			}
			killProcessTree(child, 'SIGTERM')
			if (await settled(exited, SHUTDOWN_TIMEOUT_MS)) {
				return
			}
			killProcessTree(child, 'SIGKILL')
			if (!(await settled(exited, SHUTDOWN_TIMEOUT_MS))) {
				console.warn(`Warning: the preview server (pid ${child.pid}) is still running.`)
			}
		},
	}
}

interface PreviewServer {
	/**
	 * Resolves once the server answers, and rejects when it never does.
	 * @returns Nothing, once the server is serving.
	 */
	waitUntilReady: () => Promise<void>
	/**
	 * Stops the server and everything it started. Stops at most once.
	 * @returns Nothing, once the server is gone or has been given up on.
	 */
	stop: () => Promise<void>
}

/**
 * Kills a process and its children.
 *
 * `child.kill()` alone leaves the server's own children — the Workers runtime among them — running,
 * holding both the port and this process's pipes.
 * @param child The process to kill.
 * @param signal The signal to ask for, where the platform has a choice.
 */
function killProcessTree(child: ChildProcess, signal: NodeJS.Signals): void {
	if (child.pid === undefined) {
		return
	}
	if (process.platform === 'win32') {
		// `taskkill` has no signal to choose; `/t` reaches the children and `/f` is its only force.
		spawnSync('taskkill', ['/pid', String(child.pid), '/t', '/f'], { stdio: 'ignore' })
		return
	}
	try {
		process.kill(-child.pid, signal)
	}
	catch {
		child.kill(signal)
	}
}

/**
 * Asks the operating system for a port nothing is listening on.
 *
 * The port is explicit — the preview server is told which one to use — but chosen at run time, so
 * that a build does not fail because a developer happens to have something on a fixed port.
 * @returns The free port.
 */
async function findFreePort(): Promise<number> {
	const probe = createServer()
	try {
		await new Promise<void>((resolveListening, rejectListening) => {
			probe.once('error', rejectListening)
			probe.listen(0, PREVIEW_HOST, resolveListening)
		})
		const address = probe.address()
		if (address === null || typeof address === 'string') {
			throw new IndexBuildError('Could not choose a port for the preview server.')
		}
		return address.port
	}
	finally {
		if (probe.listening) {
			await new Promise<void>((resolveClosed) => {
				probe.close(() => resolveClosed())
			})
		}
	}
}

/**
 * Prints what was indexed and what was left out.
 * @param pageCounts The page count per language the bundle holds.
 * @param excluded The Posts that were left out of every index, with a reason each.
 */
function printSummary(pageCounts: LanguagePageCounts, excluded: ExcludedPost[]): void {
	const counts = [...pageCounts].sort(([left], [right]) => left.localeCompare(right))
	const total = counts.reduce((sum, [, pageCount]) => sum + pageCount, 0)
	console.log('')
	console.log(`Site search index written to ${toPosixPath(relative(PROJECT_ROOT, BUNDLE_DIRECTORY))}`)
	console.log(`Indexed ${pluralize(total, 'page')} in ${pluralize(counts.length, 'language')}:`)
	for (const [language, pageCount] of counts) {
		console.log(`  ${spellLanguage(language)}: ${pluralize(pageCount, 'page')}`)
	}
	console.log('')
	if (excluded.length === 0) {
		console.log('Excluded Posts: none.')
		return
	}
	console.log(`Excluded ${pluralize(excluded.length, 'Post')} from every index:`)
	for (const post of excluded) {
		console.log(`  - ${post.displayId} (${post.locale}): ${post.reason} [${toPosixPath(relative(PROJECT_ROOT, post.sourcePath))}]`)
	}
}

/**
 * Spells a language the way the content tree does, falling back to what the bundle calls it.
 * @param language The language as the bundle spells it, lower-cased.
 * @returns The language as `LOCALES` spells it.
 */
function spellLanguage(language: string): string {
	return LOCALES.find(locale => locale.toLowerCase() === language) ?? language
}

/**
 * Renders a count and its noun.
 * @param amount The count.
 * @param noun The singular noun.
 * @returns The count with the noun in its singular or plural form.
 */
function pluralize(amount: number, noun: string): string {
	return `${amount} ${amount === 1 ? noun : `${noun}s`}`
}

/**
 * Rewrites a path's separators so that output reads the same on every platform.
 * @param path The path to rewrite.
 * @returns The path with forward slashes.
 */
function toPosixPath(path: string): string {
	return path.replaceAll('\\', '/')
}

/**
 * Escapes a literal string for use inside a regular expression.
 * @param value The literal string.
 * @returns The escaped string.
 */
function escapeForRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Waits for a duration.
 * @param milliseconds How long to wait.
 * @returns Nothing, once the duration has passed.
 */
function delay(milliseconds: number): Promise<void> {
	return new Promise(resolveDelay => setTimeout(resolveDelay, milliseconds))
}

/**
 * Waits for a promise, but not forever.
 * @param promise The promise to wait for.
 * @param milliseconds How long to wait.
 * @returns Whether the promise settled in time.
 */
async function settled(promise: Promise<void>, milliseconds: number): Promise<boolean> {
	return Promise.race([promise.then(() => true), delay(milliseconds).then(() => false)])
}
