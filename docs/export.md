# Export your mod

The mod file is a `.jar`. It is what people put in their Minecraft `mods` folder.

## Make it

1. Choose **File > Export > Make the mod file (.jar)**. The [Cook](glossary.md#cook) window opens.
2. Press **Cook**.
3. When it is done, each file shows its full path. **Show the file** opens its folder, and **Open the folder** opens the folder with all of them.

## One jar for each version and loader

Modryos makes one [jar](glossary.md#jar) for every version and [loader](glossary.md#loader) your project [targets](glossary.md#target). A project for NeoForge and Fabric on two versions makes four jars. Each one only works on its own version and loader, so check the name before you share it. Ask your friend which loader (NeoForge or Fabric) and which Minecraft version they use, and send the jar for that pair. See [Versions and loaders](versions-and-loaders.md).

## Where they land

In your project folder, in `release`, in a folder named for the mod version. Your project's own files are never changed by this.

## Play one

Put the jar in the `mods` folder of a Minecraft with the same loader and version. Fabric mods also need [Fabric API](https://modrinth.com/mod/fabric-api) in the same folder.

Next: [Publish your mod](publishing.md).
