# Skill: Section Validation

Validate a completed section without triggering the broken global build.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

The global `npm run lint` and `npm run build` commands are both broken due to pre-existing issues outside the current work. This skill defines the correct validation approach: targeted lint on touched files only, visual review at two breakpoints, and route smoke checks.

---

## Required Context

- `brain/ptrains-bbq-redesign/agent-notes.md` — documents why global lint/build are blocked and the workaround

---

## Workflow

### Step 1 — Targeted Lint

Run lint only on files you modified. Do **not** run `npm run lint`.

```bash
# Component file
npx next lint --file components/<SectionName>/<SectionName>.tsx

# If you also touched the page
npx next lint --file pages/index.tsx

# If you added types
npx next lint --file @types/index.ts
```

Fix any reported errors before proceeding. Warnings are acceptable only if pre-existing.

### Step 2 — TypeScript Check (isolated)

```bash
npx tsc --noEmit --isolatedModules
```

If this fails due to the known Figma/lucide-react issue (`Website Redesign for PTrain's BBQ/`), that is a pre-existing issue — do not attempt to fix it. Only fix new errors in files you authored.

### Step 3 — Dev Server Smoke Check

```bash
npm run dev
```

Verify:
- `localhost:3000` — homepage loads without console errors
- `localhost:3000/bookus` — booking page loads (if you touched navigation)
- `localhost:3000/menu` — menu page loads (if you touched navigation)

### Step 4 — Visual Review (two breakpoints)

Capture or visually inspect the section at:

| Breakpoint | Dimensions | What to check |
|-----------|-----------|---------------|
| Desktop | 1440 × 900 | Section layout, spacing, typography scale, CTA visibility |
| Mobile | 390 × 844 | Stack behavior, font sizes, touch target sizes, image crop |

Confirm:
- No horizontal scroll on mobile
- Text remains legible at mobile sizes
- Images use `next/image` with proper `alt` text
- CTAs are reachable and correctly linked

### Step 5 — Content Audit

Before marking complete, verify:
- No unverified content appears (stats, testimonials, unconfirmed email/social)
- Phone number shows as `951-772-3910` / links to `tel:+19517723910`
- All links resolve to existing routes or correct external URLs
- No Figma placeholder copy ("Lorem ipsum", Unsplash images, placeholder names)

### Step 6 — Accessibility Spot Check

- All images have descriptive `alt` text (not empty unless purely decorative)
- Heading hierarchy is logical (one `<h1>` per page, sections use `<h2>`, subsections `<h3>`)
- Interactive elements are keyboard-reachable
- Color contrast: text on ivory `#F8F4ED` background must meet WCAG AA (4.5:1 for body, 3:1 for large text)
- `prefers-reduced-motion` disables animations (verify by inspecting CSS media query)

---

## Rules

- Never run `npm run lint` or `npm run build` — both are blocked.
- Only validate files you touched.
- A section is not complete until all six steps pass.
- Document any pre-existing issues discovered (but do not fix them unless specifically tasked).

---

## Deliverables

- Lint passes on all touched files
- No new TypeScript errors in authored files
- Dev server loads homepage without console errors
- Visual review confirms desktop and mobile layout
- Content audit confirms no unverified data in production
- Accessibility spot check confirms heading hierarchy and alt text
