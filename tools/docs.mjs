// Builds the docs wiki: docs-src/*.md -> docs/*.html + docs/*.md, llms.txt docs list, llms-full.txt. Usage: node tools/docs.mjs
// Adding a page = adding one .md file with front matter (title, description, section, order).
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from "node:fs";
import assert from "node:assert";

const BASE = "https://modryos.com";
const SECTIONS = ["Getting started", "Editors", "Things you can make", "Templates and samples", "Versions and loaders", "Publishing", "Troubleshooting", "Account and privacy", "FAQ", "Glossary"];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const slugify = (s) => s.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// shortcut: no nested lists, no raw HTML in Markdown. Upgrade to a real parser if pages need them.
function inline(s) {
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => { codes.push(`<code>${esc(c)}</code>`); return `\u0000${codes.length - 1}\u0000`; });
  s = esc(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+=(\d+)x(\d+))?\)/g, (_, alt, src, w, h) => `<img src="${src}" alt="${alt}"${w ? ` width="${w}" height="${h}"` : ""} loading="lazy">`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${u.replace(/^([^:#]+)\.md(#.*)?$/, "$1.html$2")}">${t}</a>`)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, "$1<em>$2</em>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[i]);
}
const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

function convert(md) {
  const lines = md.replace(/\r/g, "").split("\n");
  const out = [], toc = [], used = new Set();
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    let m;
    if (!l.trim()) { i++; continue; }
    if (l.startsWith("```")) {
      const lang = l.slice(3).trim(), code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++;
      out.push(`<pre><code${lang ? ` class="language-${esc(lang)}"` : ""}>${esc(code.join("\n"))}</code></pre>`);
    } else if ((m = l.match(/^(#{1,4}) (.+)/))) {
      const n = m[1].length;
      if (n === 1) out.push(`<h1>${inline(m[2])}</h1>`);
      else {
        let id = slugify(m[2]), k = 2;
        while (used.has(id)) id = `${slugify(m[2])}-${k++}`;
        used.add(id);
        if (n <= 3) toc.push({ level: n, id, text: m[2].replace(/[`*]/g, "") });
        out.push(`<h${n} id="${id}">${inline(m[2])}<a class="anchor" href="#${id}" aria-label="Link to this heading">#</a></h${n}>`);
      }
      i++;
    } else if (/^---+$/.test(l.trim())) { out.push("<hr>"); i++; }
    else if (l.startsWith(">")) {
      const q = [];
      while (i < lines.length && lines[i].startsWith(">")) q.push(lines[i++].replace(/^> ?/, ""));
      const kind = (q[0].match(/^\*\*(Note|Warning)\*\*/) || [])[1];
      const body = convert(q.join("\n")).html;
      out.push(kind ? `<aside class="callout ${kind.toLowerCase()}" role="note">${body}</aside>` : `<blockquote>${body}</blockquote>`);
    } else if (/^\s*\|/.test(l)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
      const [head, , ...body] = rows;
      out.push(`<div class="table-wrap"><table><thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    } else if (/^(- |\* |\d+\. )/.test(l)) {
      const ul = /^[-*] /.test(l), re = ul ? /^[-*] (.*)/ : /^\d+\. (.*)/, items = [];
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].match(re)[1]);
      out.push(`<${ul ? "ul" : "ol"}>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</${ul ? "ul" : "ol"}>`);
    } else {
      const p = [];
      while (i < lines.length && lines[i].trim() && !/^(#|```|>|- |\* |\d+\. |\s*\||---+$)/.test(lines[i])) p.push(lines[i++].trim());
      out.push(`<p>${inline(p.join(" "))}</p>`);
    }
  }
  return { html: out.join("\n"), toc };
}

function load(file) {
  const raw = readFileSync(`docs-src/${file}`, "utf8").replace(/\r/g, "");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  assert(m, `${file}: front matter missing`);
  const fm = Object.fromEntries(m[1].split("\n").map((l) => [l.slice(0, l.indexOf(":")).trim(), l.slice(l.indexOf(":") + 1).trim()]));
  for (const k of ["title", "description", "section", "order"]) assert(fm[k] !== undefined, `${file}: front matter "${k}" missing`);
  const body = m[2].trim();
  return { slug: file.replace(/\.md$/, ""), ...fm, order: Number(fm.order), body, ...convert(body) };
}

const pages = readdirSync("docs-src").filter((f) => f.endsWith(".md")).map(load);
const sectionIdx = (s) => (SECTIONS.includes(s) ? SECTIONS.indexOf(s) : s === "Home" ? -1 : SECTIONS.length);
pages.sort((a, b) => sectionIdx(a.section) - sectionIdx(b.section) || a.order - b.order || a.title.localeCompare(b.title));
const home = pages.find((p) => p.slug === "index");
assert(home, "docs-src/index.md is required");
const url = (p) => (p.slug === "index" ? "docs/" : `docs/${p.slug}`);
const href = (p) => (p.slug === "index" ? "./" : `${p.slug}.html`);
const bySection = (s) => pages.filter((p) => p.section === s && p.slug !== "index");

const navGroups = [
  { name: "Docs", list: [home] },
  ...[...SECTIONS, ...new Set(pages.map((p) => p.section).filter((s) => s !== "Home" && !SECTIONS.includes(s)))].map((s) => ({ name: s, list: bySection(s) })).filter((s) => s.list.length),
];
const nav = (cur) => `<nav class="docs-nav" id="docs-nav" aria-label="Documentation">
${navGroups.map((s) => `<h2>${esc(s.name)}</h2><ul>${s.list.map((p) => `<li><a href="${href(p)}"${p === cur ? ' aria-current="page"' : ""}>${esc(p.title)}</a></li>`).join("")}</ul>`).join("\n")}
</nav>`;

const sectionList = () => `<div class="docs-sections">${SECTIONS.map((s) => {
  const l = bySection(s);
  return `<section><h2 id="${slugify(s)}">${esc(s)}</h2>${l.length ? `<ul>${l.map((p) => `<li><a href="${href(p)}">${esc(p.title)}</a> - ${esc(p.description)}</li>`).join("")}</ul>` : "<p>Pages are coming.</p>"}</section>`;
}).join("")}</div>`;

const askBox = `<div class="ask" role="search" aria-labelledby="ask-h">
  <h2 id="ask-h">Ask the docs</h2>
  <p>Ask the docs - answers come from these pages. Nothing leaves this site.</p>
  <form id="ask-form"><label class="sr-only" for="ask-q">Your question</label><input id="ask-q" type="search" placeholder="For example: how do I add a recipe?" autocomplete="off"><button class="btn primary" type="submit">Ask</button></form>
  <div id="ask-out" aria-live="polite"></div>
</div>`;

const pageHtml = (p, idx) => {
  const prev = pages[idx - 1], next = pages[idx + 1];
  const canon = `${BASE}/${url(p)}`;
  const q = (who) => `https://${who === "gpt" ? "chatgpt.com/?q=" : "claude.ai/new?q="}${encodeURIComponent(`Read ${canon} and answer my question about Modryos: `)}`;
  const isHome = p.slug === "index";
  const crumbs = isHome ? "" : `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="./">Docs</a></li><li>${esc(p.section)}</li><li aria-current="page">${esc(p.title)}</li></ol></nav>`;
  const toc = p.toc.length > 1 ? `<nav class="docs-toc" aria-label="On this page"><h2>On this page</h2><ul>${p.toc.map((t) => `<li class="l${t.level}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join("")}</ul></nav>` : "";
  const title = isHome ? p.title : `${p.title} - Modryos docs`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${canon}">
<meta name="theme-color" content="#0d0f12">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Modryos">
<meta property="og:url" content="${canon}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:image" content="${BASE}/media/og-card.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<link rel="preload" href="../fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../site.css">
<link rel="stylesheet" href="../docs.css">
<link rel="stylesheet" href="../pagefind/pagefind-ui.css">
</head>
<body>
<a class="skip" href="#content">Skip to the page</a>

<header class="top scrolled">
  <div class="wrap">
    <a class="wordmark" href="../">Modryos<span>.</span></a>
    <nav aria-label="Main">
      <a href="../features.html">Features</a>
      <a href="./" aria-current="page">Docs</a>
      <a href="../faq.html">FAQ</a>
      <a href="../download.html">Download</a>
      <a class="hide-sm" href="https://github.com/Modryos/modryos">GitHub</a>
    </nav>
  </div>
</header>

<div class="docs-bar"><div class="wrap">
  <button class="docs-menu-btn" type="button" aria-controls="docs-nav" aria-expanded="false">Menu</button>
  <div id="search" role="search" aria-label="Search the docs"></div>
</div></div>

<div class="wrap docs">
  ${nav(p)}
  <main id="content" class="docs-main">
    ${crumbs}
    <article class="prose" data-pagefind-body>
      <h1>${inline(p.title)}</h1>
      ${p.html.replace(/^<h1>.*<\/h1>\n?/, "")}
      ${isHome ? `${askBox}\n${sectionList()}` : ""}
    </article>
    <div class="page-tools" aria-label="Page tools">
      <button type="button" id="copy-md">Copy page as Markdown</button>
      <a href="${q("gpt")}" target="_blank" rel="noopener">Ask ChatGPT about this page</a>
      <a href="${q("claude")}" target="_blank" rel="noopener">Ask Claude about this page</a>
      <span class="sr-only" id="copy-status" role="status" aria-live="polite"></span>
    </div>
    <nav class="prevnext" aria-label="Previous and next page">
      ${prev ? `<a class="prev" href="${href(prev)}"><span>Previous</span>${esc(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a class="next" href="${href(next)}"><span>Next</span>${esc(next.title)}</a>` : "<span></span>"}
    </nav>
    <!-- Slot for the future Modryos AI helper. Empty and hidden on purpose; nothing is loaded into it yet. -->
    <div id="docs-assistant" data-slot="modryos-ai" hidden></div>
  </main>
  ${toc}
</div>
<script type="application/json" id="page-md">${JSON.stringify(`# ${p.title}\n\n${p.body}\n`).replace(/</g, "\\u003c")}</script>

<div class="notice"><div class="wrap">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</div></div>
<footer>
  <div class="wrap">
    <span>&copy; 2026 Neryos. Minecraft is a trademark of Mojang Synergies AB.</span>
    <nav>
      <a href="../">Home</a>
      <a href="./">Docs</a>
      <a href="../terms.html">Terms</a>
      <a href="../privacy.html">Privacy</a>
      <a href="../beta-terms.html">Beta terms</a>
      <a href="https://github.com/Modryos/modryos/issues">Contact</a>
    </nav>
  </div>
</footer>
<script src="../pagefind/pagefind-ui.js"></script>
<script src="../docs.js"></script>
<script src="../site.js" defer></script>
</body>
</html>
`;
};

rmSync("docs", { recursive: true, force: true });
mkdirSync("docs");
pages.forEach((p, i) => {
  writeFileSync(`docs/${p.slug}.html`, pageHtml(p, i));
  writeFileSync(`docs/${p.slug}.md`, `# ${p.title}\n\n${p.body}\n`);
  // self-check: every paragraph-like source line shows up in the page text
  const flat = readFileSync(`docs/${p.slug}.html`, "utf8").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ");
  for (const l of p.body.split("\n").filter((l) => /^[A-Za-z]/.test(l))) {
    const t = l.replace(/\*\*|`|\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, "").trim();
    assert(flat.includes(t), `${p.slug}: missing "${t.slice(0, 50)}"`);
  }
});

// llms.txt: keep the hand-written part, rewrite the generated docs list between markers
const A = "<!-- docs:start -->", B = "<!-- docs:end -->";
let llms = readFileSync("llms.txt", "utf8").replace(/\r/g, "");
const list = `${A}\n## Docs\n\n${pages.map((p) => `- [${p.title}](${BASE}/${url(p)}): ${p.description}`).join("\n")}\n\nAll docs in one file: ${BASE}/llms-full.txt\n${B}`;
llms = llms.includes(A) ? llms.replace(new RegExp(`${A}[\\s\\S]*${B}`), list) : llms.replace("\n## Optional", `\n${list}\n\n## Optional`);
writeFileSync("llms.txt", llms);
writeFileSync("llms-full.txt", pages.map((p) => `# ${BASE}/${url(p)}\n\n# ${p.title}\n\n${p.body}\n`).join("\n---\n\n"));
console.log(`${pages.length} docs page(s) written`);
