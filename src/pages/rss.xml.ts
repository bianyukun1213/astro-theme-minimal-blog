import type { RSSFeedItem } from '@astrojs/rss'
import type { APIRoute } from 'astro'
import rss from '@astrojs/rss'
import { SITE } from '@constants'
import { removeTrailingSlash, sortAsc } from '@utils'
import { trailingSlash } from 'astro:config/client'
import { getCollection } from 'astro:content'

const base = import.meta.env.BASE_URL
const slash = trailingSlash === 'never' ? '' : '/'

function generateContent(description: string, link: string) {
	return `<p>${description}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${new URL(`${removeTrailingSlash(base)}/posts/${link}${slash}`, SITE.url)}">Keep reading</a>.</strong></div>`
}

export const GET: APIRoute = async () => {
	const items = (sortAsc(await getCollection('blog'))).map(entry => ({
		title: entry.data.title,
		description: entry.data.description,
		// content: generateContent(entry.data.description, entry.data.slug),
		// link: `${removeTrailingSlash(base)}/posts/${entry.data.slug}${slash}`,
		content: 'aaa',
		link: 'bbb',
		pubDate: entry.data.date,
	} satisfies RSSFeedItem))

	return rss({
		trailingSlash: trailingSlash !== 'never',
		// title: SITE.titleDefault,
		// description: SITE.description,
		// site: SITE.url + base,
		title: 'aaa',
		description: 'bbb',
		site: 'https://example.com',
		items,
		customData: '<language>en-us</language>',
	})
}
