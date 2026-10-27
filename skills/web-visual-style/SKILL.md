---
name: web-visual-style
description: Visual styling recipes that make a site feel premium and not generic - editorial/magazine looks, button styles, gradient styles, and tactile animated component libraries. Use this whenever a design "looks generic", "looks flat", "needs to feel premium/expensive", when styling buttons or CTAs, choosing gradients or colour treatments, adding hero imagery, or picking an animated UI library, even if the user only asks to "make it pop".
---

# Web visual style

Styling recipes from the user's saved reels. Use them deliberately and sparingly: one strong treatment per page beats five competing ones. Pair with `anti-ai-slop-ui`, which warns against the default purple-to-blue gradient.

## Editorial / magazine look (five ways)
1. **Full-screen image**: one big image fills the section; text sits on top so the page reads like a cover.
2. **Grainy overlay**: bold coloured text over grainy photography for a raw, washed-out feel.
3. **Image over type**: huge type stretched across the background with an image placed over it.
4. **Frame over image**: full image in the background with a solid colour frame holding the text.
5. **Gallery frame**: one image with lots of empty space around it, a big title above and very little text.

## Buttons: five styles
Buttons are where users act and convert; generic buttons make the whole site feel generic.
| Style | Recipe |
| --- | --- |
| Graphic hover | On hover a shape (star, blob, SVG) appears inside the button |
| Press | Visible outline and a bottom shadow; on hover it moves down and the shadow disappears, like a physical click |
| Skeuomorphic | Raised 3D shape with an inner carved shadow, like a keyboard key |
| Glassy | Soft translucent surface with a light reflection along the top edge (frosted glass) |
| Underline | Just the text and a single underline |
Use one primary style across a site; keep the signal colour from `design-fundamentals` for the primary action.

## Gradients: five styles (instead of a generic linear gradient)
| Style | Recipe |
| --- | --- |
| Field | Soft flowing gradient across the whole layout; an ambient field everything sits on |
| Cropped radial | Colour radiates from a central point, partly cropped by the frame |
| Mesh | Gradient flows through a shape to give volume and depth |
| Translucent | Colours flow through a transparent, glass-like material with soft reflections |
| Type | Gradient fills the letters of large typography |
Use a gradient only where it carries meaning or atmosphere. Avoid putting the same gradient on the header, buttons and chart at once.

## Tactile and animated components
- Components that behave like **physical objects** feel premium: a hold-to-confirm delete button, a checkout that prints a receipt when payment succeeds, a cassette player with turning reels (the "Kitchen" library).
- Libraries for animated sections and hero effects named in the reels: Kitchen, Animaster, Skiper UI, Vengeance UI. Check the current name and licence before installing; the spelling comes from a transcript.
- Animation should explain a state change (confirm, success, loading), not decorate.

## Sources
See `references/sources.md`.
