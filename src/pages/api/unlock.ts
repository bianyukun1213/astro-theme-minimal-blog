import type { APIRoute } from 'astro'
import { removeTrailingSlash } from '@utils'
import { trailingSlash } from 'astro:config/client'

export const prerender = false

const base = import.meta.env.BASE_URL
const slash = trailingSlash === 'never' ? '' : '/'
const basePath = removeTrailingSlash(base) + slash

export const POST = (async ({ request, cookies, redirect }) => {
	const data = await request.formData()
	const password = data.get('password')?.toString() ?? ''
	const hash = data.get('hash')?.toString() ?? ''
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

	if (!password || !hash || !cookieKey) {
		return redirect(safeRedirectTo, 303)
	}

	const encoder = new TextEncoder()

	// Hash the entered password and compare with the expected hash
	const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(password))
	const enteredHash = Array.from(new Uint8Array(hashBuffer))
		.map(b => b.toString(16).padStart(2, '0'))
		.join('')

	if (enteredHash !== hash) {
		const errorUrl = new URL(safeRedirectTo)
		errorUrl.searchParams.set(`protection_error_${cookieKey}`, '1')
		return redirect(errorUrl.toString(), 303)
	}

	// Compute HMAC to sign the cookie value
	const secret = import.meta.env.PROTECTION_SECRET ?? 'dev-secret-change-in-prod'
	const signingKey = await crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign'],
	)
	const signBuffer = await crypto.subtle.sign('HMAC', signingKey, encoder.encode(hash))
	const signature = Array.from(new Uint8Array(signBuffer))
		.map(b => b.toString(16).padStart(2, '0'))
		.join('')

	cookies.set(cookieKey, signature, {
		httpOnly: true,
		sameSite: 'strict',
		secure: import.meta.env.PROD,
		maxAge: 60 * 60 * 24 * 7, // 7 days
		path: basePath,
	})

	// Remove any error params from the success redirect URL
	const successUrl = new URL(safeRedirectTo)
	for (const k of Array.from(successUrl.searchParams.keys())) {
		if (k.startsWith('protection_error_')) {
			successUrl.searchParams.delete(k)
		}
	}

	return redirect(successUrl.toString(), 303)
}) satisfies APIRoute
