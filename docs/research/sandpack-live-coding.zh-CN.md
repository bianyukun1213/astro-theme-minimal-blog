# Sandpack 实时编码：重新引入上游的 `<Playground>`

调查时间 2026-10-04，针对本 fork 的 `HEAD`（`c9e011ca`）与 `upstream/main`（`118cb687`，"refactor: migrate Markdown processing to Sätteri (#5)"）。

> **关于术语**：文中 **Post**、**Site search**、**Display ID** 等概念沿用仓库 `GLOSSARY.md` 定义的英文术语而不翻译——该词表要求行文不要改用它的禁用同义词。`Post` 指本仓库中地址形如 `/{locale}/posts/{displayId}/` 的内容单元；`Site search` 指由站点自身提供、覆盖本站 Post 的全文搜索。

**问题。** 上游提供一个由 [Sandpack](https://sandpack.codesandbox.io/) 驱动的交互式 MDX 组件 `<Playground>`。本 fork 继承过它，之后又删掉了，README 现在给它划上了删除线。现在还能从上游把它重新引回来吗？代价是什么？

**结论。** 能，而且改动很小——5 处文件改动，没有一处是结构性的——因为本 fork 已经具备这个功能所需的每一块基础设施（React 集成、Sätteri 处理器、MDX components map、`tsconfig` 的 JSX 设置）。我端到端验证了它在**本 fork 的确切技术栈**上可用，包括上游从不需要面对的那一环：**在 Cloudflare Workers 运行时按需渲染**的 Post。最初的验证并不完整——它跑的是 `build` 与 `preview`，没跑 `dev`，而开发服务器比上游多需要一行配置。下面的「结果」一节说明了漏掉的是什么，以及它为何要紧。

真正卡住决定的不是工程问题。而是：Playground 的*执行*依赖 CodeSandbox 托管的 bundler，而本仓库在其他地方的第三方接触面都是有意的自托管；以及每个用到它的 Post 要付出约 274 KB gzip 的客户端 JavaScript，而依赖本身最后一次发版是 2025-04-29。这两件都是产品决策，§5 把它们摆出来，而不是替你决定。

**结果（2026-10-04）。** 功能已重新引入，且采取的路线是**跟随上游**，而不是本笔记自己给出的建议。两个依赖都被采用——**包括** `@lekoarts/satteri-sandpack`，而非 §3 里勾勒的"搬进仓库"方案；`src/components/playground.astro` 与上游逐字节一致（blob `ca219b32`），连 `title` 属性和"没有 `<slot />`"都照搬。`README.md:13` 的删除线已去掉。Vite 的 `optimizeDeps.include` 块起初是上游原文，随后多出一项，理由见下一段。

以下**在本仓库实际验证**，不是临时工程：`bun run build` 通过；完整测试套件（`bun run test:search`，它会跑一遍文档化的构建序列）通过；一篇含 Playground 的 Post 在 Cloudflare Workers 预览上返回 **200**，生成的 `files` 属性正确，且那个 620.7 KB 的 island chunk **没有** `modulepreload`。其活动文件的源码可通过构建出的 Site search 索引搜到。而在没有任何 Post 使用 Playground 时，构建产物里没有任何页面引用那个 chunk——这个功能在被使用之前不产生任何代价。

**开发服务器需要第 5 个条目，而发现这一点的代价是一次 500。** `build` 与 `preview` 从不受影响，所以直到有人跑 `astro dev` 才暴露出来：在冷启动的开发服务器上，对一篇含 Playground 的 Post 的**第一次**请求会以 React 的 `Invalid hook call` 返回 **500**，第二次才 200。原因是 Vite 的 SSR 优化器在请求进行中才发现 `@codesandbox/sandpack-react`，把它打包，并在仍在服务的那个请求底下重载整个程序——日志里就是 `optimized dependencies changed. reloading`——于是 `Sandpack` 来自 `node_modules` 里的原始副本，而 React **渲染器**来自预打包的 `react-dom/server.edge`。两个 React 模块实例，`useState` 读到的 dispatcher 是 null。上游那四个条目只覆盖传递性的 CommonJS 包；把 `@codesandbox/sandpack-react` 自身也点出来，优化器就会在启动时而非首次使用时打包它，冷启动的第一次请求随即返回 200。

**成因是 adapter，而不是按需渲染。** 最直觉的读法——上游之所以没事，是因为它"生成静态页面"——是**错的**，两次实验足以定案：

- 在**本** fork 里临时加一个**预渲染**页面、承载同一个 island，失败方式完全相同：冷启动第一次请求 500，第二次 200。静态生成不是差异所在；而且它也不会让 island 在 dev 中免于服务端渲染——dev 里连预渲染路由也是按请求渲染的。
- 一个**不带 adapter**、形状与上游相同的 Astro 工程，只保留上游那四个条目、并且**故意不加**修复项，冷启动第一次请求返回 **200**——而且它压根没有创建 `node_modules/.vite/deps_ssr`，只有 `deps`。一行就能说清差异：Cloudflare adapter 让开发服务器的 SSR 环境跑在 workerd 上，于是 Vite 必须**打包**它的依赖（因而产生 `deps_ssr`，其中 node 版 `react-dom/server` 旁边还多出一个 edge 条件的 `react-dom/server.edge`），而不是像 Node SSR 那样把依赖外部化。被外部化的依赖图没有东西可以在请求中途重新打包，所以上游也没有东西可坏。

所以这是**在边缘运行时上按需渲染**的代价——本 fork 自己的选择，也正是 §4 声称要检验的那条轴，只不过当时只验了 `build` 与 `preview` 能走到的那部分。作者此前已经撞过一次：这个功能当初被删掉就是因为它（见 §2）。

§3 的第 5 项——示例 Post——也做了，四个语种齐全，而且**它的译文根本不需要新写**：`c5d9bd8d` 当初删掉的正是四份本地化副本，从 `c5d9bd8d^` 恢复出来的文件与它们当年的 blob 逐字节一致（`23125634`、`6f99da95`、`5b3abd2a`、`ea0c5d87`），且今天的 schema 依然接受它们——此后 schema 的每一处改动都只是在放宽（`description` 与 `tags` 变为可选、`copyright` 有了默认值、增加了若干可选字段）。en-US 的正文与上游当前正文逐字节相同，所以这一半是"构造上即是上游对齐"，而不是靠翻译对齐。四个语种各自返回 200 且都只有一个 island，sitemap 列出四个 URL，索引也都覆盖到了。上游把指向该 Post 的那句话放在 `## 🔍 Reference` → `### Custom MDX components` 之下，而本 fork 的 README 没有这一节，因此那句话仍未移植。

有一项仍未验证：**island 在浏览器里是否真的水合并让预览运行起来**。`preview` 与 `dev` 两种模式下的服务端渲染、chunk 图、chunk 的响应（两者都是 200、`text/javascript`）以及搜索索引都查过了，但 agent 手边没有可用的浏览器，所以客户端水合与 CodeMirror 的渲染仍只能依赖上游自己的测试。不过代码的*执行*通路看起来是活的：在本文写作之日，被钉死的 bundler 主机 `https://2-19-8-sandpack.codesandbox.io/` 返回 **200**，静态服务回退地址同样如此——这是关于"今天"的证据，不是承诺。

---

## 1. 上游到底做了什么

`git grep -i sandpack upstream/main` 只在这些地方找到这个功能，别处没有：

| 路径                                                           | 作用                                                                                                            |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `astro.config.ts`                                              | `mdastPlugins` 里的 `satteriSandpack({ componentName: ['Playground'] })`；一段 Vite `optimizeDeps.include` 配置 |
| `src/components/playground.astro`                              | 全部运行时：14 行 Astro 包装组件，包住 React 的 `Sandpack` 组件                                                 |
| `src/pages/[blog].astro`                                       | `<Content components={{ Aside, Playground }} />`                                                                |
| `content/blog/2025-06-23--live-coding-with-sandpack/index.mdx` | 文档示例，外加一个真实可用的 Playground                                                                         |
| `package.json`                                                 | `@codesandbox/sandpack-react ^2.20.0`、`@lekoarts/satteri-sandpack ^1.0.0`（`react`/`react-dom` 早已存在）      |
| `tsconfig.json`                                                | `"jsx": "react-jsx"`、`"jsxImportSource": "react"`                                                              |
| `README.md`、`src/assets/about.mdx`、介绍 Post                 | 仅功能列表中的一条                                                                                              |

### 编写语法

它**不是**在代码块上追加的标记——并不存在可写的 `playground` meta。作者写的是一个 MDX JSX 元素，里面放普通的围栏代码块：

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

`@lekoarts/satteri-sandpack` 是一个 **mdast** 插件。它的全部源码只有 74 行（2.3 KB），只做一件事：对所有名字在 `componentName` 里的 `mdxJsxFlowElement`，遍历其子节点、读取每个 `code` 节点的 `meta`，然后把一个**生成的 `files` 属性追加**到该元素上：

```js
return { ...node, attributes: [...node.attributes, filesAttribute] }
```

围栏留在原地；元素保留自己的属性（`template="react"`）。每个围栏的 meta 必须含 `name=`，其余只接受 `active`、`hidden`、`readOnly`、`showReadOnly` 这几个 token。出现其他内容会**在编译期**抛错——`EMPTY_META`、`INVALID_META(attr)`、`MISSING_NAME`——所以写坏的 Playground 会让构建失败，而不是渲染出错。（即便 `componentName` 是 `Playground`，它的报错文案里仍然硬编码着 `<Sandpack>`。）

包装组件是唯一的客户端部分，并且是延迟水合的：

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

有三点不要照抄。`title` 是**必填**属性，却被解构掉、从未渲染（所以仓库里每个示例都不传它，这本不该通过类型检查）。`customSetup` 被接受，但仓库里没有任何地方用到。还有，这个包装组件**没有 `<slot />`**——这不是疏漏，而是承重的：插件把那些代码围栏留在原地作为元素的 children，源码之所以没有出现两遍，唯一原因就是包装组件从不渲染它们。加上一个 `<slot />`，或者写一个会渲染 children 的 `<Playground>`，就会在编辑器下方把原始代码再打印一遍。我在构建出的页面上核对过：整个响应里只有一个 `<pre>`、一个 `sp-pre-placeholder`；源码的第二份文本副本存在于 island 序列化后的 `props` 属性里（这也是一段较长的示例会花两份体积的原因：一份在 props，一份在渲染出的标记里）。

MDX 里的 `<Playground>` **没有 `import`**；它通过 components map 解析。上游只在一个地方注册它——`<Content components={{ Aside, Playground }} />`；而它的 `about.mdx` 路由根本没传 components map，所以 `about.mdx` 虽然宣传 Playground，却用不了。

---

## 2. 本 fork 现状，以及为什么会这样

这个功能是以最普通的方式进入本 fork 血缘的——上游的 `8994137c`（"feat: Sandpack"，2025-06-23）是 `HEAD` 的祖先——并在 **`c5d9bd8d`（"add copyright"，2026-05-22）** 中离开，该提交删除了：

- `src/components/playground.astro`；
- 全部四个本地化的 `content/blog/<locale>/2025-06-23--live-coding-with-sandpack/index.mdx`；
- `package.json` 里的 `@codesandbox/sandpack-react` 与 `@lekoarts/remark-sandpack`；
- `astro.config.ts` 中当时那套 remark 插件列表里的 `remarkSandpack` 条目。

仓库里**没有任何地方记录它为什么被删**：`docs/adr/` 下没有 ADR，提交信息里也没提（那个提交的标题是 "add copyright"，同时还夹带了无关的 `base-test` URL 清理），而 `git log -i --grep=sandpack` 只能找到引入那一次。README 的删除线是后来在 `7d492101`（"update readme"）里单独划上的。

作者事后给出了原因，而且**不是本笔记最初以为的那个**：正是「结果」一节描述的那次**开发服务器故障**——冷启动的 `astro dev` 上，第一次请求含 Playground 的 Post 会以 React 的 `Invalid hook call` 返回 500。它看起来像 Sandpack 自身的缺陷，而不像本 fork 开发服务器形态的问题，于是这个功能被拿掉了。把它塞进一个无关提交里删掉、不留 ADR、还让四个语种的正文继续宣传它——这才使得原因直到现在都无从恢复。比起那个 bug 本身，这才是真正值得记取的教训。

本 fork 自己的 Sätteri 迁移（`c1934feb`）随后在不含该插件的前提下重建了 Markdown 流水线，上游合并（`0584158d`，合并 `118cb687`）也让它继续留在外面，于是 `astro.config.ts` 今天是：

```ts
mdastPlugins: [satteriAsides, satteriToc, satteriCollapse],
```

### 让"重新引入"变便宜的遗留物

下面这些在本仓库已经成立，每一项都省掉了上游当初必须做的一步：

- **React 集成已装好、已接线，却没有东西可渲染。** `@astrojs/react ^7.0.0`、`react`/`react-dom ^19.3.0`、`integrations` 里的 `react()` 都在——而 `src/` 下没有任何 `.tsx`/`.jsx`，没有任何源码文件 import React，`dist/client/_astro` 里也没有 React chunk。本 fork 目前为这个集成付费，却一点它的 JavaScript 都不发。Sandpack 会成为 React 的第一个也是唯一一个消费者。
- **`tsconfig.json` 已经设了 `"jsx": "react-jsx"` 与 `"jsxImportSource": "react"`。**
- **Sätteri 处理器已经就位**，它的 `mdastPlugins` 数组再多一项即可。
- **components map 已经存在**——`src/pages/[locale]/posts/[displayId].astro:106` 构造 `const components = { Aside, Protected, … }`，并在第 190 行传下去。
- **`satteri ^0.10.5` 已经满足该插件唯一的 peer 依赖**（`satteri: ^0.10.5`）。

### 两处无论决定如何都该处理的遗留问题

- 四个 `2025-03-28--introducing-astro-theme-minimal-blog` Post 仍在**全部四个语种**里把 "Live coding powered by Sandpack" 列为功能（`content/blog/{en-US,zh-CN,ru-RU,he-IL}/…/index.mdx:23`），而 README 已经划掉了它。站点当前在宣传一个它并没有的功能。
- 如果答案是**否**，那么 React 集成就是死重——它在这个仓库里的唯一用途从来就是本功能：`@astrojs/react`、`react`、`react-dom`、`@types/react`、`@types/react-dom` 以及 `tsconfig` 的 JSX 设置都可以一并去掉。那是另一个决定，但它是本决定的另一半——而且把它们拿掉会让日后重新引入比现在更贵。

---

## 3. 具体改动

| #   | 文件                                         | 改动                                                                                                                                              |
| --- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `package.json`                               | 加 `@codesandbox/sandpack-react ^2.20.0`、`@lekoarts/satteri-sandpack ^1.0.0`                                                                     |
| 2   | `astro.config.ts`                            | import `satteriSandpack`；往 `mdastPlugins` 追加 `satteriSandpack({ componentName: ['Playground'] })`；加上 Vite 的 `optimizeDeps.include` 配置块 |
| 3   | `src/components/playground.astro`            | 恢复那个 14 行的包装组件（新文件）                                                                                                                |
| 4   | `src/pages/[locale]/posts/[displayId].astro` | import `Playground`；把它加进 `components` map                                                                                                    |
| 5   | `content/blog/<locale>/…/index.mdx`          | 一个 Playground Post，如果你想要的话                                                                                                              |

`optimizeDeps.include` 那块是上游的开发服务器绕行方案，自带注释：

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

需要它，是因为 `@codesandbox/sandpack-react` 以 CommonJS 形式发布（`require('react')`、`require('@codemirror/view')`……），而那四个嵌套依赖也是如此。它只影响开发服务器；生产构建无论如何都会转换 CJS。

**那四个条目并不足够——上面的代码块不要照抄。**「结果」一节记录了原因：若不额外加一条把 `@codesandbox/sandpack-react` 自身点出来，冷启动的开发服务器上第一次请求 Playground 会返回 500。

第 5 步并不免费。上游那个示例 Post 只有英文，也不满足本 fork 的 schema（`displayId`、`authors`、`date`、`updated`、取自 `TAG_SLUGS` 的 `tags`、`copyright`）；而本 fork 是每个语种各自发布同一篇 Post——要移植它，就得为你想要的每个语种各写一个版本（`mdx` 已经是 `TAG_SLUGS` 的成员了）。

**不需要**（与直接照搬上游那个提交会暗示的相反）：不需要*新增* React 依赖、不需要改 `react()` 集成、不需要改 `tsconfig`、除那一项插件之外不需要改 Markdown 处理器。

### 一个更便宜、也更合本仓库路子的变体

`src/markdown.ts` 已经在仓库内重新实现了六个第三方 Markdown 插件——`satteriAsides`、`satteriToc`、`satteriCollapse`、`satteriExternalLinks`、`satteriHeadingPermalinks`、`satteriWrap`——每个都带注释说明它替代了什么、在哪里有偏离。`satteri-sandpack` 是 74 行无依赖的 JavaScript，只做一个 `mdxJsxFlowElement` 变换。把它移植进 `src/markdown.ts`（比如就叫 `satteriSandpack`），与它的兄弟们并列，可以：

- 完全省掉第二个新依赖，只留下 `@codesandbox/sandpack-react`；
- 避免依赖一个只有单个版本、单个维护者、已知唯一消费者就是上游主题的包（发布于 2026-09-05，版本 1.0.0，MIT）；
- 顺带去掉那些硬编码 `<Sandpack>` 的报错文案；
- 让编写契约出现在定义其余编写契约的那个文件里。

这是关于*怎么做*的建议，不是关于*要不要做*。

---

## 4. 已验证：它在本文 fork 的技术栈上可用

上游在构建期于 Node 里渲染所有页面，并用 Pagefind。本 fork 则是在 Worker 里按需渲染 Post（`export const prerender = false`，`docs/adr/0002`），并靠爬取构建产物来生成本站自己的 Site search 索引（`docs/adr/0001`）。这两条轴都不在上游的测试范围内，所以我搭了一个镜像本 fork 相关配置的一次性 Astro 工程，把两者都测了。

**环境。** `astro@7.3.5`、`@astrojs/cloudflare@14.3.3`、`@astrojs/react@7`、`react`/`react-dom@19.3.0`、`@astrojs/markdown-satteri@0.4.2`、`satteri@0.10.5`、`@lekoarts/satteri-sandpack@1.0.0`、`@codesandbox/sandpack-react@2.20.0`；`output: 'static'` + `cloudflare()` + `prerender = false`；`mdastPlugins: [satteriSandpack({ componentName: ['Playground'] })]`；内容集合用同一个 `glob` loader 加载；正文用上面那个 Playground 示例；`components={{ Playground }}` 传给 `<Content>`。用 `astro preview` 提供服务——它会走 Cloudflare adapter 的 preview 入口，**测试期间有真实的 `workerd` 进程在跑，据此确认那是真正的 Workers 运行时。**

**结果。**

1. **它能在 workerd 上服务端渲染。** 请求返回 **200**，island 被完整服务端渲染：Sandpack 外壳、标签页列表，以及一个含**活动**文件源码的高亮 `<pre>`（见 §4.5——其余文件不会服务端渲染）。没有添加 `nodejs_compat` 标志；对两个包的 `dist` 做 grep，除了 Vite 在构建期会转换的 CJS 模块包装之外，找不到 `process.env`、`Buffer`、`node:`、`__dirname` 或裸 `require(`。**这是此前最大的未知数，结论是它不成问题。**
2. **Sätteri 插件那一行按配置生效。** 输出里含有生成的 `files` 属性，`active`/`readOnly` 都正确地由围栏 meta 推出，也没有裸的 `<Playground>` 标签漏出来。
3. **`client:visible` 确实延迟了下载。** island 标签在 `component-url` 里点出了它的组件 chunk，而 HTML 里**任何地方都没有针对它的 `modulepreload` 或 `preload` 链接**。Astro 的该指令（`node_modules/astro/dist/runtime/client/visible.js`）挂一个 `IntersectionObserver`，只在首次相交时调用 `load()`——也就是那次动态 import。所以下面的体积是在 Playground 滚入视口时才付出的，不是页面加载时。
4. **代价：把同一工程构建两次（有 island / 无 island）并对比 `dist/client/_astro` 测得**（gzip 用 `GZipStream`）：

   | 构建      | 原始        | Gzip        | 文件数             |
   | --------- | ----------- | ----------- | ------------------ |
   | 无 island | 215.7 KB    | 66.7 KB     | 1（`client.*.js`） |
   | 有 island | 1190.5 KB   | 340.2 KB    | 9                  |
   | **增量**  | **≈975 KB** | **≈274 KB** |                    |

   最大的文件是 `index.C1CAvoHZ.js`——island 标签指向的 Sandpack 组件 chunk——原始 621.9 KB / **gzip 205.2 KB**。（哈希与字节数在不同构建之间会略有浮动：本仓库自己的构建把同一个 chunk 输出为 `index.DEoptHHZ.js`，620.7 KB——「结果」一节引用的就是这个数字。）其余是 renderer 入口（208 KB / 64.3 KB）、一个 158.7 KB 的 runtime chunk、一个 140.7 KB 的 client chunk，以及五个小文件。另一次独立测量把单独的 `Sandpack` 用 `bun build --minify` 打包，得到压缩后 982 KB / gzip 277.6 KB，与上述数字相互印证。生产构建还会给出 Vite 的警告：_"Some chunks are larger than 500 kB after minification."_

   归属上的注意事项：这种差值法把基线的构建里没有的一切都算在 island 头上，而基线里那个单独的 215.7 KB `client.*.js` _并非_ island 的产物——注意有 island 的构建里 `client.*.js` 是 208 KB，也就是同一个角色；而本 fork 自己的构建本来就发一个 412 KB 的 `client.C6lx8Nk_.js`。请把 ≈274 KB gzip 读作增量的正确数量级，把 205 KB gzip 读作 Sandpack chunk 自身的硬下限。

5. **Site search 索引会收进 Playground 的代码，而不收它的界面文案。** 服务端渲染出的 island 约 9.5 KB，位于 Post 页面的 `data-pagefind-body` 区域内。我用本仓库同版本的 Pagefind（`1.5.2`）对抓取到的 SSR 页面建了索引，并通过 Pagefind 的 JS 搜索 API 查询了生成的 bundle：

   | 查询                           | 命中 | 原因                                                                                    |
   | ------------------------------ | ---- | --------------------------------------------------------------------------------------- |
   | `constants`                    | 1    | 文件名 `constants.js` 与 `from './constants.js'` 都被索引了                             |
   | `Hello`、`export`              | 各 1 | **活动**文件的源码文本被索引                                                            |
   | `World`                        | 0    | 它在 `constants.js` 里，而那不是活动文件——只有活动文件的源码会被服务端渲染              |
   | `readOnly`、`Editor`、`Select` | 0    | ARIA 标签（`Select active file`、`Code Editor for App.js`）是属性而非文本，因此不被索引 |

   所以结果是无害的，甚至可以说是个特性：读者搜一个标识符，就能找到演示它的那篇 Post，而没有任何 Sandpack 界面词汇进入索引。`scripts/buildSearchIndex.ts` 不会拒绝这种形态，它"每种语言恰好一个索引"的检查也不受影响。只有*活动*文件可被搜索，这一点值得知道，以防你日后想把其余文件也纳入。如果你确实想把某篇 Post 的 playground 完全挡在 Site search 之外，机制已经存在：`data-pagefind-ignore`，`h-card.astro`、`mf2-meta.astro` 和 `p-location.astro` 上就在用。

---

## 5. 真正卡住决定的是什么

### 5.1 一个 Playground 并不自足

编辑器 UI 是本地 JavaScript，但**运行**代码要连 CodeSandbox。读 `@codesandbox/sandpack-client@2.19.8` 的 `dist` 可见，bundler 的 base URL 被钉死在客户端版本上：

```js
var BUNDLER_URL = "https://" + "2.19.8".replace(/\./g, "-") + SUFFIX_PLACEHOLDER + "-sandpack.codesandbox.io/";
// fallback: "https://preview.sandpack-static-server.codesandbox.io"
// export/share: "https://codesandbox.io/api/v1/sandboxes/define?json=1"
```

所以每个 Playground 预览框都是一次打向 `*.codesandbox.io` 的跨源请求；一旦那个主机退役，Playground 就会停止执行——而且是静默的，编辑器照旧渲染。这与本仓库其他地方对待第三方的方式构成张力：Site search 索引由站点自己提供、"查询不出站"（`README.md`），而 microformats2/IndieWeb 那一套不跟任何人通话。

自托管是**有支持、有文档的**，但没有开箱即用的产物，所以这是实打实的工作：

- 该选项是一方的：`ClientOptions.bundlerURL`（"Location of the bundler. Defaults to `${version}-sandpack.codesandbox.io`"），以 `<Sandpack options={{ bundlerURL: '…' }} />` 的形式传给 `Sandpack`。`createBundlerURL()` 返回 `this.options.bundlerURL || BUNDLER_URL` 并短路，所以自定义 URL 会完全取代 CodeSandbox 的主机——这正是 `playground.astro` 需要新增的东西。
- CodeSandbox 在 [Hosting the Bundler](https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler) 里记录了流程：从 `codesandbox-client` monorepo 构建（`yarn build:sandpack`），然后 serve 产出的 `www` 目录。方便的是，**客户端包里已经自带一份预构建产物**——`@codesandbox/sandpack-client@2.19.8` 解包约 67 MB，其中含一个顶层 `/sandpack/` 应用（`index.html`、Babel worker、打包后的 chunks、browserfs、各种转译器）。serve 那个目录再加 `bundlerURL` 就是省事的路径。这一点是由包内容推得的，文档里并没有写。
- 而**不**存在的：Docker 镜像（Docker Hub 上的 `codesandbox/sandpack-bundler` 是 404）和 bundler 的 npm 包。实验性重写版 [`codesandbox/sandpack-bundler`](https://github.com/codesandbox/sandpack-bundler) 未 archive、Apache-2.0，但**最后一次推送是 2024-11-19**，仓库里没有 Dockerfile，且被标为 beta 并带有若干限制（其他模板待补、不支持私有依赖、不支持 alias/git/file 依赖）。你得自己运维它，背后没有上游的发版节奏。

我在已发布的包里核实了*默认*主机与*该选项的存在*；我没有真的架起一个自托管 bundler，所以那条路径的运维成本请视为未测量。

### 5.2 依赖新鲜度

- `@codesandbox/sandpack-react`：最新为 **2.20.0，发布于 2025-04-29**。仓库（`codesandbox/sandpack`）**未 archive**，但 `pushed_at` 是 2025-04-24，6.2k star 之下挂着 163 个 open issue。约 17 个月没有发版：属于事实性停滞，而不是死掉。许可证是 Apache-2.0（包与仓库都是）。React 19——本 fork 用的版本——落在其声明的 peer 范围 `^16.8.0 || ^17 || ^18 || ^19` 内。
- 单看 React 19 是安全的：在 issue 追踪里搜索，只找到已关闭的条目——#1236 "Support for React 19"、#1251 "feat: update to react 19"、#1245 "fix: raise react peer dependency to 19"——**没有任何报告 React 19 破坏性问题的 open issue**。同样也没有 open issue 指出运行时依赖 CodeSandbox 托管的 bundler；最接近的 #1272 "X-Frame-Options Issue When Using Sandpack on Custom Domain" 讲的是嵌入相关的响应头。没有 bug 报告不等于问题不存在，但对托管 bundler 的依赖是能在源码里看到的（§5.1），不只是猜测。
- 上游在引入时钉了 `^2.20.0`，此后再没升过；上游主题的追踪里也没有 Sandpack 的 bug 报告。
- `@lekoarts/satteri-sandpack`：MIT，版本 1.0.0，发布于 2026-09-05，有史以来只有一个版本、一位维护者；它的 peer 范围（`satteri ^0.10.5`）在本仓库已经满足——`satteri` 的最新版确实是 0.10.5，而 `@astrojs/markdown-satteri@0.4.2` 要求 `satteri ^0.10.3`，所以三者可以共存解析。该包与上游主题同属一人。想不依赖它，见 §3 里那个"搬进仓库"的变体。

### 5.3 体积与触达面

任何含 Playground 的 Post 都会多出约 274 KB gzip / 约 975 KB 原始客户端 JavaScript，并第一次把 React 拉进 bundle——它会延迟到进入视口才加载，这对一篇长文中位置靠后的 Playground 是真实的缓解，对首屏之上的那个则毫无缓解。对一个把"只在你要求的地方使用 JavaScript"写进卖点的主题来说，这就是这个功能的代价，也是 README 里应当如实说明的方式。

---

## 6. 如果决定要做，按这个顺序验证

1. `bun add @codesandbox/sandpack-react @lekoarts/satteri-sandpack`（或者改为把插件移植进仓库）。
2. 落实 §3 的第 2–4 项。
3. `bun run build`——预期出现 Vite 的 >500 kB chunk 警告，且没有其他新警告。
4. `bun run build:search`——必须退出码为 0。预期那篇 Playground Post 会被索引、其活动文件的源码可被搜到（§4.5）；确认一下，如果你最终仍想把 playground 挡在 Site search 之外，就加 `data-pagefind-ignore`。
5. 用 `bun run preview` 打开那篇 Post，开着网络面板：确认 bundle 请求打向 `*.codesandbox.io`，且预览框真的执行了代码。
6. 对水合后的 island 做键盘与读屏器走查，并检查深色模式——`theme="auto"` 是依据 `prefers-color-scheme` 判断的，未必与本 fork 的浅色/深色/跟随系统三态开关一致。
7. 把文案收尾：去掉 `README.md:13` 的删除线并刷新四个介绍 Post 的第 23 行；或者——如果答案是"不做"——把那四个 Post 改掉，别再宣传站点没有的功能。

---

## 7. 来源

以下都是一手来源，且都能从本检出复核：

- 上游实现：`git show upstream/main:src/components/playground.astro`、`git show upstream/main:astro.config.ts`、`git show upstream/main:content/blog/2025-06-23--live-coding-with-sandpack/index.mdx`、`git show upstream/main:package.json`、`git show upstream/main:src/pages/[blog].astro`。
- 上游历史：`git show --stat 8994137c`、`git log --oneline --all -S sandpack`、`git log --oneline upstream/main -20`。
- 本 fork 历史：`git show --name-status c5d9bd8d`、`git show c1934feb -- astro.config.ts`、`git show --stat 0584158d`、`git log --oneline -S "~~Live coding" -- README.md`。
- 插件源码：从已发布 tarball 读取的 `@lekoarts/satteri-sandpack@1.0.0` `dist/index.js`（74 行）。
- Sandpack 运行时：从已发布 tarball 读取的 `@codesandbox/sandpack-react@2.20.0` 与 `@codesandbox/sandpack-client@2.19.8` 的 `dist/`；以及各包的 `license` 与 `peerDependencies` 字段。
- Astro 行为：`node_modules/astro/dist/runtime/client/visible.js`，以及官方文档中关于 [client 指令](https://docs.astro.build/en/reference/directives-reference/#client-directives) 的说明（尤其是：client 指令不能加在通过 MDX `components` prop 传入的组件上——这正是该指令出现在 `playground.astro` 内、加在一个直接 import 的组件上，而不是加在 MDX 里的 `<Playground>` 上的原因）。
- 注册表状态：`npm view @codesandbox/sandpack-react version time.modified`、`npm view @lekoarts/satteri-sandpack version time.created peerDependencies`，以及 `https://api.github.com/repos/codesandbox/sandpack`。
- 自托管 bundler：`@codesandbox/sandpack-client@2.19.8` 的 `dist/types.d.ts`（`ClientOptions.bundlerURL`）与 `dist/clients/runtime/index.js`（`createBundlerURL`）；[Hosting the Bundler](https://sandpack.codesandbox.io/docs/guides/hosting-the-bundler)；该包自带的解包后 `/sandpack/` 应用；以及 [codesandbox/sandpack-bundler](https://github.com/codesandbox/sandpack-bundler) 用于说明实验性重写的状态。
- 追踪器检索：`https://api.github.com/search/issues?q=repo:codesandbox/sandpack+is:open+react+19`，以及针对 bundler 主机同类检索（它们能证明什么、不能证明什么，见 §5.2）。

如何复核 §4 的各项测量：

- **workerd 上的 SSR**（§4.1–4.2）：按 §4 的环境搭一个一次性 Astro 工程，`bun run build`，然后 `bun run preview`——它会经 Cloudflare adapter 的 preview 入口跑在 workerd 上——再抓取 Post 路由。island 的服务端渲染标记（含生成的 `files` 属性）就在响应体里。
- **客户端体积**（§4.4）：把该构建与去掉 island 的同款构建的 `dist/client/_astro` 做对比。
- **搜索索引**（§4.5）：把抓到的响应体存成一个 HTML 文件，用本仓库的 `pagefind ^1.5.2` 执行 `bunx pagefind --site <dir>`，再通过 Pagefind 的 JS 搜索 API（`import('/pagefind/pagefind.js')`、`pagefind.search(term)`）查询写出的 bundle。Pagefind 的 _Node_ API 只能建索引、不能查询，所以查询那半必须在 JS 环境里跑——用 Bun 对 `file://` base URL 跑得通。

那些探针工程都是一次性的，不属于本仓库。

## 关于本文件

这是本仓库第一份此类笔记——`docs/` 原本只有 `adr/` 和 `agents/`——所以它放在新建的 `docs/research/` 目录下。本文是 [sandpack-live-coding.md](./sandpack-live-coding.md) 的中文译本，英文版为权威版本；两者内容如有出入，以英文版为准。决定做出后，可以把结论并进 ADR：它是决策依据，不是决策本身。
