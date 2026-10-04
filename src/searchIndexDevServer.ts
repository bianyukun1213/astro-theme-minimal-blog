/**
 * Serves the Site search index bundle while developing.
 *
 * The dev server renders from source rather than from the build output, so it serves nothing at the
 * bundle's public path: the index the site search interface asks for is a 404, and search looks
 * broken until someone thinks to run a site build and a preview. `astro dev` produces no index and
 * is not meant to — the index is built by crawling the built preview server (ADR-0001) — so what is
 * missing is a way to serve the most recently built one.
 *
 * This is a Vite plugin rather than an Astro integration, for one reason: the middleware the
 * deployment adapter brings runs the site's own middleware inside the Workers runtime, where
 * `node:fs` cannot see the files on disk. Middleware that serves files has to run on the Node side
 * of the dev server, which is where a `configureServer` hook puts it — and it is put at the front
 * of the stack, because the adapter's middleware intercepts these requests and answers 404.
 *
 * Nothing here takes part in a build. `astro.config.ts` is read by the local `astro` CLI alone, and
 * the plugin's `apply: 'serve'` keeps it out of the build this config also drives, so `sirv` stays
 * a development-only dependency and no path from a developer's machine reaches the output.
 */

import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'
import { SEARCH_INDEX_BUNDLE_NAME } from './constants'

/** The project root, so that output names paths the way the rest of the site does. */
const PROJECT_ROOT = fileURLToPath(new URL('..', import.meta.url))

/** The bundle's own entry file, which is what tells a built bundle from a leftover directory. */
const BUNDLE_ENTRY_FILENAME = 'pagefind-entry.json'

/**
 * Serves the built Site search index bundle at its public path during `astro dev`.
 * @param bundleDirectory The directory the site build wrote the index bundle into.
 * @param bundlePathname The public path the bundle is served at.
 * @returns The plugin.
 */
export function searchIndexDevServer(bundleDirectory: string, bundlePathname: string): Plugin {
	return {
		name: 'search-index-dev-server',
		apply: 'serve',
		configureServer(server) {
			if (!existsSync(join(bundleDirectory, BUNDLE_ENTRY_FILENAME))) {
				server.config.logger.warn(`There is no Site search index at ${toPosixPath(relative(PROJECT_ROOT, bundleDirectory))}, so the search interface cannot return anything. Build one with 'bun run build:search', which needs a site build first ('bun run build').`)
				return
			}
			// `dev` because the bundle is a directory of files that a build replaces wholesale: what is
			// on disk is read on every request rather than listed once at start-up.
			//
			// `sirv` is published as CommonJS with an `export =`, which a module that has already been
			// loaded does not unwrap the way the config loader does and `esModuleInterop` says it should:
			// the function is the module itself there. Both spellings are accepted.
			const sirvModule = sirv as unknown as typeof sirv | { default: typeof sirv }
			const serveBundle = (typeof sirvModule === 'function' ? sirvModule : sirvModule.default)(bundleDirectory, { dev: true })
			// `unshift`, not `use`: the middlewares Astro adds — the adapter's among them — are unshifted
			// as well, and the bundle has to be reached before the adapter answers 404 for it.
			server.middlewares.stack.unshift({
				route: '',
				handle: (request: IncomingMessage, response: ServerResponse, next: () => void) => {
					if (!isBundleRequest(request, bundlePathname)) {
						next()
						return
					}
					// The request is re-addressed onto the bundle's directory, because that is what the
					// static-file server resolves against. What is left is percent-encoded as it arrived:
					// `sirv` decodes what it can itself.
					request.url = request.url?.slice(bundlePathname.length - 1)
					serveBundle(request, response, next)
				},
			})
		},
	}
}

/**
 * Whether a request addresses the bundle rather than the site.
 * @param request The dev server's request.
 * @param bundlePathname The public path the bundle is served at.
 * @returns Whether the static-file server should answer it.
 */
function isBundleRequest(request: IncomingMessage, bundlePathname: string): boolean {
	const pathname = request.url?.split('?')[0]
	return pathname !== undefined && pathname.startsWith(bundlePathname)
}

/**
 * Rewrites a path's separators so that output reads the same on every platform.
 * @param path The path to rewrite.
 * @returns The path with forward slashes.
 */
function toPosixPath(path: string): string {
	return path.replaceAll('\\', '/')
}
