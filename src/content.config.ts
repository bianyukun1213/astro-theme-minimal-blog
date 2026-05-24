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
		keywords: z.array(z.string()).optional(),
		description: z.string().optional(),
		authors: z.array(z.string()),
		date: z.date(),
		updated: z.date(),
		tags: z.array(z.enum(TAG_SLUGS)),
		image: z.url().optional(),
		imageAlt: z.string().optional().default(''),
		imageCaption: z.string().optional(),
		searchIndex: z.boolean().optional().default(true),
		draft: z.boolean().optional().default(false),
		hidden: z.boolean().optional().default(false),
		copyright: z.string().optional().default('CC BY-SA 4.0'),
		pLocation: PLocationSchema.optional(),
		uInReplyTo: z.array(z.url()).optional(),
		uLikeOf: z.array(z.url()).optional(),
		uRepostOf: z.array(z.url()).optional(),
		// pRsvp: https://microformats.org/wiki/h-entry
		uSyndication: z.array(z.url()).optional(),
		interactions: z.boolean().optional().default(true),
	}),
})

export const collections = {
	blog,
}
