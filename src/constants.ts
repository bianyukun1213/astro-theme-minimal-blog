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
	url: 'https://astro.his2nd.life',
	/**
	 * Base path of your site, if deployed to a subfolder
	 */
	base: '',
	relMe: ['mailto:bianyukun1213@outlook.com', 'https://yukun.bio/', 'https://github.com/bianyukun1213'],
	relAuthEndpoint: 'https://indieauth.com/auth',
	relWebmention: 'https://webmention.io/his2nd.life/webmention',
	tocHeading: '(Table of contents)|目录|Содержание|תוכן',
	searchUrl: 'https://www.bing.com/search?q=',
	interactions: {
		waline: {
			serverURL: 'https://waline.his2nd.life',
		},
	},
}

const KEYWORDS_BY_LOCALE: Record<Locale, string[]> = {
	'en-US': ['Personal blog', 'Journal', 'Programming', 'Movie reviews', 'TV show reviews', 'Video game reviews', 'Book reviews', 'Thoughts'],
	'zh-CN': ['个人博客', '生活记录', '编程开发', '电影评论', '美剧评论', '电脑游戏', '读书笔记', '心得分享'],
	'ru-RU': ['Личный блог', 'Дневник', 'Программирование', 'Рецензии на фильмы', 'Рецензии на сериалы', 'Рецензии на видеоигры', 'Рецензии на книги', 'Мысли'],
	'he-IL': ['בלוג אישי', 'יומן', 'תכנות', 'ביקורות סרטים', 'ביקורות סדרות', 'ביקורות משחקי וידאו', 'ביקורות ספרים', 'מחשבות'],
}

export function getKeywords(locale: Locale): string[] {
	return KEYWORDS_BY_LOCALE[locale]
}

const AUTHORS_BY_LOCALE: Record<Locale, Author[]> = {
	'en-US': [
		{
			slug: 'hollis',
			name: 'Bian Yukun',
			photo: 'https://bucket.hollisdevhub.com/avatars/avatar.webp',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'December 13, 2000, programmer',
		},
	],
	'zh-CN': [
		{
			slug: 'hollis',
			name: '边宇琨',
			photo: 'https://bucket.hollisdevhub.com/avatars/avatar.webp',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: '2000 年 12 月 13 日，程序员',
		},
	],
	'ru-RU': [
		{
			slug: 'hollis',
			name: 'Бянь Юйкунь',
			photo: 'https://bucket.hollisdevhub.com/avatars/avatar.webp',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: '13 декабря 2000 г., программист',
		},
	],
	'he-IL': [
		{
			slug: 'hollis',
			name: 'Bian Yukun',
			photo: 'https://bucket.hollisdevhub.com/avatars/avatar.webp',
			urls: ['https://yukun.bio/'],
			email: 'bianyukun1213@outlook.com',
			note: 'December 13, 2000, programmer',
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
				url: '/en-US/posts/p/1/',
			},
			{
				title: 'Tags',
				url: '/en-US/tags/',
			},
			{
				title: 'About',
				url: '/en-US/about/',
			},
		],
		external: [
			{
				title: 'Bio',
				url: 'https://yukun.bio/',
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
				url: '/zh-CN/posts/p/1/',
			},
			{
				title: '标签',
				url: '/zh-CN/tags/',
			},
			{
				title: '关于',
				url: '/zh-CN/about/',
			},
		],
		external: [
			{
				title: '个人主页',
				url: 'https://yukun.bio/',
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
				url: '/ru-RU/posts/p/1/',
			},
			{
				title: 'Теги',
				url: '/ru-RU/tags/',
			},
			{
				title: 'О сайте',
				url: '/ru-RU/about/',
			},
		],
		external: [
			{
				title: 'Био',
				url: 'https://yukun.bio/',
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
				url: '/he-IL/posts/p/1/',
			},
			{
				title: 'תגיות',
				url: '/he-IL/tags/',
			},
			{
				title: 'אודות',
				url: '/he-IL/about/',
			},
		],
		external: [
			{
				title: 'ביוגרפיה',
				url: 'https://yukun.bio/',
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
] as const

export type TagSlug = (typeof TAG_SLUGS)[number]

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
