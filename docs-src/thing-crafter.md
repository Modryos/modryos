---
title: Crafter
description: Holds patterns, so the terminal can craft what they make.
section: Things you can make
order: 53
---

Holds patterns, so the terminal can craft what they make.

## How to add it

- New thing > Machines and networks > Crafter


## What you can set

### Inventory

| Setting | What it does |
| --- | --- |
| Slots | How many stacks it holds, up to 256. Past six rows, its screen scrolls them or shows them all, as Screen shows says. From 1 to 256. |
| Screen shows | How its screen lays out more rows than six, until you lay it out on the Screen tab: six rows and a bar that scrolls the rest, or every slot at once in a screen grown to fit them. Choose one of: Six rows and a scroll bar, The whole grid at once. |
| Slots across | How many slots a row of its screen holds, 1 to 24. Past nine, the screen grows wider. From 1 to 24. |
| Items per slot | The most of one thing a slot takes. The game reads it live, so a mod setting can stand in. From 1 to 64. |
| Most a second | The most that moves in or out of it each second along a network. Hoppers keep their own speed. From 1 to 1024. |
| No limit | On: items cross this block as fast as the blocks at both ends can give and take. The number above is ignored. |
| Items travel at | How fast an item crosses this block on a pipe that passes items on. At nought an item arrives the moment the network moves it. Above nought it takes time to cross, pipe by pipe, and each pipe holds and keeps what is inside it. From 0 to 20 blocksPerSecond. |
| Shares the cards in it | Every value card put in it gives its value by its name, to the whole world or to the cable network it sits on, so a reader or a sum anywhere there can use the name. A card named in an anvil uses that name; otherwise the item's own. Choose one of: No, With the whole world, On its cable network. |
| Opens a screen | Used by hand, it opens its slots in a screen laid out on the Screen tab. |
| Takes back with | Empty hand: any empty hand takes the item back. Sneaking: only an empty hand while sneaking does. Choose one of: An empty hand, Sneaking, empty hand. |
| Put in and take out by hand | A block with no screen takes the stack in the player's hand when used, and gives it back to an empty hand (sneaking or not), as a lectern or a decorated pot does. Turn it off when only machines and commands fill it. |
| Screen | The machine's screen, laid out on the Screen tab. Until it is changed there, the product draws it from the slots and gauges. |

### Crafter

| Setting | What it does |
| --- | --- |
| Keeps in stock | A thing the crafter keeps the network stocked with: while there are fewer than the number below, it crafts more from its patterns. None: it crafts only when asked. |
| Keeps at least | How many of the thing above the network should hold. The crafter checks every two seconds and crafts up to a stack at a time. From 0 to 1000000000. |
| Jobs at once | How many crafting requests the patterns in this crafter run at the same time. A job over the limit waits. From 1 to 1000. |
| Seconds a step takes | How long this crafter waits between the steps of its patterns when the store is asked to craft. 0: as fast as the game checks. From 0 to 3600 seconds. |
| Patterns made in a machine | Each row is a pattern that sends things to a machine next to the crafter: it takes the inputs out of the network, puts them into the machine, and waits for the result to come back. Works with any block that takes items or fluids, from any mod. Each row has: Kind, First thing that goes in, How many, Second thing that goes in, How many, Fluid that goes in, Amount of fluid, Item that comes out, How many come out, Fluid that comes out, Amount of fluid. |
| Machine side | Which side of the crafter has the machine. Any side: every block next to the crafter that takes the things is tried. Choose one of: Any side, Up, Down, North, South, East, West. |
| Give up after | How long the crafter waits for a machine to give back what it made. After that the pattern gives up and the request is marked as short. From 1 to 86400 seconds. |
| Runs at once | How many runs of a machine pattern wait on machines at the same time. More wait their turn. From 1 to 64. |

Every block also has the settings on the [Block](editor-block.md) page.

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

It comes with these abilities already on: Inventory, Crafter.

## What it works with

It points at: [Model](editor-model.md), [Sound](editor-sound.md), [Particle](editor-particle.md), [Item](editor-item.md), [Code](editor-code.md).

Other things that open the same editor: [Block](thing-block.md), [Machine](thing-machine.md), [Generator](thing-generator.md), [Cable](thing-cable.md), [Pipe](thing-pipe.md), [Item pipe](thing-itemPipe.md), [Tank](thing-tank.md), [Transmitter](thing-wirelessTransmitter.md), [Receiver](thing-wirelessReceiver.md), [Wireless energy node](thing-wirelessNode.md), [Shared chest](thing-sharedChest.md), [Shared tank](thing-sharedTank.md), [Chest](thing-chest.md), [Drawer](thing-drawer.md), [Storage crate](thing-crate.md), [Mailbox](thing-mailbox.md), [Trade station](thing-tradeStation.md), [Asking chest](thing-askingChest.md), [Terminal](thing-terminal.md), [Storage cell](thing-storageCell.md), [Storage cable](thing-storageCable.md), [Drive](thing-drive.md), [Network heart](thing-networkHeart.md), [Dense cable](thing-denseCable.md), [Link](thing-storeLink.md), [Access point](thing-accessPoint.md), [Pattern table](thing-patternTable.md), [Matter tank](thing-matterTank.md), [Altar](thing-altar.md), [Pedestal](thing-pedestal.md), [Formed machine](thing-formedMachine.md), [Machine casing](thing-machineCasing.md), [Waypoint](thing-waypointBlock.md), [Aiming block](thing-aimingBlock.md), [Berry bush](thing-berryBush.md), [Matter pipe](thing-matterPipe.md), [Assembly station](thing-assemblyStation.md), [Carved block](thing-carvedBlock.md), [Ore](thing-ore.md), [Crop](thing-crop.md), [Plant](thing-plant.md).

## Picture

![Block](/media/docs/editor-block.webp)

## Related pages

- [Block](editor-block.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
