# Spell

A spell of its own: what it does as rules (when it is cast, when it reaches a mob or a block, every tick it is kept up), what it costs (mana or any value), its cooldown and charge-up, and how it reaches: on the caster, along a ray, as a missile or all around. Cast by a wand, a scroll, any rule or a creature.

## How to add it

- New thing > Blocks and items > Spell


## What you can set

The main settings are below. The [Spell](editor-spell.md) editor lists every setting.

| Setting | What it does |
| --- | --- |
| Name | What the spell is called in the game. |
| Game name | The spell's game name in the game; another mod casts it by this. |
| What it is | A whole spell, or a part a spell is put together from: a medium says how a made spell reaches, a modifier changes it. A whole spell is also the part that says what a made spell does. Choose one of: A whole spell (or an effect), A medium (how it reaches), A modifier (what changes it). |
| Made of parts | Put this spell together from parts: a medium, effects (whole spells, this mod's or another mod's) and modifiers. Their costs add up and every part's moments run. Empty: it is a spell of its own. Each row has: Part. |
| Reaches | How it reaches what it does: the caster alone, what the caster touches, along where the caster looks, as a projectile, every mob around, or as a construct left where its ray ends. Choose one of: On the caster, By touch, Along a ray, As a missile, All around, Left in the world. |
| Range | How far its ray goes, or how wide its area is, in blocks. From 1 to 128 blocks. |
| Missile | What it fires: one of the game's, or a projectile of the mod's own. Its hit is the spell's hit. Choose one of: Small fireball, Fireball, Arrow, Snowball, Wither skull. |
| Construct | What it leaves where its ray ends: a ward hits everything inside it again and again, a trap waits for the first to come in and hits once, a sentinel hits the nearest one in reach. Choose one of: A ward (hits all inside, again and again), A trap (waits, hits once), A sentinel (hits the nearest). |
| Stays for | How long the construct stays in the world, in seconds. From 0.05 to 3600 seconds. |
| Acts every | How often a ward or a sentinel hits, in seconds. From 0.05 to 600 seconds. |
| Construct size | How far from its middle the construct reaches, in blocks. From 0.5 to 32 blocks. |
| Construct hits | Whom the construct hits: monsters alone, or every living thing but the one who cast it. Choose one of: Monsters, Everyone but the caster. |
| Power more | How much stronger it makes the spell, in a hundred: 50 is half as strong again. The power is handed to every moment of the spell. From -100 to 1000 percent. |
| Range more | How much further it makes the spell reach, and a construct wider, in a hundred. From -100 to 1000 percent. |
| Time more | How much longer it makes a kept-up spell and a construct last, in a hundred. From -100 to 1000 percent. |
| Copies more | How many more copies of the spell go out, fanned to the sides. From 0 to 16. |
| Cost more | How much more the whole made spell costs, in a hundred; below nought makes it cheaper. From -100 to 1000 percent. |
| Part item | The item that stands for it when a player puts a spell together in a block with slots (a rune, a herb, a focus), with the Make a spell word. |
| Costs | The value it is paid from: the player's mana, or a value the item that casts it keeps (a wand's charge). None makes it free. |
| Cost | How much of that value one cast takes; a kept-up spell takes this much a second. From 0 to 1000000000. |
| Cooldown | How long before it can be cast again, in seconds. From 0 to 3600 seconds. |
| Charge-up | How long the use is held before it goes, in seconds. From 0 to 60 seconds. |
| Kept up | It goes on while the use is held, its moment every tick and its cost a second at a time: a beam, a stream of fire. |
| Must be learned | Only a player who has learned it casts it (a spell book teaches it, or the Teach a spell word). |

## What it becomes in the game

It is added to the game, so a player needs your mod to see it.

## What it works with

It points at: [Projectile](editor-projectile.md), [Value](editor-value.md).

## Picture

![Spell](/media/docs/editor-spell.webp)

## Related pages

- [Spell](editor-spell.md)
- [Templates and samples](templates-and-samples.md)
- [Glossary](glossary.md)
