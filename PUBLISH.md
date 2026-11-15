# Publish the site

**What it does.** GitHub Pages serves the site from the `main` branch of Modryos/modryos. Publishing means: `main` gets one new commit holding `launch-ready`'s files minus the internal ones (`NOTES-beta.md`, `PUBLISH.md`, `.gitignore`, `tools/`, `docs-src/`), because Pages serves every file on `main`. The repo's front page reads `.github/README.md`, which Pages does not serve. If the release workflow changed `.github/ISSUE_TEMPLATE/bug_report.yml` on `main`, bring that file into `launch-ready` first or the publish puts the old one back. The site is live a minute or two later.

**The one command** (PowerShell, in the site folder):

    tools/publish.ps1 -Go

It stops if you are not on `launch-ready`, if the tree is not clean, if a link is broken (the pictures in `media/docs/` still being made are allowed) or if `tools/check-pages.mjs` finds a page that scrolls sideways, misses its CSP or referrer tag, or logs a CSP refusal. Without `-Go` it does everything except the push.

**Roll back.** Find the commit `main` had before (`git log origin/main`), then:

    git push --force-with-lease origin <previous-commit>:main

The site returns to that version in a minute or two.

**Before the first publish.** The download page's checksum block (marked "updated by the release step") must hold the newest installer's lines.
