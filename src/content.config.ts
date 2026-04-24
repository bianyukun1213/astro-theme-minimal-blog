import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'
import { BLOG_PATH, TAG_SLUGS } from './constants'

const blog = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.mdx', base: BLOG_PATH }),
	schema: z.object({
		title: z.string(),
		// slug: z.string().optional(),
		displayId: z.string(),
		description: z.string(),
		date: z.date(),
		lastUpdated: z.date(),
		tags: z.array(z.enum(TAG_SLUGS)),
		image: z.string().optional(),
		searchIndex: z.boolean().optional().default(true),
	}),
})

export const collections = {
	blog,
}
