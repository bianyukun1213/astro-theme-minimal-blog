import type { WalineInstance } from '@waline/client'
import { z } from 'astro/zod'

export interface AlpineStoreImages {
	maskedIds: string[]
	revealedIds: string[]
	registerMask: (id: string) => void
	reveal: (id: string) => void
	isRevealed: (id: string) => boolean
}

export interface TideMeta {
	breakpoints: Record<string, string>
}

// export interface TideInteractions {
// 	waline: {
// 		load: (update: boolean) => void
// 		unload: () => void
// 		instance: WalineInstance | null
// 	}
// 	webmentionjs: {
// 		load: () => void
// 		unload: () => void
// 	}
// }

export const AuthorSchema = z.object({
	slug: z.string(),
	name: z.string(),
	photo: z.url(),
	urls: z.array(z.url()),
	email: z.email(),
	note: z.string(),
})

export type Author = z.infer<typeof AuthorSchema>

export interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

export const HCardSchema = z.object({
	pName: z.string(),
	uPhoto: z.url(),
	uUrls: z.array(z.url()),
	uEmail: z.email(),
	pNote: z.string(),
})

export type HCard = z.infer<typeof HCardSchema>

export const PLocationSchema = z.object({
	pStreetAddress: z.string().optional(),
	pExtendedAddress: z.string().optional().optional(),
	pLocality: z.string().optional(),
	pRegion: z.string().optional(),
	pCountryName: z.string().optional(),
	pLongitude: z.number().optional(),
	pLatitude: z.number().optional(),
	pAltitude: z.number().optional(),
})

export type PLocation = z.infer<typeof PLocationSchema>
