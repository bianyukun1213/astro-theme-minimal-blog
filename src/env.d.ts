declare namespace astroHTML.JSX {
	interface HTMLAttributes {
		value?: string
	}
}

declare let AtmbThemeProvider: {
	updatePickers: (theme?: string) => void
}

declare namespace App {
	interface Locals {
		localesOverride?: import('@/paraglide/runtime').Locale[]
	}
}

interface Window {
	Alpine: import('alpinejs').Alpine
	tideMeta: import('@/utils/types').TideMeta
	// tideInteractions: import('@/utils/types').TideInteractions
	m: import('@/paraglide/messages.js').m
	setLocale: import('@/paraglide/runtime').SetLocaleFn
}

/* These two publish their stylesheet as an extensionless subpath export that resolves straight to a
 * `.css` file, and nothing declares it. The `*.css` ambient declaration Astro ships covers a
 * specifier that ends in `.css`, not one that ends in the export's own name, so TypeScript reports
 * TS2882 for the side-effect import. Naming the two specifiers is what it takes to satisfy it. */
declare module '@pagefind/component-ui/css'
declare module '@waline/client/style'
