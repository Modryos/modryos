# Another mod

A mod this one uses or works with, such as a recipe viewer: compiled against, in the test game, and named in both manifests.

## How to add it

- New thing > Logic and code > Another mod


## What you can set

The main settings are below. The [Another mod](editor-dependency.md) editor lists every setting.

| Setting | What it does |
| --- | --- |
| Name | The mod's name, as players know it. |
| Store name | The name this mod has on the store, kept when you add it from there so it can be fetched again for other versions. |
| Mod id on NeoForge | Its id on NeoForge, written into this mod's manifest. Leave it empty when it is not on NeoForge. |
| Mod id on Fabric | Its id on Fabric, written into this mod's manifest. Leave it empty when it is not on Fabric. |
| Its NeoForge jar | The other mod's jar for NeoForge, picked from disk. Its things join every picker; your code compiles against it. |
| Its Fabric jar | The other mod's jar for Fabric, picked from disk. Its things join every picker; your code compiles against it. |
| Its jars | The other mod's jars, one for NeoForge and one for Fabric on each game version this mod is made for, picked from disk or fetched from the mod store. Its things join every picker; your code compiles against them; the test game runs with them. Each row has: Jar, Made for, Game version, Is. |
| This mod adds to it | This mod is an add-on of it. Its area values, kinds of energy, genes, species and studies show in your lists by their names, and your species join its genes. |
| Needed | Required: a player must install it. Optional: this mod works with it when it is there. Choose one of: Required, Optional. |
| From version | The lowest version of it this mod works with. |
| Compiled against | Coordinates both targets compile against, such as its common API; several separated by spaces. Each is group:name:version, as the mod's page for developers lists it, such as com.example:examplemod-common-api:1.0.0. |

## What it becomes in the game

It is not part of the game itself: it describes another mod or a file, so it has no side to choose.

## What it works with

It does not point at other things.

## Picture

![Another mod](/media/docs/editor-dependency.webp)

## Related pages

- [Another mod](editor-dependency.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
