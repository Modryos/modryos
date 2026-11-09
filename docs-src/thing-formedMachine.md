---
title: Formed machine
description: A machine built of many blocks: it works only while the blocks around it stand as its pattern, drawn layer by layer on its Pattern tab, says.
section: Things you can make
order: 83
---

A machine built of many blocks: it works only while the blocks around it stand as its pattern, drawn layer by layer on its Pattern tab, says. A frame of iron to start.

## How to add it

- New thing > Machines and networks > Formed machine


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

### Energy

| Setting | What it does |
| --- | --- |
| Most it holds | Its buffer. Set it to nothing for a cable, which holds nothing of its own. From 0 to 1000000000. |
| Most a second | The most that crosses this block each second. A run of cable carries as much as its narrowest one, not the sum of them. From 0 to 1000000000. |
| No limit | On: energy cross this block as fast as the blocks at both ends can give and take. The number above is ignored. |

### Connections

| Setting | What it does |
| --- | --- |
| Faces | Which of the six faces connect, and to what. Open the Connections tab to set them. |
| What arrives | A cable or a pipe passes it on and holds nothing. A machine, a tank or a battery keeps it. Choose one of: It keeps it, It passes it on. |
| Served before others | When several blocks want the same thing and there is not enough, the higher number is filled first. Equal numbers take turns. From -64 to 64. |
| Serves first | Whom what leaves it goes to first, for items, fluids and every stock: shared by priority, each block in turn, or the nearest along the pipes. Choose one of: By priority, Each in turn, The nearest. |
| Faces have colours | A coloured face joins only faces of its colour. Off, faces ignore colour. |
| Dyes a face steps through | How many of the sixteen dyes a channel can be set to. From 1 to 16. |
| Face modes | What pressing a face goes through, in order. Empty keeps Off, In, Out, Both. Each row has: Name, Colour, Does. |
| Players set each face | A player right-clicks a face with an empty hand and sets what it does on that placed block alone. The table is where every placed block starts. |
| Face screen | The screen a player opens by right-clicking a face of the placed block, laid out on the Face screen tab. Until it is changed there, the product draws its own rows. |
| Items a face filters | How many items a player can mark on a face, to let only those through or to keep them out. A mark is not the item: nothing is taken from the player. From 0 to 9. |
| Filter of your own | A piece of your own code that answers yes or no for each item, asked on every face beside the marks, for what the marks cannot say: damage, data, a stock level. |
| Speed upgrade | An item a player puts into a face's upgrade slot on its screen. Each one moves that face's rate again, eight at most; they drop when the block is broken. |
| Reserve room for items | An item riding through this pipe holds its place in the chest or machine it is going to, so two stacks never fight for one slot and nothing has to turn round. Turn it off and a stack just goes to the nearest place with room right now. |
| Item to link a chest | Pick an item and this block becomes a node that reaches a chest or machine without a cable. A player right-clicks the chest with the item, then right-clicks this block with it, and the network uses that chest as if it stood against the top of this block. Sneak and right-click the block to cut the link. Leave empty for a plain block. |
| How far a link reaches | The most blocks between this node and the chest it is linked to, in the same dimension. 0 means any distance. From 0 to 1024 blocks. |
| When it is broken | A block that carries more than one thing (items and fluid and energy, say) can come apart one thing at a time: mining it takes off the one added last and leaves the rest standing. Sneaking while you mine breaks the whole block. Choose one of: The whole block goes, One piece at a time. |
| Item for the items piece | What drops when the items part is taken off, and what a player uses on the block to put it back. Leave empty and a part taken off is gone. |
| Item for the fluid piece | What drops when the fluid part is taken off, and what a player uses on the block to put it back. Leave empty and a part taken off is gone. |
| Item for the energy piece | What drops when the energy part is taken off, and what a player uses on the block to put it back. Leave empty and a part taken off is gone. |
| Holds parts | Face parts go on its faces, one a face and one in the middle, and covers take another block's look. A face with no part joins only blocks of this mod, never a chest. |
| Moves by itself | Its out sides push into the blocks beside them and its in sides pull from them, with no pipe between: a machine filling the chest next to it, a block emptying a cart in front of it. Works for items, fluids, energy and your own stocks. Choose one of: No, Pushes out, Pulls in, Pushes and pulls. |
| How much a second | How much it moves each second through each side: items, or the units of a fluid, energy or stock. From 1 to 100000 perSecond. |
| Holds a cart | Stops the cart that rolls up beside it while it works, so the cart stays until the block has moved all it can, or until a rule lets it go. Needs Moves by itself. Choose one of: No, Until it has nothing more to move, Until a rule lets it go. |
| Longest it holds | The most seconds it holds one cart, so a cart is never kept for good. 0 holds as long as it takes. From 0 to 86400 seconds. |
| Destroys what none take | What no other block on its pipes takes is destroyed here, after every other block had its turn. Marks on its sides say what it destroys; with none, everything. |
| Fills a block | Whether its sides fill a block whenever it has room, or only while it holds none of what comes (one stack in each furnace, never two). Choose one of: Whenever it has room, Only when it holds none. |
| Stands in for a far block | Linked to a far chest or machine with the linking item, this block is that chest to hoppers, pipes and other mods: what goes in here goes there, and what is taken from here comes from there. |
| Joins without a seam | Where an arm of this block meets one of these, neither draws the end of its arm, so a run of them reads as one tube. A machine or a chest it meets keeps its end and its plate. Choose one of: As its pictures say, Blocks like it, Every cable or pipe it joins, Nothing. |

### What it makes

| Setting | What it does |
| --- | --- |
| Slots it takes | The first slots of its inventory, the ones it takes from. They sit left of the arrow in its screen. From 1 to 54. |
| Slots it puts into | The slots after the ones it takes from. They sit right of the arrow. From 0 to 54. |
| When powered | What a redstone signal reaching the block does to it. Choose one of: No change, It stops, It only runs then. |
| When it is full | What it does when the slots it puts into are full. Choose one of: It waits, It throws it away. |
| Recipe type name | A name of your own for the kind of recipes this machine runs, shown as their page in the recipe viewer: Distilling, Infusing. |
| Runs the recipes of | Another machine whose recipes this one runs too, so many machines share one recipe type. Empty: its own. |
| Counts as working | While working: only while a recipe is under way, an idle machine rests. Always: it counts as working all the time. Choose one of: While working, Always. |

### Formed from a pattern

| Setting | What it does |
| --- | --- |
| Pattern | A ring: the eight blocks around it on its own level. Below: the nine under it. A cube: all twenty-six around it. Your own: the places you list, turned the way it faces. Any size: a box or a group of touching blocks it finds by looking, its size between a smallest and a largest. Choose one of: a ring around it, a floor under it, a cube around it, places of your own, drawn, any size, found by looking. |
| Build shape | A box: walls on all six sides round an inside. An open box: walls and a floor, no roof. Touching: every block of the build that touches another, any shape; it grows as blocks are added. Choose one of: a box, an open box, blocks that touch. |
| Smallest across | The fewest blocks across (both ways), the walls counted. From 3 to 64. |
| Largest across | The most blocks across (both ways), the walls counted. From 3 to 64. |
| Lowest | The fewest blocks high, the floor (and roof) counted. From 2 to 64 blocks. |
| Tallest | The most blocks high, the floor (and roof) counted. From 2 to 64 blocks. |
| Most blocks | The most blocks that may touch in one build; more and it does not form. From 1 to 4096. |
| Blocks of the build | Each kind of block the build is made of: where it may stand, at least and at most how many, and what one is worth. The inside may always be empty. Each row has: Block, Where, At least, At most, Worth. |
| Inside scales | What the room inside the formed build multiplies: its capacities, its rates, both, or nothing. A tank 3 inside holds three times its capacity. Choose one of: nothing, its capacities, its rates, capacities and rates. |
| Made of | The block every place of the pattern must hold. |
| Drawn pattern | The pattern drawn on the Pattern tab, layer by layer: each cell a test a block must pass (a block, a tag, any of several, a fluid, air, anything), and one cell the machine itself. |
| Stands | As it faces: the pattern turns with the machine's front. Any way round: it forms whichever of the four ways it was built. Choose one of: as it faces, any way. |
| Mirrored too | Its mirror image forms as well, left and right swapped. |
| Several sizes | A band of the drawing that may repeat, so a taller or a longer build forms as well. It forms the largest size that stands. Choose one of: one size, taller, longer. |
| Band from | The first layer (or row, from the front) of the band that repeats, counted from 1. From 1 to 48. |
| Band to | The last layer (or row) of the band that repeats. From 1 to 48. |
| At least | The fewest times the band stands. From 1 to 48. |
| At most | The most times the band stands; at most 16 sizes in all. From 1 to 48. |
| How many of a block | Of the blocks standing in the pattern, at least and at most so many of one: at least 1 item port, at most 2 energy ports. Each row has: Block, At least, At most. |
| Worth of a block | Several kinds of block may stand in one place, each worth so much: a basic cell 1, an elite cell 8. Formed, the machine adds up the worth of the blocks standing in its pattern. Each row has: Block, Worth. |
| Worth scales | What the formed machine's worth multiplies: its capacities, its rates, both, or nothing (its rules still read it). Choose one of: nothing, its capacities, its rates, capacities and rates. |
| Looks | By itself: every second. With an item: when a player uses the item on it, as a hammer or a wrench. By a rule: when a rule says so. Once formed it looks every second, so a block taken away breaks it. Choose one of: by itself, with an item, by a rule. |
| Item | The item (or tag) a player uses on it to make it look and form. |
| Screen only when formed | Before it is formed, using it only says what is missing; its screen opens once it is formed. |
| Ghost of what is missing | While a player is near and it is not formed, a small glowing copy of each missing block stands where it goes. |
| Places | Each place from the block, as a player standing at its front sees it, and the block it must hold. Each row has: Right, Up, Behind, Block. |
| Works only when formed | A machine that makes nothing until its pattern is complete, as a machine built of many blocks does. |

Every block also has the settings on the [Block](editor-block.md) page.

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

It comes with these abilities already on: Inventory, Energy, Connections, What it makes, Formed from a pattern.

## What it works with

It points at: [Model](editor-model.md), [Sound](editor-sound.md), [Particle](editor-particle.md), [Item](editor-item.md), [Code](editor-code.md).

Other things that open the same editor: [Block](thing-block.md), [Machine](thing-machine.md), [Generator](thing-generator.md), [Cable](thing-cable.md), [Pipe](thing-pipe.md), [Item pipe](thing-itemPipe.md), [Tank](thing-tank.md), [Transmitter](thing-wirelessTransmitter.md), [Receiver](thing-wirelessReceiver.md), [Wireless energy node](thing-wirelessNode.md), [Shared chest](thing-sharedChest.md), [Shared tank](thing-sharedTank.md), [Chest](thing-chest.md), [Drawer](thing-drawer.md), [Storage crate](thing-crate.md), [Mailbox](thing-mailbox.md), [Trade station](thing-tradeStation.md), [Asking chest](thing-askingChest.md), [Terminal](thing-terminal.md), [Storage cell](thing-storageCell.md), [Storage cable](thing-storageCable.md), [Drive](thing-drive.md), [Network heart](thing-networkHeart.md), [Dense cable](thing-denseCable.md), [Link](thing-storeLink.md), [Access point](thing-accessPoint.md), [Crafter](thing-crafter.md), [Pattern table](thing-patternTable.md), [Matter tank](thing-matterTank.md), [Altar](thing-altar.md), [Pedestal](thing-pedestal.md), [Machine casing](thing-machineCasing.md), [Waypoint](thing-waypointBlock.md), [Aiming block](thing-aimingBlock.md), [Berry bush](thing-berryBush.md), [Matter pipe](thing-matterPipe.md), [Assembly station](thing-assemblyStation.md), [Carved block](thing-carvedBlock.md), [Ore](thing-ore.md), [Crop](thing-crop.md), [Plant](thing-plant.md).

## Picture

![Block](/media/docs/editor-block.webp)

## Related pages

- [Block](editor-block.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
