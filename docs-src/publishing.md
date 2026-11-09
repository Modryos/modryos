---
title: Publish on Modrinth and CurseForge
description: The store files Modryos writes, the AI note each site asks for, and the store id fields.
section: Publishing
order: 1
---

Modryos does not upload anything for you. It writes the texts and files each site asks for, so you can paste them.

## The store files

When you [make the mod file](export.md), Modryos also writes a `stores` folder inside `release/<version>/`:

- `stores/modrinth/` and `stores/curseforge/` hold one file per jar and one page file for the project.
- `stores/README.txt` says what to paste where, and what to check by hand.
- `MADE_WITH_AI.md` is the note about AI help, with a ready text for each site.

Nothing in them is sent anywhere. If something is missing, such as a description, a logo or a licence link, Modryos tells you in the README.

## Your store ids

Make your mod's page on the store first. Then open **Mod details** and fill in **Modrinth project id** and **CurseForge project id**. Every cook then puts them in the store files, ready to paste. A CurseForge id is a number shown on the project's page.

## The AI note

Each site has its own rule about AI-made content, so read the rule on the site you use.

Modryos records what an AI agent made in the studio. `MADE_WITH_AI.md` turns that into a short text. While Modryos AI is closed in the beta, the record says no AI help was recorded in the studio. If you used an outside tool, the studio cannot see it, so tell the site yourself.

On Modrinth the file also says whether to switch on **Contains AI-generated content**.

## Upload

Each site has its own upload page. Use the files above for the descriptions and versions. Then check the site's game version names, because Modryos does not check those.
