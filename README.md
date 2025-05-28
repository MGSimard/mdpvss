# // MDPVSS

I wanted a formatted markdown screenshotter and ray.so only supported raw, so I made this.

## Features

- Raw and Rendered markdown highlighting & previewing
- Canvas width resize (handles & focused arrow keys)
- Dual light & dark themes
- Padding adjustment
- Background toggle
- Line numbers toggle
- Save screenshot as PNG

## Task List

- [ ] Might have to not use CSS count for line numbers, doesn't get caught by screenshotter
- [ ] Fix bug where table contents get wrapped in screenshots even when there's space, causing vertical overflow at the bottom due to mismatching computed height.
- [ ] Fix bug where pasting or starting in codeblocks raw isn't highlighted until you type something
- [ ] Remember to not make the canvas borders part of the screenshottable node (for hidden background purposes)
