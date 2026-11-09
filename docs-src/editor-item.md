---
title: Item editor
description: Something held in the hand or kept in a chest.
section: Editors
order: 47
---

Something held in the hand or kept in a chest.

## How to add it

- New thing > Blocks and items > Item
- New thing > Blocks and items > Crate
- New thing > Blocks and items > Backpack
- New thing > Blocks and items > Settings copier
- New thing > Blocks and items > Letter
- New thing > Blocks and items > Pocket
- New thing > Machines and networks > Storage disk
- New thing > Machines and networks > Disk for fluids
- New thing > Machines and networks > Wireless terminal
- New thing > Machines and networks > Upgrade
- New thing > The world > Structure finder
- New thing > Blocks and items > Pointer
- New thing > Blocks and items > Designator
- New thing > Machines and networks > Item filter
- New thing > Machines and networks > Configurator
- New thing > Machines and networks > Face part
- New thing > Blocks and items > Waypoint compass
- New thing > Blocks and items > Spell wand
- New thing > Blocks and items > Spell book
- New thing > Blocks and items > Spell scroll
- New thing > Blocks and items > Tool
- New thing > Blocks and items > Weapon
- New thing > Blocks and items > Armor
- New thing > Blocks and items > Food
- New thing > Blocks and items > Fuel
- New thing > Blocks and items > Bow
- New thing > Blocks and items > Crossbow
- New thing > Blocks and items > Shield
- New thing > Blocks and items > Part
- New thing > Blocks and items > Tool of parts
- New thing > Mobs and models > Golem-style creature
- New thing > Blocks and items > Battery
- New thing > Blocks and items > Powered tool
- New thing > Blocks and items > Powered armour
- New thing > Blocks and items > Building wand
- New thing > Blocks and items > Copy wand
- New thing > Blocks and items > Capsule
- New thing > Blocks and items > Building plan
- New thing > Blocks and items > Mob catcher
- New thing > Blocks and items > Carving tool
- New thing > Blocks and items > Bag of pieces
- New thing > Blocks and items > Shape pattern
- New thing > Blocks and items > Tree axe
- New thing > Blocks and items > Vein pickaxe
- New thing > Blocks and items > Module
- New thing > Blocks and items > Building tool
- New thing > Blocks and items > Thrown weapon
- New thing > Blocks and items > Music disc
- New thing > Blocks and items > Shears
- New thing > Blocks and items > Fishing rod
- New thing > Blocks and items > Tool for everything
- New thing > Blocks and items > Hat
- New thing > Blocks and items > Vehicle part

## What you can set

| Setting | What it does |
| --- | --- |
| Name | What players read when they hold it, in any words: spaces and capitals are fine, like "Ruby Blade of Sam". The Game name is the short id the game uses instead. |
| Game name | The id the game and its commands use: small letters, digits and underscores, like katana. In commands and recipes the mod's id and a colon go in front: for a mod called rubygear, katana is written rubygear, a colon, then katana. Players never read it; that is the Name. Change it later and it is renamed everywhere. |
| Texture | The flat picture of the item in hand and in the inventory. A 16 by 16 PNG. A Model, if you give one, is a 3D shape that replaces it. |
| Tooltip lines | Extra lines under its Name when a player points at it, such as "Tastes like thunder.". The Name itself is set above. Each row has: Words, Color. |
| Plays as frames | Whether the item's picture plays as a strip of frames, and how fast. It is set on the picture itself. |
| Shape | A 3D shape for this item to be held as, instead of its flat Texture. Leave it empty and the item is its Texture. |
| Stack size | How many fit in one inventory slot. Tools take 1, most things 64. This is not how long a tool lasts. From 1 to 99. |
| Fire-proof | Dropped, it does not burn in fire or lava, like netherite. |
| Is a wrench | Puts this item in the wrench tag, so it turns and picks up blocks of any mod that listens to that tag. |
| Other looks | Other pictures a rule can swap in for the Texture while it is true, such as charged or empty. The Texture is the one it wears the rest of the time. Each row has: Name, Picture. |

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

## What it works with

It points at: [Model](editor-model.md).

These point at it: [Block](editor-block.md), [Behavior](editor-behaviour.md), [Vehicle](editor-vehicle.md), [Value](editor-value.md), [Material](editor-material.md), [Drawing in the world](editor-worldDraw.md), [Creative tab](editor-creativeTab.md), [Species](editor-species.md).

## Picture

![Item editor](/media/docs/editor-item.webp)

## Related pages

- [Item](thing-item.md)
- [Crate](thing-lootCrate.md)
- [Backpack](thing-backpack.md)
- [Settings copier](thing-settingsCopier.md)
- [Letter](thing-letter.md)
- [Pocket](thing-pocket.md)
- [Storage disk](thing-storageDisk.md)
- [Disk for fluids](thing-fluidDisk.md)
- [Wireless terminal](thing-wirelessTerminal.md)
- [Upgrade](thing-upgrade.md)
- [Structure finder](thing-structureFinder.md)
- [Pointer](thing-pointer.md)
- [Designator](thing-designator.md)
- [Item filter](thing-itemFilter.md)
- [Configurator](thing-configurator.md)
- [Face part](thing-facePart.md)
- [Waypoint compass](thing-waypointCompass.md)
- [Spell wand](thing-spellWand.md)
- [Spell book](thing-spellBook.md)
- [Spell scroll](thing-spellScroll.md)
- [Tool](thing-tool.md)
- [Weapon](thing-weapon.md)
- [Armor](thing-armour.md)
- [Food](thing-food.md)
- [Fuel](thing-fuel.md)
- [Bow](thing-bow.md)
- [Crossbow](thing-crossbow.md)
- [Shield](thing-shield.md)
- [Part](thing-part.md)
- [Tool of parts](thing-partsTool.md)
- [Golem-style creature](thing-partsCreature.md)
- [Battery](thing-battery.md)
- [Powered tool](thing-poweredTool.md)
- [Powered armour](thing-poweredArmour.md)
- [Building wand](thing-buildingWand.md)
- [Copy wand](thing-copyWand.md)
- [Capsule](thing-capsule.md)
- [Building plan](thing-buildingPlan.md)
- [Mob catcher](thing-mobCatcher.md)
- [Carving tool](thing-carvingTool.md)
- [Bag of pieces](thing-bitBag.md)
- [Shape pattern](thing-shapePattern.md)
- [Tree axe](thing-treeAxe.md)
- [Vein pickaxe](thing-veinPickaxe.md)
- [Module](thing-module.md)
- [Building tool](thing-builder.md)
- [Thrown weapon](thing-thrown.md)
- [Music disc](thing-musicDisc.md)
- [Shears](thing-shears.md)
- [Fishing rod](thing-fishingRod.md)
- [Tool for everything](thing-multiTool.md)
- [Hat](thing-hat.md)
- [Vehicle part](thing-vehiclePart.md)
- [Glossary](glossary.md)
