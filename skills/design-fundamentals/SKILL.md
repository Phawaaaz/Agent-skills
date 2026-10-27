---
name: design-fundamentals
description: Core visual design rules for hierarchy, type scale, grids, whitespace, optical balance, edge placement and line length. Use this whenever designing or reviewing any screen, web page, social post, slide, poster or component, when something "looks cluttered", "looks cheap", "looks default" or "flat", when choosing font sizes, or when laying out many elements on one page, even if the user never says "design rules".
---

# Design fundamentals

Rules distilled from short "design rule" reels the user saved. Apply them before reaching for decoration: most "this looks off" problems are one of these.

## 1. Hierarchy: one big, two medium, the rest small
Pick one hero element. Give one or two supporting elements medium weight. Keep everything else quiet. Control this with size **and** colour intensity, not size alone. The eye should land in one place first.

Push it further when an app looks default: make one thing huge, everything else small, and skip the middle sizes. Middle sizes are what make a screen look generic.

## 2. Type scale (social posts and graphics)
For a 1080×1350 post:
| Role | Size |
| --- | --- |
| Fine print | 0.75 × body |
| Body (minimum) | 24 px |
| Subheading | 1.5 × body (36 px) |
| Heading | 3 × body (72 px) |
| Title | 6 × body (144 px) |

Never go below 24 px for body text on a post. For web UI use the spacing and type values in the `web-page-design` skill.

## 3. Grids
- **Column grid** when there are too many things on one page: columns give the layout a backbone and keep text and images aligned.
- **Modular grid** (columns plus rows) when organising many separate elements such as cards, product tiles or stats. When in doubt, use a modular grid.
Apply hierarchy on top of the grid; the grid is the foundation, not the design.

## 4. Whitespace
Crowded designs look cheap. Add more empty space than feels necessary and keep spacing consistent. Whitespace is not wasted: it is what makes the important parts stand out.

## 5. Line length: about 7 words per line
People read from 10–12 inches (30–35 cm) away and long lines are tiring. Aim for roughly 7 words per line on posts and print; split long text into two columns like a newspaper rather than running it edge to edge. (On the web, 45–75 characters per line is the equivalent.)

## 6. Optical balance (overshooting)
A circle and a square of the same mathematical size do not look the same size; the circle looks smaller. Scale round shapes up by about 5% so they optically match. The same applies to round icons beside square ones and to letters like O beside H.

## 7. Anchor effect: commit at the edges
An object placed near the edge of the canvas looks like a mistake. Either pull it clearly inside, or push it well past the edge (past the 80% mark, cropped by the frame) so it reads as intentional.

## 8. Depth and signal colour
- If a screen feels flat, design in three planes: big type at the back, the subject in the middle, buttons on top. Overlap between planes creates depth.
- If people can't tell what to tap, choose one **signal colour** that only ever means "tap this". Everything else is "ink and paper" (neutrals).

## Review checklist
Before handing over a design, check:
- [ ] Is there exactly one hero element?
- [ ] Are there no "in-between" sizes competing with the hero?
- [ ] Is everything on a column or modular grid?
- [ ] Is there visibly more whitespace than feels necessary, used consistently?
- [ ] Are long text blocks broken into short lines or columns?
- [ ] Are round shapes optically scaled against square ones?
- [ ] Are elements near edges either clearly inside or clearly cropped?
- [ ] Is there a single colour that means "tap"?

## Sources
See `references/sources.md` for the original reels.
