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
