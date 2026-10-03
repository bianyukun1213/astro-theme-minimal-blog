/**
 * The one definition of how a Post's URL is spelled.
 *
 * A Post is addressed from navigation, from neighbouring-Post links, from the feed, from the
 * sitemap and from Site search. Every one of those must produce the same bytes, and the site's
 * canonical URL must not disagree with them, so the Display ID is percent-encoded — it may hold
 * characters outside the unreserved set, such as the Korean in "welcome-to-서울" — and the
 * trailing slash follows the site's setting.
 *
 * This module deliberately has no dependencies. `astro.config.ts` imports it, where neither
 * `astro:config/client` nor `import.meta.env` is available, so it cannot reuse `utils.ts`'s
 * `removeTrailingSlash` and trims what it needs itself. Keep it that way.
 */

import type { Locale } from './paraglide/runtime'

/**
 * The values Astro's `trailingSlash` setting accepts.
 */
export type TrailingSlash = 'always' | 'never' | 'ignore'

/**
 * Returns a Post's site-relative path.
 * @param displayId The Post's Display ID, as authored in frontmatter.
 * @param locale The locale the Post is published in.
 * @param base The site's base path, as configured in `astro.config.ts`.
 * @param trailingSlash The site's `trailingSlash` setting.
 * @returns The Post's path, rooted at `base`, with its Display ID percent-encoded and the
 * trailing slash the site is configured to use.
 */
export function buildPostPath(
	displayId: string,
	locale: Locale,
	base: string,
	trailingSlash: TrailingSlash,
): string {
	const slash = trailingSlash === 'never' ? '' : '/'
	return `${base.replace(/\/+$/, '')}/${locale}/posts/${encodeURIComponent(displayId)}${slash}`
}
