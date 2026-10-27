# Review mode (/taste-review)

Synthesize recent evidence into patterns, surface what needs the user's judgment, and keep the summary current.

## Steps

1. **Load evidence.** `python <skill>/scripts/append_evidence.py --recent 50` (or `--since YYYY-MM-DD` if the user named a window, or `--all` for a full rebuild). Default window: evidence since the last review. The script prints the date of the last `review` marker.
2. **Load entries.** Read the library files the evidence links to, plus `summary.md` and `anti-patterns.md`.
3. **Analyze** for the seven things below.
4. **Report** in the format below. Concise.
5. **Ask** the promotion, clarification and contradiction questions together, using the multiple-choice question tool if available. One round, not a back and forth per item.
6. **Apply answers.** Promote, split, rewrite or demote entries as confirmed. Each answer becomes a `review_answer` evidence line.
7. **Regenerate `summary.md`** from high and established entries (see `schema.md`).
8. **Mark the review**: `python <skill>/scripts/append_evidence.py --mark-review`.

If the library is empty, say so in one line and suggest annotating a few Figma frames first. Don't invent a report.

## What to look for

1. **New patterns**: 3 or more pieces of evidence pointing the same way across different entries, not yet named. Candidate `emerging` entries. E.g. several separate radius, shadow and card comments that together say "borders over shadows to separate surfaces."
2. **Strengthened preferences**: entries whose counts now justify a promotion.
3. **Contradictions**: contested entries and evidence that pulls against an entry. For each, propose a reconciling context if one is visible.
4. **Context splits**: entries that only hold in certain products or platforms.
5. **Possible anti-patterns**: repeated dislikes or corrections with the same direction.
6. **Needs clarification**: low-confidence entries with ambiguous interpretation, or evidence you couldn't place.
7. **Stale or thin**: established entries with no new evidence in a long while are fine; just don't count age as contradiction.

Be honest about counts. Report the real evidence numbers from the files, not rounded-up impressions. Don't upgrade anything inside the report itself; the report proposes, the user confirms.

## Report format

```
Taste review, <date range>, <N> new pieces of evidence

Emerging
1. Borders over shadows
   Evidence: 5 (4 designs). Proposed: medium, emerging
   You separate surfaces with hairlines or contrast shifts and removed shadows twice.

Ready to promote
2. Restrained radii in productivity UI (t-radius-restrained)
   medium to high. Evidence: 6 across 4 designs, 0 contradictions

Contradictions
3. Card radius (t-radius-restrained vs 2 mobile consumer comments)
   Likely context split: restrained on desktop productivity, softer on consumer mobile.

Anti-patterns
4. Decorative gradients on surfaces. 3 dislikes, 2 corrections

Needs clarification
5. "I like this" on the Settings screen: density, grouping, or type?
```

Leave out any section with nothing in it. Follow it with the confirmation questions.
