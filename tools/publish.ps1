# One-command publish: checks, then main gets one commit with launch-ready's site minus the internal files. The push happens only with -Go (the owner passes it).
# GitHub Pages serves every file on main (.nojekyll), so the notes, tools and docs sources stay on launch-ready only (pentest 2026-11-15, I1).
param([switch]$Go)
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)
if ((git rev-parse --abbrev-ref HEAD) -ne "launch-ready") { throw "Not on branch launch-ready." }
if (git status --porcelain) { throw "The working tree is not clean. Commit or remove the changes first." }
# links.mjs fails on the pictures still being made (media/docs/*.webp); anything else broken stops the publish.
$bad = node tools/links.mjs | Select-String "broken" | Where-Object { $_ -notmatch "/media/docs/" }
if ($bad) { $bad; throw "Broken links found." }
node tools/check-pages.mjs; if ($LASTEXITCODE) { throw "check-pages failed." }
git fetch origin main
$internal = "NOTES-beta.md", "PUBLISH.md", ".gitignore", "tools", "docs-src"
$env:GIT_INDEX_FILE = Join-Path $env:TEMP "modryos-publish.index"
try {
  git read-tree launch-ready
  git rm -r --cached -q --ignore-unmatch -- @internal
  $tree = git write-tree
} finally { Remove-Item Env:GIT_INDEX_FILE; Remove-Item (Join-Path $env:TEMP "modryos-publish.index") -ErrorAction SilentlyContinue }
if ((git rev-parse "origin/main^{tree}") -eq $tree) { Write-Host "main already serves this version."; return }
$commit = (git log -1 --format=%B launch-ready) -join "`n" | git commit-tree $tree -p origin/main
if ($Go) { git push origin "${commit}:refs/heads/main" } else { Write-Host "Checks green; the commit for main is $commit. To go live run: tools/publish.ps1 -Go   (the owner runs this)" }
