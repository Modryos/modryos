---
title: Battery
description: An item that keeps energy: charged in a machine, it charges the tools and armour a player carries, and powers a machine it is put in.
section: Things you can make
order: 27
---

An item that keeps energy: charged in a machine, it charges the tools and armour a player carries, and powers a machine it is put in.

## How to add it

- New thing > Blocks and items > Battery


## What you can set

### Holds energy

| Setting | What it does |
| --- | --- |
| Holds up to | The most energy one of it keeps, in the same units as a machine's energy. From 1 to 1000000000. |
| Kind of energy | What its energy is called: Energy, Mana, or a unit of the mod's own. Items of one kind charge each other; another kind is kept apart unless an item says it mixes. |
| Spends per use | Energy spent for each block it mines, each hit it gives, and each hit its wearer takes while it is worn. 0 spends nothing. From 0 to 1000000000. |
| Spends each second | Energy spent every second while it is held in the hand or worn: a lamp, a jetpack, a suit that keeps its wearer cool. 0 spends nothing. From 0 to 1000000000 perSecond. |
| Charges other items | A battery: once a second it gives its energy to the items that hold energy in the place chosen, at its rate. It never charges another battery. Choose one of: No, Worn, On the head, On the chest, On the legs, On the feet, Charm slots, Ring slot, Necklace slot, Belt slot, Back slot, Gloves slot, Held, In the hand, Off hand, Hotbar, Anywhere carried, Another slot. |
| Slot name | The name the slot mod gives that slot, such as charm or head/face. |
| Draws when it runs short | When it is used and has too little, it takes what it lacks from the items of its kind in the place chosen, such as the tablets in the bag. No: it spends only its own. Choose one of: No, Worn, On the head, On the chest, On the legs, On the feet, Charm slots, Ring slot, Necklace slot, Belt slot, Back slot, Gloves slot, Held, In the hand, Off hand, Hotbar, Anywhere carried. |
| Charges at | How much energy goes in or out of it each second: from a machine, from a battery, or out of it into what it charges or powers. From 1 to 1000000000 perSecond. |
| Worth of 1 FE | How many of this kind one unit of other mods' energy (FE) is worth. At 1 it is the same; at 0.1, ten FE from a charger fill one of it, and a machine drawing 1 of it takes 10 FE. From 0.0001 to 1000000. |
| Mixes kinds | When it charges other items or draws, it also reaches items of another kind, at the worth of each (a converter). |
| Runs machines | Put in a machine's slots, it gives its energy to the machine at its rate, instead of being charged by it. |
| When it is empty | Stops: without the energy of one use, a tool mines as a hand does, a weapon hits as a fist, armour guards nothing and gives nothing, until it is charged. Works on: energy is only spent. Choose one of: It stops working, It works on. |
| Starts charged | How full a new one is, from 0 (empty) to 100 (full). From 0 to 100 percent. |
| Shown | Where a player sees its energy: a bar under the item's picture, a line of its tooltip, both, or nowhere. Choose one of: Bar and tooltip, Bar, Tooltip, Nowhere. |
| Bar colour | The colour of the energy bar under its picture. |

Every item also has the settings on the [Item](editor-item.md) page.

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

It comes with these abilities already on: Holds energy.

## What it works with

It points at: [Model](editor-model.md).

Other things that open the same editor: [Item](thing-item.md), [Crate](thing-lootCrate.md), [Backpack](thing-backpack.md), [Settings copier](thing-settingsCopier.md), [Letter](thing-letter.md), [Pocket](thing-pocket.md), [Storage disk](thing-storageDisk.md), [Disk for fluids](thing-fluidDisk.md), [Wireless terminal](thing-wirelessTerminal.md), [Upgrade](thing-upgrade.md), [Structure finder](thing-structureFinder.md), [Pointer](thing-pointer.md), [Designator](thing-designator.md), [Item filter](thing-itemFilter.md), [Configurator](thing-configurator.md), [Face part](thing-facePart.md), [Waypoint compass](thing-waypointCompass.md), [Spell wand](thing-spellWand.md), [Spell book](thing-spellBook.md), [Spell scroll](thing-spellScroll.md), [Tool](thing-tool.md), [Weapon](thing-weapon.md), [Armor](thing-armour.md), [Food](thing-food.md), [Fuel](thing-fuel.md), [Bow](thing-bow.md), [Crossbow](thing-crossbow.md), [Shield](thing-shield.md), [Part](thing-part.md), [Tool of parts](thing-partsTool.md), [Golem-style creature](thing-partsCreature.md), [Powered tool](thing-poweredTool.md), [Powered armour](thing-poweredArmour.md), [Building wand](thing-buildingWand.md), [Copy wand](thing-copyWand.md), [Capsule](thing-capsule.md), [Building plan](thing-buildingPlan.md), [Mob catcher](thing-mobCatcher.md), [Carving tool](thing-carvingTool.md), [Bag of pieces](thing-bitBag.md), [Shape pattern](thing-shapePattern.md), [Tree axe](thing-treeAxe.md), [Vein pickaxe](thing-veinPickaxe.md), [Module](thing-module.md), [Building tool](thing-builder.md), [Thrown weapon](thing-thrown.md), [Music disc](thing-musicDisc.md), [Shears](thing-shears.md), [Fishing rod](thing-fishingRod.md), [Tool for everything](thing-multiTool.md), [Hat](thing-hat.md), [Vehicle part](thing-vehiclePart.md).

## Picture

![Item](/media/docs/editor-item.webp)

## Related pages

- [Item](editor-item.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
