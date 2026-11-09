---
title: Versions and loaders
description: The game versions and loaders Modryos makes mods for, and what one project can target at once.
section: Versions and loaders
order: 1
---

A [loader](glossary.md#loader) is the program that runs mods in Minecraft. Modryos makes mods for NeoForge and Fabric.

## What the studio makes mods for

Minecraft numbers its newer versions by year: 26.1, 26.2 and 26.3 are versions from 2026, newer than 1.21.11. One project makes a mod for every version and loader you tick.

| Target | Loader |
| --- | --- |
| NeoForge 1.21.1 | NeoForge |
| Fabric 1.21.1 | Fabric |
| NeoForge 26.3 | NeoForge |
| Fabric 26.3 | Fabric |
| NeoForge 26.2 | NeoForge |
| Fabric 26.2 | Fabric |
| NeoForge 1.21.11 | NeoForge |
| Fabric 1.21.11 | Fabric |
| NeoForge 26.1.2 | NeoForge |
| Fabric 26.1.2 | Fabric |

Minecraft 1.20.1 comes after version 1.0. Packs only 1.21.1.

## Where you pick them

- **New project:** the **Works with** line lists the loaders. At least one stays ticked.
- **Later, any time:** open **Mod details** and use **Made for** to add or remove a loader and version.
- **Which one Play opens:** the toolbar's **Play on** picker. It only lists what **Made for** has.

## Which jar your friend needs

Ask your friend two things: which loader they use (NeoForge or Fabric) and which Minecraft version. Give them the [jar](glossary.md#jar) made for that pair. A Fabric friend also needs [Fabric API](https://modrinth.com/mod/fabric-api) in their mods folder. The jars are in your project's release folder, see [Export](export.md).

## Many versions in one project

One project can list many [targets](glossary.md#target). You build the thing once; [Cook](glossary.md#cook) makes one jar for each target you pick and puts them side by side in the project's release folder. Before it makes anything, Cook shows what will not carry over to each version. [Play](glossary.md#play) opens the target you choose under "Play on".

## Related pages

- [Glossary](glossary.md)
- [Troubleshooting](troubleshooting.md)
