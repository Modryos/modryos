# Altar

A block that performs rituals with offerings on pedestals around it, formed while a ring of gold blocks lies around it; say in its rules what forming does: summon, teleport, give, open a portal.

## How to add it

- New thing > Machines and networks > Altar


## What you can set

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

### Performs rituals

| Setting | What it does |
| --- | --- |
| Pedestals within | How far from it, on its own level and one up or down, a pedestal's item counts as an offering. From 1 to 8 blocks. |
| Started with | The item a player uses on it to start a ritual, which is not used up. Empty: using it with an empty hand while sneaking. |

Every block also has the settings on the [Block](editor-block.md) page.

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

It comes with these abilities already on: Formed from a pattern, Performs rituals.

## What it works with

It points at: [Model](editor-model.md), [Sound](editor-sound.md), [Particle](editor-particle.md), [Item](editor-item.md), [Code](editor-code.md).

Other things that open the same editor: [Block](thing-block.md), [Machine](thing-machine.md), [Generator](thing-generator.md), [Cable](thing-cable.md), [Pipe](thing-pipe.md), [Item pipe](thing-itemPipe.md), [Tank](thing-tank.md), [Transmitter](thing-wirelessTransmitter.md), [Receiver](thing-wirelessReceiver.md), [Wireless energy node](thing-wirelessNode.md), [Shared chest](thing-sharedChest.md), [Shared tank](thing-sharedTank.md), [Chest](thing-chest.md), [Drawer](thing-drawer.md), [Storage crate](thing-crate.md), [Mailbox](thing-mailbox.md), [Trade station](thing-tradeStation.md), [Asking chest](thing-askingChest.md), [Terminal](thing-terminal.md), [Storage cell](thing-storageCell.md), [Storage cable](thing-storageCable.md), [Drive](thing-drive.md), [Network heart](thing-networkHeart.md), [Dense cable](thing-denseCable.md), [Link](thing-storeLink.md), [Access point](thing-accessPoint.md), [Crafter](thing-crafter.md), [Pattern table](thing-patternTable.md), [Matter tank](thing-matterTank.md), [Pedestal](thing-pedestal.md), [Formed machine](thing-formedMachine.md), [Machine casing](thing-machineCasing.md), [Waypoint](thing-waypointBlock.md), [Aiming block](thing-aimingBlock.md), [Berry bush](thing-berryBush.md), [Matter pipe](thing-matterPipe.md), [Assembly station](thing-assemblyStation.md), [Carved block](thing-carvedBlock.md), [Ore](thing-ore.md), [Crop](thing-crop.md), [Plant](thing-plant.md).

## Picture

![Block](/media/docs/editor-block.webp)

## Related pages

- [Block](editor-block.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
