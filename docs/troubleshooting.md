# Troubleshooting

## Quick fixes

### Cook failed: do this

1. Open the [Cook](glossary.md#cook) window (File > Export > Make the mod file (.[jar](glossary.md#jar))) and find the first red line. It says why.
2. Fix what it names. The message is usually below on this page: press Ctrl+F and type a few of its words.
3. Press **Make again**.
4. Still red? Press F6 to report it. Say what you changed last.

### Play does not start: do this

1. Wait if it is the first time. The studio downloads about 1.7 GB once, so it can take a few minutes.
2. Look at the Cook window and the notices for a red line, and fix that first.
3. Check that you are signed in to Minecraft with an account that owns the game, and that you pressed **Accept and Play** once.
4. Open **Play on** and make sure the version and [loader](glossary.md#loader) are ones your project is made for (see [Versions and loaders](versions-and-loaders.md)).
5. Press Stop, then [Play](glossary.md#play) again. Still stuck? Press F6 to report it.

### Sign-in problems: do this

1. Check your internet connection.
2. Check the email for typing slips, and ask for a new code (a code runs out after a while).
3. Too many tries? Wait a few minutes.
4. Signed out while working? Sign in again from Settings > Account. Your projects stay on your computer.

## All messages

Each heading below is a message the studio can show. A word in brackets, like (name), is filled in by the studio with your own thing's name.

## Account and sign-in

### This computer is offline, so the code host could not be reached. Nothing was changed.

**What it means:** Shown when you sign in.

**How to fix:** Connect to the internet, then try again.

### The code ran out before it was approved. A code works for 15 minutes.

**What it means:** Shown when you sign in.

**How to fix:** Start the sign-in again and approve the new code within 15 minutes.

### The code host did not finish the sign-in. Nothing was changed.

**What it means:** Shown when you sign in.

**How to fix:** Start the sign-in again.

### Please tick that you are 15 or older.

**What it means:** On the create-account form, when the age box is not ticked.

**How to fix:** Tick the box that says you are 15 or older, then press the button again.

### Please agree to the Terms of Use and the Privacy Policy.

**What it means:** On the create-account form, when the Terms box is not ticked.

**How to fix:** Tick the box for the Terms of Use and the Privacy Policy, then press the button again.

### That email does not look right.

**What it means:** When you type an email on the sign-in or account form.

**How to fix:** Check it and try again.

### Too many tries. Please wait a few minutes and try again.

**What it means:** When you asked for a code or tried to sign in too many times in a row.

**How to fix:** Wait a few minutes, then try once more.

### Confirm you are a person to get your code.

**What it means:** When you ask for a sign-in code and the check that you are a person has not run.

**How to fix:** Press the button again to try.

### We could not confirm you are a person. Please try again.

**What it means:** When the check that you are a person did not pass.

**How to fix:** Press the button again. If it keeps failing, check that your internet works.

### That code is not right, or it ran out.

**What it means:** When you type the code that was sent to your email.

**How to fix:** Try again or ask for a new code.

### That invite code is not right.

**What it means:** When you type an invite code.

**How to fix:** Check it and try again.

### That invite code was already used.

**What it means:** When you type an invite code that someone has already used.

**How to fix:** Ask for a new invite code. Each one works once.

### Modryos could not reach the internet.

**What it means:** When the studio cannot reach the internet.

**How to fix:** Check your connection and try again.

### You were signed out. Please sign in again.

**What it means:** When your sign-in ran out while you were working.

**How to fix:** Sign in again from Settings > Account. Your projects stay on your computer.

### Something went wrong on our side. Please try again in a bit.

**What it means:** When the account server has a problem that is not yours.

**How to fix:** Wait a little and try again. If it stays, press F6 to report it.

### Sign-ups are paused for a short while. Try again later.

**What it means:** When you try to create an account while new accounts are switched off.

**How to fix:** Sign-ups are paused for a short while. Try again later.

### Another account already uses that email.

**What it means:** When you create an account or change your email to one that is already in use.

**How to fix:** Use a different one.

### That is already your email.

**What it means:** When you change your email to the one you already have.

**How to fix:** Type a new one.

### The file could not be saved there.

**What it means:** When you save a file, such as your data download.

**How to fix:** Pick another folder and try again.

## Animation checks

### The expression (text) on (bone) at (time) s cannot be read from character (at), so it play...

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Fix the expression, or type a plain number.

### (text) on (bone) is drawn at random, so the preview and the game never show the same frame...

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Use a plain number if the preview must match the game.

### The curve into the key of (bone) at (time) s has an expression at one end, so it plays as ...

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Use plain numbers at both ends of the key to get a curve.

### Some keys move a part its model no longer has, so they move nothing.

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Remove keys of missing parts

### (bone) has a key at (time) s, after the animation ends at (length) s, so it is never playe...

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Move the key earlier, or make the animation longer.

### A sound or particle key at (time) s is after the animation ends at (length) s, so it never...

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Move the key earlier, or make the animation longer.

### A (particle) key comes from a part its model no longer has, so it comes from the mob's fee...

**What it means:** Shown in the Animation editor and in the Problems list while one is open.

**How to fix:** Pick a part the model has for that key.

## Attribute checks

### An item cannot give this attribute in (targets): the game there has no default item values...

**What it means:** Shown in the Attribute editor and in the Problems list while one is open.

**How to fix:** Nothing to do. Build for another [target](glossary.md#target) to use it.

## Biome checks

### Choose the block on top of its ground.

**What it means:** Shown in the Biome editor and in the Problems list while one is open.

**How to fix:** Choose the block on top of its ground.

### Choose the block under its top.

**What it means:** Shown in the Biome editor and in the Problems list while one is open.

**How to fix:** Choose the block under its top.

### Choose which of the game's biomes it takes a share of.

**What it means:** Shown in the Biome editor and in the Problems list while one is open.

**How to fix:** Choose which of the game's biomes it takes a share of.

## Block checks

### The shape reaches past the (across) by (up) by (back) blocks this block takes.

**What it means:** Shown in the Block editor and in the Problems list while one is open.

**How to fix:** Give it the size the shape was made for, or a shape made for its size.

### A block larger than one is built for a block on a network and for a plain block. This one ...

**What it means:** Shown in the Block editor and in the Problems list while one is open.

**How to fix:** To get a big block, remove the inventory or the sentences from it. Otherwise it stays one block.

### The code this block is drawn by does not draw every frame.

**What it means:** Shown in the Block editor and in the Problems list while one is open.

**How to fix:** Choose code whose shape draws on a block every frame it is seen.

### (name) is a class for a line in a rule, so it cannot run every tick.

**What it means:** Shown in the Block editor and in the Problems list while one is open.

**How to fix:** Choose one of the Runs every tick shape.

## Building and playing

### The debugger could not do that: (reason)

**What it means:** Shown when you debug the running game.

**How to fix:** Press Play to start the game again, then try the debugger once more.

### (name) did not reload: (reason). Your edit is kept; press Play to start again and see it e...

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Press Play to start the game again.

### The build in (dir) failed. The lines above say why.

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Read the lines above, fix the first problem they name, then press Play again.

### Your code could not be checked on this target: (reason).

**What it means:** Shown when Cook makes the mod file.

**How to fix:** Open the code and look for a red line, fix it, then Cook again.

### The game did not reload: (reason). Your edit is kept; press Play to start the game again a...

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Press Play to start the game again.

### Could not get ready. Play will do the whole build

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Nothing to do. Press Play and it does the whole build.

### Could not get ready ahead of time: (reason) Play will do the whole build, as before.

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Nothing to do. Press Play and it does the whole build.

### The game did not reload.

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Press Play

### This sound could not be played. The studio needs the internet once to get it.

**What it means:** Shown when you pick a game to play.

**How to fix:** Connect to the internet once, then press the play button on the sound again.

### It did not finish: (reason)

**What it means:** Shown when the studio fetches a game version.

**How to fix:** Check your internet, then try again.

### Check the connection and that Java 21 or newer is installed, then try again.

**What it means:** Shown when the studio fetches a game version.

**How to fix:** Check the connection and that Java 21 or newer is installed, then try again.

### Could not get them.

**What it means:** Shown when you pick a game to play.

**How to fix:** Check the internet, then press again.

### (name) could not take the change: (reason). It waits for the next Play.

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Press Play to start the game again.

### (name) could not rejoin: (reason)

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Open the world again from the game's menu.

### Could not carry the mod's code over to Minecraft (version): (reason)

**What it means:** Shown while the studio builds your mod.

**How to fix:** Read the reason, fix that code, then Cook again.

### (name): could not come to the front: (reason).

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Click the game's window yourself.

### A Cook did not finish. A report helps us fix it. You see what is in it before it goes.

**What it means:** Shown as a notice while the studio builds your mod.

**How to fix:** Press Send a report to share it, or Cook again.

### The build stopped. Its lines are in the Output.

**What it means:** Shown when Cook makes the mod file.

**How to fix:** Open the Output tab, find the first red line, fix it, then Cook again.

### The game reported a problem. The lines that matter: (lines)

**What it means:** Shown when you press Play and the game or its build stops.

**How to fix:** Read the lines, fix the first problem they name, then press Play again.

### The sample could not be copied: (why).

**What it means:** Shown as a notice while the studio builds your mod.

**How to fix:** Choose another place and try again.

## Checks on your things

### (field): nothing chosen yet.


**How to fix:** Choose one.

### Give it a game name, or a name to make one from. Until then it is left out of the mod.


**How to fix:** Give it a game name, or a name to make one from. Until then it is left out of the mod.

### (value) is not an id the game reads.


**How to fix:** Use letters, digits, underscores and one colon, like minecraft:stone.

### The file (path) is not in the project any more.


**How to fix:** Choose or paint the picture again.

### The game has no biome group called (id).


**How to fix:** Pick a biome from the list, or a group the game has.

### Minecraft (version) has no picture called (path), so the game draws a pink and black squar...


**How to fix:** Pick one from the game's pictures.

### Minecraft (version) has no (id).


**How to fix:** Choose an item or block the game has.

### A mod setting cannot stand in here: the game reads this setting once, when it starts.


**How to fix:** Type a plain value here, or pick a setting that is read while the game runs.

### A formula cannot stand in here: the game reads this setting once, when it starts.


**How to fix:** Type a plain value here, or use a setting that is read while the game runs.

### This formula does not work out a number.


**How to fix:** Change the formula so it ends in a number, like 2 + 3.

### Only a number setting can stand in for a number here.


**How to fix:** Pick a setting whose Type is Whole number or Decimal, or type the number yourself.

### Minecraft (version) has no data-made enchantments, so this one is left out of the (version...


**How to fix:** Nothing to do. To keep it, build for a newer Minecraft version.

### Minecraft (version) has no data-made banner patterns, so this one is left out of the (vers...


**How to fix:** Nothing to do. To keep it, build for a newer Minecraft version.

### Minecraft (version) does not read paintings from data files, so this one is left out of th...


**How to fix:** Nothing to do. To keep it, build for a newer Minecraft version.

### Minecraft (version) does not read songs from data files, so this disc is in the game but p...


**How to fix:** Nothing to do. To hear the song, build for a newer Minecraft version.

### (name): '(what)' is not in (version), so it is left out.


**How to fix:** Nothing to do. To keep it, build for a newer Minecraft version, or take that step out of the drops.

### This kind of feature does not exist in Minecraft (version), so it is left out of the (vers...


**How to fix:** Nothing to do. To keep it, build for a newer Minecraft version.

### Row (n): what (column) names is no longer in the project.


**How to fix:** Pick something that is in the project, or add it again.

### The shape (shape) is made for a mob, so a block or an item cannot wear it.


**How to fix:** Choose a shape made for a block, or set this one's Made for to A block.

### (trait) is attached but this build does not know it.


**How to fix:** Take that part off, or update Modryos to a newer version.

### This project has a kind of thing this build does not know ((kind)). It is kept as it is an...


**How to fix:** Update Modryos to a newer version to edit it. Until then leave it as it is.

### This has no name yet.


**How to fix:** Give it one so players can see it.

### (recipe) makes energy and burns nothing, so (machine) gives endless free power.


**How to fix:** Give it something to burn.

### (recipe) costs no energy, so (machine) makes its result for free.


**How to fix:** Give it an energy cost.

### (recipe) needs (cost) energy at once, but (machine) only holds (capacity), so it can never...


**How to fix:** Make the machine hold more, or the recipe cost less.

### These recipes ((recipes)) make a loop that gives more than it takes ((path)), so a player ...


**How to fix:** Make one of them give less.

### These recipes ((recipes)) make a loop that gives more than it takes ((path)), and each tim...


**How to fix:** Make one of them give less.

### (block) drops (drop) (item) when broken, but crafting it only costs (cost). Players can br...


**How to fix:** Make it drop no more than it costs (add up all the drops of (item) on this block), or craft it with more.

### (recipe) gives a result and takes nothing in, so players get it for free.


**How to fix:** Put an ingredient in.

### A rule here repeats with no test and no wait, so it never stops and can freeze the game.


**How to fix:** Add a test that ends it, or a wait.

### (block) holds 0 fluid, so it takes fluid and keeps none.


**How to fix:** Give it room.

### The mod runs on the server alone, and this is registered in the game, which a player's pla...


**How to fix:** Remove it, or let players install the mod.

### The mod runs on the server alone, and this runs on the player's side, which a player's pla...


**How to fix:** Remove it, or let players install the mod.

### The mod runs on the server alone, and a rule here waits for the player to right click into...


**How to fix:** Let players install the mod if it must be.

### The mod runs on the server alone, and its jar would register a network channel ((file)), w...


**How to fix:** Remove what brings it, or let players install the mod.

### The mod runs on the server alone, and its jar would register things in the game ((file)), ...


**How to fix:** Remove what brings it, or let players install the mod.

### This has no game name, so the game leaves it out.


**How to fix:** Make one from its name

### (value) is not an id the game reads: a namespace and a name in lowercase, such as minecraf...


**How to fix:** Type the name in small letters as minecraft:zombie, with no spaces. For a whole group, put # first, like #minecraft:skeletons.

### The game name (value) has characters the game does not allow.


**How to fix:** Use lowercase letters, digits and underscores, and not a name Windows keeps (like con or nul).

### Two things share the game name (value).


**How to fix:** Give one of them another.

### Another one is also called (value).


**How to fix:** Give this one its own name.

### The highest height is below the lowest, so the ore will use the lowest for both.


**How to fix:** Make the highest height bigger than the lowest.

### This value is outside what the game allows ((min) to (max)).


**How to fix:** Type a number from (min) to (max).

### (id) belongs to the mod (mod), which this mod does not name among the mods it uses.


**How to fix:** Add (mod) under Other mods, or pick another.

### This points at a thing that was deleted from the project.


**How to fix:** Pick another one, or undo the delete to bring it back.

### This has no picture yet. It goes into the game with the plain one New draws until you choo...


**How to fix:** Open the picture field and choose a picture, or paint one.

### Run from the server console nobody ran it: this line is left out then.


**How to fix:** Nothing to do. To run it for a player, run the command in the game.

### This One of these, at random has no choices.


**How to fix:** Add a choice to it, or take it out.

### Choice (n) of One of these, at random has no lines, so when it is chosen nothing happens.


**How to fix:** Add a line to that choice, or remove the choice.

### Choice (n) is less likely than never: how likely is nought or more.


**How to fix:** Type 0 or more for how likely it is.

### This hole needs a look: pick which of its looks it wears.


**How to fix:** Open the hole and pick one of the looks.

### This word comes round to itself through the words it uses, so it would never end.


**How to fix:** Use another word here.

### This word gives back something else: change what it gives back on the word, or use the Giv...


**How to fix:** Change what the word gives back, or use a Give back line of the kind the word gives.

### This moment is not in this version of Modryos.


**How to fix:** Pick another moment, or update Modryos.

### This moment does not fit what this rule belongs to: (kind).


**How to fix:** Pick a moment that fits what the rule belongs to.

### This line still needs (hole).


**How to fix:** Fill the hole in that line.

### A hole of this line wants (wanted), and what is in it is (given).


**How to fix:** Put something of the wanted kind into the hole.

### A hole of this line holds something that is not one of its choices.


**How to fix:** Open the hole and pick one of its choices.

### This line is not in this version of Modryos.


**How to fix:** Take that line out, or update Modryos.

### This Only when has nothing to check.


**How to fix:** Pick a check in it, or take it out.

### This check is not in this version of Modryos.


**How to fix:** Pick another check, or update Modryos.

### The code this line runs was deleted.


**How to fix:** Take the line out, or add the code again.

### (name) runs at a layer of its own, not from a line in a rule.


**How to fix:** Take it out of the rule. It runs by itself.

### The code's first line has not been read yet; open it and compile.


**How to fix:** Open the code and compile it.

### The pin (pin) takes (java), which the lines cannot hand over; use a mob, a player, a place...


**How to fix:** Change the pin to a mob, a player, a place, a number, words or a yes or no.

### A frame is shown for a whole number of ticks, from 1 to (most).


**How to fix:** Type a whole number from 1 to (most).

### Recipe slot (slot) picks items by name or by mod, and the game's items for Minecraft (vers...


**How to fix:** Check the connection, then build again.

### Recipe slot (slot) picks items by name or by mod, and the game's items for Minecraft (vers...


**How to fix:** Fetch the game data for that version, then build again.

### Its shape's parts, each drawn by what a side touches, would make (states) block states; th...


**How to fix:** Use fewer parts that depend on a side, or draw parts for the same question together.

### Every face is off, so this block joins no network and nothing can reach it.


**How to fix:** Turn a face on in Connections.

### It keeps what arrives but holds nothing, so what reaches it is lost.


**How to fix:** Give it a buffer, or set it to pass it on.

### No face carries anything. Attach Energy, Fluid or an Inventory, then turn a face on.


**How to fix:** Attach Energy, Fluid or Inventory, then turn a face on.

### The filter class has another shape.


**How to fix:** Choose one whose shape is an item in, yes or no out.

### A player marks filter slots in the game, so they do nothing until a player can set each fa...


**How to fix:** Nothing to do. A player sets the filter in the game.

### A filter sorts items, and this block carries none. Attach an Inventory, or leave the filte...


**How to fix:** Attach an Inventory to the block, or turn the filter off.

### This machine makes something but joins no network, so nothing can bring it what it needs. ...


**How to fix:** Attach Connections to the machine.

### It takes from (inputs) and puts into (outputs), which is more slots than its inventory has...


**How to fix:** Give the inventory more slots, or use fewer in the recipe.

### A machine needs an inventory to take from and to put into. Attach Inventory.


**How to fix:** Attach Inventory to the machine.

### A setting in its screen cannot stand in here: the game reads this setting once, when it st...


**How to fix:** Type a plain value here, or use a setting that is read while the game runs.

### Only a machine with an inventory has a screen to put a setting in.


**How to fix:** Attach an Inventory to the machine, then put the setting on its screen.

### A picture (width) by (height) halves evenly (levels) times, and the game makes (most) smal...


**How to fix:** Resize the picture so its sides are multiples of 16, like 16 by 16 or 32 by 32.

### A picture (width) by (height) takes a large part of the one texture every block picture in...


**How to fix:** Make the picture smaller, like 16 by 16 or 32 by 32.

### This material is spelled a little differently from the first piece's, but the game treats ...


**How to fix:** Write it the same way.

### This piece has a different number than the first piece of its material. The first piece's ...


**How to fix:** Use the same number on every piece of the material.

### Pick which mod this plugs into first.


**How to fix:** Pick which mod this plugs into first.

### Pick which mod makes this item first.


**How to fix:** Pick which mod makes this item first.

### Pick what the other mod should make from this item.


**How to fix:** Pick what the other mod should make from this item.

### Pick how the other mod makes this item.


**How to fix:** Pick how the other mod makes this item.

### (method) is set to your own Java, but no Java is written.


**How to fix:** Write the Java for it, or set it back to the usual way.

### This hole names something its owner no longer has; pick one it has, or make one from the h...


**How to fix:** Open the hole and pick one it has, or make a new one.

### (owner) keeps no number called (value).


**How to fix:** Add (value) to the numbers (owner) keeps, or pick one it keeps.

### This hole needs something it remembers: pick one in it, or make one from it.


**How to fix:** Open the hole and pick what it remembers, or make a new one.

### This hole is empty: pick one in it.


**How to fix:** Open the hole and pick one.

### Only an item's rules can say this: it works on the item the rule runs on.


**How to fix:** Move the line to an item's rules.

### The part hole names a part its model does not have; pick one of the parts hit on their own...


**How to fix:** Open the hole and pick a part the model has.

### A mob's parts move by its animations; (part) moves as a block's part does.


**How to fix:** Move the part with an animation of the mob.

### A mob's parts are always drawn; (part) is drawn only when a side is joined.


**How to fix:** Take away the side condition from the part.

### A mob cannot show (part): what a block shows comes from what it holds.


**How to fix:** Take that off the mob's model.

### A mob's picture is never turned on a face, and (face) of (box) is.


**How to fix:** Turn that face back to normal.

### A mob wears one picture, and this model has (count).


**How to fix:** Use one picture for the whole model.

### Use the model's picture on every face


**How to fix:** Use the model's picture on every face

### The boxes are laid out past the picture, which is (width) by (height). They need (needWidt...


**How to fix:** Make the picture bigger, or move the boxes inside it.

### This line does nothing under this moment: the game has nothing here for it to change.


**How to fix:** Pick another line, or move this one to a moment that has something to change.

### This line comes after a wait, when the moment is already over, so it can no longer change ...


**How to fix:** Move it above the wait.

### An overlay on the HUD cannot hold (control): nothing on the HUD is pressed, and no machine...


**How to fix:** Take it off, or show this screen when a rule opens it.

### A machine's screen cannot hold (control) yet: a press there would need a moment of the mac...


**How to fix:** Take it off.

### (control) is one of a machine's own parts, and no machine is behind this screen.


**How to fix:** Take it off.

### Slot (slot) is not on the screen yet; it is placed where Modryos would put it.


**How to fix:** Drag the slot onto the screen where you want it.

### Setting (setting) is not on the screen yet; it is placed where Modryos would put it.


**How to fix:** Drag the setting onto the screen where you want it.

### The player's inventory is not on the screen yet; it is placed where Modryos would put it.


**How to fix:** Drag the player's inventory onto the screen where you want it.

### Take the extra off the screen


**How to fix:** Take the extra off the screen

### (control) shows slot (slot), which the machine no longer has, so it is left out of the mod...


**How to fix:** Pick another slot for that control, or delete the control.

### (control) shows setting (setting), which the machine no longer has, so it is left out of t...


**How to fix:** Pick another setting for that control, or delete the control.

### (control) shows a value that is gone.


**How to fix:** Choose another.

### (control) shows (value), which an item keeps; a screen shows the values the player keeps.


**How to fix:** Choose one of those.

### (control) shows what a machine makes, and that machine is gone.


**How to fix:** Choose another.

### (control) shows a book that is gone.


**How to fix:** Choose another.

### (control) marks its items by (value), which holds a number, not a list.


**How to fix:** Choose a value that holds a list of items.

### (control) shows only the items a list has or has not, and no list is chosen, so it shows e...


**How to fix:** Choose the list in Marked by.

### Another screen, book or tree is called (value) in the game, which opens each by that name.


**How to fix:** Give one of them another game name.

### (quest) needs (other), and (other) needs it back.


**How to fix:** Take one of the two lines away.

### (quest) needs a quest that is not there any more.


**How to fix:** Take that line away.

### A link in (chapter) shows a quest that is not there any more.


**How to fix:** Take the link away.

### The command in (quest) reaches other players.


**How to fix:** Turn on the operator's permission, or write it for the player only.

### The command in (quest) can change who runs the server.


**How to fix:** Tick that you know it is dangerous, or use another command.

### A hole of this line uses something another line finds, but that line is not above this one...


**How to fix:** Move that line above this one, or pick something else.

### Give what is remembered a name.


**How to fix:** Give what is remembered a name.

### This hole changes something this rule remembered above it; pick one of those.


**How to fix:** Open the hole and pick one of the things the rule remembered.

### (name) already holds (was) here; give this one another name.


**How to fix:** Type another name for this one.

### This moment names a button or a skill that is gone; remove it, or add the button again.


**How to fix:** Remove the moment, or add the button or skill again.

### A hole of this line wants one thing, and this is (given). Only a line that does something ...


**How to fix:** Open the hole and pick one of the many.

### (control) links to a screen that is gone.


**How to fix:** Pick another screen for the link, or delete the link.

### (control) reads a machine, and this screen has no machine behind it, so it shows nothing.


**How to fix:** Choose what else it shows, or place it on a machine's screen.

### (control) shows a component that holds this screen, which would never end.


**How to fix:** Choose another component.

### (control) shows a screen that is gone or is no longer a component.


**How to fix:** Choose a component.

### (control) sets faces, but players cannot set this block's faces yet.


**How to fix:** Turn that on in Connections.

### (control) shows more marks than the block's faces can keep.


**How to fix:** Raise the face filter slots.

### No number setting has the key (key).


**How to fix:** Pick a number setting that exists, or add one with that key.

### (value) is not a dimension's name in the game.


**How to fix:** Pick a dimension from the list instead of typing it.

### Minecraft (version) has no (name), which the built mod uses ((where)). The mod would not l...


**How to fix:** Build for a Minecraft version that has it, or change the code that uses it.

### Minecraft (version) has no (name), which the built mod uses ((where)). The mod would not l...


**How to fix:** Build for a Minecraft version that has it, or change the code that uses it.

### Minecraft (version) has no (name), which the built mod changes in the game's code ((where)...


**How to fix:** Build for a Minecraft version that has it, or take that change out.

### Minecraft (version) has no (name), which the built mod changes in the game's code ((where)...


**How to fix:** Build for a Minecraft version that has it, or take that change out.

### Minecraft (version) has no (name), where the built mod hooks into the game's code ((where)...


**How to fix:** Build for a Minecraft version that has it, or take that change out.

### In Minecraft (version), (name) takes other values than the built mod expects ((where)). Th...


**How to fix:** Change the code to take the values that version gives, or build for another version.

### Minecraft (version) reads no folder of files named (name) ((where)). Those files would be ...


**How to fix:** Rename the folder to the name that version reads, or build for another version.

### Minecraft (version) has nothing called (name), which the built mod names ((where)).


**How to fix:** Use a name that version has, or build for another version.

### Minecraft (version) has no kind called (name), which the built mod uses ((where)). That fi...


**How to fix:** Use a kind that version has, or build for another version.

### Minecraft (version) names a block in its saved states another way than the built mod does ...


**How to fix:** Change how the block's states are named to match that version.

### Every (name) in Minecraft (version) sets this value, and the built mod leaves it out ((whe...


**How to fix:** Add that value to the file.

### (name) could not be checked, because something inside it is not what the studio expects.


**How to fix:** Open it and look at its settings, or bring an earlier copy back from Versions.

### This file could not be read and is kept as it is: (file).


**How to fix:** Open it in a text editor, or bring an earlier copy back from Versions.

### This file is not written the way the game reads it, so it is kept as it is: (file).


**How to fix:** Open the file and fix the typing mistake, or delete the file.

### (file) was damaged. A copy of the damaged file is kept in the project's recovery folder, a...


**How to fix:** Nothing to do. Open the file and check that it looks right.

### Nothing is chosen in this yet.


**How to fix:** Delete empty things

### This word is for aiming blocks, and you have none. To use where a player looks, change it.


**How to fix:** Use the block the player looks at

## Chest menu checks

### Slot (slot) is past the last slot of (rows) rows, slot (last).

**What it means:** Shown in the Chest menu editor and in the Problems list while one is open.

**How to fix:** Add rows or move the item.

### Two items sit in slot (slot).

**What it means:** Shown in the Chest menu editor and in the Problems list while one is open.

**How to fix:** Move one of them.

## Code checks

### The class name is one word starting with a capital letter.

**What it means:** Shown in the Code editor and in the Problems list while one is open.

**How to fix:** Rename it with one word that starts with a capital letter and has no spaces.

## Command checks

### Another mod of yours, (other), also has the command /(word). In one game only one of them ...

**What it means:** Shown in the Command editor and in the Problems list while one is open.

**How to fix:** Change the command's word in one of the two mods.

### /(word) is a short common word: the game or another mod may use it too, and then one of th...

**What it means:** Shown in the Command editor and in the Problems list while one is open.

**How to fix:** Rename it, or turn on "Short name is fine". /(mod) <command> always works.

### Typed after it number (n) has no name, so the game cannot show or suggest it.

**What it means:** Shown in the Command editor and in the Problems list while one is open.

**How to fix:** Give that value a name, like amount.

### Typed after it number (n) has the same name as one before it.

**What it means:** Shown in the Command editor and in the Problems list while one is open.

**How to fix:** Give that value a different name from the one before.

### (name) is one of the choices, and it has none to offer.

**What it means:** Shown in the Command editor and in the Problems list while one is open.

**How to fix:** Add at least one choice to it, or change its kind.

### (name) takes the words to the end of the command, so nothing can be typed after it: move i...

**What it means:** Shown in the Command editor and in the Problems list while one is open.

**How to fix:** Drag it to the end of the command's list.

## Dimension checks

### Choose the block its hills are made of.

**What it means:** Shown in the Dimension editor and in the Problems list while one is open.

**How to fix:** Choose the block its hills are made of.

### Choose the block its frame is built of.

**What it means:** Shown in the Dimension editor and in the Problems list while one is open.

**How to fix:** Choose the block its frame is built of.

## Drop checks

### This drop rolls no loot table yet.

**What it means:** Shown in the Drop editor and in the Problems list while one is open.

**How to fix:** Choose one.

### "(value)" is not an item.

**What it means:** Shown in the Drop editor and in the Problems list while one is open.

**How to fix:** Pick one from the list instead.

### "(value)" is not an id the game can read.

**What it means:** Shown in the Drop editor and in the Problems list while one is open.

**How to fix:** Write it as minecraft:zombie, or #minecraft:skeletons for a tag.

### This drop belongs to no block yet.

**What it means:** Shown in the Drop editor and in the Problems list while one is open.

**How to fix:** Choose the block that gives it.

### This drop gives nothing yet.

**What it means:** Shown in the Drop editor and in the Problems list while one is open.

**How to fix:** Choose what drops.

### At least is more than At most.

**What it means:** Shown in the Drop editor and in the Problems list while one is open.

**How to fix:** Swap them.

## Feature checks

### Choose the block of the geode's outer shell.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block of the geode's outer shell.

### Choose the block of the geode's middle shell.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block of the geode's middle shell.

### Choose the block that lines the geode's hollow.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block that lines the geode's hollow.

### A tree needs a block for its trunk.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the trunk.

### A tree needs a block for its leaves.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the leaves.

### Choose the block it is made of.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block it is made of.

### A lake needs a block for its rim.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the rim.

### A huge mushroom needs a block for its cap.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the cap.

### A huge mushroom needs a block for its stem.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the stem.

### Choose the block the pile is made of.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block the pile is made of.

### Choose the block the column is made of.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block the column is made of.

### Choose the block the iceberg is made of.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block the iceberg is made of.

### Choose the block laid over the ground.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block laid over the ground.

### A delta needs a block for its rim.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the rim.

### Choose the block the blobs replace.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block the blobs replace.

### Choose the block the blobs are made of.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the block the blobs are made of.

### A huge fungus needs a block it grows on.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick the block it grows on.

### A huge fungus needs a block for its stem.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the stem.

### A huge fungus needs a block for its cap.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a block for the cap.

### Choose the list the deposits come from: a setting that is a list of entries.

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Choose the list the deposits come from: a setting that is a list of entries.

### The list has no field called (field).

**What it means:** Shown in the Feature editor and in the Problems list while one is open.

**How to fix:** Pick a field the list has, or add that field to the list.

## Item checks

### This crate opens no loot table yet.

**What it means:** Shown in the Item editor and in the Problems list while one is open.

**How to fix:** Choose one.

## Loot table checks

### Entry (n) names no tag yet.

**What it means:** Shown in the Loot table editor and in the Problems list while one is open.

**How to fix:** Type its name.

### Entry (n) is a group with nothing inside.

**What it means:** Shown in the Loot table editor and in the Problems list while one is open.

**How to fix:** Add an entry to it.

### At least is more than At most.

**What it means:** Shown in the Loot table editor and in the Problems list while one is open.

**How to fix:** Swap them.

### Entry (n) gives no item yet.

**What it means:** Shown in the Loot table editor and in the Problems list while one is open.

**How to fix:** Choose one.

### Entry (n) rolls no other loot table yet.

**What it means:** Shown in the Loot table editor and in the Problems list while one is open.

**How to fix:** Choose one.

### Entry (n): At least is more than At most.

**What it means:** Shown in the Loot table editor and in the Problems list while one is open.

**How to fix:** Swap them.

## Machine recipe checks

### (machine) has no way to hold or pass energy, so this recipe never runs. Attach Holds energ...

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Attach Holds energy and Connections to the machine.

### Say which machine runs this: until then this recipe never runs.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Pick the machine in the recipe.

### Say what goes in: until then this recipe never runs.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Pick the item that goes in.

### Say what it burns: until then this recipe never makes energy.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Pick the item it burns.

### Say what comes out: until then this recipe gives nothing.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Pick the item that comes out.

### That block makes nothing, so it cannot run a recipe. Attach What it makes to it.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Attach What it makes to the block, or pick another block.

### This recipe has a result but the machine has no slots to put it into.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Add an output slot to the machine's inventory.

### This recipe takes two things but the machine has one slot to take from.

**What it means:** Shown in the Machine recipe editor and in the Problems list while one is open.

**How to fix:** Set its Slots it takes to 2.

## Mob checks

### Its look (look) has no picture yet.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Choose one, or take the look away.

### Two of its variants share a name or have none ((name)).

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Give each its own name.

### The variant (name) needs a weight of 1 or more, or it is never chosen.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Type a weight of 1 or more.

### The variant (name) has a tint that is not a colour like aabbcc.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Type the tint as a colour, like #aabbcc.

### The variant (name) needs a size above 0.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Type a size above 0, like 1.

### The variant (name) hides (part), and its body has no part of that name.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick a part the body has, or stop hiding that one.

### Its body is a model made for a block. A mob wears one made for a mob.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick a mob model for its body.

### It has no body to wear.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Choose a model made for a mob, or give it the starter body.

### A line of (layer) plays an animation that is no longer in the project.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick another.

### (clip) moves another model than this mob's body, so (layer) cannot play it.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick a clip made for this mob's body, or change the body.

### A line of (layer) asks about a state of its own it no longer has.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick another.

### The layer (layer) is limited to a part that is not in the body any more.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick its parts again.

### The layer (layer) is limited to no parts at all, so it moves nothing.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Pick a part or take the limit off.

### The layer (layer) has the same number at both ends of its strength, so it cannot tell weak...

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Give the two ends different numbers.

### The layer (layer) has a fade time below zero. A fade is zero seconds or more.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Type 0 or more seconds for the fade.

### Two of its own states are called (name). A line of behaviour could not tell them apart.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Rename one of the two states.

### At least (min) spawn together and at most (max). At least cannot be more than at most.

**What it means:** Shown in the Mob editor and in the Problems list while one is open.

**How to fix:** Make the least number the same as or smaller than the most.

## Mod settings checks

### The lowest allowed is above the highest allowed.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Make the lowest value smaller than the highest, or swap the two.

### Give the setting a key in the file.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Give the setting a key in the file.

### A whole number cannot have a fraction.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Make it a decimal, or round it.

### A choice needs at least two words.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Add a second word to the list, or use a different kind of setting.

### Each word is small letters, digits and underscores (_), and no two are the same.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Write each word in small letters, digits and _, and remove a word that is written twice.

### Choose which word it is until a player changes it.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Choose which word it is until a player changes it.

### Give the list at least one field, each named once in small letters, digits and _.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Give the list at least one field, each named once in small letters, digits and _.

### Entry (line) has a field the list does not have, or a number that is not a number.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Open that entry and fix the field, or type a real number.

### The longest allowed must be a whole number, 0 or more.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Type a whole number, 0 or more.

### The text is longer than (max) letters.

**What it means:** Shown in the Mod settings editor and in the Problems list while one is open.

**How to fix:** Make the text shorter than (max) letters.

## Model checks

### This shape is made for something the product does not build yet.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Pick a shape made for a block, or draw a new one.

### This shape has no boxes in it yet, so nothing will be drawn.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Add a box to the shape, or pick another shape.

### (box) has no (faces) face and nothing covers it, so from that side it is see-through while...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Turn that face on for the box, or put another box against it.

### (box) has no (faces) faces and nothing covers them, so from those sides it is see-through ...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Turn those faces on for the box, or put other boxes against them.

### (box) reaches outside the room a block model has. Every corner has to be between (min) and...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Move the box inside the block, or make it smaller.

### (box) reaches outside the room its block has, which takes (across) across, (up) up and (ba...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Move the box inside the room, or make it smaller.

### (box) turns, and a box that turns is not cut between the blocks of a machine: it goes whol...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Move its pivot, or make it smaller.

### (box) turns on two axes. A block model can turn on one.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Turn the box on one axis only, and turn the other way with a group of boxes.

### (box) turns (angle) degrees. A block model allows 0, 22.5 and 45 either way; (nearest) is ...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Change the turn to 0, 22.5 or 45 degrees, either way.

### The (face) face of (box) is mapped outside its texture, which is (width) by (height).

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Move the face's picture area inside the texture, or make the texture bigger.

### The (face) face of (box) uses the texture (slot), and this shape has no texture by that na...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Pick a texture the shape has for that face, or add a texture with that name to the shape.

### (group) is turned. A block model has no way to turn a group, so turn its boxes instead.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Take the turn off the group and turn its boxes instead.

### (group) is set to glow or to be see-through, as a mob's part can be. A block model is not ...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Turn off glow and see-through on that group.

### The (slot) slot moves the shape further than (limit), which is as far as the game goes.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Move the shape less in that slot, so it stays within the limit.

### The (slot) slot scales the shape past (limit), which is as big as the game goes.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Make the scale of that slot smaller, so it stays within the limit.

### This shape is (boxes) boxes. The largest block model counted across five shipped mods is (...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Join boxes together, or delete small ones, to bring the count down.

### This shape has no picture yet, so its (faces) faces have nothing to show.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Paint one and press Apply, or choose one.

### (part) moves with the energy stored, and (block) stores no energy: attach Energy to it.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Attach Energy to the block, or take the movement off the part.

### (part) follows the number (value), and (block) keeps no number of that name: add (value) t...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Add a number called (value) to the block, or pick another number for the part.

### (part) follows the fluid held, and (block) holds no fluid: attach Fluid to it.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Attach Fluid to the block, or take the movement off the part.

### (part) follows the items held, and (block) holds no items: attach Inventory to it.

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Attach Inventory to the block, or take the movement off the part.

### (part) follows how far the job has got, and (block) does no job: attach What it makes to i...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Attach What it makes to the block, or take the movement off the part.

### (part) moves while the block works, and (block) does no work: attach What it makes or Conn...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Attach What it makes or Connections to the block, or take the movement off the part.

### This block is bigger than its box ((n) parts reach outside). It still draws, but it will b...

**What it means:** Shown in the Model editor and in the Problems list while one is open.

**How to fix:** Press Fit inside the box, or move the parts inside the box.

## Publishing

### Not signed in to the code host: (reason)

**What it means:** Shown when you publish your mod.

**How to fix:** Sign in to the code host in Settings, then publish again.

## Recipe checks

### This recipe makes nothing yet.

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Choose what it makes.

### This recipe uses nothing yet.

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Put something in the grid.

### The game already makes something from this grid: (recipe). A crafting table may give eithe...

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Change the grid so it differs from the game's recipe, or keep both.

### This recipe still needs its (role).

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Pick its (role).

### (kind) recipes are in the game from (since); it is left out of (targets).

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Nothing to do. To have it there, build for a newer version.

### Extras and rules are for crafting-grid recipes; a (kind) recipe gives only its result.

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Take the extras off, or make it a crafting-grid recipe.

### An extra names nothing yet.

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Choose what it gives.

### Before 1.21.5 a trim's pattern is its template's own, so a template of your own trims noth...

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Nothing to do. Build for 1.21.5 or newer to use your own template.

### Each extra comes back in a cell of the grid this recipe uses, and it uses (n): when more c...

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Use fewer extras, or more cells.

### Brewing recipes are not built yet for (targets), so this recipe is left out there.

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Nothing to do. Build for another target to use it.

### The raw recipe is not one whole recipe in curly brackets.

**What it means:** Shown in the Recipe editor and in the Problems list while one is open.

**How to fix:** Write the whole recipe as one block of text, the way the game's recipe files do.

## Ritual checks

### Say what the ritual leaves on the altar.

**What it means:** Shown in the Ritual editor and in the Problems list while one is open.

**How to fix:** Pick what the ritual leaves on the altar.

### That block performs no rituals. Attach Performs rituals to it.

**What it means:** Shown in the Ritual editor and in the Problems list while one is open.

**How to fix:** Attach Performs rituals to the block, or pick another block.

## Settings and details

### The export did not finish.

**What it means:** Shown when you export or build from the project tree.

**How to fix:** Check that the folder can be written to, then press Export again.

### Two things are wrong.

**What it means:** Shown when you export or build from the project tree.

**How to fix:** Open the Problems panel to fix them.

### Could not load a translator from (path): (reason)

**What it means:** Shown when the studio starts and loads a translator.

**How to fix:** Check that the translator file is there and not broken, or remove it from the list of translators.

### A Modrinth id is the project's id or its slug, as its page address shows it, with no space...

**What it means:** Shown when you fill in the project details.

**How to fix:** Copy the id from the end of the project's Modrinth page address, with no spaces.

### A CurseForge project id is a number, shown on the project's page.

**What it means:** Shown when you fill in the project details.

**How to fix:** Type only the number shown on your project's page on that site.

### A mod id is 2 to 64 small letters, digits and _, starting with a letter.

**What it means:** Shown when you fill in the project details.

**How to fix:** Use 2 to 64 small letters or digits, start with a letter, and join words with an underscore.

### A package is two or more words of small letters, digits and _, joined by dots, such as com...

**What it means:** Shown when you fill in the project details.

**How to fix:** Write it like com.yourname.yourmod, in small letters.

### A version is digits, letters and dots, such as 1.0.0.

**What it means:** Shown when you fill in the project details.

**How to fix:** Write it like 1.0.0.

### (editor) did not open: (reason)

**What it means:** Shown when the studio opens a file or a program outside itself.

**How to fix:** Check that the program is installed, then try again.

### Could not look for updates

**What it means:** When you press Check for updates and the studio cannot look.

**How to fix:** Check your internet connection and press it again. You can keep working meanwhile.

### The internet did not answer. Your work is not affected.

**What it means:** Shown when you change the studio's settings.

**How to fix:** Check your internet, then try again.

### Could not get the models: (why)

**What it means:** Shown when you change the studio's settings.

**How to fix:** Check your internet and your sign-in, then open the list again.

### Could not load the skills.

**What it means:** Shown when you change the studio's settings.

**How to fix:** Close Settings and open it again.

### Could not load what the chat remembers.

**What it means:** Shown when you change the studio's settings.

**How to fix:** Close Settings and open it again.

## Station recipe checks

### Say which station this recipe is on.

**What it means:** Shown in the Station recipe editor and in the Problems list while one is open.

**How to fix:** Pick the station in the recipe's Station field.

### That block's screen has no Slot group, so it has no cells to fill.

**What it means:** Shown in the Station recipe editor and in the Problems list while one is open.

**How to fix:** Add a Slot group to the block's screen.

### Cell (cell) is not on the station's screen. Its cells: (known).

**What it means:** Shown in the Station recipe editor and in the Problems list while one is open.

**How to fix:** Pick a cell the screen has, or add that cell to the screen.

## Structure checks

### Its spawner brings out no mob yet.

**What it means:** Shown in the Structure editor and in the Problems list while one is open.

**How to fix:** Choose one.

## Tag checks

### Put at least one thing in the group.

**What it means:** Shown in the Tag editor and in the Problems list while one is open.

**How to fix:** Put at least one thing in the group.

## Texture checks

### Choose the picture that replaces it.

**What it means:** Shown in the Texture editor and in the Problems list while one is open.

**How to fix:** Choose the picture that replaces it.

## Translation checks

### The key holds letters, digits, dots and underscores only.

**What it means:** Shown in the Translation editor and in the Problems list while one is open.

**How to fix:** Rename the key with small letters, digits, dots and underscores, like item.my_mod.ruby.

### A language is a code like en_us.

**What it means:** Shown in the Translation editor and in the Problems list while one is open.

**How to fix:** Type the language as a code, like en_us or fr_fr.

### Give the line its text.

**What it means:** Shown in the Translation editor and in the Problems list while one is open.

**How to fix:** Give the line its text.

## Updates

### These versions could not be read.

**What it means:** Shown when the studio reads your list of game versions.

**How to fix:** Close this window and open it again.

### Git could not do that: (detail)

**What it means:** Shown when the studio reads your list of game versions.

**How to fix:** Check that Git is installed and the project folder is not locked, then try again.

### Could not look for updates: (reason)

**What it means:** Shown when the studio looks for or installs an update.

**How to fix:** Check your internet, then look again.

## Your own code

### Could not prepare the compiler for (dir); the lines above say why.

**What it means:** Shown when your own code is checked or built.

**How to fix:** Read the lines above, then press Play again. If it stays, check your internet.

### The compiler could not run: (reason)

**What it means:** Shown when your own code is checked or built.

**How to fix:** Press Play again. If it stays, check that Java is set up in Settings.

### The change was not swapped: (n) errors in what the sentences became.

**What it means:** Shown when your own code is checked or built.

**How to fix:** Fix the lines the errors name, then change it again.
