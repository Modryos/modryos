# Closed beta site notes

Branch beta-closed, not published, not pushed.

- Legal pages (terms, privacy, beta-terms) come from the approved files in modcraft-app/docs/legal/approved-2026-11-09 via tools/legal.mjs; re-run it if they change. Never edit those html files by hand. tools/links.mjs checks local links.
- No CSP meta exists on any page, so connect-src was not added. If one is added, allow https://api.modryos.com.
- Forms follow the API: 200 sent, 400 invalid_email / age_required / terms_required, 429 rate_limited. Not run against the live API.
- Pages were not opened in a browser: look at request-access.html and download.html once on desktop and phone.
- Legal text mentions "Privacy Policy" etc. as plain words, not links.
- 2026-10-29: every picture and clip is from today (studio build 3710b10ae+, game NeoForge 26.3): studio stills and clips by modcraft-app tools/visual/site-media.mjs, the in-game gallery by tools/game/sitegallery.mjs (showcase kits cogworks, emberdrake, the GUI kits). Cards with no clear picture today were removed: Animals, Armour, Charged items, Recipes, Altars, the Screen builder card in the gallery. Only logo-512.png is older.
- Docs wiki: write one .md in docs-src/ (front matter title, description, section, order), then run node tools/docs.mjs, then npx pagefind --site . --glob "docs/**/*.html", then node tools/links.mjs. Commit docs/, pagefind/, llms.txt and llms-full.txt. The empty #docs-assistant slot is for the future AI helper.
