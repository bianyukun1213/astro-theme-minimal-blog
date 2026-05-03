import type { Options as AutolinkHeadingsOptions } from 'rehype-autolink-headings'
import type { Options as ExternalLinkOptions } from 'rehype-external-links'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import remarkSandpack from '@lekoarts/remark-sandpack'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, fontProviders } from 'astro/config'
import { toString } from 'hast-util-to-string'
import { h, s } from 'hastscript'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkCollapse from 'remark-collapse'
import remarkDirective from 'remark-directive'
import remarkSmartypants from 'remark-smartypants'
import remarkToc from 'remark-toc'
import { tailwindResolver } from 'tailwind-resolver/vite'
import { DEFAULT_LOCALE, LOCALES, SITE } from './src/constants'
import { remarkAsides } from './src/remark'
import { pagefindIntegration } from './src/serverUtils'

export default defineConfig({
	fonts: [
		{
			name: 'Noto Serif',
			cssVariable: '--font-noto-serif',
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			subsets: ['latin', 'cyrillic'],
			fallbacks: ['serif'],
		},
		{
			name: 'Noto Serif SC',
			cssVariable: '--font-noto-serif-sc',
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			subsets: ['chinese-simplified', 'latin', 'cyrillic'],
			fallbacks: ['serif'],
		},
		{
			name: 'Noto Serif Hebrew',
			cssVariable: '--font-noto-serif-hebrew',
			provider: fontProviders.google(),
			weights: [400, 500, 600],
			styles: ['normal', 'italic'],
			subsets: ['hebrew', 'latin', 'cyrillic-ext'],
			fallbacks: ['serif'],
		},
	],
	output: 'static',
	trailingSlash: 'always',
	site: SITE.url,
	base: SITE.base,
	integrations: [sitemap(), alpinejs({ entrypoint: '/src/entrypoint' }), react(), pagefindIntegration(), expressiveCode(), mdx()],
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
		responsiveStyles: true,
		layout: 'constrained',
	},
	i18n: {
		locales: LOCALES as unknown as string[],
		defaultLocale: DEFAULT_LOCALE,
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
	},
	devToolbar: {
		enabled: false,
	},
	markdown: {
		// @ts-expect-error: Astro types don't match remark plugin
		remarkPlugins: [[remarkSmartypants, { backticks: false }], remarkDirective, remarkAsides, [remarkToc, { heading: '(Table of contents)|目录' }], [remarkCollapse, { test: '(Table of contents)|目录', summary: (str) => { return str } }], [remarkSandpack, { componentName: ['Playground'] }]],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeExternalLinks,
                {
                	target: '_blank',
                	rel: ['nofollow'],
                	properties: { className: ['external_link'] },
                	contentProperties: { className: ['sr-only'] },
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
		],
	},
})
