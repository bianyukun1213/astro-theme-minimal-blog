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
