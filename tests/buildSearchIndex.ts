/// <reference types="bun" />

/**
 * The Site search index's integration test.
 *
 * The seam is the command, not the pipeline's internals: this test runs the documented sequence —
 * the site build, then the index build — and asserts on the artifacts a developer or a deployment
 * consumes. The sitemap's Post URLs and the bundle's per-language page counts are computed
 * independently, from the content tree and the documented URL spelling, so a helper being renamed
 * cannot pass this test and an index of the wrong shape cannot either.
 *
 * The pipeline's own assertions — the enumerated Posts agree with the sitemap, no gated content
 * reached the crawler, every crawled page carries the article-region marker — fail the builds this
 * test runs, so they are exercised here for free.
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

test('the documented build sequence produces an index covering every indexable Post', async () => {
	const fixtureDirectories = writeFixtures()
	try {
		const siteBuild = await run('build')
		expect(siteBuild.exitCode, siteBuild.output).toBe(0)
		const indexBuild = await run('build:search')
		expect(indexBuild.exitCode, indexBuild.output).toBe(0)

		const posts = readContentTree()
		const expected = posts.filter(post => post.exclusion === null)
		const expectedUrls = expectedPostUrls(expected)
		const expectedCounts = countByLocale(expected)

		// The content tree, not the build, is what the fixtures must be visible to.
		expect(
			posts.filter(post => post.exclusion !== null).map(post => `${post.displayId}: ${post.exclusion}`).sort(),
		).toEqual(FIXTURES.map(fixture => `${fixture.displayId}: ${fixture.reason}`).sort())

		// The sitemap lists every indexable Post, spelled exactly as the site addresses them.
		const sitemapPostUrls = readSitemapPostUrls()
		expect([...expectedUrls].filter(url => !sitemapPostUrls.has(url))).toEqual([])
		expect([...sitemapPostUrls].filter(url => !expectedUrls.has(url))).toEqual([])

		// The fixtures reach neither the sitemap nor the index.
		for (const fixture of FIXTURES) {
			expect(sitemapPostUrls.has(postUrl('en-US', fixture.displayId))).toBe(false)
		}

		// The bundle holds one index per language present in the content, each with its page count.
		expect(readBundlePageCounts()).toEqual(
			Object.fromEntries([...expectedCounts].map(([locale, count]) => [locale.toLowerCase(), count])),
		)

		// The run says what it did: how many pages it indexed, in which languages, and which Posts it
		// left out and why.
		expect(indexBuild.output).toContain(`Indexed ${expected.length} pages in ${expectedCounts.size} languages`)
		for (const [locale, count] of expectedCounts) {
			expect(indexBuild.output).toContain(`${locale}: ${count} pages`)
		}
		for (const fixture of FIXTURES) {
			expect(indexBuild.output).toContain(`- ${fixture.displayId} (en-US): ${fixture.reason}`)
		}

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
 * Counts Posts per locale.
 * @param posts The Posts to count.
 * @returns The count per locale.
 */
function countByLocale(posts: ContentPost[]): Map<string, number> {
	const counts = new Map<string, number>()
	for (const post of posts) {
		counts.set(post.locale, (counts.get(post.locale) ?? 0) + 1)
	}
	return counts
}

/**
 * Spells out the URLs the indexable Posts must be reachable at.
 * @param posts The indexable Posts.
 * @returns Their absolute URLs, percent-encoded and trailing-slashed.
 */
function expectedPostUrls(posts: ContentPost[]): Set<string> {
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
 * Reads the Post URLs out of the built sitemap.
 * @returns The sitemap's Post URLs.
 */
function readSitemapPostUrls(): Set<string> {
	const index = readFileSync(join(CLIENT_DIRECTORY, 'sitemap-index.xml'), 'utf8')
	const shards = readLocElements(index).map(loc => loc.slice(loc.lastIndexOf('/') + 1))
	const urls = shards.flatMap(shard => readLocElements(readFileSync(join(CLIENT_DIRECTORY, shard), 'utf8')))
	// The paging route `/{locale}/posts/p/{page}/` lists Posts; it is not one.
	return new Set(urls.filter(url => /\/posts\/(?!p\/)/.test(new URL(url).pathname)))
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
