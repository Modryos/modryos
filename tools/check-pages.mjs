// Opens every page at 375, 768 and 1440 wide and fails on sideways scroll, overflowing elements or missing head tags.
// Usage: node tools/check-pages.mjs [--shots <dir>] [--only root]   (root pages only with --only root; docs all)
import { createServer } from "node:http";
import { readFileSync, readdirSync, existsSync, mkdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const PW = "C:/Users/Neryos/Desktop/Coding/CodingWithAI/ModCraft/modcraft-app/node_modules/playwright/index.mjs";
const { chromium } = await import(pathToFileURL(PW).href);
const arg = (n) => { const i = process.argv.indexOf(n); return i < 0 ? null : process.argv[i + 1]; };
const shots = arg("--shots"), only = arg("--only");
const ROOT = resolve(".");
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".json": "application/json", ".mp4": "video/mp4", ".webm": "video/webm" };
const srv = createServer((q, s) => {
  let p = decodeURIComponent(q.url.split(/[?#]/)[0]);
  let f = join(ROOT, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, "index.html");
  if (!existsSync(f) && existsSync(f + ".html")) f += ".html";
  if (!existsSync(f)) { s.writeHead(404); return s.end("404"); }
  s.writeHead(200, { "content-type": TYPES[extname(f)] || "application/octet-stream" }); s.end(readFileSync(f));
}).listen(0);
const base = `http://localhost:${srv.address().port}`;

const root = readdirSync(".").filter((n) => n.endsWith(".html"));
const docs = only === "root" ? [] : readdirSync("docs").filter((n) => n.endsWith(".html")).map((n) => `docs/${n}`);
const pages = [...root, ...docs];
const sizes = [[375, 812], [768, 1024], [1440, 900]];
if (shots) mkdirSync(shots, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ reducedMotion: "reduce" });
const page = await ctx.newPage();
let fails = 0;
const fail = (f, m) => { console.log(`FAIL ${f}: ${m}`); fails++; };
for (const f of pages) {
  const html = readFileSync(f, "utf8");
  for (const [re, what] of [[/<title>[^<]+<\/title>/, "title"], [/<meta name="description" content="[^"]+"/, "description"], [/<link rel="canonical" href="https:[^"]+"/, "canonical"], [/<meta property="og:title"/, "og:title"], [/<meta property="og:description"/, "og:description"], [/<meta property="og:image"/, "og:image"], [/<meta property="og:url"/, "og:url"]])
    if (!re.test(html)) fail(f, `missing ${what}`);
  for (const [w, h] of sizes) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(`${base}/${f}`, { waitUntil: "load" });
    const r = await page.evaluate(() => {
      const iw = innerWidth, out = [];
      const clipped = (el) => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o !== "visible") return true; } return false; };
      for (const el of document.body.querySelectorAll("*")) {
        const b = el.getBoundingClientRect();
        if (!b.width || !b.height || getComputedStyle(el).position === "fixed") continue;
        if ((b.right > iw + 1 || b.left < -1) && !clipped(el) && !el.closest(".hp,.sr-only,[hidden]")) out.push(`${el.tagName.toLowerCase()}${el.className ? "." + String(el.className).split(" ")[0] : ""} ${Math.round(b.left)}..${Math.round(b.right)}`);
      }
      return { sw: document.documentElement.scrollWidth, iw, out: [...new Set(out)].slice(0, 5) };
    });
    if (r.sw > r.iw) fail(f, `${w}px: scrollWidth ${r.sw} > ${r.iw}`);
    if (r.out.length) fail(f, `${w}px: overflow ${r.out.join("; ")}`);
    if (shots && !f.includes("/")) await page.screenshot({ path: join(shots, `${f.replace(".html", "")}-${w}.png`), fullPage: true });
  }
}
await browser.close(); srv.close();
console.log(fails ? `${fails} problems in ${pages.length} pages` : `all ok (${pages.length} pages x 3 sizes)`);
process.exit(fails ? 1 : 0);
