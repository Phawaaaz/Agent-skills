<!-- Generated from catalog.json by scripts/build-readme.mjs. Edit those, not this file. -->

# Skills

A curated set of agent skills for Claude Code and other coding agents: what each one does, when it kicks in, and one command to install it.

**Browse the catalog:** https://agent-skills-kappa.vercel.app

**47** skills live in this repo. The other **10** are favourites from other authors, linked to their own repos so you always get the latest version.

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
cp -R Agent-skills/skills/design-fundamentals ~/.claude/skills/
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
| [emil-design-eng](skills/emil-design-eng)<br><sub>source: emilkowalski/skills</sub> | Emil Kowalski's design-engineering philosophy for UI polish, component design, animation decisions, and the invisible details that make software feel great. Use when building or reviewing a UI component's interactions and polish (press and hover states, popover origin, tooltip timing, transitions vs keyframes, clip-path techniques, drag details) and no narrower skill fits. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill emil-design-eng` |
| [tailwind-design-system](skills/tailwind-design-system)<br><sub>source: wshobson/agents</sub> | Build scalable design systems with Tailwind CSS v4, design tokens, component libraries, and responsive patterns. Use when creating component libraries, implementing design systems, or standardizing UI patterns. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill tailwind-design-system` |
| [bencium-controlled-ux-designer](skills/bencium-controlled-ux-designer)<br><sub>source: bencium/bencium-claude-code-design-skill</sub> | Expert UI/UX design guidance for unique, accessible interfaces. Use for visual decisions, colors, typography, layouts. Always ask before making design decisions. Use this skill when the user asks to build web components, pages, or applications. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill bencium-controlled-ux-designer` |
| [slacc-inspired-design-analysis](skills/slacc-inspired-design-analysis)<br><sub>source: User-supplied materials</sub> | Apply or analyze the supplied Slacc-inspired workplace messaging visual design reference when the user requests this specific style or reference. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill slacc-inspired-design-analysis` |
| [ai-game-design-agent-team](skills/ai-game-design-agent-team)<br><sub>source: User-supplied materials</sub> | Develop a cohesive game concept using narrative, gameplay, visual and audio, and technical design perspectives. Use when the user requests this game design team or a comprehensive game concept. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill ai-game-design-agent-team` |
| [api-and-interface-design](skills/api-and-interface-design)<br><sub>source: User-supplied materials</sub> | Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill api-and-interface-design` |
| [design-design-handoff](skills/design-design-handoff)<br><sub>source: User-supplied materials</sub> | Generate developer handoff specs from a design. Use when a design is ready for engineering. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill design-design-handoff` |
| [design-ux-copy](skills/design-ux-copy)<br><sub>source: User-supplied materials</sub> | Write or review UX copy, microcopy, error messages, empty states, CTAs. Trigger with "write copy for", "what should this button say?", or naming a CTA. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill design-ux-copy` |
| [design-research-synthesis](skills/design-research-synthesis)<br><sub>source: User-supplied materials</sub> | Synthesize user research into themes, insights, and recommendations. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill design-research-synthesis` |
| [design-user-research](skills/design-user-research)<br><sub>source: User-supplied materials</sub> | Plan, conduct, and synthesize user research. Trigger with "user research plan", "interview guide", "usability test", "survey design". | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill design-user-research` |
| [brand-voice-enforcement](skills/brand-voice-enforcement)<br><sub>source: User-supplied materials</sub> | Applies brand guidelines to content creation. Triggers on "write an email", "draft a proposal", "create a pitch deck", "on-brand", "brand voice", "apply brand guidelines". | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill brand-voice-enforcement` |
| [brand-voice-guideline-generation](skills/brand-voice-guideline-generation)<br><sub>source: User-supplied materials</sub> | Generates brand voice guidelines from documents, transcripts, discovery reports, or any combination. Use when the user asks to "generate brand guidelines", "create a style guide", or uploads brand source material. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill brand-voice-guideline-generation` |
| [brand-voice-discover-brand](skills/brand-voice-discover-brand)<br><sub>source: User-supplied materials</sub> | Orchestrates autonomous discovery of brand materials across enterprise platforms (Notion, Confluence, Google Drive, Box, SharePoint, Figma, Gong, Granola, Slack). | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill brand-voice-discover-brand` |
| [marketing-brand-review](skills/marketing-brand-review)<br><sub>source: User-supplied materials</sub> | Review content against brand voice, style guide, and messaging pillars. Flag deviations by severity with before/after fixes. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill marketing-brand-review` |
| [brandkit](skills/brandkit)<br><sub>source: User-supplied materials</sub> | Builds complete brand boards with logo concepts, color palette, typography, and mockups for new brands, sub-brands, or products. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill brandkit` |
| [imagegen-frontend-mobile](skills/imagegen-frontend-mobile)<br><sub>source: User-supplied materials</sub> | Generates realistic mobile app screens (iOS/Android) as image-based mockups for pitches, product previews, and stakeholder demos. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill imagegen-frontend-mobile` |

## Frontend engineering

| Skill | What it does | Use it for | Install |
|---|---|---|---|
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills)<br><sub>by Vercel</sub> | Reviews UI code against Vercel's Web Interface Guidelines for accessibility, UX and best practice. | "Review my UI"; Accessibility checks; Auditing a site against best practices | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines` |
| [vercel-react-best-practices](https://github.com/vercel-labs/agent-skills)<br><sub>by Vercel</sub> | React and Next.js performance rules from Vercel Engineering: data fetching, bundle size and rendering. | Writing or refactoring React and Next.js code; Slow pages and large bundles | `npx skills add vercel-labs/agent-skills --skill react-best-practices` |
| [agent-browser](skills/agent-browser)<br><sub>source: vercel-labs/agent-browser</sub> | Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. Triggers include requests to "open a website", "fill out a form", "click a button", "take a screenshot", "scrape data from a page", "test this web app", "login to a site", "automate browser actions", or any task requiring programmatic web interaction. Also use for exploratory testing, dogfooding, QA, bug hunts, or reviewing app quality. Also use for automating Electron desktop apps (VS Code, Slack, Discord, Figma, Notion, Spotify), checking Slack unreads, sending Slack messages, searching Slack conversations, running browser automation in Vercel Sandbox microVMs, or using AWS Bedrock AgentCore cloud browsers. Prefer agent-browser over any built-in browser automation or web tools. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill agent-browser` |
| [playwright-cli](skills/playwright-cli)<br><sub>source: microsoft/playwright-cli</sub> | Automate browser interactions, test web pages and work with Playwright tests. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill playwright-cli` |

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
| [tdd](https://github.com/mattpocock/skills)<br><sub>by Matt Pocock</sub> | Test-driven development: red, green, refactor, with guidance on mocking and integration tests. | Building features or fixing bugs test-first; Writing integration tests | `npx skills add mattpocock/skills --skill tdd` |
| [find-skills](https://github.com/vercel-labs/skills)<br><sub>by Vercel</sub> | Searches for and installs more agent skills when you ask "is there a skill for X?". | Discovering new skills; Extending what your agent can do | `npx skills add vercel-labs/skills --skill find-skills` |
| [brainstorming](skills/brainstorming)<br><sub>source: obra/superpowers</sub> | You MUST use this before any creative work - creating features, building components, adding functionality, modifying behavior, or planning anything new, in software or out of it (a talk, a business, a renovation). | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill brainstorming` |
| [diagnosing-superpowers](skills/diagnosing-superpowers)<br><sub>source: obra/superpowers</sub> | Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so expensive", "what is it doing" — or wants to build a bug report for the superpowers maintainers, for the current session or a past one identified by id or path, on any harness. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill diagnosing-superpowers` |
| [dispatching-parallel-agents](skills/dispatching-parallel-agents)<br><sub>source: obra/superpowers</sub> | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill dispatching-parallel-agents` |
| [executing-plans](skills/executing-plans)<br><sub>source: obra/superpowers</sub> | Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill executing-plans` |
| [finishing-a-development-branch](skills/finishing-a-development-branch)<br><sub>source: obra/superpowers</sub> | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill finishing-a-development-branch` |
| [receiving-code-review](skills/receiving-code-review)<br><sub>source: obra/superpowers</sub> | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill receiving-code-review` |
| [requesting-code-review](skills/requesting-code-review)<br><sub>source: obra/superpowers</sub> | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill requesting-code-review` |
| [subagent-driven-development](skills/subagent-driven-development)<br><sub>source: obra/superpowers</sub> | Use when executing implementation plans with independent tasks in the current session | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill subagent-driven-development` |
| [systematic-debugging](skills/systematic-debugging)<br><sub>source: obra/superpowers</sub> | Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill systematic-debugging` |
| [test-driven-development](skills/test-driven-development)<br><sub>source: obra/superpowers</sub> | Use when implementing any feature or bugfix, before writing implementation code | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill test-driven-development` |
| [using-git-worktrees](skills/using-git-worktrees)<br><sub>source: obra/superpowers</sub> | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill using-git-worktrees` |
| [using-superpowers](skills/using-superpowers)<br><sub>source: obra/superpowers</sub> | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill using-superpowers` |
| [verification-before-completion](skills/verification-before-completion)<br><sub>source: obra/superpowers</sub> | Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill verification-before-completion` |
| [writing-plans](skills/writing-plans)<br><sub>source: obra/superpowers</sub> | Use when you have a spec or requirements for a multi-step task, before touching code | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill writing-plans` |
| [writing-skills](skills/writing-skills)<br><sub>source: obra/superpowers</sub> | Use when creating new skills, editing existing skills, or verifying skills work before deployment | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill writing-skills` |
| [handoff](skills/handoff)<br><sub>source: mattpocock/skills</sub> | Compact the current conversation into a handoff document for another agent to pick up. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill handoff` |
| [mcp-builder](skills/mcp-builder)<br><sub>source: anthropics/skills</sub> | Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK). | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill mcp-builder` |
| [frontend-ui-engineering](skills/frontend-ui-engineering)<br><sub>source: User-supplied materials</sub> | Builds production-quality, accessible, responsive user-facing UIs. Use when building or modifying interfaces and pages, creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill frontend-ui-engineering` |
| [marketing-seo-audit](skills/marketing-seo-audit)<br><sub>source: User-supplied materials</sub> | Run a comprehensive SEO audit, keyword research, on-page analysis, content gaps, technical checks, and competitor comparison. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill marketing-seo-audit` |
| [marketing-content-creation](skills/marketing-content-creation)<br><sub>source: User-supplied materials</sub> | Draft marketing content across channels, blog posts, social media, email newsletters, landing pages, press releases, case studies. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill marketing-content-creation` |
| [seo-geo-aeo-audit](skills/seo-geo-aeo-audit)<br><sub>source: User-supplied materials</sub> | Full-featured SEO, GEO, and AEO website audit tool. Triggers on URL audits, ranking questions, AI-search-readiness checks. | See the skill instructions | `npx skills add Phawaaaz/Agent-skills --skill seo-geo-aeo-audit` |

## Credits

The skills by Akinola Fawaz were distilled from design and engineering creators on Instagram. Each skill lists its sources in `SKILL.md` or `references/sources.md`.

Some third-party skills are copied into this repository. Their sources are listed in the catalog and applicable licenses are in third-party-licenses/ or the skill directory. User-supplied skill files retain their source and attribution statements; their redistribution terms have not been verified.

## Contributing

To suggest a skill, open an issue with a link to it and one line on when you reach for it.
