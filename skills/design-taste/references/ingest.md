# Ingest mode

Turn one piece of taste evidence into (a) a raw evidence record and (b) a new or strengthened taste entry.

## Steps

1. **Gather context** (below). Inspect before interpreting.
2. **Work out what they are reacting to.** Property, whole component, composition, layout, hierarchy, interaction, content structure, visual style, or information architecture. The selected node is where they pointed, not necessarily what they meant.
3. **Find the principle.** Ask "why would a thoughtful designer value this?" and name the mechanism. Store the literal values as `observed`.
4. **Classify**: like, dislike, principle, contextual preference, correction (one or more). Decide the scope from the evidence, narrowest defensible.
5. **Check the library.** Grep for the subject, tags, and component name. Decide: strengthens an entry, refines one (narrower or context-split), contradicts one, or is new.
6. **Append raw evidence** with `scripts/append_evidence.py`.
7. **Write the synthesized entry** following `schema.md`. Update counts, `distinct_designs`, `updated`. Add a context pointer if context-bound.
8. **Confirm to the user** in two or three lines: what principle you took from it, where it lives, its confidence. If a promotion is on the table, ask the one question.

## Gathering Figma context

With a Figma link or a current selection, use the Figma MCP tools available in the session:
- `get_screenshot` for the node, and when the comment is about composition, for its parent frame too.
- `get_metadata` for structure: children, names, sizes, positions. Useful for understanding grouping and rhythm.
- `get_design_context` for properties: spacing, typography, colors, strokes, effects, radii, auto layout, variants.
- `get_variable_defs` when values are bound to tokens; the token name often says more about intent than the raw value.

Pull as much as the comment needs, not everything. A radius comment needs the node's properties and a screenshot. A "this dashboard doesn't feel like boxes in boxes" comment needs the parent frame's structure and a screenshot.

Note: for pure inspection you do not need to follow the design-to-code implementation workflow some Figma skills require before `get_design_context`; you are reading properties, not generating code.

Without Figma (screenshot, pasted image, URL, chat description), inspect what you have and record estimates as estimates (`"radius": "~8px (estimated from screenshot)"`). If no Figma MCP tools are present and the user expected them, say in one line that you're working from the screenshot instead and continue.

## Investigating the why

Example: the user selects a sidebar and says "I like how easy this is to scan." Do not record "likes this sidebar." Look at:
- grouping: how sections are separated (spacing, dividers, labels)
- typography: label vs item contrast, weight, size, case
- icons: present, consistent, aligned
- active state: how the current item is marked
- indentation and nesting depth
- item height and density
- information hierarchy: what is visually loudest

Then name what actually produces scannability, e.g. "quiet uppercase section labels and spacing-only grouping create clear chunks without visual weight." That becomes the principle, possibly across two entries (sidebar grouping, and a typography note about low-contrast section labels).

When the comment is truly ambiguous and the answer would change the entry meaningfully ("I like this" on a whole screen), ask one short question with 2 to 3 concrete candidates you saw: "Is it the density, the lack of cards, or the type hierarchy?" If they're not around, record it at low confidence with the candidates in `interpretation` and let later evidence decide.

## References and inspiration

A reference ("I love Linear's issue list") is evidence of taste, not a spec to copy. Analyze what they probably responded to: layout, hierarchy, density, typography, interaction, rhythm, information structure, motion. Record the principles with `kind: reference` and the product name in `source`. Never store "make it look like X" as a preference.

## Scope and context

Set `scope.contexts` only when the evidence carries context: the file is clearly a trading app, the user says "for mobile", the product is known. Carry known context from the Figma file name or the conversation. When context is unknown, leave it empty; do not guess global.

Contradiction example: an existing entry says restrained 8px radii (from Bungee desktop), and the new comment praises 20px radius mobile consumer cards. Do not mark this a conflict immediately. Check context: desktop productivity vs consumer mobile. If the contexts differ, refine: scope the existing entry to productivity desktop, create a consumer mobile entry, and mention the split. Only increment `contradiction_count` and set `contested` when the contexts are the same.

## Passive capture

During any design or build task, when the user corrects your output ("tighter", "too rounded", "too many cards", "reduce padding", "hierarchy is weak", "too playful", "too generic", "less color", "animation is too much"):

1. Do the correction first. The task is the priority.
2. Append raw evidence with `kind: correction`, the quote, and what you changed (from and to values).
3. Group, don't pile up. If an entry already covers this direction, add the evidence id and bump counts. Only create a new entry, at low confidence, when nothing matches.
4. Tell them in one line at the end of your reply, e.g. `Logged to taste: "too rounded" on cards (radius, now medium, 2 designs).`

Skip capture when the correction is clearly one-off and not about taste: fixing a bug, matching a spec value they gave, following a brand guideline, or a content change. If the user says "don't log that" or "that's just for this project", don't, and if you already did, append a `review_answer` evidence line noting it was retracted and remove the evidence id from the entry.

Corrections the user makes directly in Figma or code (you see a before and after) count too. Record the literal change as the quote.

## Writing mechanics

- Read the target file before editing it; edit only the entry you're changing.
- New file: start with `# <Title>` and a one-line description of what the file covers, then the entry.
- Keep `evidence_count` equal to the length of `evidence`, and recount `distinct_designs` from the linked evidence sources.
- Use today's date for `created` and `updated`.
