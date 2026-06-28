# Skill: Responsive Review

Audit a section or component for correct responsive behavior across all breakpoints.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

Mobile-first layout must be validated explicitly, not assumed. This skill defines a focused review pass for responsive behavior — separate from general section validation — that can be run after implementation or design refinement.

---

## Required Context

- `brain/ptrains-bbq-redesign/design-direction.md` — spacing philosophy ("generous on desktop, breathable on mobile")
- Current component CSS module — read before making changes
- `constants/index.ts` — project breakpoint constants

---

## Breakpoints

| Name | Width | Device analog |
|------|-------|--------------|
| Mobile | 390px | iPhone 14 / most Android |
| Tablet | 768px | iPad portrait |
| Desktop | 1440px | Standard laptop/monitor |

Minimum required: Mobile (390px) and Desktop (1440px).
Tablet is a bonus check — prioritize if the section has a complex two-column layout.

---

## Workflow

### Step 1 — Establish Current State

Read the current CSS module. Note:
- Which properties are inside `@media` breakpoints
- Which properties are defined at the root (mobile-first)
- Any `min-width` vs `max-width` mixing (prefer `min-width` / mobile-first)

### Step 2 — Mobile Review (390px)

Check:
- [ ] No horizontal overflow or scrollbar
- [ ] All text is legible (body text minimum `1rem` / 16px)
- [ ] Headings are still visually prominent but don't overflow their container
- [ ] Two-column layouts collapse to single column
- [ ] Images are not cropped in a way that loses the subject
- [ ] CTAs are minimum `44px` tall for touch targets
- [ ] Section padding is reduced appropriately (not the same as desktop)
- [ ] Card grids stack vertically

### Step 3 — Tablet Review (768px) — if needed

Check:
- [ ] Layout transitions gracefully from single-column to two-column
- [ ] No awkward 50% width on very wide single-column content
- [ ] Image aspect ratios remain intentional

### Step 4 — Desktop Review (1440px)

Check:
- [ ] `.ds-container` constrains content width (content does not stretch edge-to-edge)
- [ ] Section padding matches design intent (generous)
- [ ] Typography is at editorial scale
- [ ] Images fill their intended space without distortion
- [ ] Hover states on interactive elements are visible

### Step 5 — Fix Issues

Common fixes:
- Add `flex-direction: column` inside mobile breakpoint for row layouts
- Reduce `font-size` at mobile via breakpoint or `clamp()`
- Add `width: 100%` to images that are sizing incorrectly
- Reduce `padding` values at mobile
- Use `gap` reduction at mobile for card grids

All fixes should use `--ptrain-*` tokens where values exist. Do not introduce new literal values if a token covers the use case.

### Step 6 — Validate

- Run targeted lint: `npx next lint --file components/<SectionName>/<SectionName>.module.css`
  (CSS modules may need the `.tsx` file instead depending on Next.js lint config)
- Confirm `prefers-reduced-motion` still works after layout changes

---

## Rules

- Mobile-first: default styles are mobile, `min-width` breakpoints add complexity for larger screens.
- Do not use `max-width` media queries unless overriding a third-party style.
- Touch targets minimum `44px × 44px` (Apple HIG / WCAG 2.5.5).
- Do not introduce layout changes that affect content (copy, images, links) during a responsive review.

---

## Deliverables

- Updated CSS module with responsive fixes applied
- Visual confirmation at 390px and 1440px
- No new horizontal scroll at any breakpoint
- Touch targets meet minimum size requirement
