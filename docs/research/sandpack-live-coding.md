# Live coding with Sandpack: re-introducing the upstream `<Playground>`

Investigated 2026-10-04 against `HEAD` of this fork (`c9e011ca`) and `upstream/main`
(`118cb687`, "refactor: migrate Markdown processing to Sätteri (#5)").

**Question.** Upstream ships an interactive MDX component, `<Playground>`, powered by
[Sandpack](https://sandpack.codesandbox.io/). This fork inherited it, then removed it, and the
README now strikes it out. Is re-introducing it from upstream still possible, and what would it
cost?

**Answer.** Yes, and the change is small — five file touches, none of them structural — because
this fork already carries every piece of infrastructure the feature needs (React integration,
Sätteri processor, MDX components map, `tsconfig` JSX settings). I verified end to end that it
works on this fork's exact stack, including the part upstream never had to face: a Post that
renders **on demand on the Cloudflare Workers runtime**.

What actually gates the decision is not engineering. It is that a Playground's _execution_ depends
on a CodeSandbox-hosted bundler, in a repo whose other third-party surfaces are deliberately
self-hosted; and that it costs ≈274 KB gzip of client JavaScript per Post that uses it, from a
dependency whose last release was 2025-04-29. Both are product calls, and §5 puts them in front of
you rather than deciding them.

**Outcome (2026-10-04).** The feature was re-introduced, and the decision taken was to follow
upstream rather than this note's own suggestions. Both packages were adopted — **including**
`@lekoarts/satteri-sandpack`, not the in-repo port sketched in §3 — and `src/components/playground.astro`
is byte-identical to upstream (blob `ca219b32`), `title` prop and missing `<slot />` included.
`README.md:13` is un-struck. The Vite `optimizeDeps.include` block began as upstream's verbatim and
then gained one entry, for the reason the next paragraph gives.

Verified in this repository, not in a scratch project: `bun run build` succeeds; the full test suite
(`bun run test:search`, which runs the documented build sequence) passes; and a Post containing a
Playground answers **200** from the Cloudflare Workers preview with the generated `files` attribute
and **no** `modulepreload` for its 620.7 KB island chunk. Its active file's source is searchable
through the built Site search index. With no Playground authored, no built page references that chunk
at all — the feature costs nothing until someone uses it.

**The dev server needed a fifth entry, and finding that out cost a 500.** `build` and `preview` were
never affected, which is why this went unnoticed until someone ran `astro dev`: on a cold dev server
the **first** request for a Post containing a Playground answers **500** with React's `Invalid hook
call`, and the second answers 200. Vite's SSR optimizer discovers `@codesandbox/sandpack-react`
mid-request, bundles it, and reloads the program underneath the request still being served —
`optimized dependencies changed. reloading` — so `Sandpack` is served from the raw `node_modules`
copy while the React _renderer_ comes from the prebundled `react-dom/server.edge`. Two React module
instances, and `useState` reads a null dispatcher. Upstream's four entries cover only transitive
CommonJS packages; naming `@codesandbox/sandpack-react` itself makes the optimizer bundle it at
startup instead of at first use, and the cold first request then answers 200. Upstream never hits this
because its dev server is not the Cloudflare adapter's and it renders no Post on demand — it is this
fork's own dev-server shape that exposes it, which is precisely the class of difference §4 set out to
test and did not.

§3 item 5 — the example Post — was done too, in all four locales, and **its translations did not have
to be written**: `c5d9bd8d` had deleted four localized copies, and restoring them from `c5d9bd8d^`
produces files byte-identical to their old blobs (`23125634`, `6f99da95`, `5b3abd2a`, `ea0c5d87`)
that today's schema still accepts — every schema change since only loosened it (`description` and
`tags` optional, `copyright` defaulted, more optional fields). The en-US body is byte-identical to
upstream's current body, so this half is upstream parity by construction rather than by translation.
Each locale answers 200 with exactly one island, the sitemap lists all four URLs, and the index covers
them. Upstream puts a pointer to that Post beneath `## 🔍 Reference` → `### Custom MDX components`, a
section this fork's README does not have, so the pointer is still not ported.

One claim below is still **not** verified: that the island hydrates and its preview actually runs in
a browser. Server rendering under both `preview` and `dev`, the chunk graph, the served chunks (both
200, `text/javascript`) and the search index were all checked, but no browser was available to the
agent, so client-side hydration and CodeMirror's rendering rest on upstream's own testing. The bundled
code's _execution_ path looks alive, though: the pinned bundler host
`https://2-19-8-sandpack.codesandbox.io/` answered **200** when checked on this date, as did the
static-server fallback — which is evidence about today, not a promise.

---

## 1. What upstream actually ships

`git grep -i sandpack upstream/main` finds the feature in these places, and nowhere else:

| Path                                                           | Role                                                                                                           |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `astro.config.ts`                                              | `satteriSandpack({ componentName: ['Playground'] })` in `mdastPlugins`; a Vite `optimizeDeps.include` block    |
| `src/components/playground.astro`                              | the whole runtime: a 14-line Astro wrapper around the React `Sandpack` component                               |
| `src/pages/[blog].astro`                                       | `<Content components={{ Aside, Playground }} />`                                                               |
| `content/blog/2025-06-23--live-coding-with-sandpack/index.mdx` | the documented example and a live Playground                                                                   |
| `package.json`                                                 | `@codesandbox/sandpack-react ^2.20.0`, `@lekoarts/satteri-sandpack ^1.0.0` (`react`/`react-dom` already there) |
| `tsconfig.json`                                                | `"jsx": "react-jsx"`, `"jsxImportSource": "react"`                                                             |
| `README.md`, `src/assets/about.mdx`, the intro Post            | feature bullet only                                                                                            |

### The authoring syntax

It is **not** a marker appended to a fence — there is no `playground` meta to write. The author
writes an MDX JSX element and puts ordinary fenced code blocks inside it:

````mdx
<Playground template="react">

```js name=App.js active
import { NAME } from './constants.js'

export default function App() {
  return <h1>Hello {NAME}</h1>
}
```

```js name=constants.js readOnly
export const NAME = 'World'
```

</Playground>
````

`@lekoarts/satteri-sandpack` is an **mdast** plugin. Its entire source is 74 lines (2.3 KB) and it
does one thing: for every `mdxJsxFlowElement` whose name is in `componentName`, it walks the
children, reads each `code` node's `meta`, and **appends a generated `files` attribute** to the
element:

```js
return { ...node, attributes: [...node.attributes, filesAttribute] }
```

The fences stay where they are; the element keeps its own attributes (`template="react"`). Each
fence's meta must contain `name=`; the only other accepted tokens are `active`, `hidden`,
`readOnly`, `showReadOnly`. Anything else throws **at compile time** — `EMPTY_META`,
`INVALID_META(attr)`, `MISSING_NAME` — so a malformed Playground fails the build rather than
mis-rendering. (Its error strings still hardcode `<Sandpack>` even when `componentName` is
`Playground`.)

The wrapper is the only client-side piece, and it hydrates lazily:

```astro
---
import { Sandpack, type SandpackPredefinedTemplate, type SandpackSetup } from '@codesandbox/sandpack-react'

interface Props {
	files: Record<string, string>
	template?: SandpackPredefinedTemplate
	title: string
	customSetup?: SandpackSetup
}

const { files, template, customSetup } = Astro.props
---

<Sandpack theme="auto" files={files} template={template} customSetup={customSetup} client:visible />
```

Three things worth not copying blindly. `title` is a **required** prop that is destructured out and
never rendered (every example in the repo therefore omits it, which should not type-check).
`customSetup` is accepted but used nowhere in-repo. And the wrapper has **no `<slot />`**, which is
load-bearing rather than an oversight: the plugin leaves the code fences in place as the element's
children, so the only reason the source does not appear twice is that the wrapper never renders
them. Adding a `<slot />` — or a `<Playground>` that renders children — would print the raw code
underneath the editor. I checked this on a built page: exactly one `<pre>` and one
`sp-pre-placeholder` in the response, with the second textual copy of the source living in the
island's serialized `props` attribute (which is also why a large example costs twice, once in props
and once in rendered markup).

`<Playground>` has no `import` in the MDX; it resolves through the components map. Upstream
registers it in one place, `<Content components={{ Aside, Playground }} />`, and its `about.mdx`
route passes no components map at all, so `about.mdx` cannot use a Playground even though it
advertises one.

---

## 2. What this fork has today, and why

The feature arrived in this fork's lineage the ordinary way — upstream's `8994137c` ("feat:
Sandpack", 2025-06-23) is an ancestor of `HEAD` — and left in **`c5d9bd8d` ("add copyright",
2026-05-22)**, which deleted:

- `src/components/playground.astro`,
- all four localized `content/blog/<locale>/2025-06-23--live-coding-with-sandpack/index.mdx`,
- `@codesandbox/sandpack-react` and `@lekoarts/remark-sandpack` from `package.json`,
- the `remarkSandpack` entry from the then-remark plugin list in `astro.config.ts`.

There is **no recorded rationale** for the removal: no ADR under `docs/adr/`, no commit message
about it (that commit's subject is "add copyright" and it also carries unrelated `base-test` URL
cleanup), and `git log -i --grep=sandpack` finds only the introduction. The README bullet was struck
through separately in `7d492101` ("update readme"). Treat the removal as accidental-by-catch-all
rather than as a decision anyone argued for.

The fork's own Sätteri migration (`c1934feb`) then rebuilt the Markdown pipeline without the plugin,
and the upstream merge (`0584158d`, merging `118cb687`) kept it out, so `astro.config.ts` today reads:

```ts
mdastPlugins: [satteriAsides, satteriToc, satteriCollapse],
```

### Leftovers that make re-introduction cheap

These are already true here, and each one removes a step upstream's commit had to take:

- **The React integration is installed and wired with nothing to render.** `@astrojs/react ^7.0.0`,
  `react`/`react-dom ^19.3.0`, `react()` in `integrations` — and no `.tsx`/`.jsx` file anywhere under
  `src/`, no React import in any source file, and no React chunk in `dist/client/_astro`. The fork
  currently pays for the integration and ships zero of its JavaScript. Sandpack would be React's first
  and only consumer.
- **`tsconfig.json` already sets `"jsx": "react-jsx"` and `"jsxImportSource": "react"`.**
- **The Sätteri processor is in place**, and its `mdastPlugins` array takes one more entry.
- **The components map exists** — `src/pages/[locale]/posts/[displayId].astro:106` builds
  `const components = { Aside, Protected, … }` and passes it at line 190.
- **`satteri ^0.10.5` already satisfies the plugin's only peer dependency** (`satteri: ^0.10.5`).

### Two loose ends that exist regardless of the decision

- The four `2025-03-28--introducing-astro-theme-minimal-blog` Posts still list "Live coding powered
  by Sandpack" as a feature in **all four locales** (`content/blog/{en-US,zh-CN,ru-RU,he-IL}/…/index.mdx:23`),
  while the README strikes it out. The site currently advertises a feature it does not have.
- If the answer is **no**, the React integration is dead weight whose only ever purpose in this repo
  was this feature: `@astrojs/react`, `react`, `react-dom`, `@types/react`, `@types/react-dom` and the
  `tsconfig` JSX settings could all go. That is a separate decision, but it is the other half of this
  one — and taking them out would make a later re-introduction more expensive than it is today.

---

## 3. The change, concretely

| #   | File                                         | Change                                                                                                                                             |
| --- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `package.json`                               | add `@codesandbox/sandpack-react ^2.20.0`, `@lekoarts/satteri-sandpack ^1.0.0`                                                                     |
| 2   | `astro.config.ts`                            | import `satteriSandpack`; append `satteriSandpack({ componentName: ['Playground'] })` to `mdastPlugins`; add the Vite `optimizeDeps.include` block |
| 3   | `src/components/playground.astro`            | restore the 14-line wrapper (new file)                                                                                                             |
| 4   | `src/pages/[locale]/posts/[displayId].astro` | import `Playground`; add it to the `components` map                                                                                                |
| 5   | `content/blog/<locale>/…/index.mdx`          | a Playground Post, if you want one                                                                                                                 |

The `optimizeDeps.include` block is upstream's dev-server workaround and carries its own comment:

```ts
// Sandpack imports these CommonJS packages as ESM, so Vite must prebundle them for development.
optimizeDeps: {
  include: [
    '@codesandbox/sandpack-react > anser',
    '@codesandbox/sandpack-react > escape-carriage',
    '@codesandbox/sandpack-react > lz-string',
    '@codesandbox/sandpack-react > @codesandbox/sandpack-client > mime-db',
  ],
},
```

It is needed because `@codesandbox/sandpack-react` ships CommonJS (`require('react')`,
`require('@codemirror/view')`, …) and so do those four nested dependencies. It affects the dev
server only; the production build converts CJS regardless.

**Those four entries are not sufficient — do not copy the block above as-is.** The Outcome block
records why: without a fifth entry naming `@codesandbox/sandpack-react` itself, the first request for
a Playground on a cold dev server answers 500.

Step 5 is not free. Upstream's example Post is English-only and does not satisfy this fork's schema
(`displayId`, `authors`, `date`, `updated`, `tags` drawn from `TAG_SLUGS`, `copyright`), and the
fork publishes each Post separately per locale — porting it means authoring one variant per locale
you want it in (`mdx` is already a member of `TAG_SLUGS`).

**Not required**, contrary to what a straight port of upstream's commit would suggest: no _new_ React
dependency, no `react()` integration change, no `tsconfig` change, no Markdown-processor change beyond
the one plugin entry.

### A cheaper variant that fits this repo's grain

`src/markdown.ts` already reimplements six third-party Markdown plugins in-repo — `satteriAsides`,
`satteriToc`, `satteriCollapse`, `satteriExternalLinks`, `satteriHeadingPermalinks`, `satteriWrap` —
each with a comment explaining what it replaces and where it deviates. `satteri-sandpack` is 74 lines
of dependency-free JavaScript doing a single `mdxJsxFlowElement` transform. Porting it into
`src/markdown.ts` as, say, `satteriSandpack`, alongside its siblings, would:

- drop the second new dependency entirely, leaving only `@codesandbox/sandpack-react`;
- avoid depending on a single-release, single-maintainer package whose only known consumer is the
  upstream theme (published 2026-09-05, version 1.0.0, MIT);
- remove the `<Sandpack>`-hardcoded error strings as a side effect;
- make the authoring contract visible in the file that defines the rest of the authoring contract.

That is a recommendation about _how_, not _whether_.

---

## 4. Verified: it works on this fork's stack

Upstream renders every page at build time in Node and uses Pagefind. This fork renders Posts on
demand in a Worker (`export const prerender = false`, `docs/adr/0002`) and crawls the built site for
its own Site search index (`docs/adr/0001`). Neither axis is covered by upstream's testing, so I
built a throwaway Astro project that mirrors this fork's relevant configuration and tested both.

**Setup.** `astro@7.3.5`, `@astrojs/cloudflare@14.3.3`, `@astrojs/react@7`, `react`/`react-dom@19.3.0`,
`@astrojs/markdown-satteri@0.4.2`, `satteri@0.10.5`, `@lekoarts/satteri-sandpack@1.0.0`,
`@codesandbox/sandpack-react@2.20.0`; `output: 'static'` + `cloudflare()` + `prerender = false`;
`mdastPlugins: [satteriSandpack({ componentName: ['Playground'] })]`; a content collection loaded with
the same `glob` loader; the Playground example above; `components={{ Playground }}` passed to
`<Content>`. Served with `astro preview`, which goes through the Cloudflare adapter's preview
entrypoint — **confirmed to be the real Workers runtime by a live `workerd` process during the test.**

**Results.**

1. **It server-renders on workerd.** The request returns **200** with the island fully rendered
   server-side: the Sandpack shell, its tab list, and a highlighted `<pre>` holding the **active**
   file's source (see §4.5 — the other files are not server-rendered). No `nodejs_compat` flag was
   added, and a grep of both packages' `dist` finds no
   `process.env`, `Buffer`, `node:`, `__dirname`, or bare `require(` outside the CJS module wrappers
   Vite converts at build time. **This was the main unknown and it is not a problem.**
2. **The Sätteri plugin line works as configured.** The output contains the generated `files`
   attribute with `active`/`readOnly` correctly derived from the fence metas, and no raw
   `<Playground>` tag leaks through.
3. **`client:visible` genuinely defers the download.** The island tag names its component chunk in
   `component-url`, and there is **no `modulepreload` or `preload` link for it anywhere in the
   HTML**. Astro's directive (`node_modules/astro/dist/runtime/client/visible.js`) attaches an
   `IntersectionObserver` and calls `load()` — the dynamic import — only on first intersection. So
   the weight below is paid when the Playground scrolls into view, not on page load.
4. **Cost, measured by building the same project with and without the island** and diffing
   `dist/client/_astro` (gzip via `GZipStream`):

   | Build              | Raw         | Gzip        | Files             |
   | ------------------ | ----------- | ----------- | ----------------- |
   | without the island | 215.7 KB    | 66.7 KB     | 1 (`client.*.js`) |
   | with the island    | 1190.5 KB   | 340.2 KB    | 9                 |
   | **marginal**       | **≈975 KB** | **≈274 KB** |                   |

   The largest file is `index.C1CAvoHZ.js` — the Sandpack component chunk the island tag points at —
   at 621.9 KB raw / **205.2 KB gzip**. (Hashes and byte counts move a little between builds: this
   repository's own build emits the same chunk as `index.DEoptHHZ.js` at 620.7 KB, which is the
   figure the Outcome block quotes.) The rest is the renderer entry (208 KB / 64.3 KB), a 158.7 KB
   runtime chunk, a 140.7 KB client chunk, and five small files. An independent measurement of
   `Sandpack` alone bundled with `bun build --minify` gave 982 KB minified / 277.6 KB gzip, which
   corroborates the figure. The production build also emits Vite's warning: _"Some chunks are larger
   than 500 kB after minification."_

   Caveat on attribution: the diff method credits everything absent from the baseline build to the
   island, and the baseline's single 215.7 KB `client.*.js` is _not_ an island artifact — note the
   island build's `client.*.js` is 208 KB, i.e. the same role, while this fork's own build already
   ships a 412 KB `client.C6lx8Nk_.js`. Read ≈274 KB gzip as the right order of magnitude for the
   increment, and 205 KB gzip as the hard floor for the Sandpack chunk itself.

5. **The Site search index picks up the playground's code, and not its chrome.** The server-rendered
   island is ≈9.5 KB and sits inside the `data-pagefind-body` region on a Post page. I ran the same
   Pagefind version this repo uses (`1.5.2`) over the captured SSR page and queried the resulting
   bundle through Pagefind's JS search API:

   | Query                          | Hits   | Why                                                                                                         |
   | ------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------- |
   | `constants`                    | 1      | the file name `constants.js` and `from './constants.js'` are both indexed                                   |
   | `Hello`, `export`              | 1 each | source text of the **active** file is indexed                                                               |
   | `World`                        | 0      | it lives in `constants.js`, which is not the active file — only the active file's source is server-rendered |
   | `readOnly`, `Editor`, `Select` | 0      | ARIA labels (`Select active file`, `Code Editor for App.js`) are attributes, not text, and are not indexed  |

   So the outcome is benign, and arguably a feature: a reader searching for an identifier finds the
   Post that demonstrates it, while no Sandpack UI vocabulary enters the index. Nothing in
   `scripts/buildSearchIndex.ts` refuses this shape, and its one-index-per-language check is
   unaffected. Only the _active_ file is searchable, which is worth knowing if you ever want the
   others indexed too. If you do want a Post's playground kept out of Site search entirely, the
   mechanism already exists: `data-pagefind-ignore`, used on `h-card.astro`, `mf2-meta.astro` and
   `p-location.astro`.

---

## 5. What actually gates the decision

### 5.1 A Playground is not self-contained

The editor UI is local JavaScript, but **running** the code goes to CodeSandbox. Reading
`@codesandbox/sandpack-client@2.19.8`'s `dist`, the bundler base URL is pinned to the client
version:

```js
var BUNDLER_URL = "https://" + "2.19.8".replace(/\./g, "-") + SUFFIX_PLACEHOLDER + "-sandpack.codesandbox.io/";
// fallback: "https://preview.sandpack-static-server.codesandbox.io"
// export/share: "https://codesandbox.io/api/v1/sandboxes/define?json=1"
```

So every Playground preview frame is a cross-origin request to `*.codesandbox.io`, and if that host
is retired, the Playgrounds stop executing — silently, with the editor still rendering. This sits in
tension with how this repo treats third parties elsewhere: the Site search index is served by the
site itself and "a query never leaves it" (`README.md`), and the microformats2/IndieWeb machinery
talks to no one.

Self-hosting is **supported and documented**, but there is no turnkey artifact, so it is real work:

- The option is first-party: `ClientOptions.bundlerURL` ("Location of the bundler. Defaults to
  `${version}-sandpack.codesandbox.io`") reaches `Sandpack` as
  `<Sandpack options={{ bundlerURL: '…' }} />`. `createBundlerURL()` returns
  `this.options.bundlerURL || BUNDLER_URL` and short-circuits, so a custom URL fully replaces
  CodeSandbox's host — that is what `playground.astro` would have to gain.
- CodeSandbox documents the procedure in
  [Hosting the Bundler](https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler): build it out
  of the `codesandbox-client` monorepo (`yarn build:sandpack`) and serve the resulting `www` folder.
  Conveniently, **a prebuilt copy already ships inside the client package** — `@codesandbox/sandpack-client@2.19.8`
  unpacks to ~67 MB and contains a top-level `/sandpack/` app (`index.html`, the Babel worker, bundled
  chunks, browserfs, transpilers). Serving that directory plus `bundlerURL` is the cheap path. It is
  implied by the package contents, not stated in the docs.
- What does **not** exist: a Docker image (`codesandbox/sandpack-bundler` on Docker Hub is a 404) or an
  npm package for the bundler. The experimental rewrite,
  [`codesandbox/sandpack-bundler`](https://github.com/codesandbox/sandpack-bundler), is unarchived and
  Apache-2.0 but was **last pushed 2024-11-19**, ships no Dockerfile, and is documented as beta with
  limitations (other templates pending, no private dependencies, no aliasing/git/file dependencies).
  You would be operating it yourself, with no upstream release cadence behind it.

I verified the _default_ host and the _option's existence_ in the published packages; I did not stand
up a self-hosted bundler, so treat the operational cost of that path as unmeasured.

### 5.2 Dependency freshness

- `@codesandbox/sandpack-react`: latest is **2.20.0, published 2025-04-29**. The repository
  (`codesandbox/sandpack`) is **not archived**, but `pushed_at` is 2025-04-24 and it carries 163 open
  issues against 6.2k stars. That is ~17 months without a release: effectively stalled, not dead.
  Licence is Apache-2.0 (package and repo alike). React 19 — the version this fork uses — is inside
  the declared peer range `^16.8.0 || ^17 || ^18 || ^19`.
- React 19 specifically looks safe: searching the tracker finds only closed items — #1236 "Support for
  React 19", #1251 "feat: update to react 19", #1245 "fix: raise react peer dependency to 19" — and
  **no open issue reporting React 19 breakage**. There is likewise no open issue stating that the
  runtime depends on CodeSandbox's hosted bundler; the nearest, #1272 "X-Frame-Options Issue When
  Using Sandpack on Custom Domain", is about embedding headers. Absence of a bug report is not
  absence of the problem, but the hosted-bundler dependence is visible in the source (§5.1), not
  merely suspected.
- Upstream pinned `^2.20.0` on introduction and has never bumped it; there are no Sandpack bug
  reports in the upstream theme's tracker either.
- `@lekoarts/satteri-sandpack`: MIT, version 1.0.0, published 2026-09-05, one release ever, one
  maintainer, and its peer range (`satteri ^0.10.5`) is already satisfied here — `satteri`'s latest
  is genuinely 0.10.5, and `@astrojs/markdown-satteri@0.4.2` wants `satteri ^0.10.3`, so all three
  co-resolve. The package is owned by the same person as the upstream theme. See the in-repo-port
  variant in §3 for a way not to depend on it.

### 5.3 Weight and reach

≈274 KB gzip / ≈975 KB raw of additional client JavaScript on any Post containing a Playground, plus
React's first appearance in the bundle — deferred until visible, which is a real mitigation for a
Playground far down a long Post and no mitigation at all for one above the fold. For a theme whose
stated selling points include "JavaScript only where you ask for it", that is the cost of the feature
and the honest way to frame it in the README.

---

## 6. If you go ahead, verify in this order

1. `bun add @codesandbox/sandpack-react @lekoarts/satteri-sandpack` (or port the plugin instead).
2. Apply §3 items 2–4.
3. `bun run build` — expect Vite's >500 kB chunk warning and no other new warning.
4. `bun run build:search` — must exit 0. Expect the Playground Post to be indexed and its active
   file's source to be searchable (§4.5); confirm, and add `data-pagefind-ignore` if you want the
   playground kept out of Site search after all.
5. Load the Post through `bun run preview` with the network panel open: confirm the bundle request
   goes to `*.codesandbox.io` and that the preview frame actually executes the code.
6. Keyboard and screen-reader pass on the hydrated island, and a dark-mode check —
   `theme="auto"` resolves against `prefers-color-scheme`, which may not agree with this fork's
   three-way light/dark/system toggle.
7. Settle the prose: un-strike `README.md:13` and refresh line 23 of the four intro Posts, or — if
   the answer is no — fix those four Posts to stop advertising a feature the site does not have.

---

## 7. Sources

Primary, all re-checkable from this checkout:

- Upstream feature: `git show upstream/main:src/components/playground.astro`,
  `git show upstream/main:astro.config.ts`, `git show upstream/main:content/blog/2025-06-23--live-coding-with-sandpack/index.mdx`,
  `git show upstream/main:package.json`, `git show upstream/main:src/pages/[blog].astro`.
- Upstream history: `git show --stat 8994137c`, `git log --oneline --all -S sandpack`,
  `git log --oneline upstream/main -20`.
- Fork history: `git show --name-status c5d9bd8d`, `git show c1934feb -- astro.config.ts`,
  `git show --stat 0584158d`, `git log --oneline -S "~~Live coding" -- README.md`.
- Plugin source: `@lekoarts/satteri-sandpack@1.0.0` `dist/index.js` (74 lines), read from the
  published tarball.
- Sandpack runtime: `@codesandbox/sandpack-react@2.20.0` and `@codesandbox/sandpack-client@2.19.8`
  `dist/`, read from the published tarballs; package `license` and `peerDependencies` fields.
- Astro behaviour: `node_modules/astro/dist/runtime/client/visible.js`, and the official docs on
  [client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
  (notably that a client directive cannot be placed on a component passed through the MDX
  `components` prop — which is why the directive lives inside `playground.astro`, on a direct
  import, and not on `<Playground>` in the MDX).
- Registry state: `npm view @codesandbox/sandpack-react version time.modified`,
  `npm view @lekoarts/satteri-sandpack version time.created peerDependencies`, and
  `https://api.github.com/repos/codesandbox/sandpack`.
- Self-hosting the bundler: `@codesandbox/sandpack-client@2.19.8` `dist/types.d.ts`
  (`ClientOptions.bundlerURL`) and `dist/clients/runtime/index.js` (`createBundlerURL`);
  [Hosting the Bundler](https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler);
  the package's own unpacked `/sandpack/` app; and
  [codesandbox/sandpack-bundler](https://github.com/codesandbox/sandpack-bundler) for the
  experimental rewrite's state.
- Tracker searches: `https://api.github.com/search/issues?q=repo:codesandbox/sandpack+is:open+react+19`
  and the equivalent for the bundler host (see §5.2 for what they do and do not establish).

How to re-check the §4 measurements:

- **SSR on workerd** (§4.1–4.2): build a scratch Astro project with the §4 setup, run `bun run build`,
  then `bun run preview` — which goes through the Cloudflare adapter's preview entrypoint on workerd —
  and fetch the Post route. The island's server-rendered markup, including the generated `files`
  attribute, is in the response body.
- **Client weight** (§4.4): compare `dist/client/_astro` between that build and the identical build
  with the island removed.
- **Search indexing** (§4.5): save the fetched response body as an HTML file, run
  `bunx pagefind --site <dir>` over it with the repo's `pagefind ^1.5.2`, then query the written
  bundle through Pagefind's JS search API (`import('/pagefind/pagefind.js')`, `pagefind.search(term)`).
  Pagefind's _Node_ API builds an index but cannot query one, so the query half needs a JS context —
  it runs under Bun against a `file://` base URL.

The probe projects were throwaways and are not part of this repository.

## Note on this file

This is the first note of its kind in this repo — `docs/` holds `adr/` and `agents/` only — so it
lives in a new `docs/research/` directory. Move it, or fold its conclusion into an ADR, once the
decision is made; it is evidence for a decision, not a decision.

A Chinese translation lives at
[sandpack-live-coding.zh-CN.md](./sandpack-live-coding.zh-CN.md); this file is the canonical version —
where the two disagree, this one is right. Neither is generated: a change to one is a change owed to
the other.
