export const BLOG_PATH = './content/blog/'
export const POSTS_PER_PAGE = 1
export { baseLocale as DEFAULT_LOCALE, locales as LOCALES } from './paraglide/runtime'

/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
	/**
	 * Base URL of your site, used in sitemap generation
	 */
	url: 'https://astro-theme-minimal-blog.lekoarts.de',
	/**
	 * Base path of your site, if deployed to a subfolder
	 */
	base: '/base-test/',
	/**
	 * Site-wide title
	 */
	title: 'Minimal Blog',
	/**
	 * Used on index page and as a fallback if no title is set
	 */
	titleDefault: 'Astro Theme: Minimal Blog',
	/**
	 * Used in meta tags, RSS feed, and other places
	 */
	description: 'Minimal Astro blog theme with extensive code syntax highlighting capabilities, focus on typography, and clean design bringing your content to the forefront.',
	/**
	 * Language used in the <html> tag
	 */
	lang: 'en-US',
	/**
	 * Name of the image inside `public` folder that should be used as a default og:image
	 */
	defaultOgImage: '/og-image.png',
	/**
	 * Default author name that gets added to meta tags
	 */
	defaultAuthor: 'LekoArts',
}

interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

/**
 * Links used in the header
 */
export const HEADER: Header = {
	/**
	 * Internal links to other subpages shown in the header navigation
	 */
	internal: [
		{
			title: 'Blog',
			url: '/base-test/en-US/posts/',
		},
		{
			title: 'Tags',
			url: '/base-test/en-US/tags/',
		},
		{
			title: 'About',
			url: '/base-test/en-US/about/',
		},
	],
	/**
	 * Arbitrary list of links (e.g. social media) shown on the right side of the header
	 */
	external: [
		{
			title: 'Bluesky',
			url: 'https://bsky.app/profile/lekoarts.de',
			props: {
				target: '_blank',
			},
		},
		{
			title: 'Homepage',
			url: 'https://www.lekoarts.de/?utm_source=astro-theme-minimal-blog',
			props: {
				target: '_blank',
			},
		},
	],
}

export const TAG_SLUGS = [
	'general',
	'coding',
	'mdx',
	'open-source',
	'seoul',
	'english',
	'chinese',
] as const

export type TagSlug = (typeof TAG_SLUGS)[number]

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
