# Astro Theme Minimal Blog

A multilingual blog theme built with Astro. A post is authored once per locale, so the same post is published separately in each locale it exists in.

## Language

### Content

**Post**:
A blog entry, addressed at `/{locale}/posts/{displayId}/`.
_Avoid_: Article, entry

**Display ID**:
The URL segment identifying a post within its locale. Every locale's variant of a post shares one display ID. It is not the content directory name, which carries the publication date as a prefix.
_Avoid_: Slug, filename

### Publication state

**Draft**:
A post that is not part of the published site. It is visible only during development, and only when drafts are enabled.
_Avoid_: Unpublished, work in progress

**Hidden post**:
A published post that is absent from listings, the feed and the sitemap, yet still reachable at its own URL.
_Avoid_: Private, unlisted

**Protected post**:
A published post whose body is gated behind a password, so an unauthenticated request receives a placeholder where the body would be.
_Avoid_: Locked, encrypted, private

**`searchIndex`**:
Whether a post is indexed at all — by the site's own search and by external search engines alike. Set to `false`, a post stays listed and browsable but leaves every index.
_Avoid_: Hide, unlist

### Search surfaces

**Site search**:
Full-text search over published posts, served by the site itself.
_Avoid_: Internal search

**External search**:
Search engines that index the site from the outside.
_Avoid_: Third-party search, Google
