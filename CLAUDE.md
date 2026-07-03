# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Lamber's personal blog — a **Hugo static site** built on the [Hextra](https://github.com/imfing/hextra) theme. It is almost entirely Markdown content, not application code. The `go.mod` exists only because Hextra is consumed as a **Hugo Module** (Go module), not because there is Go code to compile. There are no unit tests, linters, or a build step beyond `hugo`.

The site is bilingual: `defaultContentLanguage: zh-CN` with English (`en`) as a secondary language. Most content is written in Chinese.

## Commands

Hugo **extended** v0.147.9 is required (matches CI/Netlify). It is *not* installed in this workspace by default — use the devcontainer (`.devcontainer/`) or Gitpod (`.gitpod.yml`), or install `hugo_extended` locally.

```bash
hugo server -D -F          # local dev server at http://localhost:1313 (-D drafts, -F future-dated)
hugo mod tidy              # sync go.mod/go.sum after changing module imports
hugo mod get -u            # update the Hextra theme module to latest
hugo --gc --minify         # production build into public/ (what CI runs)
```

There is no `make`, `npm`, or test command — content changes are verified by eye in the dev server.

### Local dev setup (from a bare workspace)

If `hugo` is not on `PATH`, install the pinned **extended** build (Hextra needs extended for SCSS) and make sure Go is available (Hugo shells out to `go` to fetch the theme module):

```bash
# Go must be on PATH (module fetch); on this box: export PATH="/usr/local/go/bin:$PATH"
ver=0.147.9
curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${ver}/hugo_extended_${ver}_linux-amd64.tar.gz" \
  | tar -xz -C ~/.local/bin hugo   # or any dir on PATH
```

**Module-fetch gotcha:** on first run Hugo downloads the Hextra module. Fetching it via git (`direct`) intermittently fails here with `GnuTLS, handshake failed: The TLS connection was non-properly terminated`. The Go module proxy works reliably, so pre-fetch through it once and pin the proxy so Hugo never falls back to git:

```bash
go mod download github.com/imfing/hextra@v0.11.0   # caches into $GOPATH/pkg/mod
GOPROXY=https://proxy.golang.org hugo server -D -F  # proxy-only, no git fallback
```

Once cached, subsequent `hugo server` runs need no network.

## Architecture

**Theme delivery via Hugo Modules.** `hugo.yaml` → `module.imports` pulls `github.com/imfing/hextra`, pinned in `go.mod`/`go.sum`. There is **no local `layouts/` or `themes/` directory** — all templates and shortcodes come from the module cache (`$(go env GOMODCACHE)/github.com/imfing/hextra@<ver>`). To change site behavior you either override a file by recreating its path locally (e.g. `layouts/...`) or configure via `hugo.yaml` `params`.

**Local overlays** (these override or extend the theme without forking it):
- `data/icons.yaml` — custom inline SVG icons (`kofi_symbol`, `afdian`) referenced by menu items in `hugo.yaml` via `params.icon`.
- `i18n/zh-cn.yaml` — Chinese UI string overrides.
- `static/` — served at web root: asciinema `.cast` recordings, favicons, `images/` (site logo `xiaolin.jpg`, HTB logo).

**Content** (`content/`) is organized into two top-level sections plus site pages:
- `content/_index.md` — home page, uses `layout: hextra-home` with Hextra hero/feature-card shortcodes.
- `content/blog/` — blog posts. Front matter uses `title`, `date`, `description`, `authors` (name/link/image), `tags`.
- `content/hackthebox/` — HackTheBox writeups, rendered as **docs** (`cascade.type: docs` in its `_index.md`, giving the sidebar/TOC layout). Split into `machines/` (one dir per box, each with `index.md` + images as page bundles) and `sherlocks/`. Machine front matter uses `weight` (negative, controls sidebar ordering), `date`, and a `tags` taxonomy that doubles as the navigation index — tags encode **difficulty** (easy/medium/hard/insane), **infrastructure** (windows/winrm/mssql…), and **attack technique** (adcs-esc1, kerberoast, dcsync…). The `machines/_index.md` and `hackthebox/_index.md` are hand-maintained card grids that link into these `/tags/*` pages, so **adding a writeup with a new technique tag means also adding a card** to the relevant `_index.md`.

**Markdown capabilities.** `hugo.yaml` sets `goldmark.renderer.unsafe: true` (raw HTML/inline SVG in Markdown is allowed) and enables inline shortcodes. Posts use Hextra shortcodes (`{{< cards >}}`, `{{< card >}}`, `{{< hextra/... >}}`, `{{< icon >}}`) and an `{{< asciinema file="demo.cast" >}}` shortcode for terminal recordings.

## Writing style (for authoring content)

This blog's posts are auto-drafted by an agent from raw material the owner pastes in (terminal logs, scan output, notes). Your job is to turn that raw material into prose that reads as if the owner wrote it by hand: one consistent voice, fluent natural 简体中文, no generic-tutorial tone, no AI slop. The site has **three registers** — pick the one that fits, then follow its structure exactly.

### 通用语气与结构 (voice & structure — all registers)

- **中文为主，术语用英文 (Chinese-primary, English for terms of art).** Prose is 简体中文; keep tool names, techniques, and protocol nouns in English and spelled the standard way (`bloodhound`, `netexec`, `impacket`, `Kerberoast`, `RID`, `SID`, `ForceChangePassword`, `ADCS ESC1`). Never translate a tool/technique name into Chinese, and once you name one, reuse that exact name every time — don't synonym-cycle (payload / exploit / attack vector) for variety.
- **第一人称、动手、简洁 (first-person, operational, terse).** Write like you're telling a competent teammate what you just did: *"根据默认账户密码先走一遍 bloodhound 收集信息，简单看一眼，第一条攻击路径如下"*. Own the claims, the mistakes, and the judgments in 我/我们 — this is a research log, not a detached third-person manual.
- **命令真实可复制 (commands are real and copy-pasteable).** Use the actual command with real lab values, never `<placeholder>` templates, and show the concrete result — credentials inline as `user:pass` (e.g. `emily:UXLCI5iETUsIBoFVTj8yQFKoHjXmb`).
- **用钩子开头，不要铺垫 (open on a concrete hook, not a preamble).** The first 1–2 sentences state *why this post, why now*: a question someone asked (*"有师傅问我……"*), a claim you're correcting, an anomaly you noticed, or a CVE trending that day. The hook IS the introduction — never write "本文将介绍…", never open with 免责声明 or 过度谦虚的套话 ("本人水平有限，如有错误欢迎指正"); if that content must exist at all, it goes at the very end in one line.
- **先讲为什么，再讲怎么做 (WHY before HOW — treat as a hard rule).** Before any payload or command, give the reader the mental model that makes it work: the protocol spec, the permission model, the encoding, or what a patch actually changed. Only paste the exploit once the reader could predict it. 贴命令不讲成因就是操作手册，讲清原理读者才能迁移到没见过的场景，这是分析和复制粘贴的区别。
- **补丁—绕过叙事 (patch-then-bypass for vuln/CVE posts).** For vulnerability-history pieces, make the spine chronological by CVE/version, and for each fix say *what the vendor changed*, then *how it was defeated*, repeated per version. That turns a multi-CVE list into one continuous story.
- **一段一个意思，首句即结论 (one idea per paragraph, topic sentence first).** Technical readers scan; the first sentence of each paragraph must carry its point so a skim still lands. Don't stuff a second idea into a paragraph.
- **展示失败的尝试，再转折 (show the dead end, then the pivot).** In the hard sections (encoding mismatches, an exploit that didn't fire, a wrong hypothesis), narrate the elimination: *"我先怀疑是 SQL 注入，但注入点回显正常，排除；转而看 …"* / *"我尝试改成 UTF-16BE，同样的报错，Java 里其他编码也一样"*. The debugging heuristic teaches more than the clean path, and it reads as honest.
- **具体压过抽象，show don't tell.** Replace adjective-summaries ("系统很脆弱") with the exact payload, request, or error message. Let a screenshot or captured output carry the "it worked" proof — pair one setup sentence with one evidentiary image (popped calc, secretsdump output, a shell prompt) instead of narrating the result in prose.
- **标注适用范围 (state scope/version caveats, both ends).** Say up front what varies (*"Jenkins 版本和插件差异较大，利用时细节可能不同"*) and pin results to the tested version/environment again near the end. This builds credibility instead of eroding it.
- **重要结论前置 (conclusion-first for analysis posts).** For technique/vuln analysis, put "这是什么漏洞、影响多大" in the first screenful so a reader decides in seconds whether to read on; expand by decreasing importance after.
- **归属用 @handle (credit peers inline).** When you reuse or build on someone's tool or idea, name them inline (*"这里用 @rebeyond 的 JNDInjector"*) — it situates the post inside the CN security-research community rather than as solo authority.
- **交叉链接用真实 Markdown 链接，绝不用 `[[wikilinks]]`.** Obsidian-style `[[DCSync]]` does not render here (no wikilink extension — readers see literal brackets). Link a reused technique to its tag index `[Kerberoast](/tags/kerberoast/)` or to the post page.
- **十六进制小节编号 (hex section numbering for technique/vuln posts).** On the pentest side, number sections `0x01`, `0x02`, `0x03` — it signals genre and matches this community's convention. (HTB machine writeups keep their own fixed structure below.)
- **结尾不硬凑总结 (don't force a wrap-up).** Many good posts end on the working PoC/screenshot or on a bare reference list with nothing after it. If a 总结 is genuinely warranted, keep it to the 2–3 core conditions/constraints for exploitation, not a full re-narration.
- **砍初稿 (cut hard after drafting).** Filter to the details that move the argument; drop流水账 (every scan line, every dead click). After a draft, ask sentence by sentence "删掉会影响理解吗" — half usually can go.

### 自然、人味的表达 (natural voice — anti-AI-slop)

目标语域是**客观、专业、简练**（objective / professional / concise），不是插科打诨。反 AI 味靠的是精准和恰到好处的克制，**不是**靠俚语、玩梗、卖萌。真正的 AI 味不在词汇层，而在**结构与节奏**：解释密度平、句式一个模子、每小节同一个开头、全程一次通关无挫折。先治这些，再治词。

一条主线先说清：**保留"为什么"（读者要靠它记住），复杂概念也要讲得懂，但要简练、客观——写得像专业人，不像聊天，也不像教科书；真正难讲的概念交给一张图，而不是一堵墙的字。**

**深层 AI 味（headline tells — 这些比词表重要，逐条自查）：**

- **解释密度要不均匀（explain only the non-obvious）。** 默认读者在打 HTB 中等难度靶机。**凡是渗透测试者都懂的东西一律不解释**：什么是 Kerberoast / DCSync / 非约束委派 / GenericWrite、SPN→TGS→哈希→离线爆破的链条、为什么 Guest 可读的 `NETLOGON` 值得翻——点名技术，然后往下走。把整段解释的篇幅**只留给这台靶机真正非显然的那一点**（例如"为什么一个普通域用户手里会有 `SeEnableDelegationPrivilege`"）。解释的深度必须随难度浮动：例行动作一句带过，难点才展开。每个小节都背同样重量的"论证"，节奏就被压平了——那是 AI。讲"为什么"时**锚定到已经贴出的工具输出**（指向 certipy / bloodhound / `whoami /priv` 里那一行证据），不要写一段脱离任何命令、放到哪篇 writeup 都成立的协议科普。

- **节奏要有变化（rhythm，not vocabulary）。** 长短句交替，别每一拍都用连接词（所以 / 而 / 但 / 也就是说）兜成一个平衡的复合句。允许一句短的落地："整条链一次打通。" 禁掉收尾复述 tic（用"也就是说"把上一句换句话重说一遍）。禁掉 **'为什么…？'自问自答**式的段落/小节开头——把事实平铺直叙，别摆问答台。禁掉给紧耦合工具链硬套的**机械序号（第一步/第二步/第三步）**：让过渡句承接顺序（"造完机器账户，接着挂 SPN 和 DNS 记录，krbrelayx 起好监听再扔 printerbug"），**只有当顺序本身是重点时**（必须按序执行的清单）才编号。代码块是真正的结构，散文负责流动，不负责数数。别让每个小节都用同一套骨架开头（"先…/第一件事是[动作]+理由"），换开头。

- **语域要客观专业（register）。** 度量衡是"测评报告 / 技术复盘"，不是朋友圈。删掉硬贴上去的口语和表演性俚语：**薅、收工、心里有底、老套路**这类零信息量的"显得接地气"补丁。不要拿靶机名玩双关当钩子（"Delegate 这名字把考点写脸上了"），不要在第一条命令之前先来个"真正的钥匙不是 X 而是 Y"的论点铺垫——**直接从第一个动作开始**（贴 nmap、跑枚举）。语域要**全程一致**：别在一句教科书腔的句子里突然塞一个网络流行词，那个落差本身就是 tell。一句**真实、有信息量的判断**是加分且显专业的（"这套权限组合在 CTF 外基本不现实"、"这里选 krbrelayx 而不是 ntlmrelayx 是因为要落 TGT 到 ccache"），但判断必须携带信息，**绝不为了casual而casual**。

- **摩擦只写真的（friction）。** 真实的死路、报错、版本坑、等待——**只在真发生时**写，平铺直叙、简短点到（"DNS 记录约 3 分钟后才生效"、"krbrelayx 第一次盐值大小写不对，票解不开，翻源码才发现 REALM 要大写"）。**绝不为了'有人味'而编造**弯路。如果这次跑得很干净，要么一句话说明（"整条链一次打通，没绕路"），要么什么都不说——别硬造一个"其实没发生"的翻车。

**复杂概念：讲不清就交给图（NEW）。** 用易懂的方式解释复杂概念，但**保持短**。如果一个机制**确实**没法用两三句讲清楚，**不要堆字**——把它交给一张图：按和流程图完全相同的机制（`$ian-xiaohei-illustrations`），在 fenced `text` 块里 emit 一段 codex **概念图** prompt，紧跟一个图片占位符，让插画去承担解释。一张示意图胜过一堵墙的散文。用法（附一行告诉 owner 怎么做：*"把下面这段丢进 codex TUI 跑出 `concept.png`，放到本目录。"*），填好【概念名称】和【要讲清的机制】再 emit：

```text
请使用 $ian-xiaohei-illustrations 技能（github.com/helloianneo/ian-xiaohei-illustrations 的小黑 Xiaohei 风格），为下面这个安全概念画一张"原理示意图"（concept / mechanism diagram），构图类型采用该仓库 composition-patterns 中的 "结构/原理示意"（非流程路径，而是把一个机制的关键要素和它们的关系画清楚）。

【概念名称】
<例如：非约束委派为什么会泄露 DC 的 TGT>

【要讲清的机制（用最朴素的话列出关键要素与它们的关系）】
要素1、要素2、它们之间发生了什么（如：DC 向"非约束委派机器"认证时，会把自己的 TGT 一并转发过去缓存——攻击者控制这台机器即可窃取）

【构图要求】
- 画机制本身，不画攻击步骤顺序：把关键要素画成图上的对象，用箭头/标注表达它们之间"谁把什么交给了谁"。
- 每个要素配一句手写中文标注，2-8 字，全图 4-6 处以内。
- 小黑（黑色实心小人、白点眼、细腿、面无表情）是真正"动手"的那个角色（接住、搬走、撬开对应机制里的关键一步），不当旁观装饰。
- 关键风险点（被窃取/被滥用的那一环）用红色点出。

【视觉风格（严格遵循 style-dna）】
- 纯白背景，无纹理/渐变/阴影；黑色手绘线稿为主，线条带轻微手抖感，像技术人随手画的草图；不要商业插画、PPT 信息图、正式流程图、卡通风格。
- 主体占 40%-60%，至少 35% 留白。
- 只用黑（主体结构）、橙（关系/箭头）、红（风险点）、蓝（补充说明）四色，克制使用。
- 左上角不放分类标题文字。

【输出要求】
- 横版 16:9，直接产出真实图片，不要只用文字描述；保存为 PNG，文件名：concept.png；完成后回复完整保存路径。
```

![概念图](concept.png)

**词/标点层（surface tells — 次要，扫最终稿删干净即可）：**

- **破折号 `—` `–` 当逗号用** → 换成逗号/句号/冒号/括号；发布前 grep 这个字符。**弯引号 `“ ” ‘ ’`** → 用直引号。
- **AI 高频词** — 英文 delve、leverage、crucial、intricate、landscape、tapestry、testament、underscore、pivotal、foster、robust、seamless；中文 值得注意的是、总的来说、综上所述、在当今…的时代、赋能、助力、生态、闭环、抓手。用平实的动词/名词替换。
- **意义膨胀 / 公式化结尾** — 不写"stands as a testament""彰显了…的重要性""为…写下浓墨重彩的一笔"，也不写"展望未来 / 相信在不久的将来 / Despite these challenges"式收尾。技术内容讲完就停。
- **回避系动词** — 写"靶机开了 WinRM"（is/are/有），别用 boasts/features/serves as。
- **拼贴修辞** — 不要"not only… but also"、不要凑三段排比、不要"X 是 Y 的 Z"格言体、不要制造出来的短句 staccato（"没有预警。没有机会。"）。真有几点就说几点。
- **模糊出处** — "业内普遍认为 / researchers believe" → 换成 CVE 号、advisory、`@handle`，或删。
- **标题党式排版** — 英文标题 sentence-case，标题/列表不加 emoji，不用 `**标签：** 一句话` 行内标题式 bullet，加粗只留给极少数真正的关键术语。
- **聊天残留 / 填充短语** — 删"希望这对你有帮助""让我们深入了解一下""首先/其次/最后"脚手架；"in order to"→"to"、"为了能够"→"为了"；不叠加限定（"could potentially possibly"）。

**客观专业 / AI 味自查（发布前对着自己的草稿逐条问）：**

- 段落是不是都一样长、都一样的复合句式？插一两句短的进去。
- 有没有解释了每个渗透测试者都懂的东西（Kerberoast / DCSync / 非约束委派是什么）？删掉。
- 解释深度有没有随难度变化？例行步骤一句话，真正的难点才展开成段。
- 是不是每个小节都用同一句式开头（先… / 第一件事是…）？换开头。
- 有没有 '为什么…？' 自问自答、第一步/第二步 机械编号硬套在耦合链上？改成叙述。
- 有没有为了显得接地气而硬塞口语（薅/收工/心里有底）或标题双关钩子？删。
- 写到的 friction 是真发生的还是为了"有人味"编的？编的删。
- 有没有某个复杂概念其实一张概念图就能讲清、却在硬堆字？能出图就出图。

### Register 1 — HTB machine writeup

Path: `content/hackthebox/machines/<Box>/index.md` (page bundle: `index.md` + images). This is the most common register and has a **fixed, ordered structure**. Do not reorder it.

**Front matter:** `title`, `weight` (negative — controls sidebar order), `date`, `tags`. **No `authors` block** (docs layout doesn't render it). Tags are lowercase-hyphenated and encode **difficulty** + **infrastructure** + **attack technique**; introducing a new technique tag also means adding a card to the relevant `_index.md` (see Architecture).

Body, in this exact order:

**(a) 排名图 — rank achievement image, first thing on the page.**
```
![<Box>_rank.png](https://labs.hackthebox.com/achievement/machine/preview/697550/<N>.png)
```

**(b) 简要流程图 — brief attack-flow diagram.** You do **not** draw it. Instead, from the box's ordered attack steps, emit a ready-to-copy codex prompt inside a fenced `text` block, immediately followed by the image placeholder `![流程图](flow.png)` where the rendered PNG will go. Add one line telling the owner what to do: *"把下面这段丢进 codex TUI（`Use $ian-xiaohei-illustrations …`）跑出 `flow.png`，放到本目录。"* Fill 【靶机名称】, 【有序攻击步骤】 (the real ordered chain, each step naming its technique/tool/CVE), and 【输出文件名】 before emitting:

```text
请使用 $ian-xiaohei-illustrations 技能（github.com/helloianneo/ian-xiaohei-illustrations 的小黑 Xiaohei 风格），为下面这篇 HackTheBox 靶机 writeup 生成一张"攻击流程图"（attack-flow diagram），构图类型采用该仓库 composition-patterns 中的 "Workflow / 地图路线"。

【靶机名称】
<Box>

【有序攻击步骤（从入口到最终提权，按顺序列出）】
步骤1 → 步骤2 → 步骤3 → …（每步写明所用技术/工具/漏洞，如 Nmap 扫描 → 目录爆破 → Kerberoast → CVE-XXXX-XXXX → 提权至 root/SYSTEM）

【构图要求】
- 把以上步骤画成一条清晰的单向路径：步骤少时从左到右，步骤多横向放不下时改为从上到下。整体只前进不绕圈、不交叉。
- 路径上每个节点配一个简短的手写中文标注，写明该步骤所用的技术/工具/漏洞名称，每条 2-8 字，全图标注总数控制在 5-8 处以内。
- 小黑（黑色实心小人、白色圆点眼睛、细腿、面无表情）必须是路径上真正在"动手"的角色（翻墙、撬锁、爬梯子、拆结构、搬箱子），对应各步骤性质，不能站在旁边当装饰。
- 起点和终点要有明确视觉区分（起点画门/墙表示外部立足点，终点画箱子/王冠/旗帜表示最终权限），关键突破点各配一个贴合技术含义的小隐喻（权限提升=爬梯子，密码破解=撬锁，横向移动=走独木桥）。

【视觉风格（严格遵循 style-dna）】
- 纯白背景，不要纹理、渐变、阴影。
- 黑色手绘线稿为主，线条带轻微手抖感，像做技术的人在白纸上随手画的草图；不要商业插画、PPT 信息图、正式流程图、卡通风格。
- 主体占画面 40%-60%，至少保留 35% 留白。
- 颜色只用黑（主体结构）、橙（流程走向/箭头）、红（风险点/关键漏洞）、蓝（补充说明）四色，克制使用。
- 画面左上角不要放分类标题文字。

【输出要求】
- 横版 16:9，直接调用图像生成工具产出真实图片，不要只用文字描述。
- 保存为 PNG，文件名：flow.png。
- 生成完成后回复文件的完整保存路径。
```

![流程图](flow.png)

**(c) 文字版流程 — concise ordered text walkthrough.** A numbered list of the whole chain, foothold → each pivot → root, so a reader grasps the path in ~20 seconds before any detail. Keep each item to one line naming the technique. Example:
```
1. 立足：匿名 SMB 拿到备份，读出 svc_web 凭据
2. 横向：svc_web 对 michael 有 ForceChangePassword，改密拿下
3. 提权：michael 属于 DnsAdmins，DLL 注入 DNS 服务提权至 SYSTEM
```
Also notate AD attack paths in BloodHound edge form in a code block where relevant: `olivia -[GenericAll]-> michael -[ForceChangePassword]-> benjamin`.

**(d) 正文细节 — detailed chronological narrative.** The full walkthrough in the tight intent→command→result rhythm: one line of intent → command block → concrete result, repeated to root. Lead with the full `nmap` port output in a code block. At **each pivot** add a why-sentence — why that service/ACL/misconfig is exploitable and how it chose the next step (*"michael 在 michael 组里对 benjamin 有 ForceChangePassword，所以不用知道原密码就能直接改，这是拿下下一跳的最短路径"*) — not on every step, only the turning points. Keep code blocks short and single-purpose; let asciinema casts (`{{< asciinema file="…" >}}`) carry full-session evidence separately from prose.

### Register 2 — technique cheatsheet

Path: `content/blog/<Technique>.md`. Compact three-part skeleton: `## 原理` (1–2 sentences on the mechanism) → `## 相关工具` (each tool name followed by its command block) → `## 参考链接` (numbered external links). When a topic has confusable near-synonyms (NT hash vs NTLM vs Net-NTLM; TGT vs TGS vs service ticket), add a short terms section up front so later prose uses precise names without re-explaining. **Front matter:** `title`, `date`, `authors` (name/link/image), `tags`; add `draft: true` while WIP, optional `weight`/`description`.

### Register 3 — long-form essay / methodology

Path: e.g. `content/blog/Incremental-learning.md`. Numbered headings (`## 1.`, `### 1.1`), optional blockquote epigraph with an attribution line, a `<!--more-->` summary break near the top, **bold** for key takeaways, liberal inline links. Follow the concept → mechanism → exploitation → limits/mitigation → conclusion arc: teach the legitimate mechanism to completion before any attack, and for any attack technique add a short "适用条件 / 局限" section (why it works, where it stops working, how defenders detect or block it) rather than tacking on a bullet list. Same blog front matter as Register 2.

### Bilingual

Default output is zh-CN. An English mirror is a sibling file with a `.en.md` suffix (filename-based translation, e.g. `_index.en.md`), **not** a `content/en/` directory.

## Deployment

Two independent pipelines are configured:
- **GitHub Pages** (primary) — `.github/workflows/pages.yaml` builds with Hugo extended on every push to `main` and deploys via `actions/deploy-pages`.
- **Netlify** — `netlify.toml` builds with `hugo --gc --minify -b ${DEPLOY_PRIME_URL}`.

Both build from source; `public/` and `resources/` are gitignored build artifacts (do not hand-edit them). `enableGitInfo: true` means the "last modified" date shown on pages comes from git history, so commits should be scoped meaningfully.

## Conventions

- Commit messages in this repo are short and content-oriented (e.g. `Add Gavel`, `Update index`, `Delete Active Machines writeup`).
- Comments/giscus, Google Analytics, and social/sponsor links are wired through `hugo.yaml` `params` — configuration changes live there, not in templates.
