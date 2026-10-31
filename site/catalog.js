window.CATALOG = {
  "repo": "Phawaaaz/Agent-skills",
  "categories": [
    {
      "id": "design",
      "name": "Design & UI"
    },
    {
      "id": "frontend",
      "name": "Frontend engineering"
    },
    {
      "id": "backend",
      "name": "Backend & data"
    },
    {
      "id": "quality",
      "name": "Quality & workflow"
    }
  ],
  "skills": [
    {
      "name": "design-fundamentals",
      "category": "design",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Core visual rules: hierarchy, type scale, grids, whitespace, optical balance, edge placement and line length.",
      "useFor": [
        "A screen or page that looks cluttered, cheap or flat",
        "Choosing font sizes and spacing",
        "Laying out many elements on one page"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill design-fundamentals",
      "mine": true
    },
    {
      "name": "web-page-design",
      "category": "design",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Layout and content patterns for websites: heroes, about pages, footers, editorial layouts, mobile-first rules and header copy.",
      "useFor": [
        "Building or redesigning a landing page or portfolio",
        "Hero, about and footer sections",
        "A site that looks like every other website"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill web-page-design",
      "mine": true
    },
    {
      "name": "web-visual-style",
      "category": "design",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Styling recipes that make a site feel premium: editorial looks, button and gradient styles, tactile animated components.",
      "useFor": [
        "Designs that look generic or flat",
        "Styling buttons and CTAs",
        "Picking gradients or an animated UI library"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill web-visual-style",
      "mine": true
    },
    {
      "name": "ux-interaction-patterns",
      "category": "design",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Behaviour patterns: undo instead of \"Are you sure?\", soft delete, friction only where it matters, send delays, hover-intent menus.",
      "useFor": [
        "Delete, archive and confirmation flows",
        "Toasts, undo and message sending",
        "Dropdowns and mega menus"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill ux-interaction-patterns",
      "mine": true
    },
    {
      "name": "anti-ai-slop-ui",
      "category": "design",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Keeps AI-built apps from looking vibe-coded: the five tells of AI dashboards and a design.md rulebook to lock in first.",
      "useFor": [
        "Generating UI with an AI agent",
        "Dashboards and admin panels",
        "Anything that \"looks AI-generated\""
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill anti-ai-slop-ui",
      "mine": true
    },
    {
      "name": "design-taste",
      "category": "design",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Learns your personal design taste from comments, references and corrections, and applies it to every design the agent makes.",
      "useFor": [
        "\"I like how compact this is\" or \"too rounded\"",
        "Sharing references you like",
        "Designing anything so it matches your taste"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill design-taste",
      "mine": true
    },
    {
      "name": "frontend-design",
      "category": "design",
      "author": "Anthropic",
      "source": "anthropics/skills",
      "what": "Direction for distinctive, intentional UI: aesthetic choices and typography that don't read as templated defaults.",
      "useFor": [
        "Starting a new interface",
        "Reshaping an existing UI with a clear point of view"
      ],
      "install": "npx skills add anthropics/skills --skill frontend-design",
      "mine": false
    },
    {
      "name": "impeccable",
      "category": "design",
      "author": "Paul Bakaus",
      "source": "pbakaus/impeccable",
      "what": "A full frontend design toolkit: critique, audit, polish, animate, theme and harden interfaces, with live browser iteration.",
      "useFor": [
        "Design reviews and UX audits",
        "Making a bland UI bolder or a loud one quieter",
        "Design systems and tokens"
      ],
      "install": "npx skills add pbakaus/impeccable",
      "mine": false
    },
    {
      "name": "web-design-guidelines",
      "category": "frontend",
      "author": "Vercel",
      "source": "vercel-labs/agent-skills",
      "what": "Reviews UI code against Vercel's Web Interface Guidelines for accessibility, UX and best practice.",
      "useFor": [
        "\"Review my UI\"",
        "Accessibility checks",
        "Auditing a site against best practices"
      ],
      "install": "npx skills add vercel-labs/agent-skills --skill web-design-guidelines",
      "mine": false
    },
    {
      "name": "vercel-react-best-practices",
      "category": "frontend",
      "author": "Vercel",
      "source": "vercel-labs/agent-skills",
      "skillName": "react-best-practices",
      "what": "React and Next.js performance rules from Vercel Engineering: data fetching, bundle size and rendering.",
      "useFor": [
        "Writing or refactoring React and Next.js code",
        "Slow pages and large bundles"
      ],
      "install": "npx skills add vercel-labs/agent-skills --skill react-best-practices",
      "mine": false
    },
    {
      "name": "system-design-scaling",
      "category": "backend",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "A practical scaling playbook: load balancers, caching done right, read replicas, sharding, CDNs, load tests and CI/CD.",
      "useFor": [
        "\"My app crashed with users\"",
        "Redis, caching and database bottlenecks",
        "GitHub Actions and system design interviews"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill system-design-scaling",
      "mine": true
    },
    {
      "name": "supabase-postgres-best-practices",
      "category": "backend",
      "author": "Supabase",
      "source": "supabase/agent-skills",
      "what": "Postgres rules for schema, migrations, RLS, indexes, functions, queues, pgvector and slow-query diagnosis.",
      "useFor": [
        "Any table, column or migration change",
        "RLS policies and their tests",
        "Slow queries, locks and connection limits"
      ],
      "install": "npx skills add supabase/agent-skills --skill supabase-postgres-best-practices",
      "mine": false
    },
    {
      "name": "ai-assisted-engineering",
      "category": "quality",
      "author": "Akinola Fawaz",
      "source": "Phawaaaz/Agent-skills",
      "what": "Habits for shipping safely when AI writes most of the code: four pre-production questions, planning first, keeping code lean.",
      "useFor": [
        "Before you ship, merge or deploy AI-written code",
        "Setting up skills and agents for a team",
        "AI making the codebase bloated"
      ],
      "install": "npx skills add Phawaaaz/Agent-skills --skill ai-assisted-engineering",
      "mine": true
    },
    {
      "name": "code-review",
      "category": "quality",
      "author": "Matt Pocock",
      "source": "mattpocock/skills",
      "what": "Reviews changes since a commit or branch on two axes, repo standards and the original spec, in parallel.",
      "useFor": [
        "Reviewing a branch or PR",
        "\"Review since X\""
      ],
      "install": "npx skills add mattpocock/skills --skill code-review",
      "mine": false
    },
    {
      "name": "code-review-and-quality",
      "category": "quality",
      "author": "Addy Osmani",
      "source": "addyosmani/agent-skills",
      "what": "Multi-axis review of any change before it reaches main, whether a human or an agent wrote it.",
      "useFor": [
        "A diff or PR before merging",
        "Checking code quality across dimensions"
      ],
      "install": "npx skills add addyosmani/agent-skills --skill code-review-and-quality",
      "mine": false
    },
    {
      "name": "security-and-hardening",
      "category": "quality",
      "author": "Addy Osmani",
      "source": "addyosmani/agent-skills",
      "what": "Hardens code against the OWASP Top Ten, audits dependencies and supply chain, and covers GDPR and CCPA basics.",
      "useFor": [
        "Auth, sessions and user input",
        "Dependency audit findings",
        "Personal data and privacy"
      ],
      "install": "npx skills add addyosmani/agent-skills --skill security-and-hardening",
      "mine": false
    },
    {
      "name": "systematic-debugging",
      "category": "quality",
      "author": "Jesse Vincent",
      "source": "obra/superpowers",
      "what": "Finds the root cause of a bug before proposing a fix, with tracing and defence-in-depth techniques.",
      "useFor": [
        "Any bug, failing test or unexpected behaviour"
      ],
      "install": "npx skills add obra/superpowers --skill systematic-debugging",
      "mine": false
    },
    {
      "name": "tdd",
      "category": "quality",
      "author": "Matt Pocock",
      "source": "mattpocock/skills",
      "what": "Test-driven development: red, green, refactor, with guidance on mocking and integration tests.",
      "useFor": [
        "Building features or fixing bugs test-first",
        "Writing integration tests"
      ],
      "install": "npx skills add mattpocock/skills --skill tdd",
      "mine": false
    },
    {
      "name": "find-skills",
      "category": "quality",
      "author": "Vercel",
      "source": "vercel-labs/skills",
      "what": "Searches for and installs more agent skills when you ask \"is there a skill for X?\".",
      "useFor": [
        "Discovering new skills",
        "Extending what your agent can do"
      ],
      "install": "npx skills add vercel-labs/skills --skill find-skills",
      "mine": false
    }
  ]
};
