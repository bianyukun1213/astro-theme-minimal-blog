# `searchIndex: false` removes a post from every index

The field could plausibly mean "omit this post from the site's own search box". It is deliberately wider: `false` means the post enters no index at all — the site's own search, external search engines (via a `noindex` robots meta tag), and the sitemap — while the post stays listed and browsable. Read the name as "generate a search index for this post?", and every surface that indexes or advertises pages becomes an answer to that one question.

## Considered Options

- **Split it into two fields** — one for site search, one for search engines. More explicit, but two flags that are almost always set together. The split is free to make only while no post uses the field.
- **Rename it** to cover both senses. Rejected: the name already covers both.

## Consequences

- The flag has an SEO-visible effect, not merely a site-search one.
- `hidden: true` and `searchIndex: false` overlap: both keep a post out of every index. They differ in listing visibility only — `hidden` also keeps it out of listings and the feed, `searchIndex: false` does not.

_Recorded from a design review; not yet implemented._
