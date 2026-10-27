---
name: ux-interaction-patterns
description: Interaction and UX behaviour patterns - undo instead of "Are you sure?" dialogs, soft delete, friction only for irreversible actions, send delays, and hover-intent "safe triangles" for dropdown and mega menus. Use this whenever building delete/remove/archive flows, confirmation dialogs, toasts, undo/redo, email or message sending, navigation menus with submenus, or reviewing why an interface "feels annoying", even if the user doesn't name the pattern.
---

# UX interaction patterns

Small behaviours the user saved because they make apps feel good to use. Users never notice them; they just never get annoyed.

## Undo beats "Are you sure?"
- A confirmation dialog punishes everyone for one person's mistake. **Undo punishes nobody**: do the action instantly and give regret a second chance.
- Show a toast: "Deleted. Undo" with a short window (about 5–10 seconds).
- **Deletion is a state, not an event.** Remove it from the screen, not the database: set a `deleted_at` flag, keep it in trash for about 30 days, then purge.
- **Earn the irreversible.** Put friction only where there is truly no way back, for example typing the project or repo name before permanent deletion (GitHub).
- One undo is a toast; a stack of undos is a time machine. Support Cmd/Ctrl+Z through every step where users edit (Figma-style history).
- **The delay is the feature**: hold outgoing messages and payments briefly (Gmail holds email for about 10 seconds) so people can catch typos and wrong recipients.

Implementation notes:
- Optimistic UI: update the list immediately, roll back if the server call fails or Undo is pressed.
- Keep the undo toast reachable by keyboard and announce it to screen readers (`role="status"`).

## Safe triangle for submenus
When a user hovers a menu item and moves diagonally toward its submenu, the cursor crosses other items and the menu switches, again and again.
- Draw an invisible triangle from the cursor to the top and bottom edges of the open submenu.
- While the cursor stays inside the triangle, keep the current submenu open.
- When it leaves the triangle, switch immediately (no blanket delay).
Use it for dropdowns, mega menus and nested context menus. A short hover delay alone is the weaker fix because it makes every switch feel slow.

## Review checklist
- [ ] Do destructive actions use undo, with dialogs reserved for irreversible ones?
- [ ] Is deletion soft (flag plus trash period) on the backend?
- [ ] Do irreversible actions require typed confirmation?
- [ ] Do sends and payments have a short cancel window where it makes sense?
- [ ] Do nested menus use a safe triangle rather than a long delay?

## Sources
| Pattern | Reel | Creator |
| --- | --- | --- |
| Undo on delete actions | https://www.instagram.com/reel/Dam5kJONlIN/ | @designmotionhq |
| Hidden triangle in menus | https://www.instagram.com/reel/DeHWUs4K-u_/ | @oversightstudio |
