# Skill: Navigation Audit

Audit and update site navigation without breaking routes, section targets, responsive behavior, or future SEO architecture.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Required Context

- `brain/frontend/homepage.md` — current page strategy and canonical section IDs
- Route entry points under `pages/`
- Shared navigation data and every component that renders it
- Homepage section components, footer, and sticky-header styles

## Workflow

### 1. Audit routes

- List active route files and compare them with every internal link.
- Identify missing, duplicate, outdated, or intentionally preserved routes.
- Prefer homepage anchors while the site uses a one-page strategy.
- Do not delete uncertain routes. Document whether each should stay, redirect, or become a future SEO page.

### 2. Audit section targets

- Record IDs from rendered homepage sections; never link to a target that is not rendered.
- Use stable semantic IDs such as `hero`, `trust`, `about`, `services`, `menu`, `testimonials`, `booking`, and `contact` only when the matching section exists.
- Give important anchor targets a semantic landmark, accessible name, and programmatic focus target when appropriate.
- Keep each ID unique.

### 3. Update navigation and CTAs

- Use root-relative anchors (`/#section`) in shared navigation so links work from any route.
- Update desktop navigation, mobile navigation, brand/home links, booking CTAs, section CTAs, and existing footer navigation together.
- Keep labels descriptive and destinations consistent across repeated navigation.

### 4. Protect sticky-header behavior

- Apply a shared `scroll-padding-top` and `scroll-margin-top` offset based on the fixed header height.
- If smooth scrolling is enabled, disable it under `prefers-reduced-motion: reduce`.
- Verify direct loads and in-page clicks do not hide headings behind the header.

### 5. Check mobile and keyboard UX

- Confirm the mobile toggle exposes `aria-controls`, `aria-expanded`, and a clear label.
- Keep closed-menu links out of the tab order.
- Move focus into the opened menu and support Escape to close and restore focus.
- Preserve visible focus indicators and minimum 44px touch targets.

### 6. Add active-section state when requested

- Derive active state from rendered section IDs, not the current hash alone.
- Throttle scroll work with `requestAnimationFrame` and use passive scroll listeners.
- Map sections without their own text link intentionally; for example, keep Home active through a trust band and highlight the booking CTA during `#booking`.
- Do not rewrite URL history while the visitor scrolls.
- Ensure the final short section can become active at the bottom of the page.

### 7. Record SEO evolution

- Document future dedicated pages without linking to routes before they exist.
- Keep current anchor destinations canonical until landing pages are implemented.
- Record which legacy route files are preserved and whether redirects are temporary or permanent.

### 8. Validate

- Search for stale internal paths and unmatched fragment IDs.
- Run targeted lint on touched TypeScript files.
- Test the homepage and legacy redirects.
- Review at 390px and 1440px for overflow, header collisions, menu operation, focus behavior, and anchor landing position.
- Confirm desktop and mobile active states change at each mapped section.

## Deliverables

- Updated shared navigation and repeated CTAs
- Stable semantic section IDs
- Documented route/redirect and future SEO decisions
- Desktop, mobile, keyboard, and reduced-motion validation results
