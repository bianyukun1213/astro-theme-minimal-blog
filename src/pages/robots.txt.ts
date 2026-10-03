import type { APIRoute } from 'astro'
import { SITE } from '@constants'

export const prerender = true

// `@astrojs/sitemap`'s default `filenameBase`, and the only file that advertises it.
const SITEMAP_INDEX_FILENAME = 'sitemap-index.xml'

export const GET: APIRoute = () => {
	const sitemap = new URL(`${import.meta.env.BASE_URL}${SITEMAP_INDEX_FILENAME}`, SITE.url).href
	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
		headers: { 'content-type': 'text/plain; charset=utf-8' },
	})
}
