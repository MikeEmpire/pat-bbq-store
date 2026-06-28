# Skill: Implement Homepage Section

Implement a new homepage section from design reference to production-ready component.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

A repeatable workflow for building homepage sections one at a time — from Figma reference to validated, committed production code. Ensures each section is consistent with the design system, content policy, and homepage architecture before the next section begins.

---

## Required Context

Read these before starting any work:

| Document | Why |
|----------|-----|
| `brain/frontend/homepage.md` | Section order, responsibilities, content strategy, SEO targets, and agent rules |
| `brain/ptrains-bbq-redesign/section-status.md` | Current build state — confirms which section to start next |
| `brain/ptrains-bbq-redesign/agent-notes.md` | Running decisions log — what was tried, what was rejected, what constraints emerged |
| `brain/ptrains-bbq-redesign/design-direction.md` | Brand palette, typography, tone-of-voice for this specific section |
| `brain/ptrains-bbq-redesign/component-map.md` | Full `.ds-*` class catalogue |
| `brain/ptrains-bbq-redesign/figma-export-audit.md` | What is and is not safe to reference from the Figma export |

Also read the **current production component** (if it exists) in its entirety before touching any code.

---

## Workflow

### Step 1 — Pre-flight

- Confirm the target section in `section-status.md` is `Not Started` or `In Progress`.
- Confirm no section above it in the homepage order is still incomplete (implement top-down).
- Note the section's journey phase and content strategy from `homepage.md`.

### Step 2 — Figma Reference

- Locate the corresponding block in `Website Redesign for PTrain's BBQ/src/app/App.tsx`.
- Extract visual intent only: layout structure, editorial rhythm, CTA placement, image composition.
- Do not copy: JSX, class names, hardcoded text, stats, testimonials, Unsplash URLs, or any Figma-only dependencies.

### Step 3 — Implement the Component

- Create `components/<SectionName>/<SectionName>.tsx` and `<SectionName>.module.css`.
- Start with `.ds-*` global classes for layout, type, and CTAs.
- Add `--ptrain-*` token values for color, spacing, and font references.
- Write CSS Module rules only for what `.ds-*` cannot cover.
- Use only verified content (see `shared/project-rules.md` → Verified Content).
- All props must be typed in `@types/index.ts` if the component accepts data-driven content.

### Step 4 — Animations (if needed)

If the section requires entrance animations, use the **Scroll Animation** skill:
→ `brain/skills/scroll-animation.md`

### Step 5 — Register in Page

- Import and add the component to `pages/index.tsx` in the correct position per `homepage.md`.
- Do not reorder existing sections without updating `homepage.md` first.

### Step 6 — Validate

Run the **Section Validation** skill:
→ `brain/skills/section-validation.md`

### Step 7 — Update Documentation

- Set the section's status to `Complete` in `brain/ptrains-bbq-redesign/section-status.md`.
- Add an entry to `brain/ptrains-bbq-redesign/agent-notes.md` documenting:
  - What was built
  - Key implementation decisions
  - Any unverified content that was excluded (and why)
  - Whether any new dependencies were introduced (or explicitly that none were)
  - Any open questions raised

---

## Rules

- One section at a time. Validate before starting the next.
- Read the current component before editing. Never overwrite without understanding what exists.
- Do not silently deviate from `homepage.md`. If a task conflicts with the document, surface the conflict before implementing.
- Section content strategy (tone, CTA hierarchy, SEO keywords) is defined in `homepage.md` — follow it.
- Follow `brain/skills/navigation-audit.md` for internal destinations. Use homepage anchors until a dedicated SEO route exists; never link to an unimplemented route.

---

## Deliverables

- `components/<SectionName>/<SectionName>.tsx` — production-ready component
- `components/<SectionName>/<SectionName>.module.css` — component-scoped styles
- Updated `pages/index.tsx` — section registered in the correct position
- Updated `section-status.md` — section marked Complete
- Updated `agent-notes.md` — decisions and findings logged

---

## Section Reference

| # | Section | Journey Phase | Status |
|---|---------|--------------|--------|
| 1 | Hero | Curiosity | Complete |
| 2 | Trust Bar | Trust | Complete |
| 3 | About | Trust | Complete |
| 4 | Catering Services | Interest | Not Started |
| 5 | Menu Preview | Interest | In Progress |
| 6 | Gallery | Proof | Not Started |
| 7 | Testimonials | Proof | Not Started |
| 8 | Booking CTA | Action | Needs Redesign |
| 9 | Footer | Utility | Needs Redesign |

Source of truth: `brain/ptrains-bbq-redesign/section-status.md`
