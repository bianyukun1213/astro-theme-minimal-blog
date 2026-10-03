# Post pages render on demand, not at build time

The rest of the site is prerendered, but the post route sets `prerender = false`. The reason is the `Protected` component: it gates part of a post body behind a password and decides what to render by reading a signed cookie, which only request-time rendering can do. Any post may contain it, and `prerender` applies to a whole route rather than a single entry, so every post page renders on demand.

## Considered Options

- **Keep posts prerendered and move protection to the client**, encrypting the body with a key derived from the password. This would preserve static rendering and let the index be built from build output, but it downgrades the protection model from a server-side gate to ciphertext plus a password, and it is a change to that feature rather than to search.
- **Drop protection.** Rejected: it is a feature, not dead weight.

## Consequences

- The search index cannot be derived from build output; see [ADR-0001](./0001-build-search-index-by-crawling.md).
- `@astrojs/sitemap` does not generate entries for dynamic routes in SSR mode, so post URLs are absent from the sitemap unless they are added explicitly.

_Recorded from a design review; not yet implemented._
