import type { RSSFeedItem } from '@astrojs/rss'
import type { Locale } from '@utils'
import type { APIRoute } from 'astro'
import rss from '@astrojs/rss'
import { SITE } from '@constants'
import { filterDrafts, filterHidden, getPostsByLocale, removeTrailingSlash, sortAsc, sortSticky, useTranslations } from '@utils'
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
	const currentLocale = params.locale as Locale
	const m = useTranslations(currentLocale)
	let allPosts = await getCollection('blog')
	allPosts = filterDrafts(allPosts)
	allPosts = filterHidden(allPosts)
	allPosts = getPostsByLocale(allPosts, currentLocale)
	allPosts = sortAsc(allPosts)
	allPosts = sortSticky(allPosts)

	const items = allPosts.map(post => {
		const title = post.data.title || m.site_title()
		const description = post.data.description || m.site_description()
		return ({
			title,
			description,
			content: generateContent(description, post.data.displayId, currentLocale),
			link: `${removeTrailingSlash(base)}/${currentLocale}/posts/${post.data.displayId}${slash}`,
			pubDate: post.data.date,
		} satisfies RSSFeedItem)
	}
	)

	return rss({
		trailingSlash: trailingSlash !== 'never',
		title: m.site_title(),
		description: m.site_description(),
		site: new URL(`${removeTrailingSlash(base)}/${currentLocale}${slash}`, SITE.url),
		items,
		customData: `<language>${currentLocale}</language>`,
	})
}) satisfies APIRoute
