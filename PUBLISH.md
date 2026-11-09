# Publish the site

**What it does.** GitHub Pages serves the site from the `main` branch of Modryos/modryos. Publishing means: `main` moves to the same commit as `launch-ready` and is pushed. The site is live a minute or two later.

**The one command** (PowerShell, in the site folder):

    tools/publish.ps1 -Go

It stops if you are not on `launch-ready`, if the tree is not clean, if a link is broken (the pictures in `media/docs/` still being made are allowed) or if `tools/check-pages.mjs` finds a page that scrolls sideways. Without `-Go` it does everything except the push.

**Roll back.** Find the commit `main` had before (`git log origin/main`), then:

    git push --force-with-lease origin <previous-commit>:main

The site returns to that version in a minute or two.

**Before the first publish.** The download page's checksum block (marked "updated by the release step") must hold the newest installer's lines.
