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
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tailwindResolver } from 'tailwind-resolver/vite'
import { CLIENT_OUTPUT_DIRECTORY, DEFAULT_LOCALE, LOCALES, SEARCH_INDEX_BUNDLE_NAME, SITE, TRAILING_SLASH } from './src/constants'
import { satteriAsides, satteriCollapse, satteriExternalLinks, satteriHeadingPermalinks, satteriToc, satteriWrap } from './src/markdown'
import { enumeratePosts } from './src/postEnumeration'
import { searchIndexDevServer } from './src/searchIndexDevServer'

// Post pages render on demand, so the sitemap integration cannot discover them from the build
// output; the Post-enumeration module, which the Site search index build will consume as well,
// supplies them instead.
const sitemapPostUrls = enumeratePosts().indexable.map(post => post.url)

// The dev server renders from source, so the built Site search index bundle is nowhere it serves;
// this puts it back at its public path for as long as the dev server is running. `astro.config.ts`
// is the project root, so the client output directory is resolved from here rather than from
// Astro's resolved config, which only exists once the config is loaded.
const searchIndexBundleDirectory = resolve(
	fileURLToPath(import.meta.url),
	'..',
	CLIENT_OUTPUT_DIRECTORY,
	SEARCH_INDEX_BUNDLE_NAME,
)
const searchIndexBundlePathname = `${SITE.base.replace(/\/$/, '')}/${SEARCH_INDEX_BUNDLE_NAME}/`

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
	trailingSlash: TRAILING_SLASH,
	site: SITE.url,
	base: SITE.base,
	integrations: [sitemap({ customPages: sitemapPostUrls }), alpinejs({ entrypoint: './src/entrypoint' }), react(), expressiveCode(), mdx()],
	server: {
		host: true,
	},

	vite: {
		plugins: [
			// The bundle the dev server serves is the one a previous `bun run build:search` wrote, so it
			// is read where that build put it.
			searchIndexDevServer(searchIndexBundleDirectory, searchIndexBundlePathname),
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
