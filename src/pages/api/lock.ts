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

	// Validate redirectTo is same origin to prevent open redirect.
	// When behind a reverse proxy (e.g. EdgeOne → Cloudflare), request.url reflects
	// the origin hostname, while the browser's Origin header reflects the frontend domain.
	// We validate against the server-side origin, then rewrite to the client-side origin
	// so the 303 redirect goes back to wherever the browser actually came from.
	const requestOrigin = new URL(request.url).origin
	const clientOrigin = request.headers.get('origin') ?? requestOrigin
	let safeRedirectTo = basePath
	try {
		const redirectUrl = new URL(redirectTo)
		if (redirectUrl.origin === requestOrigin) {
			redirectUrl.host = new URL(clientOrigin).host
			redirectUrl.protocol = new URL(clientOrigin).protocol
			safeRedirectTo = redirectUrl.toString()
		}
	}
	catch {
		// invalid URL, use default
	}

	if (cookieKey) {
		cookies.delete(cookieKey, { path: basePath })
	}

	return redirect(safeRedirectTo, 303)
}) satisfies APIRoute
