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

- [x] Metadata

## Color Palette

- oklch(1 0 0) - White
- oklch(0.8624 0.0066 17.29) - Grey (Common)
- oklch(0.8314 0.2088 153.08) - Green (Mint Jungle) (Uncommon)
- oklch(0.5552 0.1703 257.32) - Blue (Yale Steel) (Rare)
- oklch(0.5724 0.2706 303.91) - Violet Purple (Epic)
- oklch(0.7583 0.1638 59.01) - Orange (Thinks he's part of the team)
- oklch(0.8072 0.1498 81.8) - Yellow (Gold) (Legendary)

### Dark

- oklch(0.6565 0.2298 24.01) - Red Primary
- oklch(0.8965 0.1273 200.71) - Cyan Secondary
- oklch(0.1685 0.0187 284.21) - Darkest Blue Blackground
- oklch(0.4701 0.0112 285.96) - Gray Muted

### Light

- oklch(0.3085 0.1548 275.01) - Blue Primary
- oklch(0.3085 0.1548 275.01) - Blue Secondary
- oklch(0.9098 0 0) - White Background
- oklch(0.4701 0.0112 285.96) - Gray Muted
