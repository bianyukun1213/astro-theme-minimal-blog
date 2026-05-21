import type { APIRoute } from 'astro'

export const prerender = false

export const POST = (async ({ request, cookies, redirect }) => {
	const data = await request.formData()
	const cookieKey = data.get('cookieKey')?.toString() ?? ''
	const redirectTo = data.get('redirectTo')?.toString() ?? '/'

	// 确保 redirectTo 是由于同源以防止开放重定向
	const requestOrigin = new URL(request.url).origin
	let safeRedirectTo = '/'
	try {
		const redirectUrl = new URL(redirectTo)
		if (redirectUrl.origin === requestOrigin) {
			safeRedirectTo = redirectTo
		}
	}
	catch {
		// URL 无效，使用默认的 '/'
	}

	if (cookieKey) {
		cookies.delete(cookieKey, { path: '/' })
	}

	return redirect(safeRedirectTo, 303)
}) satisfies APIRoute
