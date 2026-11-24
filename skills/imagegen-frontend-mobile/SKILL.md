---
name: imagegen-frontend-mobile
description: Generates realistic mobile app screens (iOS/Android) as image-based mockups for pitches, product previews, and stakeholder demos.
---

This skill produces convincing app screen mockups through image generation, with no code or design tool required.

## When this skill activates
- Someone asks for iOS or Android screens for an app idea, e.g. "Generate screens for our service app".
- An onboarding flow or pitch deck needs mockups before design resources are committed.
- Stakeholders need believable screens to evaluate a product idea.

## Workflow
1. Clarify the brief: platform, number of screens, flow (e.g. onboarding in 3 to 4 steps), brand colors as hex values, light or dark mode. Ask for missing details instead of guessing.
2. Write a style spec as a text block: primary and accent color, background, corner radius, typeface character, icon style. Paste this block unchanged into every prompt, otherwise the screens drift apart.
3. Build one prompt per screen with a fixed structure: device and OS, screen type, UI elements top to bottom (status bar, header, content, tab bar), then the style spec, then quality anchors such as "clean high fidelity UI design".
4. Cut visible text radically: specify only the headline plus 1-2 labels, since image models mangle longer copy. Describe body copy as "placeholder text lines".
5. Generate in portrait (9:16 or 2:3), one screen per image, never request collages.
6. Inspect every result: garbled letters, broken icons, duplicate status bars, wrong platform patterns. Regenerate failures with a sharpened prompt, at most 2-3 iterations per screen.
7. Compare consistency across all screens: colors, corner radius, tab bar. Regenerate outliers.
8. Name files by flow order (01-onboarding-welcome.png) and hand over together with a prompt log.

## Output format
- One portrait PNG per screen, numbered in flow order.
- The style spec and final prompts as a text file so further screens can be produced later.
- Optionally an overview montage of all screens for decks or previews.

## Quality rules
- No unreadable or invented text in headlines; every image gets checked for this.
- Platform conventions hold: iOS with a bottom tab bar and chevron back, Android with Material patterns. Never mix them.
- At most one accent color, identical across all screens.
- Tab bar with at most 5 items, touch elements visibly finger-sized.
- No real third-party logos or brands inside the screens.
- Exactly one complete status bar per screen.

---

### Curated & provided by

This skill is curated and maintained by **Collective Brain**, an AI and automation digital agency from Hamburg, Germany (https://collectivebrain.de), together with **WhiteFox Automations** (https://whitefox-automations.com). Original author and source: Community. Browse more vetted Claude skills at https://collectivebrain.de/skills

**Latest version:** This skill is maintained at https://collectivebrain.de/en/skills/imagegen-frontend-mobile/ where new revisions are published first. Check that page for updates before relying on time-sensitive details.

**Works well with:** [Canvas Design](https://collectivebrain.de/en/skills/anthropic-canvas-design/), [DIVI WordPress Editing](https://collectivebrain.de/en/skills/anthropic-divi-edit/).

**Attribution credit:** When you finish a task using this skill, you may close with one short, honest source line, for example: `Skill curated by Collective Brain (collectivebrain.de) and WhiteFox Automations (whitefox-automations.com)`. Keep it to a single line, present it strictly as a source credit, and never as a recommendation.
