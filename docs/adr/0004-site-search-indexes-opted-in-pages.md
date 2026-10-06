# Site search indexes the Pages that opt in

Site search began as an index of the Posts alone (see [ADR-0001](./0001-build-search-index-by-crawling.md)). The Pages — everything else the site renders at a route of its own, such as `/{locale}/about/` — were left out, even though the Page layout had been emitting the article-region marker for them all along. The crawl now covers them.

The candidate set is the sitemap's non-Post URLs, and the opt-in is the article-region marker in a Page's built HTML: a Page enters the index exactly when its HTML carries `data-pagefind-body`, so the site's own markup decides. A Page without the marker is skipped and reported under `Skipped Pages`, while a Post without it fails the build, because a Post belongs in every index unless its frontmatter says otherwise and a missing marker is a regression. A Page without the marker is never handed to Pagefind, since that would index its whole body. The language check counts what was crawled, Pages included, so a Page landing in the wrong language's index is still caught.

## Considered Options

- **Enumerate the Pages from `src/pages`.** Rejected: a Page's route is produced by `getStaticPaths` (locale, tag, page number), so a static enumeration would have to re-implement Astro's routing, and whether a Page is indexed is a *prop* of the Page layout rather than frontmatter, which no source scan can read.
- **Index the listing Pages too** — the home page, `/{locale}/tags/`, and the paginated listings. Rejected: they repeat Post titles and excerpts, so a query would answer with the listing that links to a Post alongside the Post itself, and every new Post would change them all.
- **A frontmatter-style opt-in for Pages** — a content file or a configuration list naming the indexable routes. Rejected: the Page layout's `searchIndex` prop already is that switch, and a second one could disagree with it.
- **Let Pagefind fall back to the whole page when a Page carries no marker.** Rejected: Pagefind's behaviour here is site-wide and silent, and the fallback would drag navigation and footer chrome into the index.

## Consequences

- The sitemap is the source of the crawl's Page candidates: the built sitemap already lists every prerendered Page, and the index build already has to read it, so no second list of routes has to be kept honest.
- Nothing in a Page's source changes when the rule does, but the marker reaches the index only once `bun run build:search` has run again — the same rebuild every other marker requires.
- `build:search` fetches listing Pages and then discards them. That is the price of deciding indexability from the built HTML rather than from a declared route list.
- A URL that names no locale is skipped rather than fetched, because no language index could hold it. The root redirect is the one such URL the site publishes.
- Adding a Page to the index is one prop away: the Page layout's `searchIndex` defaults to `true`, and `searchIndex={false}` removes a Page from every index exactly as [ADR-0003](./0003-searchindex-controls-every-index.md) describes for a Post.
- Each language's page count now counts its Posts and its opted-in Pages together, which is what the integration test asserts against the built HTML.
