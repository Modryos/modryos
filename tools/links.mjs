// Checks every local href and src in every .html. Usage: node tools/links.mjs
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { extname } from "node:path";

let bad = 0;
for (const f of readdirSync(".").filter((n) => n.endsWith(".html"))) {
  const html = readFileSync(f, "utf8");
  for (const [, url] of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    if (/^(https?:|mailto:|tel:|data:|#|$)/.test(url)) continue;
    let p = url.split(/[#?]/)[0].replace(/^\//, "");
    if (p === "" || p === "./") p = "index.html";
    else if (!extname(p) && !p.endsWith("/")) p += ".html";
    if (!existsSync(p)) { console.log(`${f}: broken ${url}`); bad++; }
  }
}
console.log(bad ? `${bad} broken` : "all links ok");
process.exit(bad ? 1 : 0);
