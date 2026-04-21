import type { FrontmatterTag } from '@constants'
import type { Locale } from '@paraglide/runtime'
import type { CollectionEntry } from 'astro:content'
import * as messages from '@paraglide/messages'
import { getTextDirection } from '@paraglide/runtime'
import {
	getRelativeLocaleUrl as getRelativeLocaleUrlImpl,
	getRelativeLocaleUrlList,
} from 'astro:i18n'
import { BLOG_PATH, DEFAULT_LOCALE, FRONTMATTER_TAGS } from './constants'

// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

/**
 * Returns a list of available locales based on the relative locale URL list. It uses Astro's i18n utility to get the list of locale-specific paths and extracts the locale from each path.
 * @returns An array of available locales.
 */
export function getLocales() {
	const paths = getRelativeLocaleUrlList('', {
		normalizeLocale: false,
	})
	return paths.map((url) => {
		const locale = url.split('/')[1]
		return locale as Locale
	})
}

/**
 * Returns the text direction for a given locale.
 * @param locale The locale to get the text direction for.
 * @returns The text direction ("ltr" or "rtl").
 */
export function getLocaleDir(locale: Locale) {
	return getTextDirection(locale)
}

/**
 * Returns a localized URL based on the given locale and path. It uses Astro's i18n utility to generate the URL for the specified locale and path, without normalizing the locale.
 * @param local The locale to use for the URL.
 * @param path The path to localize.
 * @returns The localized URL.
 */
export function getLocalizedUrl(local: Locale, path?: string) {
	return getRelativeLocaleUrlImpl(local, path, {
		normalizeLocale: false,
	})
}

/**
 * Get locale of a blog post
 * @param filePath - the blog post full file location
 * @returns locale, or default locale if locale is not found in the file path
 */
export function getLocaleFromFilePath(filePath: string | undefined): Locale {
	if (!filePath) {
		return DEFAULT_LOCALE
	}
	const relative = filePath.replace(`${BLOG_PATH}/`, '')
	const firstSegment = relative.split('/')[0]
	if (getLocales().includes(firstSegment as Locale)) {
		return firstSegment as Locale
	}
	return DEFAULT_LOCALE
}

/**
 * Returns a proxy object for accessing translations based on the given locale. The proxy intercepts property access on the messages object and, if the property is a function, it wraps it to include the locale in the options when called. This allows for dynamic translation retrieval based on the specified locale.
 * @param locale The locale to use for translations.
 * @returns A proxy object for accessing translations.
 */
export function useTranslations(locale: Locale) {
	const messagesObj = { ...messages }
	return new Proxy(messagesObj, {
		get(target, prop: keyof typeof messages) {
			const original = target[prop]
			if (typeof original === 'function') {
				type ParaglideMessageFn = (
					inputs?: unknown,
					options?: { locale?: Locale },
				) => string
				return (inputs?: unknown, options?: { locale?: Locale }) => {
					return (original as ParaglideMessageFn)(inputs, {
						locale,
						...options,
					})
				}
			}
			return original
		},
	}) as typeof messages
}

export { DEFAULT_LOCALE }
export type { Locale }

/**
 * Appends a trailing slash to the given path if it doesn't already have one.
 * @param path The path to append the trailing slash to.
 * @returns The path with a trailing slash.
 */
export function appendTrailingSlash(path: string): string {
	if (!path.endsWith('/')) {
		return `${path}/`
	}
	return path
}

/**
 * Removes the trailing slash from the given path if it has one.
 * @param path The path to remove the trailing slash from.
 * @returns The path without a trailing slash.
 */
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
