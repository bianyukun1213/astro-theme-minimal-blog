import type { TagSlug } from '@constants'
import type { Locale } from '@paraglide/runtime'
import type { CollectionEntry } from 'astro:content'
import type { ClassValue } from 'clsx'
import * as messages from '@paraglide/messages'
import { getTextDirection } from '@paraglide/runtime'
// import {
// 	getRelativeLocaleUrl as getRelativeLocaleUrlImpl,
// } from 'astro:i18n'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { BLOG_PATH, DEFAULT_LOCALE, LOCALES } from './constants'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

type ConvMode = 'rem2px' | 'px2rem'
export function convertRemPx(input: string, mode?: ConvMode): string
export function convertRemPx(input: number, mode?: ConvMode): number
/**
 * Converts between rem and px units based on the root HTML font size and input format.
 * @param input The value to convert, either a string with units 'rem' or 'px' or a number.
 * @param mode The conversion mode, 'rem2px' to convert rem to pixels or 'px2rem' to convert pixels to rem.
 * @returns The converted value, either as a string with the appropriate unit or as a number.
 */
export function convertRemPx(
	input: string | number,
	mode: ConvMode = 'rem2px',
): string | number {
	if (typeof window === 'undefined') {
		throw new TypeError(
			'"window" is undefined. This function can only be used in a browser environment.',
		)
	}
	const returnString = typeof input === 'string'
	let returnUnit: 'px' | 'rem' | '' = ''
	const htmlFontSize = Number.parseFloat(
		window.getComputedStyle(document.documentElement).fontSize,
	)
	let numericValue: number
	// 处理输入逻辑
	if (typeof input === 'string') {
		if (input.endsWith('rem')) {
			numericValue = Number.parseFloat(input.replace('rem', ''))
			mode = 'rem2px'
			returnUnit = 'px'
		}
		else if (input.endsWith('px')) {
			numericValue = Number.parseFloat(input.replace('px', ''))
			mode = 'px2rem'
			returnUnit = 'rem'
		}
		else {
			numericValue = Number.parseFloat(input)
		}
	}
	else {
		numericValue = input
	}
	if (Number.isNaN(numericValue)) {
		throw new TypeError(
			'Invalid value. Must be a number or a string ending with "rem" or "px".',
		)
	}
	let result: number
	if (mode === 'rem2px') {
		result = numericValue * htmlFontSize
	}
	else {
		result = numericValue / htmlFontSize
	}
	if (returnString) {
		return `${result}${returnUnit}`
	}
	else {
		return result
	}
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
// export function getLocalizedUrl(local: Locale, path?: string) {
// 	return getRelativeLocaleUrlImpl(local, path, {
// 		normalizeLocale: false,
// 	})
// }

/**
 * Get locale of a blog post
 * @param filePath - the blog post full file location
 * @returns locale, or default locale if locale is not found in the file path
 */
export function getLocaleFromFilePath(filePath: string | undefined): Locale {
	if (!filePath) {
		return DEFAULT_LOCALE
	}
	const blogPath = BLOG_PATH.replace(/^(?:\.\.\/|\.\/|\/)?(.*?)\/?$/, '$1/')
	const relative = filePath.replace(blogPath, '')
	const firstSegment = relative.split('/')[0]
	if (LOCALES.includes(firstSegment as Locale)) {
		return firstSegment as Locale
	}
	return DEFAULT_LOCALE
}

/**
 * Get blog posts by locale
 * @param posts - list of all blog posts
 * @param locale - the locale to filter by
 * @returns list of blog posts that match the given locale
 */
export function getPostsByLocale(
	posts: CollectionEntry<'blog'>[],
	locale: Locale,
) {
	return posts.filter((post) => {
		return getLocaleFromFilePath(post.filePath) === locale
	})
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

/**
 * Returns the localized name of a tag based on the given locale. It uses the useTranslations function to get the translation for the tag slug. If a translation is not found, it falls back to returning the original tag slug.
 * @param tagSlug The slug of the tag to get the localized name for.
 * @param locale The locale to use for translation.
 * @returns The localized name of the tag, or the original tag slug if no translation is found.
 */
export function getLocalizedTagName(tagSlug: TagSlug, locale: Locale) {
	type MsgKey = Exclude<keyof typeof messages, 'm'>
	const key = `tag_${tagSlug.replace(/-/g, '_')}` as MsgKey
	const m = useTranslations(locale)
	const tagNameFunc = m[key]
	if (typeof tagNameFunc === 'function') {
		return (tagNameFunc as () => string)()
	}
	return tagSlug
}

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
export function defaultDateFormat(date: Date, locale: Locale): string {
	return date.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })
}

/**
 * Returns a date in the format "YYYY"
 */
export function yearDateFormat(date: Date, locale: Locale): string {
	return date.toLocaleDateString(locale, { year: 'numeric' })
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
 * Get all posts tagged with the given tagSlug
 */
export function getPostsByTag(data: Array<CollectionEntry<'blog'>>, tagSlug: TagSlug) {
	return data.filter(post => post.data.tags?.includes(tagSlug))
}

/**
 * Get all tags, their slug, and the number of posts
 */
export function getTags(data: Array<CollectionEntry<'blog'>>, locale: Locale) {
	const output = [] as Array<{ tagName: string, slug: TagSlug, count: number }>
	for (const post of data) {
		if (!post.data.tags)
			continue
		for (const tagSlug of post.data.tags) {
			const existingTag = output.find(t => t.slug === tagSlug)
			if (existingTag) {
				existingTag.count++
			}
			else {
				output.push({
					tagName: getLocalizedTagName(tagSlug, locale),
					slug: tagSlug,
					count: 1,
				})
			}
		}
	}
	return output
}
