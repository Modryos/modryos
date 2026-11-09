---
title: Powered armour
description: A piece of armour that runs on energy: each hit its wearer takes spends some, and empty it guards nothing until it is charged.
section: Things you can make
order: 143
---

A piece of armour that runs on energy: each hit its wearer takes spends some, and empty it guards nothing until it is charged.

## How to add it

- New thing > Blocks and items > Powered armour


## What you can set

### Worn

| Setting | What it does |
| --- | --- |
| Worn on | Which slot it goes in: one of the four armor slots, or a slot of the shared slot mod a player installs beside it, on NeoForge and on Fabric 1.21.1. Without that mod a ring or a belt works from the off hand. Choose one of: Head, Chest, Legs, Feet, Ring, Necklace, Belt, Back, Hands, Another slot. |
| Slot name | The name the slot mod gives that slot, such as charm or head/face. |
| Material | Pieces with the same material share its numbers and its worn picture, like iron or diamond. Leave it empty and the piece is its own material. |
| Armor points | The armor points it gives, each half a shirt over the health bar: an iron chestplate gives 6, iron boots 2. From 0 to 30. |
| Body color | The color it is drawn in on its wearer. |
| On the body | The picture it is drawn in on its wearer, on the game's layout of worn armor, painted as any picture is; without one it is drawn in its color. |
| Toughness | How much of a heavy hit the armor still stops: diamond 2, netherite 3. From 0 to 20. |
| Stands firm | How much less its wearer is pushed back by a hit, from nought to one: netherite 0.1 a piece. From 0 to 1. |
| Worn shape | A model of yours drawn on whoever wears it, a player or a mob: a hat, wings, a jetpack, a full suit. Each group named for a body part (Head, Body, Right arm, Left arm, Right leg, Left leg) moves with that part; Make one starts it on the wearer's body. |
| Follows | The body part a group of the shape follows when its name is not a body part's. Choose one of: The part its slot is on, Head, Body, Right arm, Left arm, Right leg, Left leg. |
| Its animations | Animations of the worn shape, each playing while its wearer does something or while a value of the piece is on: wings that flap while flying, a flame while the engine is on. Several play at once. Each row has: Animation, While, Value. |
| Parts shown only | A group of the worn shape drawn only while something holds: a module's part while its value is on, a visor while crouching. Groups not named here are always drawn. Each row has: Group, While, Value. |
| Or a carved shape | A block you carved on its Carve tab, worn on the body part in place of the flat armor, in the real pictures of its looks. A worn shape above wins. |
| Width on the body | How many pixels across the carved block or copied design is drawn on the wearer. A head is 8; 10 sits over it like a helmet. From 1 to 48. |
| Takes a carved design | Sneak and use this on a carved block to copy its design onto the item, then wear it to show the design on the body part. Sneak and use in the air to clear it. The block stays. Set the size above. |
| Tint | A color the worn shape's picture is multiplied by; white keeps it as painted. |
| Glows | The worn shape is drawn at full light, bright in the dark. |
| See-through | How much you see through the worn shape, from 0 (solid) to 90. From 0 to 90. |
| Hides the flat armor | The game's flat armor picture is not drawn, only the worn shape. |
| Only for its look over | While it is worn, the armor in this slot keeps protecting but is not drawn, and this piece is drawn in its place: a cosmetic slot. Choose one of: Nothing, The helmet, The chestplate, The leggings, The boots. |

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

It comes with these abilities already on: Worn, Holds energy.

## What it works with

It points at: [Model](editor-model.md).

Other things that open the same editor: [Item](thing-item.md), [Crate](thing-lootCrate.md), [Backpack](thing-backpack.md), [Settings copier](thing-settingsCopier.md), [Letter](thing-letter.md), [Pocket](thing-pocket.md), [Storage disk](thing-storageDisk.md), [Disk for fluids](thing-fluidDisk.md), [Wireless terminal](thing-wirelessTerminal.md), [Upgrade](thing-upgrade.md), [Structure finder](thing-structureFinder.md), [Pointer](thing-pointer.md), [Designator](thing-designator.md), [Item filter](thing-itemFilter.md), [Configurator](thing-configurator.md), [Face part](thing-facePart.md), [Waypoint compass](thing-waypointCompass.md), [Spell wand](thing-spellWand.md), [Spell book](thing-spellBook.md), [Spell scroll](thing-spellScroll.md), [Tool](thing-tool.md), [Weapon](thing-weapon.md), [Armor](thing-armour.md), [Food](thing-food.md), [Fuel](thing-fuel.md), [Bow](thing-bow.md), [Crossbow](thing-crossbow.md), [Shield](thing-shield.md), [Part](thing-part.md), [Tool of parts](thing-partsTool.md), [Golem-style creature](thing-partsCreature.md), [Battery](thing-battery.md), [Powered tool](thing-poweredTool.md), [Building wand](thing-buildingWand.md), [Copy wand](thing-copyWand.md), [Capsule](thing-capsule.md), [Building plan](thing-buildingPlan.md), [Mob catcher](thing-mobCatcher.md), [Carving tool](thing-carvingTool.md), [Bag of pieces](thing-bitBag.md), [Shape pattern](thing-shapePattern.md), [Tree axe](thing-treeAxe.md), [Vein pickaxe](thing-veinPickaxe.md), [Module](thing-module.md), [Building tool](thing-builder.md), [Thrown weapon](thing-thrown.md), [Music disc](thing-musicDisc.md), [Shears](thing-shears.md), [Fishing rod](thing-fishingRod.md), [Tool for everything](thing-multiTool.md), [Hat](thing-hat.md), [Vehicle part](thing-vehiclePart.md).

## Picture

![Item](/media/docs/editor-item.webp)

## Related pages

- [Item](editor-item.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
