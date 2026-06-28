# PTrain's BBQ — Skills Usage Guide

Skills are reusable implementation frameworks that replace lengthy repeated instructions in agent prompts. Each Skill contains everything an implementation agent needs for that workflow.

**All Skills inherit shared constraints from:** `brain/skills/shared/project-rules.md`

---

## Available Skills

| Skill | File | Description |
|-------|------|-------------|
| Implement Homepage Section | `implement-homepage-section.md` | Full workflow for building a new homepage section end-to-end |
| Scroll Animation | `scroll-animation.md` | IntersectionObserver + CSS keyframe entrance animation pattern |
| Section Validation | `section-validation.md` | Targeted lint, visual review, content audit (workaround for broken global build) |
| New Reusable Component | `new-component.md` | Create a standalone UI component with props, variants, and CSS Module |
| Design Refinement | `design-refinement.md` | Visual polish pass on an existing section without changing content |
| Responsive Review | `responsive-review.md` | Breakpoint audit at 390px, 768px, and 1440px |
| Documentation Update | `documentation-update.md` | Update section-status.md, agent-notes.md, and related brain docs after implementation |
| Navigation Audit | `navigation-audit.md` | Audit routes, section IDs, anchor links, responsive navigation, accessibility, and SEO evolution |
| API Form Integration | `api-form.md` | Reuse the existing contact/booking API endpoint, extend form fields, and implement loading/success/error states |

---

## When to Use Each Skill

### Implementing homepage sections
→ `implement-homepage-section.md`

Use whenever starting a new section (Catering Services, Menu Preview, Gallery, Testimonials, Booking CTA, Footer).

This skill already calls out when to invoke `scroll-animation.md`, `section-validation.md`, and `documentation-update.md`.

### Creating a standalone UI element
→ `new-component.md`

Use when a UI element is needed in multiple sections or is compositionally distinct from any section (e.g., a card, a badge, a promotional callout).

### Polishing an existing section visually
→ `design-refinement.md`

Use when a completed section needs visual improvement — spacing rhythm, typography weight, image framing, motion polish — without changing content or structure.

### Fixing animation issues
→ `scroll-animation.md`

Use standalone when an animation is broken, feels wrong, or needs to be added to an existing section.

### Checking responsive layout
→ `responsive-review.md`

Use after any implementation or design refinement when mobile layout needs explicit verification.

### Updating documentation after any work session
→ `documentation-update.md`

Use at the end of every work session regardless of which other skills were used.

### Auditing or changing site navigation
→ `navigation-audit.md`

Use when navigation destinations, homepage anchors, legacy routes, mobile menus, footer links, or future SEO routing need review.

### Validating without breaking the build
→ `section-validation.md`

Use whenever you need to confirm that touched files are lint-clean and the dev server still runs. The build and global lint are blocked — this skill defines the safe workaround.

---

## Combining Skills

Skills are designed to compose. The most common combination patterns:

---

### Full Section Build

```
implement-homepage-section
  └── scroll-animation          (if the section has entrance animations)
  └── section-validation        (always — called from implement-homepage-section Step 6)
  └── documentation-update      (always — called from implement-homepage-section Step 7)
```

**Example prompt:**
> Implement the Catering Services section. Use the `implement-homepage-section` skill. The section has card-based layout — apply the `scroll-animation` skill for staggered card entrances.

---

### Polish Pass

```
design-refinement
  └── responsive-review         (after spacing/typography changes)
  └── scroll-animation          (if motion is part of the refinement)
  └── documentation-update      (always)
```

**Example prompt:**
> The About section spacing feels too uniform on desktop. Run a `design-refinement` pass followed by `responsive-review`. Log findings in agent-notes.md using `documentation-update`.

---

### New Component + Integration

```
new-component
  └── scroll-animation          (if the component animates)
  └── implement-homepage-section (if the component is being integrated into a new section)
  └── documentation-update      (always)
```

**Example prompt:**
> Create a `ServiceCard` component for the Catering Services section using `new-component`. Then integrate it via `implement-homepage-section`.

---

### Responsive-Only Fix

```
responsive-review
  └── section-validation        (confirm lint passes after fixes)
  └── documentation-update      (log what was fixed)
```

**Example prompt:**
> The Menu Preview section has a horizontal scroll issue on mobile. Run `responsive-review`, fix the overflow, validate with `section-validation`, and log with `documentation-update`.

---

## Prompt Template

When invoking skills in a prompt, use this format:

```
Task: [What needs to be done]

Skills to apply:
- brain/skills/implement-homepage-section.md
- brain/skills/scroll-animation.md
- brain/skills/documentation-update.md

Additional context:
- [Any section-specific constraints not covered by the skills]
- [Any open questions from agent-notes.md relevant to this task]
```

This replaces the previous pattern of:
- "Read the BRAIN..."
- "Read the design system..."
- "Read the homepage architecture..."
- "Follow existing conventions..."
- "Don't copy Figma..."
- "Use 951-772-3910 for the phone..."

---

## Pre-flight Checklist

Before any implementation session, confirm:

- [ ] `brain/frontend/homepage.md` — what section is next and what is its responsibility
- [ ] `brain/ptrains-bbq-redesign/section-status.md` — current build state
- [ ] `brain/ptrains-bbq-redesign/agent-notes.md` — recent decisions and open questions
- [ ] Read the current production component (if it exists) before touching anything
- [ ] Identify which Skills apply to the session's task

---

## Directory Structure

```
brain/skills/
  SKILLS.md                        ← this file (usage guide)
  shared/
    project-rules.md               ← shared constraints inherited by all skills
  implement-homepage-section.md    ← full section build workflow
  scroll-animation.md              ← entrance animation pattern
  section-validation.md            ← targeted lint + visual review workflow
  new-component.md                 ← reusable component creation
  design-refinement.md             ← visual polish pass
  responsive-review.md             ← breakpoint audit
  documentation-update.md          ← brain docs update workflow
  navigation-audit.md              ← route, anchor, mobile, footer, SEO, and accessibility audit
  api-form.md                      ← contact/booking form: endpoint, types, states, validation, security
```
