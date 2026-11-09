// Checks every local href and src in every .html (root and docs/). Usage: node tools/links.mjs
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { extname, dirname, join } from "node:path";

const files = [...readdirSync(".").filter((n) => n.endsWith(".html")), ...readdirSync("docs").filter((n) => n.endsWith(".html")).map((n) => `docs/${n}`)];
let bad = 0;
for (const f of files) {
  const html = readFileSync(f, "utf8").replace(/<script type="application\/json"[\s\S]*?<\/script>/g, "");
  for (const [, url] of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|#|$)/.test(url)) continue;
    let p = url.split(/[#?]/)[0];
    p = p.startsWith("/") ? p.slice(1) : join(dirname(f), p);
    if (p === "" || p === ".") p = "index.html";
    else if (p.endsWith("/") || p.endsWith("\\")) p += "index.html";
    else if (!extname(p)) p += existsSync(`${p}.html`) ? ".html" : "/index.html";
    if (!existsSync(p)) { console.log(`${f}: broken ${url}`); bad++; }
  }
}
console.log(bad ? `${bad} broken` : `all links ok (${files.length} pages)`);
process.exit(bad ? 1 : 0);
