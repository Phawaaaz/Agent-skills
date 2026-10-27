---
name: ai-assisted-engineering
description: Habits for shipping safely when an AI writes most of the code - the four pre-production questions (secure, efficient, regressions, tests), plan before shipping, keeping AI-written code lean with de-bloat and review skills, and building custom skills for your own workflow. Use this whenever the user is about to ship, merge or deploy AI-written code, asks for a pre-production check, wants to set up Claude Code skills or agents for their team, or says AI is making their code bloated or them a worse engineer.
---

# AI-assisted engineering

From saved reels about working with Claude Code and other coding agents. The hard part of software was never typing the code; it is knowing what will break, scale badly, confuse the next person, or expose user data. AI makes those problems arrive faster.

## Before anything AI-built ships, ask four questions
1. Did we build this in the most **secure** way?
2. Did we build this in the most **efficient** way?
3. What **regressions** could this introduce?
4. What **tests** do we need to write before we ship this?
Answer them with evidence (code read, tests run), not reassurance. If the user is moving very fast, say so: building faster than understanding is the main risk.

## Plan first, then ship
Shipping with no plan just ships your bugs faster. For any non-trivial change: write the plan, review it (product, engineering, design viewpoints), implement, then verify in a real browser or test run before opening the pull request.

## Keep AI-written code lean
- Run a de-bloat / simplify pass after features land: remove needless abstractions, merge duplicates into reusable modules, delete dead code.
- Pair it with review and verification skills so merged code is checked, not just written.
- In this setup, the `simplify`, `code-review` and `security-review` skills cover these passes.

## Build skills for your own workflow
Skills are saved instructions your agent loads when relevant. Generic skills help, but the biggest gains come from skills shaped to your own workflow (like the design skills built from these reels). Revisit them when models change; trim instructions the new model no longer needs.

## Sources
| Topic | Reel | Creator |
| --- | --- | --- |
| "Claude made me a worse engineer": 4 pre-prod questions | https://www.instagram.com/reel/DZf_wAWzBL3/ | @buildinghappi |
| AI coding skills to keep code quality high | https://www.instagram.com/reel/DePGBFXtswr/ | @youraveragetechbro |
| gstack: a team of slash-command specialists; plan before /ship | https://www.instagram.com/reel/De4RF_Lx89J/ | @ashutoshwithclaude |
| 3 videos to reach S-tier building with AI (vibe coding → agent engineering, building skills, trimming prompts) | https://www.instagram.com/reel/DeCZn6JMmYf/ | @shareefico |
