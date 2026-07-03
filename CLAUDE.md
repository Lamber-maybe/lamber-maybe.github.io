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

This blog's posts are auto-drafted by an agent from raw material the owner pastes in (terminal logs, scan output, notes). The output must read as if the owner wrote it by hand — one **consistent** voice, fluent natural 简体中文, no generic-tutorial tone, no AI slop. **The goal is not to imitate the owner's old posts:** those drift (across 22 machine writeups — three different section-numbering schemes, person ranging from none to 我们×26). You cannot fix drift by imitating drift. Stability comes from a fixed set of decisions, not the feel of the moment, so don't mimic old files — conform to the **声音基准 (Voice Charter)** below, which nails down every choice that drifts, then verify against it. The site has **three registers** (below) — pick the one that fits and follow its structure exactly. And the bar is higher than the owner's average post: match the register, beat the craft.

### 声音基准（Voice Charter — 每篇必须符合，逐条可判定）

这些不是风格建议，是二元可判定的硬决策——每条都能对着草稿回答"符合/不符合"。文风漂移就死在这张表上。

1. **人称：无人称客观。** 不出现"我/我们"。动作用主动动词直接陈述：`先用 Guest 空口令枚举 SMB，NETLOGON 可读，拿到 users.bat。` 不写"我先用…"，也不写被动的"SMB 被枚举"。无人称不等于操作手册腔——靠主动动词和第 2 条的判断保持人味。
2. **语域：克制、专业、简练，但每个转折点补一句有信息量的主观判断。** 判断陈述成事实，不带"我觉得"：`这里用 krbrelayx 而不是 ntlmrelayx，因为要接的是转发过来的 Kerberos TGT，落 ccache。` / `这套权限组合在真实环境几乎见不到。` 判断必须携带信息，绝不为 casual 而 casual。
3. **开头：一句洞见钩子。** 排名图后第一句点出"这台靶真正非常规的那一点"，不写"本文将介绍…"、不写摘要罗列、不拿靶机名玩双关、不写免责声明或过度谦虚的套话。
4. **命令真实、禁占位符。** 每条命令带真实值可复制，输出贴真实回显，凭据行内写 `user:pass`（如 `emily:UXLCI5iETUsIBoFVTj8yQFKoHjXmb`）。素材里缺的（比如没给 nmap 输出）——**问博主要，绝不编、绝不留 `<...>` / "端口表贴这里" / TODO**。
5. **术语固定不换词。** 工具/技术名用英文标准写法（`bloodhound` / `netexec` / `impacket` / `Kerberoast` / `RID` / `SID` / `ForceChangePassword` / `ADCS ESC1`），从不译成中文；一个概念认准一个词，全篇不同义替换（不 payload/exploit/attack vector 轮着换）。
6. **WHY 在 HOW 前（硬规则）。** 每个转折先给让它成立的心智模型（协议规范/权限模型/编码/补丁改了什么），再贴命令。贴命令不讲成因就是操作手册；讲清原理读者才能迁移到没见过的场景。
7. **解释密度分层（读者不都是老手，但 writeup 不是教程）。** 人人都懂的基础（nmap 是什么）不提。非平凡技术（Kerberos relay、ADCS ESC1、非约束委派、Kerberoast、DCSync…）在 **writeup 里**只给"点名 + 一句话原理 + 链接到该技术的专文"，不塞整段协议科普；只有"这台靶真正非显然、且它独有"的那一点才在 writeup 里展开，锚定到已贴出的工具输出（指向 certipy / bloodhound / `whoami /priv` 里那一行证据）。把原理讲透留给**专文**（Register 2/3），writeup 里用一句原理 + 一个 `[名字](/blog/Slug)` 链过去，读者想深入点链接即可。
8. **一段一个意思，首句即结论。**
9. **死路只写真的。** 真报错/版本坑/等待才写，简短点到（`DNS 记录约 3 分钟后才生效`）；跑得干净就一句"整条链一次打通"或什么都不说，绝不为"有人味"编弯路。
10. **收尾不写总结。** 停在 PoC/截图或参考链接（22 篇里 0 篇写总结，这条只是把已有习惯钉死）。真要收，只留 2–3 条利用的核心条件，不整段复述。
11. **标点与链接：直引号（`"" ''`），破折号（`—` `–`）不当逗号用**（换成逗号/句号/冒号/括号，发布前 grep 这个字符）。交叉链接用真实 Markdown 链接 `[Kerberoast](/tags/kerberoast/)`，绝不用 `[[wikilinks]]`（本站不渲染）。
12. **章节骨架：Delegate 式图驱动。** 机器 writeup 一律：排名图 → 洞见钩子 → 简要流程图 → 文字版流程 → `### 0x01…` 正文细节 → 参考链接，难点配概念图（见 Register 1）。技术/漏洞分析类博客文同样用 `0x01`、`0x02` 十六进制编号。

### 黄金样例（gold specimen — 照这个语气、密度、节奏写，不是照内容）

没有哪篇旧文完美符合基准，所以语气锚点是这段刻意写出来的样例，不是某篇旧文。

**AI 腔（反面，别这么写）：**
> 在获得初始立足点之后，我们需要进行横向移动。值得注意的是，BloodHound 作为一款强大的攻击路径分析工具，能够帮助我们清晰地识别出攻击向量——通过深入分析发现 A.Briggs 对 N.Thompson 拥有 GenericWrite 权限，这为我们的后续攻击提供了绝佳的机会。

毛病：`我们`（违反 #1）、`值得注意的是` / `作为一款强大的…工具` / `绝佳的机会`（AI 高频词+意义膨胀）、解释了读者都懂的 BloodHound（违反 #7）、破折号当逗号（违反 #11）。

**目标声音（照这个写）：**
> `whoami /priv` 亮出两行平时见不到的权限：`SeMachineAccountPrivilege` 和 `SeEnableDelegationPrivilege`。后者是这台靶唯一真正非常规的地方：`是否信任委派`这个属性默认只有域管能改，这里却下放给了一个普通域用户。配合前者能凭空造机器账户，两个凑齐就能自己造一台机器并设成非约束委派。这种组合在真实环境几乎见不到。

好在哪：无人称、命名技术不解释、WHY 前置、一句判断收尾、长短句交替。

### 写作流程（每篇必走，别跳步）

初稿一定带 AI 腔和流水账，别指望一遍到位——**稳定的产出来自第 4 步的三遍改写，不来自初稿。**

1. **读素材 + 读基准。** 起草前重读上面的《声音基准》和《黄金样例》锁定语气。素材不全（缺 nmap、缺某步输出）先问博主补齐，不脑补。
2. **列骨架 + 查专文。** 按对应 Register 搭空架子（机器 writeup = 第 12 条的 Delegate 式图驱动）。列出用到的非平凡技术：有专文的用 `[名字](/blog/Slug)` 链过去；**没有专文的，提醒博主要不要现在补一篇**，博主同意后再联网搜资料（RFC/源码/advisory）、按 Register 3 写出来，别自作主张悄悄建 stub。
3. **写初稿。** WHY 在 HOW 前，真实命令+真实输出，一段一个意思首句即结论。
4. **改三遍**（产出稳定的关键）：
   - **第一遍 去味**：逐句对照下面《AI 腔自查表》——翻译腔、生造搭配、破折号、AI 高频词、公式化开头结尾、平掉的解释密度、机械编号。判断标准：一句话会让你脑子里先冒出对应英文、或读到会绊一下，就是翻译腔，换成会脱口而出的说法。
   - **第二遍 抬工艺**：洞见前置了吗？每个转折补上 why 了吗？例行动作压成一句、难点展开成段了吗？最难的机制能不能交给一张概念图而不是一堵字？流水账（每条扫描、每次死点击）砍干净了吗？（目标是比旧文更好，不是复刻旧文。）
   - **第三遍 对基准**：逐条过《声音基准》12 条，重点盯人称（无"我/我们"）、无占位符、术语没换词、没写总结段、破折号没当逗号。
5. **核实。** 命令真实可复制、每个"打通了"都有输出/截图撑着；流程图/概念图的 codex prompt 填好了参数（靶机名、有序步骤、概念机制），没留空模板。

### 语气与工艺（基准之外，写初稿和第 4 步第二遍时用）

- **补丁—绕过叙事（vuln/CVE 文）。** 漏洞史类文章按 CVE/版本顺序做脊柱，每个修复先说厂商改了什么，再说怎么被绕过，逐版本重复——把多 CVE 列表串成一个连续故事。
- **展示失败的尝试，再转折。** 硬骨头小节（编码不匹配、exploit 没打响、假设错了）叙述排除过程：`先怀疑是 SQL 注入，但注入点回显正常，排除；转而看 …`。调试启发比干净路径教得多，也更诚实（前提是真发生过，见基准 #9）。
- **具体压过抽象，show don't tell。** 用确切的 payload/请求/报错替掉形容词式总结（"系统很脆弱"）。让截图或抓取的输出承担"打通了"的证明——一句铺垫配一张证据图（弹计算器、secretsdump 输出、shell 提示符），别用散文复述结果。
- **标注适用范围（两头都标）。** 开头说清什么会变（`Jenkins 版本和插件差异较大，利用细节可能不同`），结尾把结果钉到测试的版本/环境。
- **重要结论前置（分析类文）。** 技术/漏洞分析把"这是什么漏洞、影响多大"放进第一屏，让读者几秒内决定是否读下去，之后按重要性递减展开。
- **归属用 @handle。** 复用或基于他人工具/思路时内联署名（`这里用 @rebeyond 的 JNDInjector`），把文章放进 CN 安全研究社区里。
- **砍初稿。** 只留推动论证的细节，删流水账。初稿写完逐句问"删掉会影响理解吗"，一般能砍一半。

### AI 腔自查表（写作流程第 4 步第一遍"去味"逐条对照）

这是上面写作流程第 4 步第一遍改写要逐句比对的清单，不是泛读的背景。目标语域是**客观、专业、简练**（objective / professional / concise），不是插科打诨。反 AI 味靠的是精准和恰到好处的克制，**不是**靠俚语、玩梗、卖萌。真正的 AI 味不在词汇层，而在**结构与节奏**：解释密度平、句式一个模子、每小节同一个开头、全程一次通关无挫折。先治这些，再治词。

一条主线先说清：**保留"为什么"（读者要靠它记住），复杂概念也要讲得懂，但要简练、客观——写得像专业人，不像聊天，也不像教科书；真正难讲的概念交给一张图，而不是一堵墙的字。**

**深层 AI 味（headline tells — 这些比词表重要，逐条自查）：**

- **解释密度要不均匀（explain only the non-obvious）。** 默认读者在打 HTB 中等难度靶机。**凡是渗透测试者都懂的东西一律不解释**：什么是 Kerberoast / DCSync / 非约束委派 / GenericWrite、SPN→TGS→哈希→离线爆破的链条、为什么 Guest 可读的 `NETLOGON` 值得翻——点名技术，然后往下走。把整段解释的篇幅**只留给这台靶机真正非显然的那一点**（例如"为什么一个普通域用户手里会有 `SeEnableDelegationPrivilege`"）。解释的深度必须随难度浮动：例行动作一句带过，难点才展开。每个小节都背同样重量的"论证"，节奏就被压平了——那是 AI。讲"为什么"时**锚定到已经贴出的工具输出**（指向 certipy / bloodhound / `whoami /priv` 里那一行证据），不要写一段脱离任何命令、放到哪篇 writeup 都成立的协议科普。

- **节奏要有变化（rhythm，not vocabulary）。** 长短句交替，别每一拍都用连接词（所以 / 而 / 但 / 也就是说）兜成一个平衡的复合句。允许一句短的落地："整条链一次打通。" 禁掉收尾复述 tic（用"也就是说"把上一句换句话重说一遍）。禁掉 **'为什么…？'自问自答**式的段落/小节开头——把事实平铺直叙，别摆问答台。禁掉给紧耦合工具链硬套的**机械序号（第一步/第二步/第三步）**：让过渡句承接顺序（"造完机器账户，接着挂 SPN 和 DNS 记录，krbrelayx 起好监听再扔 printerbug"），**只有当顺序本身是重点时**（必须按序执行的清单）才编号。代码块是真正的结构，散文负责流动，不负责数数。别让每个小节都用同一套骨架开头（"先…/第一件事是[动作]+理由"），换开头。

- **语域要客观专业（register）。** 度量衡是"测评报告 / 技术复盘"，不是朋友圈。删掉硬贴上去的口语和表演性俚语：**薅、收工、心里有底、老套路**这类零信息量的"显得接地气"补丁。不要拿靶机名玩双关当钩子（"Delegate 这名字把考点写脸上了"），不要在第一条命令之前先来个"真正的钥匙不是 X 而是 Y"的论点铺垫——**直接从第一个动作开始**（贴 nmap、跑枚举）。语域要**全程一致**：别在一句教科书腔的句子里突然塞一个网络流行词，那个落差本身就是 tell。一句**真实、有信息量的判断**是加分且显专业的（"这套权限组合在 CTF 外基本不现实"、"这里选 krbrelayx 而不是 ntlmrelayx 是因为要落 TGT 到 ccache"），但判断必须携带信息，**绝不为了casual而casual**。

- **摩擦只写真的（friction）。** 真实的死路、报错、版本坑、等待——**只在真发生时**写，平铺直叙、简短点到（"DNS 记录约 3 分钟后才生效"、"krbrelayx 第一次盐值大小写不对，票解不开，翻源码才发现 REALM 要大写"）。**绝不为了'有人味'而编造**弯路。如果这次跑得很干净，要么一句话说明（"整条链一次打通，没绕路"），要么什么都不说——别硬造一个"其实没发生"的翻车。

- **翻译腔与生造搭配（translationese & forced collocations）。** 这类不同于上面的结构性 tell，也不同于语域小节抓的"硬凑口语/俚语"——它藏在单句内部：语序、量词、比喻是从英文直译或按英文构词法硬拼出来的，语法挑不出错，但中文母语者不会这样组词，读到会绊一下。实例：
  - "BloodHound 第一条边就够用" → "BloodHound 里这条边就够用"：给单条论据编号是英文 "the first X" 的计数框架，暗示后面还有第二条要排查；中文介绍一条边不需要先编号。
  - "是否可信任委派这个开关默认只有域管能拨" / "给它拨上 `TRUSTED_FOR_DELEGATION`" / "监听起好" → "这个属性默认只有域管能改" / "给它加上 `TRUSTED_FOR_DELEGATION`" / "监听跑起来"：把抽象标志位、后台进程说成物理开关能"拨"、"起好"，是 flip a switch 式比喻和生造动补的直译痕迹，中文说这些动作只会用"改/加/开/跑"。
  - "把它设成可信任非约束委派" / "造一台这样的机器" → "把它设成非约束委派" / 直接重复名词（如"造一台非约束委派机器"）："可信任非约束委派"是逐词拼出 trusted for unconstrained delegation，"非约束委派"本身已含信任关系不用再叠一层；"这样的"回指前一句属性也是英文代词复现的搬运，中文更习惯把名词说实。
  - "动手部分是一条紧耦合的链" / "喂盐值和口令让它自己算" → "这几步环环相扣，前一步没做成后面就走不下去" / "给它盐值和口令让它自己算"：tightly-coupled 是软件工程术语硬套进手动操作步骤，"喂"是拟人化投喂的直译，都是跨领域硬借的比喻，除非作者自己以前的 writeup 里确实这样用过。
  - "`DC1` 认证时得能解析到我" → "前提是 `DC1` 认证时能解析到我"："得"和"能"两个情态词叠用不是中文会连用的搭配，是英文 must be able to 拆开硬翻；换成"前提是……能……"把逻辑摆明就顺了。
  动词选最朴素的，别借软件工程黑话：一个动词或比喻如果是"想出来的"、显得巧妙或书面，优先换成渗透测试者不假思索会用的基本动词（开/给/挂/连/改/加）；tightly-coupled、pipeline、chain 这类英文软件工程隐喻不要顺手套进攻击叙事，没有先例就不引入。

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

### Register 1 — HTB machine writeup

Path: `content/hackthebox/machines/<Box>/index.md` (page bundle: `index.md` + images). This is the most common register and has a **fixed, ordered structure**. Do not reorder it.

**Front matter:** `title`, `weight` (negative — controls sidebar order), `date`, `tags`. **No `authors` block** (docs layout doesn't render it). Tags are lowercase-hyphenated and encode **difficulty** + **infrastructure** + **attack technique**; introducing a new technique tag also means adding a card to the relevant `_index.md` (see Architecture).

Body, in this exact order:

**(a) 排名图 — rank achievement image, first thing on the page.**
```
![<Box>_rank.png](https://labs.hackthebox.com/achievement/machine/preview/697550/<N>.png)
```

**(b) 洞见钩子 — one-sentence insight hook (Voice Charter #3).** 排名图后紧跟一句话，点出这台靶真正非常规的那一点，不是摘要、不是"本文将介绍"。例：*"Delegate 立足点在 Guest 空口令可读的 `NETLOGON`，提权的核心是一个普通域用户手里本不该出现的 `SeEnableDelegationPrivilege`。"*

**(c) 简要流程图 — brief attack-flow diagram.** You do **not** draw it. Instead, from the box's ordered attack steps, emit a ready-to-copy codex prompt inside a fenced `text` block, immediately followed by the image placeholder `![流程图](flow.png)` where the rendered PNG will go. Add one line telling the owner what to do: *"把下面这段丢进 codex TUI（`Use $ian-xiaohei-illustrations …`）跑出 `flow.png`，放到本目录。"* Fill 【靶机名称】, 【有序攻击步骤】 (the real ordered chain, each step naming its technique/tool/CVE), and 【输出文件名】 before emitting:

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

**(d) 文字版流程 — concise ordered text walkthrough.** A numbered list of the whole chain, foothold → each pivot → root, so a reader grasps the path in ~20 seconds before any detail. Keep each item to one line naming the technique. Example:
```
1. 立足：匿名 SMB 拿到备份，读出 svc_web 凭据
2. 横向：svc_web 对 michael 有 ForceChangePassword，改密拿下
3. 提权：michael 属于 DnsAdmins，DLL 注入 DNS 服务提权至 SYSTEM
```
Also notate AD attack paths in BloodHound edge form in a code block where relevant: `olivia -[GenericAll]-> michael -[ForceChangePassword]-> benjamin`.

**(e) 正文细节 — detailed chronological narrative, split into `### 0x01`、`### 0x02`… subsections, one per pivot.** Each subsection: one line of intent — **impersonal** (`先枚举 SMB`, never `我先枚举`) — → command block → concrete result, to root. Lead with the **full, real** `nmap` port output pasted in a code block — never a `# 端口表贴这里` placeholder; if the raw material lacks it, ask (Voice Charter #4). At **each pivot** add a why-sentence — why that service/ACL/misconfig is exploitable and how it picked the next step (*"michael 对 benjamin 有 ForceChangePassword，不用知道原密码就能直接改，这是拿下下一跳的最短路径"*) — only at turning points, not every step. On a non-trivial technique's first mention, link it to its deep-dive post with the repo's plain-Markdown convention — `[Kerberoast](/blog/Kerberoast)`, path matching the `content/blog/<Name>.md` filename — and keep only the one-sentence principle inline. When a mechanism is genuinely hard to explain in 2–3 sentences (unconstrained delegation leaking a TGT, an encoding mismatch), hand it to a concept diagram: emit the 概念图 codex prompt from 《AI 腔自查表》above, then `![…](concept.png)` — don't pile on words. Keep code blocks short and single-purpose; let asciinema casts (`{{< asciinema file="…" >}}`) carry full-session evidence separately from prose.

### Register 2 — technique cheatsheet

Path: `content/blog/<Technique>.md`. Compact three-part skeleton: `## 原理` (1–2 sentences on the mechanism) → `## 相关工具` (each tool name followed by its command block) → `## 参考链接` (numbered external links). When a topic has confusable near-synonyms (NT hash vs NTLM vs Net-NTLM; TGT vs TGS vs service ticket), add a short terms section up front so later prose uses precise names without re-explaining. **Front matter:** `title`, `date`, `authors` (name/link/image), `tags`; add `draft: true` while WIP, optional `weight`/`description`.

### Register 3 — long-form essay / methodology

Path: e.g. `content/blog/Incremental-learning.md`. Numbered headings (`## 1.`, `### 1.1`), optional blockquote epigraph with an attribution line, a `<!--more-->` summary break near the top, **bold** for key takeaways, liberal inline links. Follow the concept → mechanism → exploitation → limits/mitigation → conclusion arc: teach the legitimate mechanism to completion before any attack, and for any attack technique add a short "适用条件 / 局限" section (why it works, where it stops working, how defenders detect or block it) rather than tacking on a bullet list. Same blog front matter as Register 2. Writeup 链过来的深入讲解就用这个 register；讲解的结构与深度参照 [thehacker.recipes](https://www.thehacker.recipes/)（Theory→Practice、一技术一页）、[phith0n Java 安全漫谈](https://github.com/phith0n/JavaThings)（循序渐进不居高临下）、[leavesongs](https://www.leavesongs.com/)（从困境写推导思路），学结构不搬第一人称。动笔前可联网搜集 RFC/源码/advisory 再写。

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
