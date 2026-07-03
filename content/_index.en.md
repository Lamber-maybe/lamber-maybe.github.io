---
title: Lamber
layout: hextra-home
seotitle: "Lamber's Blog — HackTheBox Writeups & Active Directory Pentesting Notes"
description: "HackTheBox writeups and Active Directory pentesting notes — Kerberoast, DCSync, ADCS ESC1/ESC7, ASREPRoast, Shadow Credentials, RID Cycling. Real thinking over copy-paste."
images:
  - /images/og-home.png
---

<div class="op">

<section class="op-section op-hero">
<div class="op-hero__lead">
<p class="eyebrow">Security Research · Writeups · Notes</p>
<h1 class="op-hero__title">HackTheBox Writeups<br><span class="g">&amp;</span> Active Directory Notes</h1>
<p class="op-hero__sub">Ex-CTF player · half-baked bug-bounty hunter · HackTheBox operator. Focused on Windows Active Directory exploitation — turning every rabbit hole into notes for my future self.</p>
<div class="op-cta-row">
<a class="op-btn op-btn--go" href="/hackthebox/machines/">Browse HackTheBox writeups →</a>
<a class="op-btn op-btn--ghost" href="/blog/">Read the blog</a>
</div>
</div>
<div class="term" role="img" aria-label="Terminal: Lamber, HackTheBox operator — 24 writeups, 15 notes, HTB Season 9 ranked">
<div class="term__bar"><span class="term__dot term__dot--r"></span><span class="term__dot term__dot--y"></span><span class="term__dot term__dot--g"></span><span class="term__title">lamber@blog: ~</span></div>
<pre class="term__body"><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__c">whoami</span></span><span class="term__line"><span class="term__o">Lamber — HackTheBox operator · AD / Windows</span></span><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__c">cat ~/.motto</span></span><span class="term__line"><span class="term__hi">"Now is always the best time to start."</span></span><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__c">ls ~/writeups | wc -l</span></span><span class="term__line"><span class="term__ok">18 writeups · 12 notes · HTB Season 9 ranked</span></span><span class="term__line"><span class="term__u">lamber@blog</span>:~$ <span class="term__caret" aria-hidden="true"></span></span></pre>
</div>
</section>

<section class="op-section">
<div class="op-band" style="padding-block: clamp(1.75rem, 4vw, 2.75rem);">
<h2 class="op-h2">Stats</h2>
<div class="stat-grid">
<div class="stat"><div class="stat__num" data-count="18">18</div><div class="stat__label">Writeups</div><div class="stat__sub">Windows · Active Directory</div></div>
<div class="stat"><div class="stat__num" data-count="12">12</div><div class="stat__label">Blog posts</div><div class="stat__sub">tooling · methodology · recaps</div></div>
<div class="stat"><div class="stat__num">S9</div><div class="stat__label">HTB Season 9 · Ranked</div><div class="stat__sub">profile 697550</div></div>
<a class="stat stat--badge" href="https://app.hackthebox.com/profile/697550" target="_blank" rel="noreferrer noopener"><img src="/images/htb-season9.png" width="800" height="400" loading="lazy" alt="HackTheBox Season 9 achievement badge · profile 697550"><span><div class="stat__label">Season 9 result</div><div class="stat__sub">app.hackthebox.com ↗</div></span></a>
</div>
</div>
</section>

<section class="op-section">
<h2 class="op-h2">Featured</h2>
<div class="lead">
<div class="lead__text">
<p class="lead__over">Hack The Box · Insane</p>
<h3 class="lead__title">Absolute</h3>
<div class="lead__chips"><span class="chip chip--diff chip--insane">INSANE</span><span class="chip">windows</span><a class="chip" href="/tags/asreproast/"><span class="chip__hash">#</span>asreproast</a><a class="chip" href="/tags/shadow-credentials/"><span class="chip__hash">#</span>shadow-credentials</a></div>
<p class="lead__hook">From ASREPRoast to the first set of credentials, then Shadow Credentials and Kerberos relaying — a full chain all the way to Domain Admin.</p>
<p class="lead__meta">2025-03 · ~15 min read</p>
<a class="op-btn op-btn--go" href="/hackthebox/machines/absolute/">Read the full writeup →</a>
</div>
<div class="term" aria-hidden="true">
<div class="term__bar"><span class="term__dot term__dot--r"></span><span class="term__dot term__dot--y"></span><span class="term__dot term__dot--g"></span><span class="term__title">absolute.htb — shadow credentials</span></div>
<pre class="term__body"><span class="term__line"><span class="term__p">$</span> <span class="term__c">certipy shadow auto -u svc_audit@absolute.htb -account winrm_svc</span></span><span class="term__line"><span class="term__o">[*] Targeting user 'winrm_svc'</span></span><span class="term__line"><span class="term__o">[*] Generating certificate &amp; adding Key Credential...</span></span><span class="term__line"><span class="term__ok">[+] NT hash for 'winrm_svc': aad3b435b514...:31d6cfe0d16a...</span></span><span class="term__line"><span class="term__p">$</span> <span class="term__c">evil-winrm -i dc.absolute.htb -u winrm_svc -H 31d6cfe0d16a...</span></span></pre>
</div>
</div>
</section>

<section class="op-section">
<h2 class="op-h2">Recent<span class="op-h2__right"><span class="op-dot" aria-hidden="true"></span><a class="op-link" href="/hackthebox/machines/">View all →</a></span></h2>
<div class="idx-wrap">
<div class="idx__col">
<p class="idx__head">HackTheBox writeups</p>
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
<p class="idx__head">Blog posts</p>
<ul class="idx">
<li class="idx__row"><span class="idx__date">2025-11</span><a class="idx__title" href="/blog/incremental-learning/">Incremental learning</a><span class="idx__tags"><span class="chip">methodology</span></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/blog/rid-cycling/">RID Cycling</a><span class="idx__tags"><a class="chip" href="/tags/rid-cycling/"><span class="chip__hash">#</span>rid-cycling</a></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/blog/awesome-decrypt-tools/">Decryption tool collection</a><span class="idx__tags"><span class="chip">tools</span></span></li>
<li class="idx__row"><span class="idx__date">2025-10</span><a class="idx__title" href="/blog/uv/">Managing Python tools with uv</a><span class="idx__tags"><span class="chip">tooling</span></span></li>
<li class="idx__row"><span class="idx__date">2025-09</span><a class="idx__title" href="/blog/bloodhound-tips/">BloodHound tips</a><span class="idx__tags"><span class="chip">bloodhound</span></span></li>
</ul>
</div>
</div>
</section>

<section class="op-section">
<div class="op-band" style="padding-block: clamp(1.75rem, 4vw, 2.75rem);">
<h2 class="op-h2">Techniques</h2>
<p class="matrix__sub">Click any tag to see the matching machines &amp; notes →</p>
<div class="matrix">
<div class="matrix__row"><span class="matrix__label">Difficulty</span><span class="matrix__chips"><a class="chip chip--diff chip--easy" href="/tags/easy/">easy</a><a class="chip chip--diff chip--medium" href="/tags/medium/">medium</a><a class="chip chip--diff chip--hard" href="/tags/hard/">hard</a><a class="chip chip--diff chip--insane" href="/tags/insane/">insane</a></span></div>
<div class="matrix__row"><span class="matrix__label">Infra</span><span class="matrix__chips"><a class="chip" href="/tags/windows/"><span class="chip__hash">#</span>windows</a><a class="chip" href="/tags/winrm/"><span class="chip__hash">#</span>winrm</a><a class="chip" href="/tags/mssql/"><span class="chip__hash">#</span>mssql</a></span></div>
<div class="matrix__row"><span class="matrix__label">Technique</span><span class="matrix__chips"><a class="chip" href="/tags/kerberoast/"><span class="chip__hash">#</span>kerberoast</a><a class="chip" href="/tags/dcsync/"><span class="chip__hash">#</span>dcsync</a><a class="chip" href="/tags/adcs-esc1/"><span class="chip__hash">#</span>adcs-esc1</a><a class="chip" href="/tags/adcs-esc7/"><span class="chip__hash">#</span>adcs-esc7</a><a class="chip" href="/tags/asreproast/"><span class="chip__hash">#</span>asreproast</a><a class="chip" href="/tags/shadow-credentials/"><span class="chip__hash">#</span>shadow-credentials</a><a class="chip" href="/tags/rid-cycling/"><span class="chip__hash">#</span>rid-cycling</a><a class="chip" href="/tags/pass-the-certificate/"><span class="chip__hash">#</span>pass-the-certificate</a><a class="chip" href="/tags/targeted-kerberoasting/"><span class="chip__hash">#</span>targeted-kerberoasting</a><a class="chip" href="/tags/group-policy-preferences/"><span class="chip__hash">#</span>group-policy-preferences</a></span></div>
</div>
</div>
</section>

<section class="op-section">
<h2 class="op-h2">About</h2>
<div class="about">
<div class="about__id">
<img class="about__avatar" src="/images/xiaolin.jpg" width="74" height="74" loading="lazy" alt="Lamber avatar">
<p class="about__bio">Ex-CTF player, half-baked bug-bounty hunter, HackTheBox operator. Anime &amp; FF14 fan, a textbook script kiddie. A believer in lifelong learning — "now is always the best time to start." Here I log every rabbit hole on my Windows Active Directory pentesting journey.</p>
</div>
<div class="about__aside">
<nav class="about__nav"><a class="op-link" href="/hackthebox/">HackTheBox →</a><a class="op-link" href="/blog/">Blog →</a><a class="op-link" href="/about/">Full bio →</a></nav>
<p class="about__spon">Enjoyed this? Buy me a coffee →</p>
<div class="social-row"><a href="https://github.com/Lamber-maybe/" target="_blank" rel="noreferrer noopener" aria-label="GitHub">{{< icon "github" >}}</a><a href="https://x.com/Lamber28793923" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter">{{< icon "x-twitter" >}}</a><a href="https://hackerone.com/lamber" target="_blank" rel="noreferrer noopener" aria-label="HackerOne">{{< icon "hackerone" >}}</a><a href="https://afdian.com/a/Lamber-maybe" target="_blank" rel="noreferrer noopener" aria-label="Sponsor on afdian">{{< icon "afdian" >}}</a><a href="https://ko-fi.com/lamber_maybe" target="_blank" rel="noreferrer noopener" aria-label="Ko-fi">{{< icon "kofi_symbol" >}}</a></div>
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
