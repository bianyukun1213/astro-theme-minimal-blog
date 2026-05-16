import type { RSSFeedItem } from '@astrojs/rss'
import type { Locale } from '@utils'
import type { APIRoute } from 'astro'
import rss from '@astrojs/rss'
import { SITE } from '@constants'
import { getPostsByLocale, removeTrailingSlash, sortAsc, useTranslations } from '@utils'
import { trailingSlash } from 'astro:config/client'
import { getCollection } from 'astro:content'

export const prerender = false

const base = import.meta.env.BASE_URL
const slash = trailingSlash === 'never' ? '' : '/'

function generateContent(description: string, link: string, locale: Locale) {
	const m = useTranslations(locale)
	return `<p>${description}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${new URL(`${removeTrailingSlash(base)}/${locale}/posts/${link}${slash}`, SITE.url)}">${m.btn_keep_reading_title()}</a></strong></div>`
}

export const GET = (async ({ params }) => {
	const locale = params.locale as Locale
	const m = useTranslations(locale)
	const allPosts = await getCollection('blog')

	const items = sortAsc(getPostsByLocale(allPosts, locale)).map(post => ({
		title: post.data.title,
		description: post.data.description,
		content: generateContent(post.data.description, post.data.displayId, locale),
		link: `${removeTrailingSlash(base)}/${locale}/posts/${post.data.displayId}${slash}`,
		pubDate: post.data.date,
	} satisfies RSSFeedItem))

	return rss({
		trailingSlash: trailingSlash !== 'never',
		title: m.site_title(),
		description: m.site_description(),
		site: new URL(`${removeTrailingSlash(base)}/${locale}${slash}`, SITE.url),
		items,
		customData: `<language>${locale}</language>`,
	})
}) satisfies APIRoute
