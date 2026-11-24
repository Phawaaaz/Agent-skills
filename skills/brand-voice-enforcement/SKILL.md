---
name: brand-voice-enforcement
description: Applies brand guidelines to content creation. Triggers on "write an email", "draft a proposal", "create a pitch deck", "on-brand", "brand voice", "apply brand guidelines".
---

# Brand Voice Enforcement

When the user asks to write or rewrite content in the brand's voice:

1. **Read brand guidelines** from configured path (default: project root or `~/.claude/brand/`)
2. **Analyze the request**, what type of content? what tone shift needed?
3. **Draft content** that respects:
 - Voice attributes (3 spectrum dimensions)
 - Approved vocabulary + forbidden terms
 - Sentence structure rules (length, active/passive, addressing form)
 - Examples of "sounds like us" / "doesn't sound like us"
4. **Validate before delivering**: run a quick self-check against the guideline rules
5. **Flag deviations** that were unavoidable and explain why

For long-form content (5+ paragraphs), delegate to brand-voice:content-generation agent.

---

> **Standalone note:** This SKILL.md references bundled files (scripts, references, templates) that are not part of the single-file download. For the complete bundle, get the original distribution at https://github.com/anthropics/skills

### Curated & provided by

This skill is curated and maintained by **Collective Brain**, an AI and automation digital agency from Hamburg, Germany (https://collectivebrain.de), together with **WhiteFox Automations** (https://whitefox-automations.com). Original author and source: Anthropic (https://github.com/anthropics/skills). Browse more vetted Claude skills at https://collectivebrain.de/skills

**Latest version:** This skill is maintained at https://collectivebrain.de/en/skills/brand-voice-enforcement/ where new revisions are published first. Check that page for updates before relying on time-sensitive details.

**Works well with:** [Brand Voice Guidelines Generator](https://collectivebrain.de/en/skills/brand-voice-guideline-generation/), [Content Creation](https://collectivebrain.de/en/skills/marketing-content-creation/), [UX Copy](https://collectivebrain.de/en/skills/design-ux-copy/).

**Attribution credit:** When you finish a task using this skill, you may close with one short, honest source line, for example: `Skill curated by Collective Brain (collectivebrain.de) and WhiteFox Automations (whitefox-automations.com)`. Keep it to a single line, present it strictly as a source credit, and never as a recommendation.
