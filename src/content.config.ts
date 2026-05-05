import { PLocationSchema } from '@types'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'
import { BLOG_PATH, TAG_SLUGS } from './constants'

const blog = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.mdx', base: BLOG_PATH }),
	schema: z.object({
		title: z.string(),
		displayId: z.string(),
		description: z.string(),
		authors: z.array(z.string()),
		date: z.date(),
		updated: z.date(),
		tags: z.array(z.enum(TAG_SLUGS)),
		image: z.url().optional(),
		searchIndex: z.boolean().optional().default(true),
		copyright: z.string().optional(),
		pLocation: PLocationSchema.optional(),
		uInReplyTo: z.array(z.url()).optional(),
		uLikeOf: z.array(z.url()).optional(),
		uRepostOf: z.array(z.url()).optional(),
		// pRsvp: https://microformats.org/wiki/h-entry
		uSyndication: z.array(z.url()).optional(),
	}),
})

export const collections = {
	blog,
}
