# Astro Theme: Minimal Blog

Welcome to **Astro Theme: Minimal Blog**, an ideal option to start sharing your ideas. It's easy to set up and features everything you'd need for a blog.

This is a fork of [the original project](https://github.com/LekoArts/astro-theme-minimal-blog) by [LekoArts](https://www.lekoarts.de/), with various features added. Check [the demo](https://his2nd.life/en-US/).

## ✨ Original features

- Write blog Posts with MDX
- Styled with [Tailwind](https://tailwindcss.com/)
- Code blocks powered by [Expressive Code](https://expressive-code.com/)
- Custom asides component
- Live coding powered by [Sandpack](https://github.com/codesandbox/sandpack)
- RSS, Sitemap
- Light/Dark/System color mode toggle
- Add tags to your blog Posts
- [Pagefind](https://pagefind.app/) search over the site's own Posts, served by the site itself (see [Search](#-search))

## ✨ Newly added features

- Astro 7 support
- i18n (for `en-US`, `zh-CN`, `ru-RU`, and `he-IL`) with Paraglide JS
- `base` and `trailingSlash` support
- microformats2 and Indie Web support
- Keywords for SEO
- On-demand rendering for Posts, with Cloudflare integration
- View transitions
- Post content protection with passwords
- Non-public Posts which are not listed and not indexed
- Drafts
- Table of contents
- Post header image
- Sticky Posts
- Image masonry and image viewer
- Tab and Collapse components
- Components for YouTube, VK Music, and NetEase Music
- Post copyright statement
- Comment integrations with Waline and webmention.js
- Pagination

## 🔍 Search

Site search is served by the site itself, and a query never leaves it. The interface is composed from [Pagefind](https://pagefind.app/)'s component UI; results are limited to the language of the page being read, so a Chinese page does not return Russian Posts; and `Ctrl`/`Cmd` + `K` opens the overlay.

### Building the index

Posts render on demand (see [ADR-0002](docs/adr/0002-posts-render-on-demand.md)), so the site build produces no Post HTML, and an index of its output would hold no Posts: a build step that indexed that output anyway would find the listing and static pages, look as though it had succeeded, and leave search unable to return a single Post. The index is instead built by crawling the built site (see [ADR-0001](docs/adr/0001-build-search-index-by-crawling.md)), which takes two commands, in this order:

```sh
bun run build
bun run build:search
```

`build:search` enumerates the Posts and cross-checks them against the built sitemap, then starts the built preview server on a port of its own choosing, waits for it to answer, fetches each Post over HTTP **without credentials**, hands each response body to Pagefind's Node API keyed by that Post's site-relative path, and writes the bundle to `dist/client/pagefind/`. It prints how many pages it indexed and in which languages, and every Post it excluded with a reason. On any condition that would make the index wrong it exits non-zero rather than report a success it cannot vouch for: when the enumerated Posts and the sitemap disagree, when a Post answers with a status other than 200, when a fetched page lacks the article-region marker, when a fetched page contains the marker the Protected component emits only for an unlocked body, or when the bundle does not hold exactly one index per language present in the content. The preview server is stopped on success and on failure alike. A run that fails after the bundle has been written — the language check is the last thing it does — leaves that bundle in place.

**The order is not a preference.** The site build clears its output directory, so it also destroys the index a previous `build:search` wrote; an index built before it is gone. `dist/` is not in version control, so a clean checkout has neither the site nor the index: with [Bun](https://bun.sh/) installed, `bun install`, then the two commands above, in that order.

**Marker changes require an index rebuild; presentation changes do not.** Anything that decides what the indexer sees — a `data-pagefind-*` attribute, the article-region marker on a Post page, the `searchIndex` frontmatter field, or which Posts exist — reaches the index only once `bun run build:search` has run again. How results are *presented* — the result cards, the overlay's styling, Pagefind's `--pf-*` variables — is decided in the browser when a page renders, so it takes effect without touching the index.

### Checking search locally

With an index built as above, the dev server serves that bundle while it runs, and warns naming the two commands that produce one when there is no bundle to serve:

```sh
bun run dev
```

The dev server renders from source, so it never builds an index itself, and the bundle it serves is the one the last `build:search` wrote.

The integration test runs the documented sequence and asserts on what it produces — the sitemap's Post URLs, the bundle's per-language page counts, the robots file, and the exclusions the run reports — so run it after changing anything the index depends on:

```sh
bun run test:search
```

### Keeping a Post out of search

Publishing a Post is enough to make it searchable. `searchIndex: false` in its frontmatter takes it out of every index — Site search, External search via a `noindex` robots meta tag, and the sitemap — while leaving it listed and browsable (see [ADR-0003](docs/adr/0003-searchindex-controls-every-index.md)). A Draft reaches neither the published site nor any index, and a Hidden Post stays reachable at its own URL but is absent from listings, the feed, the sitemap and search. The [glossary](GLOSSARY.md) pins these terms down.
