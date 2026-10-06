/**
 * Builds the Site search index by crawling the built site.
 *
 * Post pages render on demand (see `docs/adr/0002-posts-render-on-demand.md`), so the build output
 * holds no Post HTML and Pagefind's ordinary approach — index `dist/client` — would find plenty of
 * listing and static pages and zero Posts (see `docs/adr/0001-build-search-index-by-crawling.md`).
 * This command therefore starts the built preview server on a port of its own choosing, waits for
 * it to answer, and hands the built HTML of every URL in its crawl plan to Pagefind's Node API,
 * keyed by that URL's site-relative path. Each one is fetched over HTTP *without credentials*, so a
 * gated body never reaches the crawler.
 *
 * The crawl plan is the enumerated Posts, plus the Pages: every other URL the built sitemap lists.
 * A Page is indexed only when its built HTML carries the article-region marker, which is how a Page
 * opts in (see `docs/adr/0004-site-search-indexes-opted-in-pages.md`); one that lacks the marker is
 * reported as skipped. Handing such a Page to Pagefind anyway would index its whole body —
 * navigation and footer included — and a listing Page would then answer for Posts it merely links
 * to.
 *
 * It aborts, rather than report a success it cannot vouch for, when:
 *
 * - the enumerated Posts and the sitemap disagree about which Posts exist;
 * - any crawled URL answers with a status other than 200;
 * - any crawled URL contains the marker the Protected component emits only when it rendered a
 *   gated body unlocked;
 * - a Post's built HTML lacks the article-region marker, so an indexer would read the whole page
 *   instead of the article region;
 * - the bundle does not hold exactly one index per language the crawl indexed.
 *
 * The preview server is stopped on success and on failure alike. The language check runs after the
 * bundle has been written, so a run that fails there leaves that bundle in place.
 *
 * Run it after the site build, because that build clears the output directory and the index lives
 * in it: `bun run build && bun run build:search`. See `bun run test:search` for the integration
 * test that asserts on this command's artifacts.
 */

import type { ChildProcess } from 'node:child_process'
import type { PagefindIndex } from 'pagefind'
import type { Locale } from '../src/paraglide/runtime'
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
 * Whether a crawled URL is a Post or a Page. A Post belongs in every index by default; a Page has
 * to opt in.
 */
type CrawlKind = 'post' | 'page'

/**
 * A URL the crawl will fetch and hand to Pagefind.
 */
interface CrawlTarget {
	/** The URL's site-relative path, spelled as the site addresses it. */
	path: string
	/** The locale the URL is published in, and so the language index it must land in. */
	locale: Locale
	/** Whether the URL is a Post or a Page. */
	kind: CrawlKind
}

/**
 * A Page candidate the crawl left out, and why.
 */
interface SkippedPage {
	/** The Page's site-relative path. */
	path: string
	/** Why the Page is in no index. */
	reason: 'no article region' | 'no locale'
}

/**
 * What the crawl will fetch, and the Page candidates that were out of scope before fetching began.
 */
interface CrawlPlan {
	/** The URLs to fetch. */
	targets: CrawlTarget[]
	/** The Page candidates that name no locale, so no language index could hold them. */
	skipped: SkippedPage[]
}

/**
 * What a completed crawl produced.
 */
interface IndexBuildResult {
	/** The page count per language the bundle holds. */
	pageCounts: LanguagePageCounts
	/** The Page candidates that were fetched and left out of the index. */
	skipped: SkippedPage[]
}

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
	const sitemapUrls = readSitemapUrls()
	assertSitemapAgreesWith(indexable, sitemapUrls)
	const { targets, skipped } = planCrawl(indexable, sitemapUrls)

	const port = await findFreePort()
	console.log(`Crawling ${pluralize(targets.length, 'URL')} from the built preview server on http://${PREVIEW_HOST}:${port}/`)
	const crawl = await buildIndex(targets, port)
	printSummary(crawl.pageCounts, excluded, [...skipped, ...crawl.skipped].sort((left, right) => left.path.localeCompare(right.path)))
}

/**
 * Crawls every URL in the plan, hands each one to Pagefind and writes the bundle.
 * @param targets The URLs to crawl.
 * @param port The port the preview server answers on.
 * @returns The page count per language the bundle holds, and the Pages the crawl left out.
 */
async function buildIndex(targets: CrawlTarget[], port: number): Promise<IndexBuildResult> {
	const server = startPreviewServer(port)
	try {
		await server.waitUntilReady()
		const { index, errors } = await pagefind.createIndex()
		if (!index) {
			throw new IndexBuildError(`Pagefind refused to create an index: ${errors.join('; ')}`)
		}
		try {
			const indexed: CrawlTarget[] = []
			const skipped: SkippedPage[] = []
			for (const target of targets) {
				if (await addToIndex(index, target, port)) {
					indexed.push(target)
				}
				else {
					skipped.push({ path: target.path, reason: 'no article region' })
				}
			}
			return { pageCounts: await writeBundle(index, indexed), skipped }
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
 * Fetches a URL the way an anonymous visitor would, and refuses anything that would make the index
 * wrong.
 * @param target The URL to fetch.
 * @param port The port the preview server answers on.
 * @returns The response body.
 */
async function fetchTarget(target: CrawlTarget, port: number): Promise<string> {
	let response: Response
	try {
		response = await fetch(`http://${PREVIEW_HOST}:${port}${target.path}`, {
			// The credential-free fetch is the only thing keeping a Protected Post's body out of the
			// index, so it is stated here rather than left to the default.
			credentials: 'omit',
			// A URL must be served as spelled; a redirect would index a second spelling of it.
			redirect: 'manual',
			signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
		})
	}
	catch (error) {
		throw new IndexBuildError(`${target.path} could not be fetched: ${(error as Error).message}`)
	}
	if (response.status !== 200) {
		throw new IndexBuildError(`${target.path} answered ${response.status} ${response.statusText}; every crawled URL must answer 200.`)
	}
	const content = await response.text()
	if (content.includes(UNLOCKED_PROTECTED_MARKER)) {
		throw new IndexBuildError(`${target.path} contains ${UNLOCKED_PROTECTED_MARKER}, so gated content reached the crawler unlocked. Refusing to index it.`)
	}
	return content
}

/**
 * Hands one crawled URL to Pagefind, keyed by its site-relative path.
 *
 * The article-region marker is a requirement for a Post and an opt-in for a Page: a Post without it
 * means an indexer would read the whole page, while a Page without it simply never asked to be
 * indexed.
 * @param index The index to add the URL to.
 * @param target The URL to add.
 * @param port The port the preview server answers on.
 * @returns Whether the URL was indexed.
 */
async function addToIndex(index: PagefindIndex, target: CrawlTarget, port: number): Promise<boolean> {
	const content = await fetchTarget(target, port)
	if (!content.includes(ARTICLE_REGION_MARKER)) {
		if (target.kind === 'post') {
			throw new IndexBuildError(`${target.path} is a Post but does not contain ${ARTICLE_REGION_MARKER}, so an indexer would read the whole page instead of the article region. Refusing to index it.`)
		}
		return false
	}
	const { errors, file } = await index.addHTMLFile({ url: target.path, content })
	if (errors.length > 0) {
		throw new IndexBuildError(`Pagefind could not index ${target.path}: ${errors.join('; ')}`)
	}
	if (file.url !== target.path) {
		console.warn(`Warning: Pagefind recorded "${file.url}" for ${target.path}; results will link to what it recorded.`)
	}
	return true
}

/**
 * Writes the bundle into the client output and reads back what it holds.
 * @param index The index to write.
 * @param indexed The URLs that were added to it.
 * @returns The page count per language the bundle holds.
 */
async function writeBundle(index: PagefindIndex, indexed: CrawlTarget[]): Promise<LanguagePageCounts> {
	const { errors } = await index.writeFiles({ outputPath: BUNDLE_DIRECTORY })
	if (errors.length > 0) {
		throw new IndexBuildError(`Pagefind could not write the index: ${errors.join('; ')}`)
	}
	const entry = readBundleEntry()
	const pageCounts = new Map(Object.entries(entry.languages ?? {}).map(([language, info]) => [language, info.page_count ?? 0]))
	const actualLanguages = [...pageCounts.keys()].sort()
	const expectedLanguages = [...new Set(indexed.map(target => target.locale.toLowerCase()))].sort()
	if (actualLanguages.join() !== expectedLanguages.join()) {
		throw new IndexBuildError(`The bundle holds an index for ${actualLanguages.join(', ') || 'no language'}, but the crawl indexed ${expectedLanguages.join(', ') || 'no language'}. Every crawled URL must land in its own language's index, and nowhere else.`)
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
 * @param sitemapUrls Every URL the built sitemap lists.
 */
function assertSitemapAgreesWith(indexable: IndexablePost[], sitemapUrls: string[]): void {
	const sitemapPostUrls = new Set(sitemapUrls.filter(url => POST_URL_PATTERN.test(url)))
	const enumeratedUrls = new Set(indexable.map(post => post.url))
	const missing = [...enumeratedUrls].filter(url => !sitemapPostUrls.has(url))
	const unexpected = [...sitemapPostUrls].filter(url => !enumeratedUrls.has(url))
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
 * Decides what the crawl will fetch.
 *
 * Every enumerated Post is fetched, because a Post belongs in every index unless its frontmatter
 * says otherwise. The Pages are every other URL the sitemap lists: that the Page exists is the
 * sitemap's to declare, while whether it is indexed is decided by the marker in its built HTML, so
 * a Page is planned here and judged when it is fetched.
 * @param indexable The enumerated Posts.
 * @param sitemapUrls Every URL the built sitemap lists.
 * @returns The URLs to fetch, and the Page candidates that name no locale.
 */
function planCrawl(indexable: IndexablePost[], sitemapUrls: string[]): CrawlPlan {
	const targets: CrawlTarget[] = indexable.map(post => ({ path: post.path, locale: post.locale, kind: 'post' }))
	const skipped: SkippedPage[] = []
	for (const url of sitemapUrls) {
		// The Post URLs the sitemap lists were just checked against the enumerated Posts.
		if (POST_URL_PATTERN.test(url)) {
			continue
		}
		const path = new URL(url).pathname
		const locale = getLocaleFromPath(path)
		if (locale === null) {
			skipped.push({ path, reason: 'no locale' })
			continue
		}
		targets.push({ path, locale, kind: 'page' })
	}
	return { targets, skipped }
}

/**
 * Reads a Page's locale off its path, which is where the site spells it: a prerendered Page is
 * addressed as `{base}/{locale}/...`, the same shape `buildPostPath` gives a Post.
 * @param path The Page's site-relative path.
 * @returns The locale the path names, or `null` when it names none.
 */
function getLocaleFromPath(path: string): Locale | null {
	const base = SITE.base.replace(/\/+$/, '')
	const withoutBase = path.startsWith(base) ? path.slice(base.length) : path
	const firstSegment = withoutBase.replace(/^\/+/, '').split('/')[0]
	return LOCALES.find(locale => locale.toLowerCase() === firstSegment.toLowerCase()) ?? null
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
 * @param skipped The Page candidates the index does not cover, with a reason each.
 */
function printSummary(pageCounts: LanguagePageCounts, excluded: ExcludedPost[], skipped: SkippedPage[]): void {
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
	}
	else {
		console.log(`Excluded ${pluralize(excluded.length, 'Post')} from every index:`)
		for (const post of excluded) {
			console.log(`  - ${post.displayId} (${post.locale}): ${post.reason} [${toPosixPath(relative(PROJECT_ROOT, post.sourcePath))}]`)
		}
	}
	console.log('')
	if (skipped.length === 0) {
		console.log('Skipped Pages: none.')
	}
	else {
		console.log(`Skipped ${pluralize(skipped.length, 'Page')} the index does not cover:`)
		for (const page of skipped) {
			console.log(`  - ${page.path}: ${page.reason}`)
		}
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
