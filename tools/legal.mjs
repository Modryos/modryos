// Turns the lawyer-approved Markdown into the legal pages. Usage: node tools/legal.mjs [sourceDir]
import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert";

const SRC = process.argv[2] || "C:/Users/Neryos/Desktop/Coding/CodingWithAI/ModCraft/docs/legal/approved-2026-11-09";
const PAGES = [
  ["terms-of-use.md", "terms", "Terms of Use", "Terms of Use for Modryos."],
  ["privacy-policy.md", "privacy", "Privacy Policy", "Privacy Policy for Modryos."],
  ["closed-beta-addendum.md", "beta-terms", "Closed Beta Addendum", "Closed Beta Addendum for Modryos."],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const inline = (s) => esc(s)
  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

// shortcut: no nested lists, no code, no italics; the approved files use none. Upgrade if they start to.
function convert(md) {
  const lines = md.replace(/\r/g, "").split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^(#{1,3}) (.+)/))) { out.push(`<h${Math.max(m[1].length === 1 ? 1 : 2, 1)}>${inline(m[2])}</h${m[1].length === 1 ? 1 : 2}>`); i++; }
    else if (/^\s*\|/.test(l)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
      const [head, , ...body] = rows;
      out.push(`<div class="table-wrap"><table><thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
    } else if (/^(- |\d+\. )/.test(l)) {
      const tag = l.startsWith("- ") ? "ul" : "ol";
      const re = tag === "ul" ? /^- (.*)/ : /^\d+\. (.*)/;
      const items = [];
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].match(re)[1]);
      out.push(`<${tag}>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</${tag}>`);
    } else {
      const p = [];
      while (i < lines.length && lines[i].trim() && !/^(#|- |\d+\. |\s*\|)/.test(lines[i])) p.push(lines[i++].trim());
      out.push(`<p>${inline(p.join(" "))}</p>`);
    }
  }
  return out.join("\n  ");
}

const FOOTER = `<div class="notice"><div class="wrap">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</div></div>
<footer>
  <div class="wrap">
    <span>&copy; 2026 Neryos. Minecraft is a trademark of Mojang Synergies AB.</span>
    <nav>
      <a href="./">Home</a>
      <a href="terms.html">Terms</a>
      <a href="privacy.html">Privacy</a>
      <a href="beta-terms.html">Beta terms</a>
      <a href="https://github.com/Modryos/modryos/issues">Contact</a>
    </nav>
  </div>
</footer>`;

const page = (title, desc, slug, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} - Modryos</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="https://modryos.com/${slug}">
<meta name="theme-color" content="#0d0f12">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Modryos">
<meta property="og:url" content="https://modryos.com/${slug}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="https://modryos.com/media/og-card.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Modryos: make Minecraft mods, beautifully. The Ember Fox in the model editor">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preload" href="fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="site.css">
</head>
<body>

<header class="top scrolled">
  <div class="wrap">
    <a class="wordmark" href="./">Modryos<span>.</span></a>
    <nav>
      <a href="features.html">Features</a>
      <a href="faq.html">FAQ</a>
      <a href="download.html">Download</a>
      <a class="hide-sm" href="https://github.com/Modryos/modryos">GitHub</a>
    </nav>
  </div>
</header>

<main class="wrap"><div class="prose">
  ${body}
</div></main>

${FOOTER}

</body>
</html>
`;

const text = (h) => h.replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/\s+/g, " ");

for (const [file, slug, title, desc] of PAGES) {
  const md = readFileSync(`${SRC}/${file}`, "utf8");
  const html = page(title, desc, slug, convert(md));
  writeFileSync(`${slug}.html`, html);
  // self-check: every source line (markup stripped) is in the page text
  const flat = text(html);
  const plain = (s) => s.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/^(#+ |- |\d+\. )/, "").replace(/\s+/g, " ").trim();
  const mdLines = md.split(/\r?\n/).filter((l) => l.trim() && !/^\s*\|\s*---/.test(l));
  for (const l of mdLines) {
    const parts = /^\s*\|/.test(l) ? cells(l).map(plain) : [plain(l)];
    for (const p of parts) assert(flat.includes(p), `${file}: missing "${p.slice(0, 60)}"`);
  }
  assert(/Last updated/.test(flat), `${file}: no Last updated line`);
  console.log(`${slug}.html ok (${mdLines.length} lines)`);
}
