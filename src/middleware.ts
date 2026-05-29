import type { Locale } from '@utils'
import { useTranslations } from '@utils'
import { trailingSlash } from 'astro:config/client'
import { defineMiddleware, sequence } from 'astro:middleware'

// bug，使用动态路由和 trailingSlash: always 时，生成的路由末尾带 /。暂时使用这种方式来缓解问题，使得去掉 / 也能访问 rss 数据和 og。
export const resRedirect = defineMiddleware((context, next) => {
	if (trailingSlash !== 'always') {
		return next()
	}
	const pathname = context.url.pathname
	if (pathname.endsWith('/rss.xml')) {
		return context.rewrite(`${pathname}/`)
	}
	return next()
})

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
		return new Response(html, {
			status: response.status,
			headers: response.headers,
		})
	}
	return response
})

export const imageProcessor = defineMiddleware(async (context, next) => {
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

export const onRequest = sequence(resRedirect, i18nProcessor, imageProcessor)
