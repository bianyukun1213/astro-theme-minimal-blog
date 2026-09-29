import alpinejs from '@astrojs/alpinejs'
import cloudflare from '@astrojs/cloudflare'
import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, fontProviders } from 'astro/config'
import { tailwindResolver } from 'tailwind-resolver/vite'
import { DEFAULT_LOCALE, LOCALES, SITE } from './src/constants'
import { satteriAsides, satteriCollapse, satteriExternalLinks, satteriHeadingPermalinks, satteriToc, satteriWrap } from './src/markdown'

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
	adapter: cloudflare(),
	trailingSlash: 'always',
	site: SITE.url,
	base: SITE.base,
	integrations: [sitemap(), alpinejs({ entrypoint: './src/entrypoint' }), react(), expressiveCode(), mdx()],
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
		processor: satteri({
			features: {
				// `:::note`-style container directives, handled by `satteriAsides`.
				directive: true,
				// `satteriCollapse` injects `<details>`/`<summary>` as raw HTML.
				// Reparsing raw HTML into elements is what allows the still-open
				// `<details>` to nest the table of contents that follows it;
				// MDX cannot represent a bare `html` node.
				rawHtml: true,
				// `smartPunctuation` is on by default here, matching the
				// `remark-smartypants` setup this replaced (`backticks: false`).
				gfm: {
					footnotes: {
						label: 'm.label_footnotes()',
						backLabel: 'm.btn_footnote_back_title()',
						backContent: '↑',
					},
				},
			},
			mdastPlugins: [satteriAsides, satteriToc, satteriCollapse],
			hastPlugins: [satteriHeadingIdsPlugin(), satteriExternalLinks, satteriHeadingPermalinks, satteriWrap],
		}),
	},
})
