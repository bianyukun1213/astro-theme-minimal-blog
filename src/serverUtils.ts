import type { AstroIntegration } from 'astro'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'

/**
 * Modified from astro-pagefind
 * Source: https://github.com/shishkin/astro-pagefind/blob/03a7c04e0c89d2445165212f76181c709b5ed1a9/packages/astro-pagefind/src/pagefind.ts
 *
 * MIT License
 * Copyright 2022 Sergey Shishkin
 */
export function pagefindIntegration(): AstroIntegration {
	let clientDir: string | undefined

	return {
		name: 'pagefind',
		hooks: {
			'astro:config:setup': ({ config }) => {
				if (config.adapter) {
					clientDir = fileURLToPath(config.build.client)
				}
			},
			'astro:server:setup': ({ server, logger }) => {
				const outDir = clientDir ?? path.join(server.config.root, server.config.build.outDir)
				logger.debug(`Serving pagefind from ${outDir}`)
				const serve = sirv(outDir, {
					dev: true,
					etag: true,
				})
				server.middlewares.use((req, res, next) => {
					if (req.url?.startsWith('/pagefind/')) {
						serve(req, res, next)
					}
					else {
						next()
					}
				})
			},
		},
	}
}
