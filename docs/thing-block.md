# Block

Something placed in the world: ore, stone, a crate.

## How to add it

- New thing > Blocks and items > Block


## What you can set

The main settings are below. The [Block](editor-block.md) editor lists every setting.

| Setting | What it does |
| --- | --- |
| Name | What players read in the game, in any words: spaces and capitals are fine, like "Ruby Blade of Sam". The Game name is the short id the game uses instead. You can change it any time. |
| Game name | The id the game and its commands use: small letters, digits and underscores, like katana. In commands and recipes the mod's id and a colon go in front: for a mod called rubygear, katana is written rubygear, a colon, then katana. Players never read it; that is the Name. Change it later and it is renamed everywhere. |
| Texture | The picture on every face of the block. |
| Time to break | How hard the block is; stone is 1.5, dirt 0.5. Higher is slower; obsidian is 50. The overview shows the seconds by hand. From 0 to 3600. |
| Form | The game's own shapes, each drawn from this block's picture and working as the game's own does: stairs you walk up, a slab that doubles, a fence and a wall that join their neighbours, a door and a trapdoor that open, a button and a pressure plate that give a redstone signal, a pane, a carpet, leaves that fall away when no log is near, a pillar that lies the way it is placed, and a rail the game's carts ride. Choose one of: A full block, Stairs, A slab, A wall, A fence, A fence gate, A door, A trapdoor, A pressure plate, A button, A pane, as glass and bars, A carpet, Leaves, A pillar, as a log, A rail, A slope, A slope, outer corner, A slope, inner corner, A ridge, as a roof top, A quarter round, as an arch, A round pillar, A window frame. |
| Wears the block used on it | Off, the shape shows this block's own picture. On, a player can use any full block on it, from this mod, the game or another mod, and the shape then shows that block's pictures instead, grass and leaves colours included. Using nothing while sneaking gives the block back, and breaking the shape gives it back too. The slope, corners, ridge, quarter round, round pillar and window frame turn to face you and hang upside down when placed on a ceiling or on the top half of a side, like stairs. |
| Turns carts | Whether a cart rolling onto it goes off to one side instead of straight on: never, while redstone powers it, or by the cart, when the cart matches the list below. Lay track on three sides of it, like a T. Choose one of: Never, While powered, By the cart. |
| Turns to | The side a turned cart goes off to, as the cart sees it coming in: its left or its right. Choose one of: Left, Right. |
| Which carts turn | The carts that turn, any one of these: a kind of cart (a chest minecart), an item it carries (coal), a tag of items (all ores), or the fluid in its tank (water), each by its game name. Empty: every cart turns. |
| Gives a signal | A redstone signal while a cart is on it: for any cart, only a full cart, only an empty cart, or stronger the fuller the cart is. Full counts its chest, its tank and its battery together. Choose one of: Never, For any cart, For a full cart, For an empty cart, By how full. |
| Picture of its ends | The picture on its two ends, as a log shows its rings; its sides wear the block's own picture. With none, the ends wear that too. |
| Picture of the top half | The door's upper half; its lower half and the item in the hand wear the block's own picture. With none, both halves wear that. |
| Works like | Wood: a door or trapdoor opens by hand, a button stays pressed longer and an arrow presses it, a pressure plate feels anything on it, a fence joins the game's wooden fences. Metal or stone: only redstone opens a door or trapdoor, and only a player or a mob presses a plate. Choose one of: Wood, Metal or stone. |

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

## What it works with

It points at: [Model](editor-model.md), [Sound](editor-sound.md), [Particle](editor-particle.md), [Item](editor-item.md), [Code](editor-code.md).

Other things that open the same editor: [Machine](thing-machine.md), [Generator](thing-generator.md), [Cable](thing-cable.md), [Pipe](thing-pipe.md), [Item pipe](thing-itemPipe.md), [Tank](thing-tank.md), [Transmitter](thing-wirelessTransmitter.md), [Receiver](thing-wirelessReceiver.md), [Wireless energy node](thing-wirelessNode.md), [Shared chest](thing-sharedChest.md), [Shared tank](thing-sharedTank.md), [Chest](thing-chest.md), [Drawer](thing-drawer.md), [Storage crate](thing-crate.md), [Mailbox](thing-mailbox.md), [Trade station](thing-tradeStation.md), [Asking chest](thing-askingChest.md), [Terminal](thing-terminal.md), [Storage cell](thing-storageCell.md), [Storage cable](thing-storageCable.md), [Drive](thing-drive.md), [Network heart](thing-networkHeart.md), [Dense cable](thing-denseCable.md), [Link](thing-storeLink.md), [Access point](thing-accessPoint.md), [Crafter](thing-crafter.md), [Pattern table](thing-patternTable.md), [Matter tank](thing-matterTank.md), [Altar](thing-altar.md), [Pedestal](thing-pedestal.md), [Formed machine](thing-formedMachine.md), [Machine casing](thing-machineCasing.md), [Waypoint](thing-waypointBlock.md), [Aiming block](thing-aimingBlock.md), [Berry bush](thing-berryBush.md), [Matter pipe](thing-matterPipe.md), [Assembly station](thing-assemblyStation.md), [Carved block](thing-carvedBlock.md), [Ore](thing-ore.md), [Crop](thing-crop.md), [Plant](thing-plant.md).

## Picture

![Block](/media/docs/editor-block.webp)

## Related pages

- [Block](editor-block.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
