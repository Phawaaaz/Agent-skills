---
name: design-taste
description: Learns, stores and applies the user's personal design taste from Figma annotations, screenshots, references, stated likes and dislikes, and corrections to Claude's designs, keeping a global Design Taste Library at ~/.claude/design-taste/. Use this skill whenever the user annotates or comments on a design ("I like how compact this table is", "too many cards here"), selects a Figma node and gives an opinion, shares a reference they like, states a design principle, says "log this", "remember this taste", "add to my taste", or runs /taste-review. Also use it BEFORE designing, building, recreating, reviewing or critiquing any UI, component, screen, design system or frontend code, so the output matches their taste, and whenever they correct a design Claude made ("make it tighter", "too rounded", "this feels generic", "less color", "the animation is too much").
---

# Design Taste

You are building an evolving model of the user's design judgment: what they notice, what they reject, what they keep changing, how it shifts by context, and the principles underneath. The payoff is that "design this for me" lands close to what they would design themselves, without them repeating preferences.

The library is a record of *why*, not a style guide of values. "8px radius" is a data point; "restrained radii that feel refined rather than playful, in productivity tools" is the reusable thing. Always reach for the principle, and keep the literal value as supporting evidence.

## The library

Lives at `~/.claude/design-taste/` (override with the `DESIGN_TASTE_HOME` env var). One global library shared across every project.

```
~/.claude/design-taste/
  summary.md                 only high and established preferences, regenerated
  principles.md              cross-cutting global principles
  anti-patterns.md           things to actively avoid
  foundations/<topic>.md     typography, spacing, density, radius, color, elevation, motion...
  components/<name>.md       button, table, card, sidebar... (create new names freely)
  patterns/<name>.md         dashboard, onboarding, forms, search...
  interactions/<name>.md     hover, feedback, transitions, loading...
  contexts/<name>.md         crypto, fintech, consumer, enterprise, mobile...
  evidence/raw-annotations.jsonl   append-only raw evidence, never edited
```

Create a file only when an entry goes in it. An empty library is normal at the start; do not scaffold empty files. If the folder does not exist yet, the first write creates it.

Two layers, always kept separate:
- **Raw evidence**: exactly what the user said or changed, with source context. Append-only through the script, so synthesized taste can be regenerated later.
- **Synthesized taste**: your interpretation, as entries with confidence, evidence ids, and a principle.

Read `references/schema.md` before your first write in a session. It defines the evidence record, the taste entry format, confidence levels, and which file an entry belongs in.

## Pick the mode

| Situation | Mode | Read |
|---|---|---|
| User gives an opinion on a design, selects a Figma node and comments, shares a reference they like, states a principle, says "log this" | **Ingest** | `references/ingest.md` |
| User corrects something Claude designed, mid-task | **Ingest (passive)**, then continue the task | `references/ingest.md`, section Passive capture |
| Any design, build, recreate, modify, review, critique or frontend-code task | **Apply** | `references/apply.md` |
| `/taste-review`, "what have you learned about my taste", "summarize my taste" | **Review** | `references/review.md` |

Modes combine. A typical build session is Apply at the start, passive Ingest whenever the user corrects you, and nothing else. A single message can contain both an opinion and a build request; ingest the opinion first so it informs the build.

## Rules that hold in every mode

**Never turn one observation into a universal rule.** A single comment starts at low confidence and is scoped as narrowly as the evidence supports (this component, this context). Scope widens only as evidence from different designs accumulates.

**Raw evidence is sacred.** Always append it through `scripts/append_evidence.py` before touching synthesized files. Never edit or delete lines in `raw-annotations.jsonl`.

**Write freely at low and medium; ask before going higher.** Creating entries, adding evidence, and moving low to medium happen automatically. Promoting to high or established, rewriting an existing principle, or merging two entries needs the user's yes. If nobody is there to answer (headless run), write the entry with `pending_confirmation` set and say so in your reply.

**Contradictions are information, not errors.** Never silently overwrite. First look for a context that reconciles both pieces of evidence (productivity vs consumer, desktop vs mobile, data-dense vs marketing). If you find one, split the entry by context. If you cannot, increment `contradiction_count`, keep both, and flag it for the next review.

**Taste is subjective; say so.** When critiquing, keep objective issues (contrast failure, broken hierarchy, inconsistent spacing) separate from taste mismatches. Never present a taste preference as a UX law.

**Usability wins over taste.** If following a preference would hurt accessibility, legibility, contrast, hit targets, mobile ergonomics or platform conventions, keep the principle and find a usable implementation.

**Be brief about the bookkeeping.** The user wants the design work, not a narration of file writes. After ingesting, one short confirmation of what was learned. After passive capture, one line. In Apply mode, a short "taste applied" note listing the entries that shaped the output.

**Writing style for everything this skill writes** (library files and replies): no em dashes and no arrow characters. Use commas, colons, periods, or the word "to".
