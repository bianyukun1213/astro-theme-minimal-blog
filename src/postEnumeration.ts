/**
 * The single source of truth for which Posts exist and which are indexable.
 *
 * The sitemap consumes this module, and the Site search index build will consume it too, so the
 * two cannot disagree about which Posts exist. It reads the content tree itself rather than
 * Astro's content collection, because `astro.config.ts` and the index build both need it outside
 * of Astro's runtime, where `astro:content` and `import.meta.env` are unavailable.
 */

import type { Locale } from './paraglide/runtime'
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse as parseYaml } from 'yaml'
import { BLOG_PATH, DEFAULT_LOCALE, LOCALES, SITE, TRAILING_SLASH } from './constants'
import { buildPostPath } from './postPath'

/**
 * Why a Post is in no index at all.
 */
export type PostExclusionReason = 'draft' | 'hidden' | 'searchIndex: false'

/**
 * A Post as the content tree holds it, before its indexability is decided.
 */
export interface PostSource {
	/** The locale this Post is published in. */
	locale: Locale
	/** The Post's Display ID, as authored in frontmatter. */
	displayId: string
	/** Absolute path to the Post's source file, for exclusion scanning. */
	sourcePath: string
}

/**
 * A Post that belongs in every index.
 */
export interface IndexablePost extends PostSource {
	/** The Post's site-relative path, percent-encoded and trailing-slashed. */
	path: string
	/** The Post's absolute URL, spelled exactly like `path`. */
	url: string
}

/**
 * A Post that belongs in no index, and the reason it was left out.
 */
export interface ExcludedPost extends PostSource {
	/** Why the Post is excluded. */
	reason: PostExclusionReason
}

export interface PostEnumeration {
	/** Every Post that belongs in every index. */
	indexable: IndexablePost[]
	/** Every Post that belongs in no index, each with its reason. */
	excluded: ExcludedPost[]
}

const POST_SOURCE_EXTENSION = '.mdx'

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/

/**
 * The project root, so that the content tree is found no matter which directory a command runs
 * from. Astro resolves the collection's `base` against the project root as well.
 */
const PROJECT_ROOT = fileURLToPath(new URL('..', import.meta.url))

const CONTENT_BLOG_DIRECTORY = resolve(PROJECT_ROOT, BLOG_PATH)

/**
 * Enumerates the Posts in the content tree.
 *
 * Drafts, Hidden posts and Posts with `searchIndex: false` come back as excluded, so that the
 * sitemap and the index build agree with the glossary: a Draft is not part of the published site,
 * a Hidden post is kept out of every surface that lists Posts, and `searchIndex: false` asks to
 * leave every index while the Post stays listed and browsable.
 * @returns The indexable Posts and the excluded ones with a reason each.
 */
export function enumeratePosts(): PostEnumeration {
	const indexable: IndexablePost[] = []
	const excluded: ExcludedPost[] = []
	for (const sourcePath of findPostSources()) {
		const locale = getLocaleFromSourcePath(sourcePath)
		const frontmatter = readFrontmatter(sourcePath)
		const displayId = frontmatter.displayId
		if (typeof displayId !== 'string' || displayId === '') {
			throw new TypeError(`${sourcePath} has no 'displayId' in its frontmatter.`)
		}
		const reason = getExclusionReason(frontmatter)
		if (reason) {
			excluded.push({ locale, displayId, sourcePath, reason })
			continue
		}
		const path = buildPostPath(displayId, locale, SITE.base, TRAILING_SLASH)
		indexable.push({
			locale,
			displayId,
			sourcePath,
			path,
			url: new URL(path, SITE.url).href,
		})
	}
	return { indexable, excluded }
}

/**
 * Returns every Post source file in the content tree, in a stable order.
 *
 * This mirrors the content collection's `**\/[^_]*.mdx` glob: partials are named with a leading
 * underscore and are not Posts.
 */
function findPostSources(): string[] {
	return walkContentTree(CONTENT_BLOG_DIRECTORY).sort()
}

function walkContentTree(directory: string): string[] {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const entryPath = join(directory, entry.name)
		if (entry.isDirectory()) {
			return walkContentTree(entryPath)
		}
		const isPostSource
			= entry.isFile() && entry.name.endsWith(POST_SOURCE_EXTENSION) && !entry.name.startsWith('_')
		return isPostSource ? [entryPath] : []
	})
}

/**
 * Reads the locale off a Post's location in the content tree, falling back to the default locale
 * exactly as `getLocaleFromFilePath` does for the content collection.
 */
function getLocaleFromSourcePath(sourcePath: string): Locale {
	const firstSegment = relative(CONTENT_BLOG_DIRECTORY, sourcePath).split(sep)[0]
	if (LOCALES.includes(firstSegment as Locale)) {
		return firstSegment as Locale
	}
	return DEFAULT_LOCALE
}

function readFrontmatter(sourcePath: string): Record<string, unknown> {
	const match = FRONTMATTER_PATTERN.exec(readFileSync(sourcePath, 'utf8'))
	if (!match) {
		throw new TypeError(`${sourcePath} has no YAML frontmatter.`)
	}
	const frontmatter: unknown = parseYaml(match[1])
	if (frontmatter === null || typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
		throw new TypeError(`${sourcePath} has frontmatter that is not a mapping.`)
	}
	return frontmatter as Record<string, unknown>
}

/**
 * A Post can satisfy several of these at once; the order decides the single reason reported for
 * it, from the most fundamental exclusion to the narrowest.
 *
 * Drafts are excluded even where drafts are displayed, because the sitemap and the index are
 * built from a published site, and those are the only artifacts this module feeds.
 */
function getExclusionReason(frontmatter: Record<string, unknown>): PostExclusionReason | null {
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
