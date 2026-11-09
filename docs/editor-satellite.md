# Satellite editor

A launched thing that watches a place and reports back. A rule launches one over a place; every so often its report rule runs there and reads what you like (an area value, the blocks or mobs near), then acts: sets a value, notes a number on an item, sends energy down.

## How to add it

- New thing > Blocks and items > Satellite

## What you can set

| Setting | What it does |
| --- | --- |
| Name | The name of the satellite, as you and your players know it. |
| Game name | The satellite's name inside the game files. Lower case letters, numbers and underscores. |
| Reports every | How many seconds between its reports. From 1 to 86400 seconds. |
| Stays up for | How many seconds it stays up before it comes down. Nought: until a rule brings it down. From 0 to 31536000 seconds. |
| Covers | How many blocks round the place it watches count as covered, for the words that ask which satellites cover a place. From 1 to 100000 blocks. |
| No more than | How many of it may be up at once in the world. Nought: no limit. From 0 to 100000. |

## What it becomes in the game

It runs on the player's side of the game.

## What it works with

It does not point at other things.

These point at it: [Behavior](editor-behaviour.md).


## Related pages

- [Satellite](thing-satellite.md)
- [Glossary](glossary.md)
