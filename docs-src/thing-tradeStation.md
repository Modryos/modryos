---
title: Trade station
description: Gives what it offers for what it wants, from its own slots.
section: Things you can make
order: 193
---

Gives what it offers for what it wants, from its own slots.

## How to add it

- New thing > Machines and networks > Trade station


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

### Trade station

| Setting | What it does |
| --- | --- |
| Gives | The thing it gives. Leave it and Wants empty, and the station's first slot shows what it gives and its second what it wants, so a player sets the offer in the game. |
| How many it gives | How many of it one trade gives. From 1 to 64. |
| Wants | The thing it takes as payment. |
| How many it wants | How many of it one trade costs. From 1 to 64. |
| Goods for sale | Add goods and it becomes a shop: using it opens a trading screen that lists them with their prices. Each row has: Gives, How many it gives, Price paid in, Price, In stock. |
| Goods on sale at once | How many of the goods are for sale at a time, taken in turn from the list. 0 shows them all. From 0 to 64. |
| Goods change every | Seconds before the next goods of the list go on sale and the stock fills again. 0 never changes them. From 0 to 1000000 seconds. |
| Next goods | Which goods go on sale when they change: the next ones down the list, or a shuffled pick each time. Choose one of: Next in the list, Shuffled. |
| Buys from players | Things it buys: a player who uses it holding one sells them and is paid. Each row has: Buys, How many at a time, Pays in, Pays. |
| Buys what is dropped on it | Things it buys that a player drops or throws on top of it are sold, as a shipping bin does. |
| Buys what lands in its slots | Things it buys that land in its slots, from a hopper or a player, are sold. Give it slots (Inventory) for this. |
| Pays out | Where the money for things dropped on it or put in its slots goes. A hopper under it can take money out of its slots. Choose one of: The player who sold, Into its slots, On top of it. |

Every block also has the settings on the [Block](editor-block.md) page.

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

It comes with these abilities already on: Inventory, Trade station.

## What it works with

It points at: [Model](editor-model.md), [Sound](editor-sound.md), [Particle](editor-particle.md), [Item](editor-item.md), [Code](editor-code.md).

Other things that open the same editor: [Block](thing-block.md), [Machine](thing-machine.md), [Generator](thing-generator.md), [Cable](thing-cable.md), [Pipe](thing-pipe.md), [Item pipe](thing-itemPipe.md), [Tank](thing-tank.md), [Transmitter](thing-wirelessTransmitter.md), [Receiver](thing-wirelessReceiver.md), [Wireless energy node](thing-wirelessNode.md), [Shared chest](thing-sharedChest.md), [Shared tank](thing-sharedTank.md), [Chest](thing-chest.md), [Drawer](thing-drawer.md), [Storage crate](thing-crate.md), [Mailbox](thing-mailbox.md), [Asking chest](thing-askingChest.md), [Terminal](thing-terminal.md), [Storage cell](thing-storageCell.md), [Storage cable](thing-storageCable.md), [Drive](thing-drive.md), [Network heart](thing-networkHeart.md), [Dense cable](thing-denseCable.md), [Link](thing-storeLink.md), [Access point](thing-accessPoint.md), [Crafter](thing-crafter.md), [Pattern table](thing-patternTable.md), [Matter tank](thing-matterTank.md), [Altar](thing-altar.md), [Pedestal](thing-pedestal.md), [Formed machine](thing-formedMachine.md), [Machine casing](thing-machineCasing.md), [Waypoint](thing-waypointBlock.md), [Aiming block](thing-aimingBlock.md), [Berry bush](thing-berryBush.md), [Matter pipe](thing-matterPipe.md), [Assembly station](thing-assemblyStation.md), [Carved block](thing-carvedBlock.md), [Ore](thing-ore.md), [Crop](thing-crop.md), [Plant](thing-plant.md).

## Picture

![Block](/media/docs/editor-block.webp)

## Related pages

- [Block](editor-block.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
