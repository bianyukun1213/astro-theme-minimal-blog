/// <reference types="bun" />

/**
 * The Site search index's integration test.
 *
 * The seam is the command, not the pipeline's internals: this test runs the documented sequence —
 * the site build, then the index build — and asserts on the artifacts a developer or a deployment
 * consumes. The expected page counts are computed independently of the crawl: Posts from the
 * content tree and the documented URL spelling, Pages from the article-region marker in their own
 * built HTML. A helper being renamed cannot pass this test, and neither can an index of the wrong
 * shape.
 *
 * The pipeline's own assertions — the enumerated Posts agree with the sitemap, no gated content
 * reached the crawler, every Post carries the article-region marker — fail the builds this test
 * runs, so they are exercised here for free.
 *
 * Run it with `bun run test:search`, never as part of the default test path: it performs a full
 * site build. The exclusion paths are exercised by temporary content that lives only for the
 * duration of the run.
 */

import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'
import { parse as parseYaml } from 'yaml'

const PROJECT_ROOT = resolve(import.meta.dir, '..')
const BLOG_DIRECTORY = join(PROJECT_ROOT, 'content', 'blog')
const CLIENT_DIRECTORY = join(PROJECT_ROOT, 'dist', 'client')
const BUNDLE_DIRECTORY = join(CLIENT_DIRECTORY, 'pagefind')

/** `SITE.url` in `src/constants.ts`, spelled out so this test does not read what it verifies. */
const SITE_ORIGIN = 'https://his2nd.life'

/** The marker that decides what an indexer reads, spelled out for the same reason. */
const ARTICLE_REGION_MARKER = 'data-pagefind-body'

/** A full site build, the index build's crawl and the workerd preview server's start-up. */
const TEST_TIMEOUT_MS = 900_000

/**
 * A Post that belongs in no index, and the frontmatter field that puts it there.
 */
interface ExcludedPostFixture {
	/** The fixture's Display ID. */
	displayId: string
	/** The frontmatter line that excludes it. */
	frontmatter: string
	/** The reason the index build must report for it. */
	reason: string
}

const FIXTURES: ExcludedPostFixture[] = [
	{ displayId: 'probe-draft', frontmatter: 'draft: true', reason: 'draft' },
	{ displayId: 'probe-hidden', frontmatter: 'hidden: true', reason: 'hidden' },
	{ displayId: 'probe-not-indexed', frontmatter: 'searchIndex: false', reason: 'searchIndex: false' },
]

/**
 * A Post as the content tree holds it, with its indexability decided here rather than by the code
 * under test.
 */
interface ContentPost {
	/** The locale the Post is published in. */
	locale: string
	/** The Post's Display ID. */
	displayId: string
	/** Why the Post is in no index, or `null` when it is indexable. */
	exclusion: string | null
}

/**
 * The Pages the built site publishes, split by whether their own HTML asked to be indexed.
 */
interface BuiltPages {
	/** The Pages whose HTML carries the article-region marker, with the locale each is published in. */
	indexed: { path: string, locale: string }[]
	/** The Pages the index does not cover, with the reason each is left out. */
	skipped: { path: string, reason: 'no article region' | 'no locale' }[]
}

test('the documented build sequence produces an index covering every indexable Post and Page', async () => {
	const fixtureDirectories = writeFixtures()
	try {
		const siteBuild = await run('build')
		expect(siteBuild.exitCode, siteBuild.output).toBe(0)
		const indexBuild = await run('build:search')
		expect(indexBuild.exitCode, indexBuild.output).toBe(0)

		const posts = readContentTree()
		const expectedPosts = posts.filter(post => post.exclusion === null)
		const expectedPostUrls = expectedPostUrlsOf(expectedPosts)

		// A Page is indexed exactly when its built HTML carries the article-region marker, so the
		// build's own output — not the crawl's report — is what the expected counts come from.
		const { indexed: expectedPages, skipped: skippedPages } = readBuiltPages()
		const expectedCounts = mergeCounts(countByLocale(expectedPosts), countByLocale(expectedPages))
		const indexedTotal = expectedPosts.length + expectedPages.length

		// The content tree, not the build, is what the fixtures must be visible to.
		expect(
			posts.filter(post => post.exclusion !== null).map(post => `${post.displayId}: ${post.exclusion}`).sort(),
		).toEqual(FIXTURES.map(fixture => `${fixture.displayId}: ${fixture.reason}`).sort())

		// The sitemap lists every indexable Post, spelled exactly as the site addresses them.
		const sitemapPostUrls = readSitemapPostUrls()
		expect([...expectedPostUrls].filter(url => !sitemapPostUrls.has(url))).toEqual([])
		expect([...sitemapPostUrls].filter(url => !expectedPostUrls.has(url))).toEqual([])

		// The fixtures reach neither the sitemap nor the index.
		for (const fixture of FIXTURES) {
			expect(sitemapPostUrls.has(postUrl('en-US', fixture.displayId))).toBe(false)
		}

		// The bundle holds one index per language present in the content, each with its page count,
		// and that count is the locale's Posts plus the Pages that opted in.
		expect(readBundlePageCounts()).toEqual(
			Object.fromEntries([...expectedCounts].map(([locale, count]) => [locale.toLowerCase(), count])),
		)

		// The run says what it did: how many pages it indexed, in which languages, and which Posts it
		// left out and why.
		expect(indexBuild.output).toContain(`Indexed ${indexedTotal} pages in ${expectedCounts.size} languages`)
		for (const [locale, count] of expectedCounts) {
			expect(indexBuild.output).toContain(`${locale}: ${count} pages`)
		}
		for (const fixture of FIXTURES) {
			expect(indexBuild.output).toContain(`- ${fixture.displayId} (en-US): ${fixture.reason}`)
		}

		// Every locale's About Page is one the site opted in, so a Page that loses the marker — which
		// would drop it from the index rather than fail the build — is asserted here rather than
		// merely derived from the HTML it is supposed to carry.
		for (const locale of readPageLocales()) {
			expect(expectedPages.some(page => page.path === `/${locale}/about/`), `${locale}'s About Page must carry ${ARTICLE_REGION_MARKER}`).toBe(true)
		}

		// A listing Page repeats Post titles and excerpts, so indexing one would answer a Post's own
		// query with the Page that merely links to it.
		const [sampleLocale] = readPageLocales().sort()
		for (const path of [`/${sampleLocale}/`, `/${sampleLocale}/tags/`, `/${sampleLocale}/posts/p/1/`]) {
			expect(expectedPages.some(page => page.path === path), `${path} lists Posts, so it must not be indexed`).toBe(false)
		}

		// Every Page the index does not cover is reported, whether it never opted in or names no
		// locale to be indexed under; and no Page the index does cover is reported as skipped.
		expect(indexBuild.output).toContain(`Skipped ${pluralize(skippedPages.length, 'Page')} the index does not cover:`)
		for (const page of skippedPages) {
			expect(indexBuild.output).toContain(`- ${page.path}: ${page.reason}`)
		}
		for (const page of expectedPages) {
			expect(indexBuild.output).not.toContain(`- ${page.path}:`)
		}
		expect(skippedPages.filter(page => page.reason === 'no locale').map(page => page.path)).toContain('/')

		// The robots file advertises the sitemap.
		expect(readFileSync(join(CLIENT_DIRECTORY, 'robots.txt'), 'utf8')).toMatch(
			/^Sitemap: https:\/\/his2nd\.life\/sitemap-index\.xml$/m,
		)
	}
	finally {
		for (const directory of fixtureDirectories) {
			rmSync(directory, { recursive: true, force: true })
		}
	}
}, TEST_TIMEOUT_MS)

/**
 * Runs an npm script of this project.
 * @param script The script's name in `package.json`.
 * @returns The exit code and everything the script printed.
 */
async function run(script: string): Promise<{ exitCode: number, output: string }> {
	const child = Bun.spawn({
		cmd: [process.execPath, 'run', script],
		cwd: PROJECT_ROOT,
		stdout: 'pipe',
		stderr: 'pipe',
	})
	const [stdout, stderr, exitCode] = await Promise.all([
		new Response(child.stdout).text(),
		new Response(child.stderr).text(),
		child.exited,
	])
	return { exitCode, output: `${stdout}${stderr}` }
}

/**
 * Writes the exclusion-path fixtures into the content tree.
 * @returns The directories the fixtures were written to, for removal afterwards.
 */
function writeFixtures(): string[] {
	return FIXTURES.map((fixture) => {
		const directory = join(BLOG_DIRECTORY, 'en-US', `2026-01-01--${fixture.displayId}`)
		if (existsSync(directory)) {
			throw new Error(`${directory} already exists; refusing to overwrite content that is not this test's.`)
		}
		mkdirSync(directory, { recursive: true })
		writeFileSync(join(directory, 'index.mdx'), `---
title: ${fixture.displayId}
displayId: ${fixture.displayId}
description: Temporary content added by the search-index integration test
authors: [hollis]
date: 2026-01-01
updated: 2026-01-01
tags:
  - general
${fixture.frontmatter}
---

This Post exists only for the duration of the search-index integration test.
`)
		return directory
	})
}

/**
 * Reads every Post the content tree holds, deciding indexability from the frontmatter the way the
 * glossary defines it.
 * @returns The Posts, each with its exclusion reason when it has one.
 */
function readContentTree(): ContentPost[] {
	return findPostSources(BLOG_DIRECTORY).map((sourcePath) => {
		const frontmatter = readFrontmatter(sourcePath)
		return {
			locale: relative(BLOG_DIRECTORY, sourcePath).split(sep)[0],
			displayId: String(frontmatter.displayId),
			exclusion: getExclusion(frontmatter),
		}
	})
}

/**
 * Reads every Page the built sitemap lists — every URL that is not a Post — and decides its
 * indexability from its own built HTML, the way the index build documents it.
 *
 * A Page that names no locale is in no language index, so its HTML is not read: the site publishes
 * one such URL, the root redirect, and the build writes no HTML for it.
 * @returns The Pages, split by whether their HTML asked to be indexed.
 */
function readBuiltPages(): BuiltPages {
	const indexed: BuiltPages['indexed'] = []
	const skipped: BuiltPages['skipped'] = []
	for (const url of readSitemapUrls().filter(url => !isPostUrl(url))) {
		const path = new URL(url).pathname
		const locale = localeFromPath(path)
		if (locale === null) {
			skipped.push({ path, reason: 'no locale' })
			continue
		}
		if (builtHtmlCarriesMarker(path)) {
			indexed.push({ path, locale })
		}
		else {
			skipped.push({ path, reason: 'no article region' })
		}
	}
	return { indexed, skipped }
}

/**
 * Reads a Page's built HTML and reports whether it carries the article-region marker, which is what
 * asks for the Page to be indexed.
 * @param path The Page's site-relative path, trailing-slashed.
 * @returns Whether the marker is present.
 */
function builtHtmlCarriesMarker(path: string): boolean {
	const file = join(CLIENT_DIRECTORY, ...path.split('/').filter(Boolean), 'index.html')
	return readFileSync(file, 'utf8').includes(ARTICLE_REGION_MARKER)
}

/**
 * Reads the locales the site publishes Pages in: the directories under `src/pages` that are spelled
 * as one, which is the shape the site addresses them with. Spelled as a pattern here rather than
 * read from the site's configuration, so that this helper does not read what it verifies.
 * @returns The locale directories.
 */
function readPageLocales(): string[] {
	return readdirSync(join(PROJECT_ROOT, 'src', 'pages'), { withFileTypes: true })
		.filter(entry => entry.isDirectory() && /^[a-z]{2}-[A-Z]{2}$/.test(entry.name))
		.map(entry => entry.name)
}

/**
 * Reads a Page's locale off its path, where the site spells it: `/{locale}/...`.
 * @param path The Page's site-relative path.
 * @returns The locale the path names, or `null` when it names none.
 */
function localeFromPath(path: string): string | null {
	const firstSegment = path.split('/').filter(Boolean)[0]
	if (firstSegment === undefined) {
		return null
	}
	return readPageLocales().includes(firstSegment) ? firstSegment : null
}

/**
 * Finds every Post source file, mirroring the content collection's `**\/[^_]*.mdx` glob.
 * @param directory The directory to walk.
 * @returns The Post source files it holds.
 */
function findPostSources(directory: string): string[] {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const entryPath = join(directory, entry.name)
		if (entry.isDirectory()) {
			return findPostSources(entryPath)
		}
		return entry.isFile() && entry.name.endsWith('.mdx') && !entry.name.startsWith('_') ? [entryPath] : []
	})
}

/**
 * Reads a Post's frontmatter.
 * @param sourcePath The Post's source file.
 * @returns The parsed frontmatter.
 */
function readFrontmatter(sourcePath: string): Record<string, unknown> {
	const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(readFileSync(sourcePath, 'utf8'))
	if (!match) {
		throw new Error(`${sourcePath} has no YAML frontmatter.`)
	}
	return parseYaml(match[1]) as Record<string, unknown>
}

/**
 * Decides why a Post is in no index at all.
 * @param frontmatter The Post's frontmatter.
 * @returns The exclusion reason, or `null` when the Post is indexable.
 */
function getExclusion(frontmatter: Record<string, unknown>): string | null {
	if (frontmatter.draft === true) {
		return 'draft'
	}
	if (frontmatter.hidden === true) {
		return 'hidden'
	}
	if (frontmatter.searchIndex === false) {
		return 'searchIndex: false'
	}
	return null
}

/**
 * Counts items per locale.
 * @param items The items to count, each carrying the locale it is published in.
 * @returns The count per locale.
 */
function countByLocale(items: { locale: string }[]): Map<string, number> {
	const counts = new Map<string, number>()
	for (const item of items) {
		counts.set(item.locale, (counts.get(item.locale) ?? 0) + 1)
	}
	return counts
}

/**
 * Adds one set of per-locale counts to another.
 * @param left The counts to add to.
 * @param right The counts to add.
 * @returns The sum per locale.
 */
function mergeCounts(left: Map<string, number>, right: Map<string, number>): Map<string, number> {
	const merged = new Map(left)
	for (const [locale, count] of right) {
		merged.set(locale, (merged.get(locale) ?? 0) + count)
	}
	return merged
}

/**
 * Spells out the URLs the indexable Posts must be reachable at.
 * @param posts The indexable Posts.
 * @returns Their absolute URLs, percent-encoded and trailing-slashed.
 */
function expectedPostUrlsOf(posts: ContentPost[]): Set<string> {
	return new Set(posts.map(post => postUrl(post.locale, post.displayId)))
}

/**
 * Builds a Post's absolute URL the way the site documents it.
 * @param locale The Post's locale.
 * @param displayId The Post's Display ID.
 * @returns The Post's URL, percent-encoded and trailing-slashed.
 */
function postUrl(locale: string, displayId: string): string {
	return `${SITE_ORIGIN}/${locale}/posts/${encodeURIComponent(displayId)}/`
}

/**
 * Whether a URL addresses a Post: `/{locale}/posts/{Display ID}/`. The paging route
 * `/{locale}/posts/p/{page}/` lists Posts and is not one.
 * @param url The URL to classify.
 * @returns Whether the URL is a Post's.
 */
function isPostUrl(url: string): boolean {
	return /\/posts\/(?!p\/)/.test(new URL(url).pathname)
}

/**
 * Reads the Post URLs out of the built sitemap.
 * @returns The sitemap's Post URLs.
 */
function readSitemapPostUrls(): Set<string> {
	return new Set(readSitemapUrls().filter(isPostUrl))
}

/**
 * Reads every URL the built sitemap lists.
 * @returns The sitemap's URLs.
 */
function readSitemapUrls(): string[] {
	const index = readFileSync(join(CLIENT_DIRECTORY, 'sitemap-index.xml'), 'utf8')
	const shards = readLocElements(index).map(loc => loc.slice(loc.lastIndexOf('/') + 1))
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
 * Reads the page count per language the index bundle holds.
 * @returns The page count per language, keyed by the language as the bundle spells it.
 */
function readBundlePageCounts(): Record<string, number> {
	const entryPath = join(BUNDLE_DIRECTORY, 'pagefind-entry.json')
	if (!existsSync(entryPath)) {
		throw new Error(`${entryPath} is missing: the index build wrote no bundle.`)
	}
	const entry = JSON.parse(readFileSync(entryPath, 'utf8')) as {
		languages?: Record<string, { page_count?: number }>
	}
	return Object.fromEntries(
		Object.entries(entry.languages ?? {}).map(([language, info]) => [language, info.page_count ?? 0]),
	)
}

/**
 * Renders a count and its noun, spelled the way the index build spells it.
 * @param amount The count.
 * @param noun The singular noun.
 * @returns The count with the noun in its singular or plural form.
 */
function pluralize(amount: number, noun: string): string {
	return `${amount} ${amount === 1 ? noun : `${noun}s`}`
}
