// Regenerates README.md from catalog.json. Run: node scripts/build-readme.mjs
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const { repo, categories, skills } = JSON.parse(readFileSync(new URL("catalog.json", root)));

const install = (s) =>
  s.source === "pbakaus/impeccable"
    ? `npx skills add ${s.source}`
    : `npx skills add ${s.source} --skill ${s.skillName ?? s.name}`;

const link = (s) =>
  s.source === repo ? `[${s.name}](skills/${s.name})` : `[${s.name}](https://github.com/${s.source})`;

const mine = skills.filter((s) => s.source === repo);

let md = `<!-- Generated from catalog.json by scripts/build-readme.mjs. Edit those, not this file. -->

# Skills

A curated set of agent skills for Claude Code and other coding agents: what each one does, when it kicks in, and one command to install it.

**Browse the catalog:** https://agent-skills-kappa.vercel.app

**${mine.length}** skills live in this repo. The other **${skills.length - mine.length}** are favourites from other authors, linked to their own repos so you always get the latest version.

## Install

Every skill installs with the open [\`skills\`](https://github.com/vercel-labs/skills) CLI. It needs Node 18+ and detects Claude Code, Cursor, Codex and other agents.

\`\`\`bash
# all skills from this repo
npx skills add ${repo}

# just one
npx skills add ${repo} --skill design-fundamentals

# install for every project (user level) instead of the current one
npx skills add ${repo} -g
\`\`\`

<details>
<summary>Without Node: copy the folder by hand</summary>

\`\`\`bash
git clone https://github.com/${repo}.git
cp -R skills/skills/design-fundamentals ~/.claude/skills/
\`\`\`

A skill is just a folder with a \`SKILL.md\`. Put it in \`~/.claude/skills/\` (all projects) or \`.claude/skills/\` (one project) and restart the agent.
</details>

## How skills work

You don't call a skill by name. Each one has a description of when it applies, and the agent loads it by itself when your request matches. Say "this dashboard looks AI-generated" and \`anti-ai-slop-ui\` is loaded. You can also ask for one directly: "use the tdd skill".
`;

for (const cat of categories) {
  const list = skills.filter((s) => s.category === cat.id);
  md += `\n## ${cat.name}\n\n| Skill | What it does | Use it for | Install |\n|---|---|---|---|\n`;
  for (const s of list) {
    const by = s.source === repo ? "" : `<br><sub>by ${s.author}</sub>`;
    md += `| ${link(s)}${by} | ${s.what} | ${s.useFor.join("; ")} | \`${install(s)}\` |\n`;
  }
}

md += `
## Credits

The skills by Akinola Fawaz were distilled from design and engineering creators on Instagram. Each skill lists its sources in \`SKILL.md\` or \`references/sources.md\`.

Third-party skills belong to their authors and are not copied here. Install them from their repos with the commands above.

## Contributing

To suggest a skill, open an issue with a link to it and one line on when you reach for it.
`;

writeFileSync(new URL("README.md", root), md);

// The site reads the same data, with the install command worked out here.
const site = { repo, categories, skills: skills.map((s) => ({ ...s, install: install(s), mine: s.source === repo })) };
writeFileSync(new URL("site/catalog.js", root), `window.CATALOG = ${JSON.stringify(site, null, 2)};\n`);

console.log(`README.md and site/catalog.js written: ${skills.length} skills`);
