# The search index is built by crawling the built site

Post pages render on demand (see [ADR-0002](./0002-posts-render-on-demand.md)), so the build output contains no post HTML and cannot be indexed from disk. The search index is therefore produced by a separate `build:search` step that starts the built preview server, fetches every indexable post over HTTP, and hands that HTML to Pagefind's Node API.

## Considered Options

- **Index the build output** — `addDirectory` over `dist/client`. This is what `astro-pagefind` does, and here it indexes the listing and static pages but zero posts.
- **Prerender a parallel "mirror" route** that emits plain post HTML purely for indexing, then index it and delete it. Rejected: it duplicates the post template in a second place that must not drift, and adds a route that has to be kept out of the sitemap.
- **Build records programmatically** from the content collection. Rejected: rendered MDX (custom components, code blocks) cannot be reproduced faithfully outside Astro's own pipeline, so the index would drift from what readers see.
- **Crawl the dev server.** Rejected: its HTML carries dev-only markup and absolute local paths, and it starts orders of magnitude slower than the preview server.

## Consequences

- `astro build` alone produces no usable index, and it clears `dist/`, so it also destroys a previously built one. `build:search` has to follow every build.
- `astro-pagefind` is not used at all. Its integration must not be registered — its build hook would write a post-less index that looks like a working one — and its `PagefindConfig.astro` is not the interface either: the interface is composed from `@pagefind/component-ui`, which the site bundles and hands the bundle path to explicitly. See `src/components/site-search.astro`.
- Every crawled page must contain `data-pagefind-body`. Pagefind only tolerates this attribute being absent site-wide: once any page has it, pages without it are skipped — silently, and without a way to tell posts from pages that were never meant to be indexed.
- The dev server serves a previously built bundle, because it renders from source and would otherwise 404 every request for one. That is `src/searchIndexDevServer.ts`: a Vite plugin, not an Astro integration, because the adapter's middleware runs the site's own middleware inside the Workers runtime, where `node:fs` cannot see the files on disk.
