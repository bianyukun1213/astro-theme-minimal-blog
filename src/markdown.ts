import type { AsideType } from './constants'
import GithubSlugger from 'github-slugger'
import { defineHastPlugin, defineMdastPlugin } from 'satteri'
import { ASIDE_TYPES, SITE } from './constants'

/**
 * Sätteri replacements for the remark/rehype plugins this theme used before.
 *
 * The first three are ported from the upstream Sätteri migration
 * (`LekoArts/astro-theme-minimal-blog`), with two deliberate differences that
 * preserve this fork's existing output:
 *
 * - `satteriExternalLinks` adds no screen-reader hint, because this fork dropped
 *   rehype-external-links' `content`/`contentProperties` options.
 * - `satteriHeadingPermalinks` uses the plain heading text as the accessible
 *   name, because this fork does not prefix it with `Permalink: `.
 *
 * The rest replace third-party plugins that upstream never used, so their
 * behaviour is reproduced from those plugins' own sources.
 */

type PlainNode = Record<string, any>

export const satteriAsides = defineMdastPlugin({
	name: 'asides',
	containerDirective(node, ctx) {
		if (!ASIDE_TYPES.includes(node.name as AsideType))
			return

		const children = [...node.children]
		const firstChild = children[0]
		let title = ''

		if (firstChild?.type === 'paragraph' && firstChild.data?.directiveLabel) {
			title = ctx.textContent(firstChild).trim()
			children.shift()
		}

		ctx.replaceNode(node, {
			type: 'mdxJsxFlowElement',
			name: 'Aside',
			attributes: [
				{
					type: 'mdxJsxAttribute',
					name: 'type',
					value: node.name,
				},
				{
					type: 'mdxJsxAttribute',
					name: 'title',
					value: title,
				},
			],
			children,
		})
	},
})

export const satteriExternalLinks = defineHastPlugin({
	name: 'external-links',
	element: {
		filter: ['a'],
		visit(node, ctx) {
			const href = node.properties?.href

			if (typeof href !== 'string' || (!href.startsWith('http://') && !href.startsWith('https://')))
				return

			ctx.setProperty(node, 'target', '_blank')
			ctx.setProperty(node, 'rel', ['nofollow'])
			ctx.setProperty(node, 'className', ['external_link'])
		},
	},
})

export const satteriHeadingPermalinks = defineHastPlugin({
	name: 'heading-permalinks',
	element: {
		filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		visit(node, ctx) {
			const id = node.properties?.id

			if (typeof id !== 'string')
				return

			ctx.setProperty(node, 'tabIndex', -1)
			ctx.wrapNode(node, {
				type: 'element',
				tagName: 'div',
				properties: { className: ['markdown-heading'] },
				children: [
					{
						type: 'element',
						tagName: 'a',
						properties: {
							href: `#${id}`,
							ariaLabel: ctx.textContent(node),
							className: ['anchor'],
						},
						children: [
							{
								type: 'element',
								tagName: 'svg',
								properties: { className: ['anchor-icon'], viewBox: '0 0 16 16', ariaHidden: 'true' },
								children: [
									{
										type: 'element',
										tagName: 'path',
										properties: { d: 'm7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z' },
										children: [],
									},
								],
							},
						],
					},
				],
			})
		},
	},
})

/* -------------------------------------------------------------------------- */
/* remark-toc                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * `mdast-util-toc` wraps `options.heading` in `new RegExp('^(' + value + ')$', 'i')`.
 * `remark-collapse` uses the same string as a plain test, so the two agree.
 */
const TOC_EXPRESSION = new RegExp(`^(${SITE.tocHeading})$`, 'i')

/**
 * Mirror of `mdast-util-toc`'s internal `one()`: strip `position`, drop footnote
 * references and inline nested links, so heading contents can be reused as the
 * link label of a table-of-contents entry.
 */
function toPlainPhrasing(node: any): PlainNode[] {
	const { type } = node

	if (type === 'footnoteReference')
		return []

	if (type === 'link' || type === 'linkReference')
		return Array.from(node.children ?? []).flatMap(toPlainPhrasing)

	const plain: PlainNode = { type }

	if (type === 'text' || type === 'inlineCode')
		plain.value = node.value

	if (type === 'image' || type === 'imageReference') {
		plain.url = node.url
		plain.alt = node.alt
		if (node.title !== undefined)
			plain.title = node.title
	}

	if (node.children)
		plain.children = Array.from(node.children).flatMap(toPlainPhrasing)

	return plain
}

interface TocEntry {
	depth: number
	children: any[]
	slug: string
}

/**
 * Mirror of `mdast-util-toc`'s `insert()`. `remark-toc` always passes
 * `tight: true` (its default), so every list and item ends up `spread: false`.
 */
function insertTocEntry(entry: TocEntry, parent: PlainNode) {
	const tail = parent.children[parent.children.length - 1]

	if (parent.type === 'list') {
		if (entry.depth === 1) {
			parent.children.push({
				type: 'listItem',
				spread: false,
				children: [
					{
						type: 'paragraph',
						children: [
							{
								type: 'link',
								title: null,
								url: `#${entry.slug}`,
								children: entry.children.flatMap(toPlainPhrasing),
							},
						],
					},
				],
			})
		} else if (parent.children.length > 0) {
			insertTocEntry(entry, parent.children[parent.children.length - 1])
		} else {
			const item: PlainNode = { type: 'listItem', spread: false, children: [] }
			parent.children.push(item)
			insertTocEntry(entry, item)
		}
	} else if (tail && tail.type === 'list') {
		entry.depth--
		insertTocEntry(entry, tail)
	} else {
		const list: PlainNode = { type: 'list', ordered: false, spread: false, children: [] }
		parent.children.push(list)
		entry.depth--
		insertTocEntry(entry, list)
	}

	parent.spread = false
}

/** Mirror of `mdast-util-toc`'s `contents()`. */
function buildTocList(entries: TocEntry[]): PlainNode {
	const table: PlainNode = { type: 'list', ordered: false, spread: false, children: [] }

	let minDepth = Number.POSITIVE_INFINITY
	for (const entry of entries) {
		if (entry.depth < minDepth)
			minDepth = entry.depth
	}

	for (const entry of entries) {
		entry.depth -= minDepth - 1
		insertTocEntry(entry, table)
	}

	return table
}

/**
 * Replaces `remark-toc`. It looks for the first heading matching
 * `SITE.tocHeading` and swaps the rest of that section for a list linking to
 * every following top-level heading.
 *
 * Slugs come from `github-slugger` — the same package `satteriHeadingIdsPlugin`
 * uses — and every heading is slugged in document order, including nested ones
 * that never make it into the list, so duplicate headings get identical `-1`
 * suffixes in the ids and in the links.
 */
export const satteriToc = defineMdastPlugin({
	name: 'toc',
	before(root, ctx) {
		const slugger = new GithubSlugger()

		// Pre-order walk, mirroring `unist-util-visit` so slug order matches the
		// later heading-id pass.
		const headings: Array<{ node: any, topLevel: boolean, depth: number, position: number, text: string }> = []

		function walk(node: any, parent: any) {
			const children = node.children
			if (!children)
				return

			for (let position = 0; position < children.length; position++) {
				const child = children[position]

				if (child.type === 'heading') {
					headings.push({
						node: child,
						topLevel: parent === root,
						depth: child.depth,
						position,
						text: ctx.textContent(child, { includeImageAlt: false }),
					})
				}

				walk(child, node)
			}
		}

		// `parent` is the parent of the nodes being iterated, so the root is its
		// own children's parent.
		walk(root, root)

		let index: number | undefined
		let endIndex: number | undefined
		let opening: any
		const entries: TocEntry[] = []

		for (const heading of headings) {
			const slug = slugger.slug(heading.text)

			if (!heading.topLevel)
				continue

			// The heading holding the table of contents.
			if (index === undefined && TOC_EXPRESSION.test(heading.text)) {
				index = heading.position + 1
				opening = heading.node
				continue
			}

			// First following heading of the same or higher rank closes the section.
			if (opening && endIndex === undefined && heading.depth <= opening.depth)
				endIndex = heading.position

			if (endIndex !== undefined)
				entries.push({ depth: heading.depth, children: heading.node.children, slug })
		}

		// `remark-toc` bails out without touching the tree when it finds no
		// opening heading or nothing to list.
		if (index === undefined || entries.length === 0)
			return

		const anchor = root.children[index - 1]
		const end = endIndex ?? root.children.length
		const replaced = []
		for (let i = index; i < end; i++) {
			const node = root.children[i]
			if (node)
				replaced.push(node)
		}

		for (const node of replaced)
			ctx.removeNode(node)

		ctx.insertAfter(anchor, buildTocList(entries))
	},
})

/* -------------------------------------------------------------------------- */
/* remark-collapse                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Label of the `<summary>` that expands the table of contents. It is a literal
 * placeholder: the i18n middleware rewrites it per request, so no locale is
 * baked into the build.
 */
const COLLAPSE_SUMMARY = 'm.btn_expand_toc_title()'

/**
 * Replaces `remark-collapse`. Everything between the table-of-contents heading
 * and the next heading of the same or higher rank is wrapped in
 * `<details><summary>…</summary> … </details>`.
 *
 * `remark-collapse` does this by splicing the whole range at once. Here the
 * original nodes are left untouched and only the two wrapper paragraphs are
 * inserted around them, which produces the same children.
 */
export const satteriCollapse = defineMdastPlugin({
	name: 'collapse',
	before(root, ctx) {
		const children = root.children
		if (!children)
			return

		let depth: number | undefined
		let start: number | undefined
		let end: number | undefined

		for (let index = 0; index < children.length; index++) {
			const child = children[index]

			if (child.type !== 'heading')
				continue

			if (depth !== undefined && child.depth <= depth) {
				end = index
				break
			}

			if (depth === undefined && TOC_EXPRESSION.test(ctx.textContent(child))) {
				depth = child.depth
				start = index
				// Assume no closing heading is found.
				end = children.length
			}
		}

		if (depth === undefined || start === undefined)
			return

		// Read the closing heading before queueing any mutation.
		const endNode = children[end!]

		ctx.insertAfter(children[start], {
			type: 'paragraph',
			children: [
				{ type: 'html', value: '<details>' },
				{ type: 'html', value: '<summary>' },
				{ type: 'text', value: COLLAPSE_SUMMARY },
				{ type: 'html', value: '</summary>' },
			],
		})

		const close: PlainNode = { type: 'paragraph', children: [{ type: 'html', value: '</details>' }] }

		if (endNode)
			ctx.insertBefore(endNode, close)
		else
			ctx.appendChild(root, close)
	},
})
