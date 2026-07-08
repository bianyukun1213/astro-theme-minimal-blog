import type { Options as AutolinkHeadingsOptions } from 'rehype-autolink-headings'
import type { Options as ExternalLinkOptions } from 'rehype-external-links'
import alpinejs from '@astrojs/alpinejs'
import cloudflare from '@astrojs/cloudflare'
import { unified } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, fontProviders } from 'astro/config'
import { toString } from 'hast-util-to-string'
import { h, s } from 'hastscript'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkCjkFriendly from 'remark-cjk-friendly'
import remarkCjkFriendlyGfmStrikethrough from 'remark-cjk-friendly-gfm-strikethrough'
import remarkCollapse from 'remark-collapse'
import remarkDirective from 'remark-directive'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import remarkSmartypants from 'remark-smartypants'
import remarkToc from 'remark-toc'
import { tailwindResolver } from 'tailwind-resolver/vite'
import { DEFAULT_LOCALE, LOCALES, SITE } from './src/constants'
import { remarkAsides } from './src/remark'

export default defineConfig({
	fonts: [
		{
			name: 'Noto Serif',
			cssVariable: '--font-noto-serif',
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			subsets: ['latin', 'cyrillic'],
			fallbacks: [],
			optimizedFallbacks: false,
		},
		{
			name: 'Noto Serif SC',
			cssVariable: '--font-noto-serif-sc',
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			fallbacks: [],
			optimizedFallbacks: false,
		},
		{
			name: 'Noto Serif Hebrew',
			cssVariable: '--font-noto-serif-hebrew',
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			fallbacks: [],
			optimizedFallbacks: false,
		},
	],

	output: 'static',
	adapter: cloudflare({ prerenderEnvironment: 'node' }),
	trailingSlash: 'always',
	site: SITE.url,
	base: SITE.base,
	integrations: [sitemap(), alpinejs({ entrypoint: '/src/entrypoint' }), react(), expressiveCode(), mdx()],
	server: {
		host: true,
	},

	vite: {
		plugins: [
			tailwindcss(),
			tailwindResolver({
				input: './src/styles/global.css', // Your Tailwind CSS file
			}),
			paraglideVitePlugin({
				project: './project.inlang',
				outdir: './src/paraglide',
				emitTsDeclarations: true,
			}),
		],
	},

	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
		responsiveStyles: true,
		layout: 'constrained',
	},

	i18n: {
		locales: LOCALES as unknown as string[],
		defaultLocale: DEFAULT_LOCALE,
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},

	devToolbar: {
		enabled: true,
	},

	markdown: {
		processor: unified({
			gfm: true,
			remarkPlugins: [remarkCjkFriendly, remarkCjkFriendlyGfmStrikethrough, [remarkSmartypants, { backticks: false }], remarkDirective, remarkAsides, [remarkToc, { heading: SITE.tocHeading }], [remarkCollapse, { test: SITE.tocHeading, summary: 'm.btn_expand_toc_title()' }]],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow'],
					properties: { className: ['external_link'] },
				} satisfies ExternalLinkOptions,
				],
				[
					rehypeAutolinkHeadings,
				{
					behavior: 'after',
					group() {
						return h('.markdown-heading')
					},
					headingProperties() {
						return { tabIndex: -1 }
					},
					properties(node: any) {
						return { ariaLabel: toString(node), className: 'anchor' }
					},
					content() {
						return h('svg', { className: 'anchor-icon', viewBox: '0 0 16 16', ariaHidden: true }, [
							s('path', { d: 'm7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z' }),
						])
					},
				} satisfies AutolinkHeadingsOptions,
				],
				[
					remarkRehypeWrap,
					{
						node: { type: 'element', tagName: 'div', properties: { className: 'tide-table-wrapper' } },
						start: 'element[tagName=table]',
					},
				],
			],
			remarkRehype: {
				footnoteLabel: 'm.label_footnotes()',
				footnoteBackLabel: 'm.btn_footnote_back_title()',
				footnoteBackContent: '↑',
			},
		}),
	},
})
