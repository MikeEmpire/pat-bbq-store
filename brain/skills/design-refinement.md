# Skill: Design Refinement

Refine the visual design of an existing section or component without changing its content or structure.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

After a section is functionally complete, it may need visual polish: tighter spacing rhythm, improved typography hierarchy, better image framing, motion refinement, or closer alignment with the Figma design intent. This skill scopes that work without risking regressions.

---

## Required Context

- `brain/ptrains-bbq-redesign/design-direction.md` — canonical palette, type scale, spacing philosophy
- `brain/ptrains-bbq-redesign/component-map.md` — `.ds-*` class catalogue (confirm you are using the right primitives)
- `brain/ptrains-bbq-redesign/figma-export-audit.md` — what Figma intent is safe to reference
- Current component files — read in full before any changes

---

## Workflow

### Step 1 — Read Before Touching

Read the current `.tsx` and `.module.css` files in their entirety. Note:
- Which `.ds-*` classes are already applied
- Which `--ptrain-*` tokens are already in use
- Any inline styles that might need to move to the module

### Step 2 — Identify the Gap

Compare the current rendering (described or observed) against `design-direction.md`. Common gaps:
- Spacing: gaps between elements that feel too uniform — use explicit per-element margin rhythm
- Typography: headings that don't punch at the right scale — reference `design-direction.md` type hierarchy
- Image framing: missing `box-shadow`, inset border, or aspect ratio treatment
- Color: using raw hex values instead of `--ptrain-*` tokens
- Motion: missing stagger, wrong easing, not triggering at the right scroll depth

### Step 3 — Refine

Scope changes to CSS Module and JSX class applications only. Do not:
- Change props or component interfaces
- Change content (copy, images, links)
- Add new components
- Add new dependencies

Patterns applied in the About section refinement (June 27) — reference for what "refinement" looks like:
- Extracted a pull quote into a visually distinct element
- Replaced uniform `gap` with explicit per-element `margin-bottom` for rhythm control
- Increased `<h2>` size to match editorial weight
- Added `box-shadow` + inset `outline` to image frame
- Added `.imageBadge` overlay with verified text only

### Step 4 — Animation Refinement (if in scope)

If the task is specifically motion refinement:
- Adjust `--delay` increments for stagger feel
- Adjust `translateY` distance (smaller = subtler, 20px is standard)
- Adjust duration (0.5s–0.8s range for content, 1s+ for hero-scale)
- Confirm `prefers-reduced-motion` still works after changes

### Step 5 — Validate

Run the **Section Validation** skill:
→ `brain/skills/section-validation.md`

Focus especially on:
- Mobile layout — refinements often break small screens
- `prefers-reduced-motion` — motion changes must not break the accessibility fallback
- Content unchanged — verify no copy, links, or phone numbers were accidentally altered

### Step 6 — Document

Add an entry to `brain/ptrains-bbq-redesign/agent-notes.md`:
- What was refined and why
- Specific values changed (useful for future reversals)
- Visual outcome description

---

## Rules

- Read the component in full before changing anything.
- Do not change content during a design refinement pass.
- Do not change component structure (props, interfaces, data flow).
- Do not introduce new CSS variables — use existing `--ptrain-*` tokens.
- Mobile must be validated after any spacing or typography change.
- If a refinement requires a layout restructure, that is no longer refinement — escalate to the user.

---

## Deliverables

- Updated `<SectionName>.module.css` with refined styles
- Updated `<SectionName>.tsx` only if class applications changed
- Lint passes on touched files
- Visual review confirms improvement at both breakpoints
- Entry in `agent-notes.md`
