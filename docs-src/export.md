---
title: Export your mod
description: Make the mod file (jar) for each Minecraft version and loader, and find where it lands.
section: Getting started
order: 5
---

The mod file is a `.jar`. It is what people put in their Minecraft `mods` folder.

## Make it

1. Choose **File > Export > Make the mod file (.jar)**. The Cook window opens.
2. Press **Cook**.
3. When it is done, each file shows its full path. **Show the file** opens its folder, and **Open the folder** opens the folder with all of them.

## One jar for each version and loader

Modryos makes one jar for every version and loader your project targets. A project for NeoForge and Fabric on two versions makes four jars. Each one only works on its own version and loader, so check the name before you share it.

## Where they land

In your project folder, in `release`, in a folder named for the mod version. Your project's own files are never changed by this.

## Play one

Put the jar in the `mods` folder of a Minecraft with the same loader and version. Fabric mods also need Fabric API in the same folder.

Next: [Publish your mod](publishing.md).
