import type { Locale } from '@paraglide/runtime'
import type { Author, Header } from '@types'
import { baseLocale, locales } from './paraglide/runtime'

export const BLOG_PATH = './content/blog/'
export const POSTS_PER_PAGE = 5

export const DEFAULT_LOCALE = baseLocale
export const LOCALES = locales

/**
 * Metadata for your site
 */
export const SITE: Record<string, any> = {
	/**
	 * Base URL of your site, used in sitemap generation
	 */
	url: 'https://astro-theme-minimal-blog.lekoarts.de',
	/**
	 * Base path of your site, if deployed to a subfolder
	 */
	base: '/base-test/',
	/**
	 * Name of the image inside `public` folder that should be used as a default og:image
	 */
	defaultOgImage: '/og-image.png',
	relMe: ['aaa', 'bbb'],
	relAuthEndpoint: '123',
	relWebmention: '456',
}

const AUTHORS_BY_LOCALE: Record<Locale, Author[]> = {
	'en-US': [
		{
			slug: 'hollis',
			name: 'Hollis',
			photo: 'https://avatars.githubusercontent.com/u/24708556',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'I am Hollis.',
		},
		{
			slug: 'veronika',
			name: 'Veronika',
			photo: 'https://avatars.githubusercontent.com/u/24708556',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'I am Veronika.',
		},
	],
	'zh-CN': [
		{
			slug: 'hollis',
			name: 'Hollis',
			photo: 'https://avatars.githubusercontent.com/u/24708556',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'I am Hollis.',
		},
		{
			slug: 'veronika',
			name: 'Veronika',
			photo: 'https://avatars.githubusercontent.com/u/24708556',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'I am Veronika.',
		},
	],
	'ru-RU': [
		{
			slug: 'hollis',
			name: 'Hollis',
			photo: 'https://avatars.githubusercontent.com/u/24708556',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'I am Hollis.',
		},
	],
	'he-IL': [
		{
			slug: 'hollis',
			name: 'Hollis',
			photo: 'https://avatars.githubusercontent.com/u/24708556',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'I am Hollis.',
		},
	],
}

export function getAuthors(locale: Locale): Author[] {
	return AUTHORS_BY_LOCALE[locale]
}

const HEADER_BY_LOCALE: Record<Locale, Header> = {
	'en-US': {
		internal: [
			{
				title: 'Posts',
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
	},
	'zh-CN': {
		internal: [
			{
				title: '文章',
				url: '/base-test/zh-CN/posts/',
			},
			{
				title: '标签',
				url: '/base-test/zh-CN/tags/',
			},
			{
				title: '关于',
				url: '/base-test/zh-CN/about/',
			},
		],
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
	},
	'ru-RU': {
		internal: [
			{
				title: 'Посты',
				url: '/base-test/ru-RU/posts/',
			},
			{
				title: 'Теги',
				url: '/base-test/ru-RU/tags/',
			},
			{
				title: 'О сайте',
				url: '/base-test/ru-RU/about/',
			},
		],
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
	},
	'he-IL': {
		internal: [
			{
				title: 'פוסטים',
				url: '/base-test/he-IL/posts/',
			},
			{
				title: 'תגיות',
				url: '/base-test/he-IL/tags/',
			},
			{
				title: 'אודות',
				url: '/base-test/he-IL/about/',
			},
		],
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
	},
}

export function getHeader(locale: Locale): Header {
	return HEADER_BY_LOCALE[locale]
}

export const TAG_SLUGS = [
	'general',
	'coding',
	'mdx',
	'open-source',
	'seoul',
	'english',
	'chinese',
	'russian',
	'hebrew',
] as const

export type TagSlug = (typeof TAG_SLUGS)[number]

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
