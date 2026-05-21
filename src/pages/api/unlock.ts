import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const data = await request.formData()
	const password = data.get('password')?.toString() ?? ''
	const hash = data.get('hash')?.toString() ?? ''
	const cookieKey = data.get('cookieKey')?.toString() ?? ''
	const redirectTo = data.get('redirectTo')?.toString() ?? '/'

	// Validate redirectTo is same origin to prevent open redirect
	const requestOrigin = new URL(request.url).origin
	let safeRedirectTo = '/'
	try {
		const redirectUrl = new URL(redirectTo)
		if (redirectUrl.origin === requestOrigin) {
			safeRedirectTo = redirectTo
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
		path: '/',
	})

	// Remove any error params from the success redirect URL
	const successUrl = new URL(safeRedirectTo)
	for (const k of Array.from(successUrl.searchParams.keys())) {
		if (k.startsWith('protection_error_')) {
			successUrl.searchParams.delete(k)
		}
	}

	return redirect(successUrl.toString(), 303)
}
