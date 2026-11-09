# One-command publish: checks, then main fast-forwards to launch-ready. The push happens only with -Go (the owner passes it).
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
git checkout main
git merge --ff-only launch-ready
if ($Go) { git push origin main } else { Write-Host "Checks green and main is updated here. To go live run: tools/publish.ps1 -Go   (the owner runs this)" }
git checkout launch-ready
