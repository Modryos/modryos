// The site's CSP and referrer policy as <meta> tags: GitHub Pages cannot send headers (pentest 2026-11-15, L1).
// The sha256 is index.html's one inline script; 'wasm-unsafe-eval' is Pagefind's search; Turnstile is a script and a frame.
// Framing (frame-ancestors), HSTS and nosniff need real headers: docs/release/cloudflare-steps.md in the app repo.
export const CSP = "default-src 'self'; script-src 'self' 'wasm-unsafe-eval' https://challenges.cloudflare.com 'sha256-qOhFsq0QMV2REqNwk5hGH5bZE9SkX6gt6yeyKdYPv+U='; frame-src https://challenges.cloudflare.com; connect-src 'self' https://api.modryos.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests";
export const SECURITY_META = `<meta http-equiv="Content-Security-Policy" content="${CSP}">\n<meta name="referrer" content="strict-origin-when-cross-origin">`;
// Stamps the two tags right after <meta charset> in the hand-written root pages: node tools/csp.mjs
if (process.argv[1]?.endsWith("csp.mjs")) {
  const { readFileSync, writeFileSync, readdirSync } = await import("node:fs");
  for (const f of readdirSync(".").filter((n) => n.endsWith(".html"))) {
    const html = readFileSync(f, "utf8").replace(/<meta http-equiv="Content-Security-Policy"[^>]*>\r?\n<meta name="referrer"[^>]*>\r?\n/, "");
    writeFileSync(f, html.replace(/<meta charset="utf-8">(\r?\n)/, (m, nl) => m + SECURITY_META.replace("\n", nl) + nl));
  }
}
