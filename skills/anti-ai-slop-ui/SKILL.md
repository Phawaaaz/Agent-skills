---
name: anti-ai-slop-ui
description: How to keep AI-built apps and dashboards from looking "vibe-coded" - the five tells of AI-made dashboards and their fixes, locking a design.md rulebook (style references, two fonts, one palette, banned patterns) before generating UI, and how designers should map where AI fits in their workflow. Use this whenever generating UI with AI, building dashboards or admin panels, starting a new app's visual design, writing a design system or design.md, or when the user says something "looks AI-generated", "looks vibe-coded", "looks like a template", or "looks generic".
---

# Anti AI-slop UI

Generated UI looks generic because the AI is left to guess the design. Lock the design first, then generate against it.

## Step 0: write a design.md before building
1. **Steal a style**: collect screenshots of UIs the user likes (Cosmos, Pinterest, Mobbin).
2. **Pick two fonts max**: one distinctive font for headings, one plain font for everything else (Google Fonts).
3. **Pick one palette** (Color Hunt or generated), including neutrals and a single signal colour.
4. **Write `design.md`** from the screenshots, fonts and palette, and list what is **banned**, for example: no emojis in UI, no blue-to-purple gradients, no pastel icon tiles.
5. Point every new screen or component at `design.md` so the app stays consistent.
If the project already has a design.md or design tokens, read and follow them instead of inventing new ones.

## The five tells of an AI-made dashboard, and the fixes
| Tell | Fix |
| --- | --- |
| Purple-to-blue gradient on the header, buttons and chart fill | One flat accent colour, so colour means something |
| A pastel icon tile per card (blue, green, purple, orange) | Drop the tiles; the number is the hero |
| Four identical cards with the same size, weight and green badge | One primary metric, big; three secondary, small. "A dashboard with no hierarchy is a spreadsheet with padding." |
| 16 px corners and a drop shadow on everything | Hairline borders; tighter radius on smaller parts; shadow only on things that float above the page (menus, modals) |
| "Welcome back, Jordan 👋" and "+12.5% from last month" | Real copy; name the period ("Oct 1–24"); tabular digits; a sparkline instead of a percentage badge |

## Building the judgment
You can only direct AI if you can say *why* a UI is ugly. When a screen looks off, name the specific problem (hierarchy, spacing, contrast, alignment, too many colours) using `design-fundamentals`, then fix that, rather than asking for a vague "make it better".

## Where AI fits in a design workflow (intent mapping)
1. Map the design workflow twice: once at a high level (reusable across projects) and once for a specific project (a case study to stress-test changes).
2. Objectively mark the steps that take the most time for the least value. Clients pay for the product, not for exploration time.
3. Score and prioritise those steps; automate the top ones first so time goes into polishing the final product.

## Review checklist
- [ ] Does a design.md (or tokens file) exist and was it followed?
- [ ] At most two fonts and one accent colour?
- [ ] None of the five tells present?
- [ ] Every number has a named period and tabular digits?

## Sources
| Topic | Reel | Creator |
| --- | --- | --- |
| 5 fixes to AI slop in dashboards | https://www.instagram.com/reel/Dc-4jNbtyJg/ | @designmotionhq |
| 4 steps plus design.md so apps don't look vibe-coded | https://www.instagram.com/reel/DZ-Dh6TtseF/ | @dimarussu_ |
| Learn UI/UX judgment to direct AI (3 YouTube channels) | https://www.instagram.com/reel/DeLD08Yquar/ | @aimn.dev |
| Designing with AI: intent mapping | https://www.instagram.com/reel/DXsQtgnEivW/ | @al3xx_li |
