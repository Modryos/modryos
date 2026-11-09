# Install Modryos

## What you need

- Windows 10 or Windows 11.
- An internet connection for the first start.
- About 1.7 GB of free disk space for the game tools. The studio downloads them the first time you press [Play](glossary.md#play).
- A Minecraft Java Edition account to play your mod in the real game.

## Download

Get `Modryos-Install-<version>.exe` from the [download page](/download.html). Save it anywhere, for example in Downloads.

## Windows may warn you

For now the installer is not signed, so Windows does not know who made it yet. That is expected. If Windows stops it:

1. Press **More info** on the "Windows protected your PC" window.
2. Check that the file name is the one you downloaded.
3. Press **Run anyway**.

If the window shows **Run** at once, press it.

> **Note** On some new Windows 11 computers, Smart App Control blocks every unsigned app and shows no Run button. Turning it off cannot be undone without reinstalling Windows, so you may prefer to wait for the signed version.

## Check the file (optional)

The download page shows a SHA256 checksum for each file. To check yours, open PowerShell in the folder with the file and run one command:

```
Get-FileHash .\Modryos-Install-<version>.exe -Algorithm SHA256
```

Use your file's real name. The long number it prints must be the same as the one on the download page. If it is not, do not run the file. Write to support@modryos.com.

## Install

1. Run the file and press **Install**. **Options** lets you pick the folder and who it is for. The default is only for you and needs no administrator password.
2. It takes under a minute. Modryos opens when it is done.
3. Installing over an older Modryos? The button says **Update**. Your projects and sign-in stay.

## Sign in

The beta is open to invited people.

1. Type your email, tick **I am 15 or older** and the terms, and press **Send me a code**.
2. Type the 6-digit code from the email. There is no password.
3. Type the invite code from your invite email and press **Redeem**.

No invite yet? Press **Join the waiting list** on that screen.

## First start

1. Accept the terms and the Minecraft [EULA](glossary.md#eula) once. Pick how much you have made mods before. None is fine, and you can change it in Settings.
2. The studio then gets Java and the game files it needs, by itself. You install nothing else. It takes several minutes, and a bar shows how far it is. You can look around while it works.

Next: [your first mod](first-mod.md).
