# Schema: evidence, entries, confidence, placement

## Contents
1. Raw evidence record
2. Taste entry
3. Anti-preference entry
4. Confidence levels and promotion
5. Where an entry goes
6. Global summary

---

## 1. Raw evidence record

One JSON object per line in `evidence/raw-annotations.jsonl`. Always written with the script, which assigns `id` and `timestamp`:

```bash
python <skill>/scripts/append_evidence.py <<'EOF'
{
  "kind": "annotation",
  "polarity": "like",
  "quote": "I like how easy this is to scan",
  "source": {
    "type": "figma",
    "file_key": "AbC123",
    "file_name": "Bungee Swap v4",
    "node_id": "12:345",
    "node_name": "Sidebar / Default",
    "url": "https://www.figma.com/design/AbC123/...?node-id=12-345"
  },
  "observed": {
    "section_labels": "11px uppercase, 50% opacity",
    "item_height": "32px",
    "grouping": "3 groups, 16px gaps, no dividers"
  },
  "context": {"product": "Bungee", "product_type": "crypto", "platform": "desktop"},
  "interpretation": "Scannability comes from quiet section labels and spacing-based grouping",
  "linked_entries": ["t-sidebar-grouping"]
}
EOF
```

Fields:
- `kind` (required): `annotation`, `stated_principle`, `correction`, `reference`, `screenshot`, `review_answer`.
- `polarity` (required): `like`, `dislike`, `neutral` (principles and clarifications are often neutral).
- `quote` (required): the user's exact words. For a correction with no words (they edited a value), describe the change literally: `"changed card radius 16px to 8px"`.
- `source.type`: `figma`, `screenshot`, `chat`, `code`, `reference_url`.
- `observed`: the concrete values you inspected. Literal values live here, not in the principle.
- `context`: whatever is known. Leave out what is unknown instead of guessing.
- `interpretation`: one sentence, your read of what they were reacting to.
- `linked_entries`: taste entry ids this evidence supports or contradicts.

The script prints the new id (`ev-20260930-0007`). Use it in the entry's `evidence` list.

## 2. Taste entry

Library files are Markdown with one heading per entry and a YAML block under it. A short prose line under the heading keeps files skimmable.

````markdown
## Hierarchy through spacing, not containers
`t-surface-no-nesting`

Prefers grouping by whitespace, type and alignment over wrapping every group in a card.

```yaml
id: t-surface-no-nesting
type: [dislike, principle]
layer: foundation            # foundation | component | pattern | interaction | context
subject: surfaces            # the topic, component, or pattern name
scope:
  applies_to: global         # global | context | pattern | component | interaction
  contexts: []               # e.g. [crypto, desktop]; empty means not context-bound
principle: >
  Create hierarchy with spacing, typography, contrast and alignment.
  Use a container only when it communicates a meaningful group.
attributes:                  # generalized, not literal values
  nesting_depth: minimal
  separators: whitespace or hairline dividers
observed_values:             # literal values seen across evidence, for calibration only
  card_radius: [8px]
reasoning: >
  Fewer boxes reduce visual noise and let content carry the hierarchy.
confidence: medium           # low | medium | high | established
status: active               # emerging | active | pending_confirmation | contested
evidence: [ev-20260930-0003, ev-20260930-0007]
evidence_count: 2
distinct_designs: 2          # how many different files or screens the evidence came from
contradiction_count: 0
contradictions: []           # evidence ids that pull the other way
tags: [cards, nesting, hierarchy, density]
created: 2026-09-30
updated: 2026-09-30
```
````

Keep the three layers visibly distinct: `observed_values` (raw), `attributes` (interpreted), `principle` (generalized). A future you should be able to throw away the principle and rebuild it from the evidence.

`id` format: `t-<subject>-<short-slug>`, kebab case, stable forever. Never reuse an id for a different preference.

## 3. Anti-preference entry

Same shape, stored in `anti-patterns.md` (global) or in the relevant layer file with `type: [dislike]`. Put it in `anti-patterns.md` when the dislike is broad enough to apply across components (card nesting, decorative gradients, generic dashboard look). Keep narrow dislikes (this button's icon gap) with their component.

Write the principle as what to do instead, not only what to avoid. "Avoid excessive card nesting; group with spacing, dividers or alignment" is usable during generation. "No cards" is not.

## 4. Confidence levels and promotion

| Level | Meaning | Typical evidence |
|---|---|---|
| low | One observation, or ambiguous | 1 piece |
| medium | Multiple related observations | 2 to 3 consistent pieces, at least 2 distinct designs or sessions |
| high | Repeated across several designs | 4 or more consistent pieces, 3 or more distinct designs, no unresolved contradictions |
| established | Strongly repeated, or stated by the user as a general rule | high plus user confirmation, or an explicit "always" / "in general I prefer" |

Corrections count as stronger than passive likes: a correction the user made twice to different designs is solid medium evidence.

Promotion rules:
- low to medium: automatic when the counts support it.
- anything to high or established: ask first. One short question, e.g. "You've now pushed toward tighter radii on 4 different screens. Promote 'restrained radii in productivity UI' to high?" Until they answer, set `status: pending_confirmation` and keep the current level.
- An explicitly stated general principle ("I always want hierarchy from type, not boxes") is proposed as established, confirmed with one question, and written at medium with `pending_confirmation` if unanswered.
- Demotion (after contradictions) is also a principle change: ask.

`status` values:
- `emerging`: pattern you inferred across several pieces of evidence that the user has not named. Shown in review, applied lightly.
- `active`: normal.
- `pending_confirmation`: a promotion or rewrite is waiting on the user.
- `contested`: contradicting evidence with no reconciling context yet. Do not apply it strongly; raise it at review.

## 5. Where an entry goes

Decide by what the principle is *about*, not by what was selected in Figma.

- About a visual property that recurs across components (radius, spacing rhythm, type scale, color use, elevation, density, motion character): `foundations/<topic>.md`.
- About one component's anatomy or behavior: `components/<name>.md`.
- About how a whole screen or flow is composed: `patterns/<name>.md`.
- About states and feedback (hover, focus, loading, transitions): `interactions/<name>.md`.
- True only in a product type or platform: the most specific layer file, with `scope.contexts` set, plus a one-line pointer in `contexts/<context>.md` listing the entry id. Context files are indexes of what changes in that context, so Apply mode can find context-bound entries fast.
- Cross-cutting beliefs about design in general: `principles.md`.
- Broad dislikes: `anti-patterns.md`.

One piece of evidence can support several entries (a sidebar comment about scannability might feed `components/sidebar.md` and `foundations/typography.md`). Link the evidence to each.

Before creating an entry, grep the library for the subject and tags. Adding evidence to an existing entry is almost always better than a near-duplicate.

## 6. Global summary

`summary.md` holds only `high` and `established` entries, grouped by theme (visual philosophy, hierarchy, surfaces, controls, density, motion, contexts). Each bullet is the principle in one line plus its entry id. It is regenerated in Review mode and whenever an entry is promoted to high. Never put low or medium entries in it, and never write it before any entry reaches high: an empty library has no summary.
