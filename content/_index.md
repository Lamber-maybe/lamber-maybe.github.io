---
title: Lamber
layout: hextra-home
seotitle: "Lamber's Blog — HackTheBox 通关记录 & 域渗透（AD）学习笔记"
description: "记录 HackTheBox 靶机的完整通关思路与渗透学习笔记，专注 Windows 活动目录（Active Directory）渗透：Kerberoast、DCSync、ADCS ESC1/ESC7、ASREPRoast、影子凭据、RID Cycling。放弃无意义的复制粘贴，沉淀属于自己的思考。"
images:
  - /images/og-home.png
---

<div class="op">

<section class="op-section op-hero">
<div class="op-hero__lead">
<p class="eyebrow">Security Research · Writeups · Notes</p>
<h1 class="op-hero__title">HackTheBox 通关记录<br><span class="g">&amp;</span> 域渗透学习笔记</h1>
<p class="op-hero__sub">前 CTF 选手 · 半吊子赏金猎人 · HackTheBox 玩家。专注 Windows 活动目录（AD）渗透，把每一次踩坑与思路，沉淀成属于自己的思考。</p>
<div class="op-cta-row">
<a class="op-btn op-btn--go" href="/hackthebox/machines/">查看 HackTheBox 靶机 →</a>
<a class="op-btn op-btn--ghost" href="/blog/">阅读博客</a>
</div>
</div>
<div class="term" role="img" aria-label="终端窗口：Lamber，HackTheBox 域渗透玩家，24 台靶机、15 篇笔记、HTB Season 9 上榜">
<div class="term__bar"><span class="term__dot term__dot--r"></span><span class="term__dot term__dot--y"></span><span class="term__dot term__dot--g"></span><span class="term__title">lamber@blog: ~</span></div>
<pre class="term__body"><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__c">whoami</span></span><span class="term__line"><span class="term__o">Lamber — HackTheBox operator · AD / Windows</span></span><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__c">cat ~/.motto</span></span><span class="term__line"><span class="term__hi">「“现在”永远都是开始的最好时机」</span></span><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__c">ls ~/writeups | wc -l</span></span><span class="term__line"><span class="term__ok">18 台靶机 · 12 篇笔记 · HTB Season 9 上榜</span></span><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__caret" aria-hidden="true"></span></span></pre>
</div>
</section>

<section class="op-section">
<div class="op-band" style="padding-block: clamp(1.75rem, 4vw, 2.75rem);">
<h2 class="op-h2">战绩 · Stats</h2>
<div class="stat-grid">
<div class="stat"><div class="stat__num" data-count="18">18</div><div class="stat__label">靶机 Writeup</div><div class="stat__sub">Windows · Active Directory</div></div>
<div class="stat"><div class="stat__num" data-count="12">12</div><div class="stat__label">技术笔记</div><div class="stat__sub">工具 · 方法论 · 复盘</div></div>
<div class="stat"><div class="stat__num">S9</div><div class="stat__label">HTB 赛季排名 · 上榜</div><div class="stat__sub">profile 697550</div></div>
<a class="stat stat--badge" href="https://app.hackthebox.com/profile/697550" target="_blank" rel="noreferrer noopener"><img src="/images/htb-season9.png" width="800" height="400" loading="lazy" alt="HackTheBox Season 9 成就徽章 · profile 697550"><span><div class="stat__label">Season 9 战绩</div><div class="stat__sub">app.hackthebox.com ↗</div></span></a>
</div>
</div>
</section>

<section class="op-section">
<h2 class="op-h2">精选 Writeup · Featured</h2>
<div class="lead">
<div class="lead__text">
<p class="lead__over">Hack The Box · Insane</p>
<h3 class="lead__title">Absolute</h3>
<div class="lead__chips"><span class="chip chip--diff chip--insane">INSANE</span><span class="chip">windows</span><a class="chip" href="/tags/asreproast/"><span class="chip__hash">#</span>asreproast</a><a class="chip" href="/tags/shadow-credentials/"><span class="chip__hash">#</span>shadow-credentials</a></div>
<p class="lead__hook">从 ASREPRoast 摘取第一组凭据，经影子凭据（Shadow Credentials）与 Kerberos 中继层层递进，最终拿下域控的完整攻击链。</p>
<p class="lead__meta">2025-03 · 约 15 分钟阅读</p>
<a class="op-btn op-btn--go" href="/hackthebox/machines/absolute/">阅读完整过程 →</a>
</div>
<div class="term" aria-hidden="true">
<div class="term__bar"><span class="term__dot term__dot--r"></span><span class="term__dot term__dot--y"></span><span class="term__dot term__dot--g"></span><span class="term__title">absolute.htb — shadow credentials</span></div>
<pre class="term__body"><span class="term__line"><span class="term__p">$</span> <span class="term__c">certipy shadow auto -u svc_audit@absolute.htb -account winrm_svc</span></span><span class="term__line"><span class="term__o">[*] Targeting user 'winrm_svc'</span></span><span class="term__line"><span class="term__o">[*] Generating certificate &amp; adding Key Credential...</span></span><span class="term__line"><span class="term__ok">[+] NT hash for 'winrm_svc': aad3b435b514...:31d6cfe0d16a...</span></span><span class="term__line"><span class="term__p">$</span> <span class="term__c">evil-winrm -i dc.absolute.htb -u winrm_svc -H 31d6cfe0d16a...</span></span></pre>
</div>
</div>
</section>

<section class="op-section">
<h2 class="op-h2">近期 Writeup · Recent<span class="op-h2__right"><span class="op-dot" aria-hidden="true"></span><a class="op-link" href="/hackthebox/machines/">查看全部 →</a></span></h2>
<div class="idx-wrap">
<div class="idx__col">
<p class="idx__head">HackTheBox 通关记录</p>
<ul class="idx">
<li class="idx__row"><span class="idx__date">2025-11</span><a class="idx__title" href="/hackthebox/machines/rustykey/">RustyKey</a><span class="idx__diff chip chip--diff chip--hard">HARD</span><span class="idx__tags"><a class="chip" href="/tags/rbcd/"><span class="chip__hash">#</span>rbcd</a><a class="chip" href="/tags/readgmsapassword/"><span class="chip__hash">#</span>read-gmsa-password</a></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/hackthebox/machines/heist/">Heist</a><span class="idx__diff chip chip--diff chip--easy">EASY</span><span class="idx__tags"><a class="chip" href="/tags/winrm/"><span class="chip__hash">#</span>winrm</a><a class="chip" href="/tags/rid-cycling/"><span class="chip__hash">#</span>rid-cycling</a></span></li>
<li class="idx__row"><span class="idx__date">2025-03</span><a class="idx__title" href="/hackthebox/machines/manager/">Manager</a><span class="idx__diff chip chip--diff chip--medium">MEDIUM</span><span class="idx__tags"><a class="chip" href="/tags/adcs-esc7/"><span class="chip__hash">#</span>adcs-esc7</a><a class="chip" href="/tags/mssql/"><span class="chip__hash">#</span>mssql</a></span></li>
<li class="idx__row"><span class="idx__date">2025-03</span><a class="idx__title" href="/hackthebox/machines/authority/">Authority</a><span class="idx__diff chip chip--diff chip--medium">MEDIUM</span><span class="idx__tags"><a class="chip" href="/tags/adcs-esc1/"><span class="chip__hash">#</span>adcs-esc1</a><a class="chip" href="/tags/pass-the-certificate/"><span class="chip__hash">#</span>pass-the-certificate</a></span></li>
<li class="idx__row"><span class="idx__date">2025-02</span><a class="idx__title" href="/hackthebox/machines/escape/">Escape</a><span class="idx__diff chip chip--diff chip--medium">MEDIUM</span><span class="idx__tags"><a class="chip" href="/tags/mssql/"><span class="chip__hash">#</span>mssql</a><a class="chip" href="/tags/adcs-esc1/"><span class="chip__hash">#</span>adcs-esc1</a></span></li>
<li class="idx__row"><span class="idx__date">2025-01</span><a class="idx__title" href="/hackthebox/machines/administrator/">Administrator</a><span class="idx__diff chip chip--diff chip--medium">MEDIUM</span><span class="idx__tags"><a class="chip" href="/tags/targeted-kerberoasting/"><span class="chip__hash">#</span>targeted-kerberoasting</a><a class="chip" href="/tags/dcsync/"><span class="chip__hash">#</span>dcsync</a></span></li>
</ul>
</div>
<div class="idx__col">
<p class="idx__head">博客文章</p>
<ul class="idx">
<li class="idx__row"><span class="idx__date">2025-11</span><a class="idx__title" href="/blog/incremental-learning/">渐进学习</a><span class="idx__tags"><span class="chip">方法论</span></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/blog/rid-cycling/">RID Cycling</a><span class="idx__tags"><a class="chip" href="/tags/rid-cycling/"><span class="chip__hash">#</span>rid-cycling</a></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/blog/awesome-decrypt-tools/">密码解密工具合集</a><span class="idx__tags"><span class="chip">工具</span></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/blog/uv/">uv 管理 Python 工具包</a><span class="idx__tags"><span class="chip">环境</span></span></li>
<li class="idx__row"><span class="idx__date">2025-09</span><a class="idx__title" href="/blog/bloodhound-tips/">BloodHound 使用技巧</a><span class="idx__tags"><span class="chip">bloodhound</span></span></li>
</ul>
</div>
</div>
</section>

<section class="op-section">
<div class="op-band" style="padding-block: clamp(1.75rem, 4vw, 2.75rem);">
<h2 class="op-h2">攻击手法矩阵 · Techniques</h2>
<p class="matrix__sub">点击任意标签，查看对应靶机与笔记 →</p>
<div class="matrix">
<div class="matrix__row"><span class="matrix__label">难度</span><span class="matrix__chips"><a class="chip chip--diff chip--easy" href="/tags/easy/">easy</a><a class="chip chip--diff chip--medium" href="/tags/medium/">medium</a><a class="chip chip--diff chip--hard" href="/tags/hard/">hard</a><a class="chip chip--diff chip--insane" href="/tags/insane/">insane</a></span></div>
<div class="matrix__row"><span class="matrix__label">环境</span><span class="matrix__chips"><a class="chip" href="/tags/windows/"><span class="chip__hash">#</span>windows</a><a class="chip" href="/tags/winrm/"><span class="chip__hash">#</span>winrm</a><a class="chip" href="/tags/mssql/"><span class="chip__hash">#</span>mssql</a></span></div>
<div class="matrix__row"><span class="matrix__label">技术</span><span class="matrix__chips"><a class="chip" href="/tags/kerberoast/"><span class="chip__hash">#</span>kerberoast</a><a class="chip" href="/tags/dcsync/"><span class="chip__hash">#</span>dcsync</a><a class="chip" href="/tags/adcs-esc1/"><span class="chip__hash">#</span>adcs-esc1</a><a class="chip" href="/tags/adcs-esc7/"><span class="chip__hash">#</span>adcs-esc7</a><a class="chip" href="/tags/asreproast/"><span class="chip__hash">#</span>asreproast</a><a class="chip" href="/tags/shadow-credentials/"><span class="chip__hash">#</span>shadow-credentials</a><a class="chip" href="/tags/rid-cycling/"><span class="chip__hash">#</span>rid-cycling</a><a class="chip" href="/tags/pass-the-certificate/"><span class="chip__hash">#</span>pass-the-certificate</a><a class="chip" href="/tags/targeted-kerberoasting/"><span class="chip__hash">#</span>targeted-kerberoasting</a><a class="chip" href="/tags/group-policy-preferences/"><span class="chip__hash">#</span>group-policy-preferences</a></span></div>
</div>
</div>
</section>

<section class="op-section">
<h2 class="op-h2">关于 Lamber · About</h2>
<div class="about">
<div class="about__id">
<img class="about__avatar" src="/images/xiaolin.jpg" width="74" height="74" loading="lazy" alt="Lamber 头像">
<p class="about__bio">前 CTF 选手，半吊子漏洞赏金猎人，HackTheBox 玩家。二次元 &amp; FF14 玩家，标准的脚本小子。信奉持续学习——「现在永远都是开始的最好时机」。这里记录我在 Windows 域渗透路上的每一次踩坑与复盘。</p>
</div>
<div class="about__aside">
<nav class="about__nav"><a class="op-link" href="/hackthebox/">HackTheBox 靶场 →</a><a class="op-link" href="/blog/">技术博客 →</a><a class="op-link" href="/about/">完整介绍 →</a></nav>
<p class="about__spon">喜欢这些内容？请我喝杯奶茶 →</p>
<div class="social-row"><a href="https://github.com/Lamber-maybe/" target="_blank" rel="noreferrer noopener" aria-label="GitHub">{{< icon "github" >}}</a><a href="https://x.com/Lamber28793923" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter">{{< icon "x-twitter" >}}</a><a href="https://hackerone.com/lamber" target="_blank" rel="noreferrer noopener" aria-label="HackerOne">{{< icon "hackerone" >}}</a><a href="https://afdian.com/a/Lamber-maybe" target="_blank" rel="noreferrer noopener" aria-label="爱发电赞助">{{< icon "afdian" >}}</a><a href="https://ko-fi.com/lamber_maybe" target="_blank" rel="noreferrer noopener" aria-label="Ko-fi">{{< icon "kofi_symbol" >}}</a></div>
</div>
</div>
</section>

</div>

<script>
(function () {
  var els = document.querySelectorAll('.op [data-count]');
  if (!els.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  function tween(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0, start = null, dur = 1100;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.firstChild.nodeValue = Math.round(target * (p * (2 - p)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { tween(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(tween);
  }
})();
</script>
