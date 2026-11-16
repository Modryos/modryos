# Site handoff (read this before you say "published")

**modryos.com is served by GitHub Pages from the `main` branch** (Pages API: source main, path /). A change is live only when
it is on `origin/main` and the Pages build finished (`gh api repos/Modryos/modryos/pages/builds/latest` shows status built and the commit).

Two branches, and the order matters:
1. `launch-ready` is the working branch (all site work lands here, including internal files: PUBLISH.md, NOTES-beta.md, tools/, docs-src/).
2. `main` is the published branch. `main` carries the same pages without the internal files (it is a separate line, not a fast-forward of
   launch-ready), so a change reaches the site either by `tools/publish.ps1 -Go` (see PUBLISH.md) or, for a change to public files only,
   by committing the same change on `main` too. Never leave a change on only one of the two: the next publish would drop it.
   (2026-11-16: the privacy waitlist line and the Endless Ore film were put on both.)

Pushing from this PC: `gh` active account NeriyaOfek is refused; push with the neriyac token, without switching accounts:
`git -c credential.helper= -c "http.extraheader=Authorization: Basic <base64 x-access-token:$(gh auth token -u neriyac)>" push origin <ref>:main`.
Every pushed head commit ends with `[skip ci]` (Actions quota); Pages still builds.

Proof of "live" (not "pushed"): from outside, signed out, with a cache-busting query, e.g.
`curl -s "https://modryos.com/privacy.html?x=$RANDOM"` (the CDN caches 10 minutes, `Cache-Control: max-age=600`; a check made in the first
minutes after a push can still show the old page: wait for the build, then re-check). For video: open the page, press play, read `currentTime`.
