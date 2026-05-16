import type { AstroIntegration } from 'astro'
import type { PagefindServiceConfig } from 'pagefind'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createIndex } from 'pagefind'
import sirv from 'sirv'

/**
 * Pagefind Astro integration options.
 */
export interface PagefindOptions {
	/**
	 * `PagefindServiceConfig` passed to pagefind's `createIndex`
	 */
	indexConfig?: PagefindServiceConfig
}

export default function pagefind({ indexConfig }: PagefindOptions = {}): AstroIntegration {
	let clientDir: string | undefined
	let base = '/'
	return {
		name: 'pagefind',
		hooks: {
			'astro:config:setup': ({ config, logger, updateConfig }) => {
				base = config.base ?? '/'
				if (config.output === 'server') {
					logger.warn(
						'Output type `server` does not produce static *.html pages in its output and thus will not work with astro-pagefind integration.',
					)
				}
				if (config.adapter) {
					clientDir = fileURLToPath(config.build.client)
				}
				// Use enforce:'pre' Vite plugin so this middleware runs before
				// the Cloudflare adapter's Workerd handler, which would otherwise
				// intercept pagefind requests and return 404.
				updateConfig({
					vite: {
						plugins: [
							{
								name: 'pagefind-dev-serve',
								configureServer(server) {
									const outDir = clientDir ?? path.join(server.config.root, server.config.build.outDir)
									logger.debug(`Serving pagefind from ${outDir}`)
									const serve = sirv(outDir, { dev: true, etag: true })
									const pagefindPrefix = `${base}pagefind/`.replace('//', '/')
									const handle = (req: any, res: any, next: () => void) => {
										if (req.url?.startsWith(pagefindPrefix)) {
											req.url = req.url.slice(base.length - 1)
											serve(req, res, next)
										}
										else {
											next()
										}
									}
									// Return a post-hook so it runs after ALL normal configureServer
									// hooks (including the Cloudflare adapter's Workerd handler).
									// Then unshift onto the stack so we execute before everything else.
									return () => {
										;(server.middlewares as any).stack.unshift({ route: '', handle })
									}
								},
							},
						],
					},
				})
			},
			'astro:server:setup': ({ logger }) => {
				// Middleware is now injected via the enforce:'pre' Vite plugin above.
				// This hook is kept for compatibility but does nothing.
				logger.debug('pagefind: dev middleware registered via Vite plugin')
			},
			'astro:build:done': async ({ dir, logger }) => {
				const outDir = fileURLToPath(dir)
				const { index, errors: createErrors } = await createIndex(indexConfig)
				if (!index) {
					logger.error('Pagefind failed to create index')
					createErrors.forEach(logger.error)
					return
				}
				const { page_count, errors: addErrors } = await index.addDirectory({ path: outDir })
				if (addErrors.length) {
					logger.error('Pagefind failed to index files')
					addErrors.forEach(logger.error)
					return
				}
				else {
					logger.info(`Pagefind indexed ${page_count} pages`)
				}
				const { outputPath, errors: writeErrors } = await index.writeFiles({
					outputPath: path.join(outDir, 'pagefind'),
				})
				if (writeErrors.length) {
					logger.error('Pagefind failed to write index')
					writeErrors.forEach(logger.error)
				}
				else {
					logger.info(`Pagefind wrote index to ${outputPath}`)
				}
			},
		},
	}
}

export { pagefind as pagefindIntegration }
