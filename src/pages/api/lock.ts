import type { APIRoute } from 'astro'
import { removeTrailingSlash } from '@utils'
import { trailingSlash } from 'astro:config/client'

export const prerender = false

const base = import.meta.env.BASE_URL
const slash = trailingSlash === 'never' ? '' : '/'
const basePath = removeTrailingSlash(base) + slash

export const POST = (async ({ request, cookies, redirect }) => {
	const data = await request.formData()
	const cookieKey = data.get('cookieKey')?.toString() ?? ''
	const redirectTo = data.get('redirectTo')?.toString() ?? basePath

	// 确保 redirectTo 是由于同源以防止开放重定向
	const requestOrigin = new URL(request.url).origin
	let safeRedirectTo = basePath
	try {
		const redirectUrl = new URL(redirectTo)
		if (redirectUrl.origin === requestOrigin) {
			safeRedirectTo = redirectTo
		}
	}
	catch {
		// URL 无效，使用默认的 basePath
	}

	if (cookieKey) {
		cookies.delete(cookieKey, { path: basePath })
	}

	return redirect(safeRedirectTo, 303)
}) satisfies APIRoute
