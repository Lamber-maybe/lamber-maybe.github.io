---
title: "Burp插件之 Param Miner"
toc: true
---

## 自用配置

| timeout: 120,000 | Add 'fcbz' cachebuster | Add dynamic cachebuster: [开] |
| --- | --- | --- |
| learn observed words | enable auto-mine | auto-mine headers |
| auto-mine cookies | auto-mine params | auto-nest params  |
| quantitative diff keys: time  | skip boring words | only report unique params |
| response-headers: [开] | response-body: [开] | request: [开] |
| use basic wordlist: [开] | use bonus wordlist | use assetnote params |
| use custom wordlist: [开] | custom wordlist path: extension/dict/words | bruteforce |
| skip uncacheable | dynamic keyload: [开] | max one per host |
| max one per host+status | probe identified params: [开] | scan identified params |
| fuzz detect: [开] | carpet bomb: [针对性测试外带的情况下开] | try cache poison: [开] |
| twitchy cache poison | identify smuggle mutations | try -_ bypass |
| rotation interval | rotation increment | force bucketsize： -1 |
| max bucketsize: 65,536 | max param length: 32 | lowercase headers: [开] |
| name in issue | canary | force canary: [配合 carpet bomb] |
| poison only | tunnelling retry count: 20 | abort on tunnel failure: [开] |
| baseline size: 4 | thread pool size: 8 | per-thread throttle: 0 |
| use key: [开] | key method: [开] | key path |
| key status: [开] | key content-type: [开] | key server: [开] |
| key input name: [开] | key header names | filter  |
| mimetype-filter | resp-filter | filter HTTP |
| skip vulnerable hosts | skip flagged hosts | flag new domains |
| report to organizer: [开] | confirmations: 5 | require consistent evidence: [开] |
| quantile factor: 2 | quantitative confirmations: 50 | include query-param in cachebusters: [开] |
| include origin in cachebusters: [开] | include path in cachebusters | include via in cachebusters: [开] |
| misc header cachebusters | custom header cachebusters | overlong-detection: [开] |
| auto-scan for proxyable destinations: [开] | mining: filter 500s | subdomains-builtin: [开] |
| subdomains-generic | subdomains-specific: 见文档，开 | external subdomain lookup: [开] |
| I read the docs | params: dummy: 特殊情况开 | dummy param name |
| params: query: [开] | params: body: [开] | params: xff |
| params: cookie | params: rest | params: scheme |
| params: scheme-host | params: scheme-path |  |

## 配置详解

- [ ]  timeout — 超时时间，保持默认就行
- [ ]  Add 'fcbz' cachebuster — 向所有出站请求添加静态缓存破坏器，以避免手动探测`缓存中毒漏洞`的时候影响其他用户（选了这个就可以放心大胆的直接测缓存中毒）— 感觉最好是忽略，使用纯粹的手动探测
- [ ]  Add dynamic cachebuster — 将动态缓存破坏器添加到所有请求，以避免看到缓存响应（测的时候不确定是否缓存成功，可以把上面那个设置取消勾选，然后勾这个，就可以生成一个新的缓存参数，这样就能看到未缓存的响应）— 感觉最好是忽略，使用纯粹的手动探测
- [ ]  learn observed words — 在 Burp 的 `passive scanning` 期间，记录 `response` 中看到的所有词，并在猜测参数时使用它们。（建议长期开启）
- [ ]  enable auto-mine — 自动对通过 `proxy` 的流量发起参数猜测攻击（推荐在目标不存在waf，且足够稳定不怕被打卦的时候启用）
    - [ ]  auto-mine headers — 猜测 headers
    - [ ]  auto-mine cookies — 猜测 cookies
    - [ ]  auto-mine params — 猜测 params
    - [ ]  auto-nest params — 当猜测 JSON 中的参数时，尝试在嵌套结构中更深入地猜测。可能不起作用。
- [ ]  quantitative diff keys — 使用时间信息来检测参数。禁用此功能以使参数挖掘器更快。// 这会覆盖 bulkScan 的设置。
- [ ]  skip boring words — 猜测 headers 的时候，跳过检查知名且通常不太令人兴奋的 header（不建议跳过，它的 boring words 里面包含了太多出过漏洞的 header）
- [ ]  only report unique params — 如果参数重复出现，仅报告参数一次，无论扫描了多少个端点（不建议开启，虽然参数名相同，但是在不同路由可能有不同功能）
- [ ]  response-headers — 从目标响应头中提取单词，并使用这些单词来猜测参数。（建议长期开启）
- [ ]  response-body — 从目标响应体中提取单词，并使用这些单词来推测参数。（建议长期开启）
- [ ]  request — 从目标请求中提取单词，并使用这些单词来猜测参数。强烈推荐。（建议长期开启）
- [ ]  use basic wordlist — 在猜测参数时，使用核心字典。（建议长期开启）
- [ ]  use bonus wordlist — 在猜测参数时，也使用通用字典。
- [ ]  use assetnote params — 在猜测参数时，也使用 assetnote 字典。（不建议开启，太大了，性能消耗严重）
- [ ]  use custom wordlist — 在猜测参数时，也使用自定义字典。（推荐 basic + custom，自定义字典可以从各路神仙的 github 以及公开漏洞报告中去提取收集）
- [ ]  custom wordlist path — 设置自定义字典的路径
- [ ]  bruteforce — 当所有字典用尽时，切换到无尽的纯暴力猜测。
- [ ]  skip uncacheable — 拒绝在不可缓存的响应上猜测参数。（不建议开启，开了之后只能挖掘缓存欺骗或者缓存污染了）
- [ ]  dynamic keyload — 在猜测参数时，从每个响应中提取单词加入到字典并继续猜测。非常强大但有点 bug。（建议长期开启）
- [ ]  max one per host — 每个主机只处理一个请求，不会进入多线程中。（建议在极端受限环境下使用）
- [ ]  max one per host+status — 当主机和状态码已经出现过一次的情况下，不会继续攻击。（建议在极端受限环境下启用）
- [ ]  probe identified params — 尝试识别发现的参数期望的输入类型。（建议长期开启）
- [ ]  scan identified params — 对每个发现的参数启动 `active scan` 。（不建议开启，性能消耗严重，而且动静太大了）
- [ ]  fuzz detect — 使用特殊字符fuzz参数值，尝试触发报错。（建议长期开启）
- [ ]  carpet bomb — 单纯的发送参数，但不要试图识别或者报告有效的参数。这对 OAST 技术很有用。（测带外无敌了）
- [ ]  try cache poison — 在发现一个参数后，测试它是否可以用于缓存中毒。(建议长期开启)
- [ ]  twitchy cache poison — 使缓存中毒检测能够检测非反射输入（但更容易产生误报）。
- [ ]  identify smuggle mutations — Try using desync-style mutations to bypass header rewriting by front-ends
- [ ]  try -_ bypass — 将 header 名称中的所有 - 转换为 _ ，以绕过某些前端重写
- [ ]  rotation interval — This doesn't work
- [ ]  rotation increment — This doesn't work
- [ ]  force bucketsize — 指定单个请求中允许的参数数量。将此设置为 -1，以便 Param Miner 根据每个目标自动确定此值。
- [ ]  max bucketsize — 在服务器允许的情况下，Param Miner在单个请求中放入的最大参数数量。
- [ ]  max param length — 这与 bucketsize 检测一起使用
- [ ]  lowercase headers — 发送小写的 header 名称。对效率有好处。
- [ ]  name in issue — 在 issue 标题中包含参数名称
- [ ]  canary — 固定前缀用来检测输入反射
- [ ]  force canary — 覆盖canary的值，强制让每个参数都能带上指定的值 - 配合 `carpet bomb` 模式使用。（测带外无敌了）
- [ ]  poison only — 只报告可以 cache poisoning 的参数
- [ ]  tunnelling retry count — When attempting to mine a tunelled request, give up after this many consecutive failures to get a nested response
- [ ]  abort on tunnel failure — When attempting to mine a tunelled request, give up if the tunnel retry count is exceeded
- [ ]  baseline size — Number of requests sent to build the normal-response fingerprint
- [ ]  thread pool size — 线程数量，相当于并发HTTP请求数。
- [ ]  per-thread throttle — 发送每个HTTP请求前暂停 X 毫秒。（建议在极端受限环境下使用，不过感觉可以用代理池避免这个问题，burp能够和代理池联动吗？）
- [ ]  use key — 通过生成一个独特的 key，来避免连续扫描相同的 endpoint
    - [ ]  key method — 将 request method 添加到 key 中
    - [ ]  key path — 将 request path 添加到 key 中
    - [ ]  key status — 将 response status code 添加到 key 中
    - [ ]  key content-type — 将 response content-type 添加到 key 中
    - [ ]  key server — 将 response Server header 添加到 key 中
    - [ ]  key input name — 将 扫描过的参数名 添加到 key 中
    - [ ]  key header names — 将 所有的response header name 添加到 key 中（不包括 value）
- [ ]  filter — 只扫描包含指定字段的HTTP请求
- [ ]  mimetype-filter — 只扫描mimitype中包含指定字段的HTTP请求
- [ ]  resp-filter — 只扫描response中包含指定字段的HTTP请求
- [ ]  filter HTTP — 只扫描 HTTPS 请求
- [ ]  skip vulnerable hosts — 对于已经被标记为存在漏洞的host，跳过扫描（修改该配置的时候需要重新加载插件才会生效）
- [ ]  skip flagged hosts — 对于已经被标记为存在漏洞的host，跳过报告issue
- [ ]  flag new domains — adjust the title of issues reported on hosts that don't have any other issues listed in the sitemap (调整站点地图中未列出任何其他问题的主机所报告问题的标题)
- [ ]  report to organizer — 将检测到的漏洞发送到 Organizer
- [ ]  confirmations — 使用repeat确认响应是否一致的次数从而验证猜测出的参数是否真实有效，这个选项可以减少误报。（默认5次已经很够用了）
- [ ]  require consistent evidence — 忽略不太可靠的 issue。（默认打开降低误报）
- [ ]  quantile factor — 1-10，越大意味着误报越少，越小意味着误报越多。（默认是2）
- [ ]  quantitative confirmations — 使用repeat确认quantitative behaviour is consistent（貌似是最新研究成果时间攻击对应的配置）
- [ ]  include query-param in cachebusters
- [ ]  include origin in cachebusters
- [ ]  include path in cachebusters
- [ ]  include via in cachebusters
- [ ]  misc header cachebusters
- [ ]  custom header cachebusters
- [ ]  overlong-detection — use overlong dns labels for detection（使用超长的 DNS 标签进行检测）
- [ ]  auto-scan for proxyable destinations — If wildcard-routing is detected, try to enumerate accessible domains. To configure related settings, run 'ldentify proxyable destinations'
- [ ]  mining: filter 500s — Don't report hostnames that return a 50X status。（默认开启，感觉可以关闭）
- [ ]  subdomains-builtin — 使用内置字典来发现 proxyable destinations
- [ ]  subdomains-generic — 使用自定义字典来发现 proxyable destinations
- [ ]  subdomains-specific — 直接使用准备好的域名列表（强烈推荐配置上，会有超大范围的隐藏攻击面）
- [ ]  external subdomain lookup — 使用 columbus.elmasy.com 发现子域名
- [ ]  I read the docs — 确保看过文档 https://github.com/PortSwigger/param-miner/blob/master/proxy.md
- [ ]  params: dummy — 进行基于参数的扫描时，向每个请求添加一个虚拟参数
    - [ ]  dummy param name — 感觉可以结合类似于 debug=1 这种手法，来探测
- [ ]  params: query — 进行基于参数的扫描时，扫描query params
- [ ]  params: body — 进行基于参数的扫描时，扫描body params
- [ ]  params: xff — 进行基于参数的扫描时，扫描xff
- [ ]  params: cookie — 进行基于参数的扫描时，扫描cookie
- [ ]  params: rest — 进行基于参数的扫描时，扫描潜在的REST parameters
- [ ]  params: scheme — 进行基于HTTP/2的参数的扫描时，扫描 `:scheme header`
- [ ]  params: scheme-host — 进行基于HTTP/2的参数的扫描时，在 :scheme 里面创建一个假的 host 并扫描
- [ ]  params: scheme-path — 进行基于HTTP/2的参数的扫描时，在 :scheme 里面创建一个假的 path 并扫描
