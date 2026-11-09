# Face part

An item placed on a face of a block that holds parts: it takes in, sends out, places, breaks, counts, shows or covers.

## How to add it

- New thing > Machines and networks > Face part


## What you can set

### A face part

| Setting | What it does |
| --- | --- |
| Does | What the part does with the block it faces or the space in front of it. Choose one of: Takes in from the block it faces, Sends out to the block it faces, Keeps the network's things in the block it faces, Places blocks in front, Breaks the block in front, Picks up items in front, Drops items in front, Gives a redstone signal at a level, Tunnel: the end things go in, Tunnel: the end things come out, Shows a count on its face, Covers a face with a block's look, Holds things of its own, Opens what the network keeps, A gate: a test, and what happens while it holds, A sensor: a signal while its test holds, Colours its face, A reader: keeps what it reads as a value, A writer: gives a value out, Acts as a player, Closes its face (a plug). |
| Goes on | Blocks that hold parts, or the face of any block: then it sits in the space in front, and one space holds a part for each block around it. Choose one of: Blocks that hold parts, Any block's face. |
| Moves | Items, fluid or energy: what this part takes in, sends out, keeps, counts or tunnels. Choose one of: Items, Fluid, Energy, Redstone (a tunnel), Light (a tunnel), The network itself (a tunnel). |
| Marks | The items its face lets through when it is placed. None: everything. A player changes them in the face's screen. |
| Holds | How much it holds: slots for items (in rows of nine), buckets of fluid, or thousands of energy. From 1 to 54. |
| Keeps of each mark | It takes this many of each of its marks from the network and keeps them. 0: a full stack. From 0 to 1000000. |
| When | The test it watches. Choose one of: A block it watches is full, A block it watches is empty, A block it watches has items, Its block gets redstone, The network keeps at least its level, The light in front is at least its level, A mob is in front. |
| Watches | The block it faces, or every block around the block it is on. Choose one of: The block it faces, Every block around. |
| Then | What happens while the test holds. The block's rules also hear the gate turn on and off. Choose one of: Its block moves nothing, A redstone signal out of its face. |
| Cuts the cable when shut | Off: the face stays shut, as always. On: while the test holds, the cable joins across this face; while it does not, the cable splits into two. A lever or a sensor can flip it. |
| What it does | It takes the first thing the network holds that its filter lets through, and acts with it on the block or the creature in front, as a player would. Choose one of: Uses the item (bone meal, a hoe, a bucket), Places it (a block), Hits a creature with it (a sword wears), Breaks the block with it as a tool. |
| The other way round | On: it acts while the test does not hold. |
| Colour | What leaves through this face goes only to faces of the same colour. Choose one of: None, White, Orange, Magenta, Light blue, Yellow, Lime, Pink, Gray, Light gray, Cyan, Purple, Blue, Brown, Green, Red, Black. |
| Fills first | Which block its face fills first: as the face says, by priority, each in turn, or the nearest. Choose one of: As the face says, By priority, Each in turn, The nearest. |
| Speed | How many times over its face's rate it moves, as that many speed upgrades would. From 0 to 8. |
| Acts every | How often it places, breaks, picks up, drops, tunnels or counts. Twenty ticks is a second. From 1 to 1200 ticks. |
| Level | The signal is on while the network holds at least this many. A gate or a sensor testing light counts up to 15. From 0 to 1000000000. |
| Also asks for crafting | While the count is under the level, the part also asks the store to craft this many, once at a time. 0: it only gives its signal. From 0 to 6400. |
| Counts | The item it counts in the network. None: everything the network keeps. |
| Looks like | The block this part looks like. A cover covers a face with it; any other part wears it and keeps working. None: a cover takes the look of a block you use it on while sneaking; any other part keeps its own look. You can also sneak and use a block item on a part you placed. |
| Fits on | The blocks it goes on. None listed: every block that holds parts. |
| Reads | What it reads off the block it faces, again and again: its redstone, how many items it holds (of the item it counts, or all), the light or the mobs in front, or the block's answer when asked one of its readings. Choose one of: Redstone, Items, Light, Mobs, The block's answer, Every item, one by one, Fluid (mB), Energy. |
| Reads the fluid | The fluid it counts, written as its game name. Leave it empty to count all fluids in the block it faces. |
| Writes | What it does with its value: gives it as a redstone signal out of its face (0 to 15), or asks the block it faces to do one of its named actions with the value each time it changes. Choose one of: Redstone, Asks the block. |
| Value | For a reader, the name the world remembers what it reads by. For a writer, a name, or a sum of names and numbers like heat * 2 > 50. |
| Values are shared | Whether the values it keeps and reads are the whole world's, or only those of the cable network it sits on (two networks can then use the same name for different things). Choose one of: In the whole world, On this cable network only. |
| Keeps the last | How many of the values it read it keeps, newest first, so a sum can look back: last(heat, 1) is the one before, avg(heat) the average of them all. 1 keeps none extra. From 1 to 64. |
| Amount follows a value | A value's name, or a sum like min(spare, 5). The part then moves that many at a time, from 1 to 9. Leave it empty to keep the speed above. If the value does not exist yet, the speed above is used. |
| Pace follows a value | A value's name, or a sum. The part then acts every that many ticks, from 1 to 1200. Leave it empty to keep the number above. If the value does not exist yet, the number above is used. |
| Priority follows a value | A value's name, or a sum. Its face then has that priority; the higher, the sooner it is served. Leave it empty to keep the face's own priority. |
| Channel follows a value | A value's name, or a sum. Its face then uses that channel, 0 to 15 (the sixteen colours in order), or -1 for none. Leave it empty to keep the face's own channel. |
| Filter follows a list | The name of a list of items, such as the one an 'every item' reader makes. The part then moves only those items. A value holds one number, so a single item name cannot be a value; use a list. Leave it empty to keep the marks. |
| Asks for | The name it asks the block it faces, when it reads or writes by asking: one of that block's "When it is asked to". |
| Opens a screen when used | Using the part with an empty hand opens its slots (and, for a terminal, what the network keeps). Turn it off to keep the part closed. |
| Keeps energy | The part stores energy of its own, like a small battery. It fills from the network and gives to the block it faces. Each part on a block keeps its own. |
| Energy it holds | The most energy the part can store. From 1 to 1000000000. |
| Takes in per tick | How much energy the part pulls from the network each tick. 0 means it takes none. From 0 to 1000000. |
| Gives out per tick | How much energy the part gives the block it faces each tick. 0 means it gives none. From 0 to 1000000. |
| Keep its energy in a value | A value name. The part writes its stored energy there, so a rule can read it as that value. Leave empty to keep it private. |

Every item also has the settings on the [Item](editor-item.md) page.

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

It comes with these abilities already on: A face part.

## What it works with

It points at: [Model](editor-model.md).

Other things that open the same editor: [Item](thing-item.md), [Crate](thing-lootCrate.md), [Backpack](thing-backpack.md), [Settings copier](thing-settingsCopier.md), [Letter](thing-letter.md), [Pocket](thing-pocket.md), [Storage disk](thing-storageDisk.md), [Disk for fluids](thing-fluidDisk.md), [Wireless terminal](thing-wirelessTerminal.md), [Upgrade](thing-upgrade.md), [Structure finder](thing-structureFinder.md), [Pointer](thing-pointer.md), [Designator](thing-designator.md), [Item filter](thing-itemFilter.md), [Configurator](thing-configurator.md), [Waypoint compass](thing-waypointCompass.md), [Spell wand](thing-spellWand.md), [Spell book](thing-spellBook.md), [Spell scroll](thing-spellScroll.md), [Tool](thing-tool.md), [Weapon](thing-weapon.md), [Armor](thing-armour.md), [Food](thing-food.md), [Fuel](thing-fuel.md), [Bow](thing-bow.md), [Crossbow](thing-crossbow.md), [Shield](thing-shield.md), [Part](thing-part.md), [Tool of parts](thing-partsTool.md), [Golem-style creature](thing-partsCreature.md), [Battery](thing-battery.md), [Powered tool](thing-poweredTool.md), [Powered armour](thing-poweredArmour.md), [Building wand](thing-buildingWand.md), [Copy wand](thing-copyWand.md), [Capsule](thing-capsule.md), [Building plan](thing-buildingPlan.md), [Mob catcher](thing-mobCatcher.md), [Carving tool](thing-carvingTool.md), [Bag of pieces](thing-bitBag.md), [Shape pattern](thing-shapePattern.md), [Tree axe](thing-treeAxe.md), [Vein pickaxe](thing-veinPickaxe.md), [Module](thing-module.md), [Building tool](thing-builder.md), [Thrown weapon](thing-thrown.md), [Music disc](thing-musicDisc.md), [Shears](thing-shears.md), [Fishing rod](thing-fishingRod.md), [Tool for everything](thing-multiTool.md), [Hat](thing-hat.md), [Vehicle part](thing-vehiclePart.md).

## Picture

![Item](/media/docs/editor-item.webp)

## Related pages

- [Item](editor-item.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
