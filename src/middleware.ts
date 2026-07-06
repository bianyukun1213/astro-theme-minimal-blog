import type { Locale } from '@utils'
import { useTranslations } from '@utils'
import { defineMiddleware, sequence } from 'astro:middleware'

export const i18nProcessor = defineMiddleware(async (context, next) => {
	const response = await next()
	// 确保我们只处理 HTML 页面
	if (response.headers.get('content-type')?.includes('text/html')) {
		const currentLocale = context.currentLocale as Locale
		const m = useTranslations(currentLocale)
		let html = await response.text()
		html = html.replace(/m\.btn_expand_toc_title\(\)/g, m.btn_expand_toc_title())
			.replace(/m\.label_footnotes\(\)/g, m.label_footnotes())
			.replace(/m\.btn_footnote_back_title\(\)/g, m.btn_footnote_back_title())
			.replace(/<p>\u2003\u2003/g, '<p class="tide-text-indent">')
		return new Response(html, {
			status: response.status,
			headers: response.headers,
		})
	}
	return response
})

export const imagesProcessor = defineMiddleware(async (context, next) => {
	const response = await next()
	// 确保我们只处理 HTML 页面
	if (response.headers.get('content-type')?.includes('text/html')) {
		let html = await response.text()
		// const safeSlug = slugify(context.url.pathname);
		const safeSlug = context.url.pathname.replace(/\/+/g, '-').replace(/^-|-$/g, '')
		let imgCounter = 0
		const figureRegex
			= /<figure([^>]*class="[^"]*tide-image-figure[^"]*"[^>]*)>/g
		html = html.replace(figureRegex, (match, innerAttributes) => {
			const imageId = `${safeSlug}-img-${imgCounter++}`
			return `<figure${innerAttributes} data-image-id="${imageId}">`
		})
		return new Response(html, {
			status: response.status,
			headers: response.headers,
		})
	}
	return response
})

export const onRequest = sequence(i18nProcessor, imagesProcessor)
