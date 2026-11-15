# The home-page Short (branch home-short, not published)

The owner (2026-11-16): the 58-second "first mod" Short on the home page, near the top, muted autoplay, poster, captions,
no autoplay under reduced motion. The markup and CSS are ready here; the video files are only on the main PC
(Claude outputs/showcase-2026-11-10, video 1's Short: 57-58 s, captions .srt), not on the server where this was made.

On the main PC, from this branch:
1. media/first-mod-short.mp4: the Short, H.264, no audio track needed (it plays muted), about 2-4 MB
   (ffmpeg -i short.mp4 -an -c:v libx264 -crf 26 -preset slow -movflags +faststart -vf scale=720:-2 media/first-mod-short.mp4).
2. media/first-mod-short.webp: the poster, one clear frame (ffmpeg -ss 3 -i short.mp4 -frames:v 1 -vf scale=720:-2 poster.png, then to webp).
3. media/first-mod-short.vtt: the captions (ffmpeg -i short.srt media/first-mod-short.vtt).
4. Check the paths are blurred in every frame (the 11-10 final review), then phone (375) and desktop, merge into launch-ready, publish.
Delete this file in the merge commit.
