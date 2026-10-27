# Apply mode

Before designing, building, recreating, modifying, reviewing or critiquing UI, or writing frontend code, load the relevant slice of the taste library and let it shape the work.

## Steps

1. **Understand the task.** User goal, product context (crypto, fintech, consumer, enterprise...), platform, the important information, the primary action, constraints.
2. **Retrieve only what's relevant** (below).
3. **Design.** Apply principles naturally, interpreted for this product.
4. **Validate.** Check against the user goal, usability, accessibility, consistency, then taste. Taste is last because the first four are not optional.
5. **Report briefly.** A short "Taste applied" note naming the entries that shaped decisions.
6. **Learn.** If the user corrects the output, switch to passive capture (`ingest.md`).

## Retrieval

If `~/.claude/design-taste/` does not exist or has no entries, say nothing about taste and do the task with good general judgment. Don't announce the empty library unless the user asks what you know.

Otherwise, read in this order and stop when you have enough:
1. `summary.md` if it exists (high and established only, cheap).
2. `anti-patterns.md` if it exists. Dislikes steer generation hardest.
3. `contexts/<context>.md` for the product context and platform, then the entries it points to.
4. `patterns/<name>.md` for the screen type.
5. `components/<name>.md` for each component you'll build.
6. `foundations/` files that matter for this work (a data table needs density, typography, spacing, borders; a landing hero needs typography, color, motion).
7. `principles.md` if it exists.

Grep by tag when file names don't match (`grep -rl "tags:.*table" ~/.claude/design-taste`). Do not read the whole library, and never read `raw-annotations.jsonl` in this mode.

Weight entries by confidence and status:
- established and high: follow unless something higher in precedence overrides.
- medium: lean toward it.
- low and emerging: a gentle tiebreaker when you'd otherwise pick arbitrarily.
- contested and pending_confirmation: apply only at their current confirmed level, never as a firm rule.

## Precedence

When things conflict, higher wins:
1. The user's explicit instruction in this task
2. Product requirements (brand, existing design system, spec)
3. Context-specific taste
4. Pattern-specific taste
5. Component-specific taste
6. Global principles
7. General design best practice

The current instruction always wins. If it goes against a high-confidence preference, do what they asked; don't argue. You can note the tension in one line if it seems unintentional.

## Don't overfit

Taste is a set of principles, not a template. "Restrained surfaces" does not mean every border is #E5E5E5, every radius is 8px and every card is identical. Translate the principle for this product: a consumer mobile app and a trading terminal can both be restrained in different ways. Use `observed_values` to calibrate what "restrained" meant in the past, not as values to paste. If two screens you make for different products look the same, you've overfit.

## Usability still wins

If a preference would cause accessibility or usability problems (illegible type, low contrast, small hit targets, ambiguous interaction, poor mobile ergonomics, broken platform conventions), keep the principle and find a usable implementation. Compact visual controls can keep 44px touch targets through padding or hit-area extension. Low-contrast labels can stay quiet while still meeting contrast ratios. Mention it when you made such a tradeoff.

## Critique and review

When reviewing a design or code against taste, keep two separate lists:

**Objective issues**: contrast failures, broken hierarchy, inconsistent spacing, unclear states, accessibility gaps. These stand regardless of taste.

**Taste mismatches**: departures from their recorded preferences, each citing the entry and its confidence, phrased as taste. E.g. "Surfaces are much rounder than your restrained-radius preference (t-radius-restrained, high)." Never phrase a taste mismatch as a UX rule, and give low-confidence mismatches less weight or leave them out.

## The "Taste applied" note

End the design output with a short note, only when the library actually changed something:

```
Taste applied: hierarchy through spacing instead of nested cards (t-surface-no-nesting, high), compact table rows (t-table-density, medium, crypto). Kept 44px touch targets despite compact controls.
```

Two or three entries is typical. Skip the note entirely if no entries applied.
