import type { FrontmatterTag } from '@constants'
import type { CollectionEntry } from 'astro:content'
import { FRONTMATTER_TAGS } from './constants'

export function appendTrailingSlash(path: string): string {
	if (!path.endsWith('/')) {
		return `${path}/`
	}
	return path
}

export function removeTrailingSlash(path: string): string {
	if (path.endsWith('/')) {
		return path.slice(0, -1)
	}
	return path
}

/**
 * Returns a date in the format "MMM DD, YYYY"
 */
export function defaultDateFormat(date: Date): string {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/**
 * Returns a date in the format "YYYY"
 */
export function yearDateFormat(date: Date): string {
	return date.toLocaleDateString('en-US', { year: 'numeric' })
}

/**
 * Returns a date in ISO format
 */
export function isoDateFormat(date: Date): string {
	return date.toISOString()
}

/**
 * Convert frontmatter data into a frontmatter YAML string
 * @example
 *
 * ```ts
 * const output = frontmatterToString({ title: 'hello world', slug: 'hello-world' })
 * // --- title: hello world\nslug: hello-world\n---
 * ```
 */
export function frontmatterToString(data: Record<string, any>): string {
	const yaml = Object.entries(data)
		.map(([key, value]) => {
			if (Array.isArray(value)) {
				return `${key}:\n ${value.map(tag => `- ${tag}`).join('\n ')}`
			}

			return `${key}: ${JSON.stringify(value)}`
		})
		.join('\n')
	return `---\n${yaml}\n---\n\n`
}

/**
 * Sort the 'blog' collection ASC by date
 */
export function sortAsc(data: Array<CollectionEntry<'blog'>>) {
	return data.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
	return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>
}

/**
 * Get all posts tagged with the given tag
 */
export function getPostsByTag(data: Array<CollectionEntry<'blog'>>, tag: FrontmatterTag) {
	return data.filter(post => post.data.tags?.includes(tag))
}

/**
 * Get all tags, their slug, and the number of posts
 */
export function getTags(data: Array<CollectionEntry<'blog'>>) {
	const output = [] as Array<{ tag: FrontmatterTag, slug: string, count: number }>

	for (const post of data) {
		if (!post.data.tags)
			continue

		for (const tag of post.data.tags) {
			const existingTag = output.find(t => t.tag === tag)
			if (existingTag) {
				existingTag.count++
			}
			else {
				output.push({
					tag,
					slug: FRONTMATTER_TAGS.get(tag) as string,
					count: 1,
				})
			}
		}
	}

	return output
}
