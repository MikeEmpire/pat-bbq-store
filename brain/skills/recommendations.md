# Skill Recommendations

Analysis of the current Skill set — what to merge, add, keep, or generalize.

Generated: June 27, 2026

---

## Skills That Should Eventually Be Merged

### `scroll-animation` → inline into `implement-homepage-section`

**Why:** Every remaining section needs scroll-triggered animations. The `scroll-animation` skill is currently called from Step 4 of `implement-homepage-section`, but experienced agents may find it easier if the animation pattern is embedded directly.

**Recommendation:** Once the animation pattern is fully stabilized (no more iteration on easing, delay values, or threshold), merge `scroll-animation.md` into `implement-homepage-section.md` as a subsection. Keep it separate in the meantime because animation decisions are still evolving.

---

### `section-validation` → inline into `implement-homepage-section`

**Why:** Validation is already called from Step 6 of `implement-homepage-section`. If the build environment is ever fixed (global lint and build unblocked), the workaround instructions in `section-validation.md` become irrelevant, and the remaining steps (visual review, content audit, accessibility spot check) can live in `implement-homepage-section` directly.

**Recommendation:** Keep separate until the build is unblocked. Once lint and build work globally, consolidate.

---

## Missing Skills

### `accessibility-review`

**Why it is missing:** Accessibility rules are currently scattered — some in `section-validation.md` (heading hierarchy, alt text, contrast), some in `shared/project-rules.md` (prefers-reduced-motion), some implied by design. A dedicated accessibility review pass would be valuable before launch.

**What it should include:**
- WCAG AA contrast checks against the ivory/burgundy/gold palette
- Heading hierarchy audit across the full page
- Keyboard navigation walkthrough
- Screen reader semantic structure (landmark regions, `aria-label` on interactive elements)
- Focus management for any modals (e.g., the menu lightbox)
- `prefers-reduced-motion` verification across all animated sections

---

### `seo-review`

**Why it is missing:** `brain/frontend/homepage.md` defines SEO targets ("Southern California BBQ Catering", "BBQ Catering Los Angeles", etc.) and notes that service cards should use route links for future landing page SEO. There is no process for verifying this is implemented correctly.

**What it should include:**
- Confirm `<title>` and `<meta description>` are set in `pages/index.tsx`
- Confirm each section uses heading hierarchy that supports the target keywords
- Confirm service cards use `next/link` to route paths (not anchor tags or external links)
- Confirm `next/image` `alt` text includes keyword-relevant descriptions
- Note any structured data (JSON-LD) opportunities

---

### `bug-fix`

**Why it is missing:** There is no documented workflow for diagnosing and fixing a bug — reading the component, isolating the issue, verifying the fix without introducing regressions.

**What it should include:**
- Pre-flight: read the component and recent agent-notes.md for context
- Reproduce the bug description in code
- Implement the fix (narrowly scoped — do not refactor)
- Run `section-validation.md` on touched files
- Document the fix in agent-notes.md

---

## Skills That Should Remain Project-Specific

### `implement-homepage-section`

This skill is tightly coupled to this project's brain docs, section order, Figma reference, verified content constraints, and CSS design system. It would need significant adaptation for any other project.

### `documentation-update`

References `section-status.md`, `agent-notes.md`, `homepage.md`, and `component-map.md` by name. Entirely project-specific.

### `shared/project-rules.md`

The verified phone, Figma conflict warnings, and build-blocked constraints are all specific to this repository.

---

## Skills That Could Become Cross-Repository

### `scroll-animation`

The IntersectionObserver + CSS keyframe + `prefers-reduced-motion` pattern is generic. The only project-specific element is the easing value (`cubic-bezier(0.22, 1, 0.36, 1)`). A generalized version could make the easing a parameter.

### `new-component`

The structural conventions (props-only content, variant record map, `next/image`, `next/link`, module CSS + design tokens, no `any`) are largely Next.js conventions, not project-specific. Could be generalized for any Next.js Pages Router project with a CSS token system.

### `responsive-review`

The breakpoints (390, 768, 1440) and the checklist items are standard across most web projects. The only project-specific element is the `--ptrain-*` token reference. Could be extracted as a generic responsive review with a configurable token namespace.

### `section-validation`

The workaround for the broken build is project-specific and would be removed in a generalized version. The remaining validation steps (targeted lint, visual review, content audit, accessibility spot check) are broadly applicable.

---

## Recommended Roadmap

| Priority | Action |
|----------|--------|
| Now | Add `accessibility-review` skill before launch |
| Before launch | Add `seo-review` skill; run against all complete sections |
| When build is fixed | Consolidate `section-validation` into `implement-homepage-section` |
| Post-launch | Extract `scroll-animation`, `new-component`, `responsive-review` into a shared library |
| Future | Add `bug-fix` skill once the pattern is needed |
