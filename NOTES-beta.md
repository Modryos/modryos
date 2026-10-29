# Closed beta site notes

Branch beta-closed, not published, not pushed.

- Legal pages hold the texts from modcraft-app/docs/legal, marked "Draft for legal review". Re-run a conversion if the Markdown changes.
- data-deletion.html leaves out the "For the operator: the internal procedure" part of the Markdown; it is a private checklist.
- No CSP meta exists on any page, so connect-src was not added. If one is added, allow https://api.modryos.com.
- Forms follow the API: 200 sent, 400 invalid_email / age_required / terms_required, 429 rate_limited. Not run against the live API.
- Pages were not opened in a browser: look at request-access.html and download.html once on desktop and phone.
- Legal text mentions "Privacy Policy" etc. as plain words, not links.
- 2026-10-29: every picture and clip is from today (studio build 3710b10ae+, game NeoForge 26.3): studio stills and clips by modcraft-app tools/visual/site-media.mjs, the in-game gallery by tools/game/sitegallery.mjs (showcase kits cogworks, emberdrake, the GUI kits). Cards with no clear picture today were removed: Animals, Armour, Charged items, Recipes, Altars, the Screen builder card in the gallery. Only logo-512.png is older.
