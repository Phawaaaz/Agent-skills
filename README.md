<!-- Generated from catalog.json by scripts/build-readme.mjs. Edit those, not this file. -->

# Skills

A curated set of agent skills for Claude Code and other coding agents: what each one does, when it kicks in, and one command to install it.

**Browse the catalog:** https://agent-skills-kappa.vercel.app

**8** skills live in this repo. The other **11** are favourites from other authors, linked to their own repos so you always get the latest version.

## Install

Every skill installs with the open [`skills`](https://github.com/vercel-labs/skills) CLI. It needs Node 18+ and detects Claude Code, Cursor, Codex and other agents.

```bash
# all skills from this repo
npx skills add Phawaaaz/Agent-skills

# just one
npx skills add Phawaaaz/Agent-skills --skill design-fundamentals

# install for every project (user level) instead of the current one
npx skills add Phawaaaz/Agent-skills -g
```

<details>
<summary>Without Node: copy the folder by hand</summary>

```bash
git clone https://github.com/Phawaaaz/Agent-skills.git
cp -R skills/skills/design-fundamentals ~/.claude/skills/
```

A skill is just a folder with a `SKILL.md`. Put it in `~/.claude/skills/` (all projects) or `.claude/skills/` (one project) and restart the agent.
</details>

## How skills work

You don't call a skill by name. Each one has a description of when it applies, and the agent loads it by itself when your request matches. Say "this dashboard looks AI-generated" and `anti-ai-slop-ui` is loaded. You can also ask for one directly: "use the tdd skill".

## Design & UI

| Skill | What it does | Use it for | Install |
|---|---|---|---|
| [design-fundamentals](skills/design-fundamentals) | Core visual rules: hierarchy, type scale, grids, whitespace, optical balance, edge placement and line length. | A screen or page that looks cluttered, cheap or flat; Choosing font sizes and spacing; Laying out many elements on one page | `npx skills add Phawaaaz/Agent-skills --skill design-fundamentals` |
| [web-page-design](skills/web-page-design) | Layout and content patterns for websites: heroes, about pages, footers, editorial layouts, mobile-first rules and header copy. | Building or redesigning a landing page or portfolio; Hero, about and footer sections; A site that looks like every other website | `npx skills add Phawaaaz/Agent-skills --skill web-page-design` |
| [web-visual-style](skills/web-visual-style) | Styling recipes that make a site feel premium: editorial looks, button and gradient styles, tactile animated components. | Designs that look generic or flat; Styling buttons and CTAs; Picking gradients or an animated UI library | `npx skills add Phawaaaz/Agent-skills --skill web-visual-style` |
| [ux-interaction-patterns](skills/ux-interaction-patterns) | Behaviour patterns: undo instead of "Are you sure?", soft delete, friction only where it matters, send delays, hover-intent menus. | Delete, archive and confirmation flows; Toasts, undo and message sending; Dropdowns and mega menus | `npx skills add Phawaaaz/Agent-skills --skill ux-interaction-patterns` |
| [anti-ai-slop-ui](skills/anti-ai-slop-ui) | Keeps AI-built apps from looking vibe-coded: the five tells of AI dashboards and a design.md rulebook to lock in first. | Generating UI with an AI agent; Dashboards and admin panels; Anything that "looks AI-generated" | `npx skills add Phawaaaz/Agent-skills --skill anti-ai-slop-ui` |
| [design-taste](skills/design-taste) | Learns your personal design taste from comments, references and corrections, and applies it to every design the agent makes. | "I like how compact this is" or "too rounded"; Sharing references you like; Designing anything so it matches your taste | `npx skills add Phawaaaz/Agent-skills --skill design-taste` |
| [frontend-design](https://github.com/anthropics/skills)<br><sub>by Anthropic</sub> | Direction for distinctive, intentional UI: aesthetic choices and typography that don't read as templated defaults. | Starting a new interface; Reshaping an existing UI with a clear point of view | `npx skills add anthropics/skills --skill frontend-design` |
| [impeccable](https://github.com/pbakaus/impeccable)<br><sub>by Paul Bakaus</sub> | A full frontend design toolkit: critique, audit, polish, animate, theme and harden interfaces, with live browser iteration. | Design reviews and UX audits; Making a bland UI bolder or a loud one quieter; Design systems and tokens | `npx skills add pbakaus/impeccable` |

## Frontend engineering

| Skill | What it does | Use it for | Install |
|---|---|---|---|
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills)<br><sub>by Vercel</sub> | Reviews UI code against Vercel's Web Interface Guidelines for accessibility, UX and best practice. | "Review my UI"; Accessibility checks; Auditing a site against best practices | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` |
| [vercel-react-best-practices](https://github.com/vercel-labs/agent-skills)<br><sub>by Vercel</sub> | React and Next.js performance rules from Vercel Engineering: data fetching, bundle size and rendering. | Writing or refactoring React and Next.js code; Slow pages and large bundles | `npx skills add vercel-labs/agent-skills --skill react-best-practices` |

## Backend & data

| Skill | What it does | Use it for | Install |
|---|---|---|---|
| [system-design-scaling](skills/system-design-scaling) | A practical scaling playbook: load balancers, caching done right, read replicas, sharding, CDNs, load tests and CI/CD. | "My app crashed with users"; Redis, caching and database bottlenecks; GitHub Actions and system design interviews | `npx skills add Phawaaaz/Agent-skills --skill system-design-scaling` |
| [supabase-postgres-best-practices](https://github.com/supabase/agent-skills)<br><sub>by Supabase</sub> | Postgres rules for schema, migrations, RLS, indexes, functions, queues, pgvector and slow-query diagnosis. | Any table, column or migration change; RLS policies and their tests; Slow queries, locks and connection limits | `npx skills add supabase/agent-skills --skill supabase-postgres-best-practices` |

## Quality & workflow

| Skill | What it does | Use it for | Install |
|---|---|---|---|
| [ai-assisted-engineering](skills/ai-assisted-engineering) | Habits for shipping safely when AI writes most of the code: four pre-production questions, planning first, keeping code lean. | Before you ship, merge or deploy AI-written code; Setting up skills and agents for a team; AI making the codebase bloated | `npx skills add Phawaaaz/Agent-skills --skill ai-assisted-engineering` |
| [code-review](https://github.com/mattpocock/skills)<br><sub>by Matt Pocock</sub> | Reviews changes since a commit or branch on two axes, repo standards and the original spec, in parallel. | Reviewing a branch or PR; "Review since X" | `npx skills add mattpocock/skills --skill code-review` |
| [code-review-and-quality](https://github.com/addyosmani/agent-skills)<br><sub>by Addy Osmani</sub> | Multi-axis review of any change before it reaches main, whether a human or an agent wrote it. | A diff or PR before merging; Checking code quality across dimensions | `npx skills add addyosmani/agent-skills --skill code-review-and-quality` |
| [security-and-hardening](https://github.com/addyosmani/agent-skills)<br><sub>by Addy Osmani</sub> | Hardens code against the OWASP Top Ten, audits dependencies and supply chain, and covers GDPR and CCPA basics. | Auth, sessions and user input; Dependency audit findings; Personal data and privacy | `npx skills add addyosmani/agent-skills --skill security-and-hardening` |
| [systematic-debugging](https://github.com/obra/superpowers)<br><sub>by Jesse Vincent</sub> | Finds the root cause of a bug before proposing a fix, with tracing and defence-in-depth techniques. | Any bug, failing test or unexpected behaviour | `npx skills add obra/superpowers --skill systematic-debugging` |
| [tdd](https://github.com/mattpocock/skills)<br><sub>by Matt Pocock</sub> | Test-driven development: red, green, refactor, with guidance on mocking and integration tests. | Building features or fixing bugs test-first; Writing integration tests | `npx skills add mattpocock/skills --skill tdd` |
| [find-skills](https://github.com/vercel-labs/skills)<br><sub>by Vercel</sub> | Searches for and installs more agent skills when you ask "is there a skill for X?". | Discovering new skills; Extending what your agent can do | `npx skills add vercel-labs/skills --skill find-skills` |

## Credits

The skills by Akinola Fawaz were distilled from design and engineering creators on Instagram. Each skill lists its sources in `SKILL.md` or `references/sources.md`.

Third-party skills belong to their authors and are not copied here. Install them from their repos with the commands above.

## Contributing

To suggest a skill, open an issue with a link to it and one line on when you reach for it.
