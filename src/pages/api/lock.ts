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

	// Validate redirectTo to prevent open redirect.
	// ALLOWED_ORIGINS is a comma-separated list of trusted frontend origins
	// (e.g. "https://his2nd.life,https://blog.hollisdevhub.com").
	// When behind a reverse proxy (e.g. EdgeOne → Cloudflare), request.url reflects
	// the backend hostname. We validate redirectTo against all allowed origins,
	// then rewrite its origin to match the browser's actual Origin header
	// (verified to be in the allowlist) so the 303 goes back to the right domain.
	const allowedOrigins = [
		new URL(request.url).origin,
		...(import.meta.env.ALLOWED_ORIGINS ?? '')
			.split(',')
			.map((s: string) => s.trim())
			.filter(Boolean),
	]
	const requestClientOrigin = request.headers.get('origin') ?? new URL(request.url).origin
	const trustedClientOrigin = allowedOrigins.includes(requestClientOrigin)
		? requestClientOrigin
		: new URL(request.url).origin
	let safeRedirectTo = basePath
	try {
		const redirectUrl = new URL(redirectTo)
		if (allowedOrigins.includes(redirectUrl.origin)) {
			redirectUrl.host = new URL(trustedClientOrigin).host
			redirectUrl.protocol = new URL(trustedClientOrigin).protocol
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
