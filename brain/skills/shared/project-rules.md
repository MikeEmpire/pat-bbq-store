# Shared Project Rules

All Skills in this repository inherit the following constraints. Do not repeat them in individual Skills — reference this file instead.

---

## Verified Content

- **Phone:** `951-772-3910` / `tel:+19517723910` — the only verified contact. Never substitute Figma values.
- **Email:** `bookings@ptrainsbbq.com` — present in Figma only, **not verified**. Do not promote until confirmed.
- **Stats:** `500+ Events`, `15+ Years`, `Est. 2010` — Figma only, **not verified**.
- **Testimonials:** All from Figma — **not verified**. Do not add to production.
- **Social URLs:** Not verified. Do not add to footer without confirmation.
- **Figma phone conflict:** Figma shows `(961) 771-3118` — this is wrong. Always use `951-772-3910`.

---

## Design System Usage

1. Reach for `.ds-*` global classes from `globals.css` before writing new CSS.
2. Use `--ptrain-*` CSS custom properties as values before inventing new values.
3. Add CSS Module rules only for component-specific behavior not covered by `.ds-*`.
4. Typography uses local Gilroy font files. Fraunces and Outfit are Figma-only — do not load them.
5. Reference `brain/ptrains-bbq-redesign/component-map.md` for the `.ds-*` class catalogue.

---

## Figma Reference Policy

- Figma export lives at `Website Redesign for PTrain's BBQ/` — a Vite + React app, not a Next.js app.
- Use it for visual direction (palette, layout, editorial structure, CTA hierarchy) only.
- Never copy `App.tsx`, `components/ui/` (shadcn), or any hardcoded content from Figma.
- Never reference Unsplash URLs from Figma in production.
- Do not install `lucide-react` or any other Figma-only dependency.

---

## Dependency Policy

- Do not introduce new `npm` dependencies without a deliberate, documented decision.
- Each session's agent-notes.md entry should explicitly state "no new dependencies introduced."
- Framer Motion is available but not required — pure CSS keyframe animations are preferred for entrance sequences.
- `react-intersection-observer` is in package.json but sections use native `IntersectionObserver` API directly.

---

## Build Environment Constraints

- `npm run lint` is **broken** — pre-existing `react/no-unescaped-entities` error in `components/About/About.tsx`.
- `npm run build` is **blocked** — Figma's Vite project is in tsconfig with uninstalled `lucide-react`.
- **Workaround:** Always use targeted lint: `npx next lint --file <path/to/file>`.
- Validate only the files you touched, not the entire project.

---

## Animation Standards

- All animations must include `@media (prefers-reduced-motion: reduce)` that disables the animation and sets `opacity: 1`.
- Preferred easing: `cubic-bezier(0.22, 1, 0.36, 1)` — steep initial deceleration, smooth landing, no overshoot.
- Use `animation-fill-mode: both` to prevent flash-of-invisible-content before delay.
- Stagger via inline `style={{ "--delay": "Xms" } as React.CSSProperties}` and `animation-delay: var(--delay, 0ms)` in CSS.

---

## Architecture Constraints

- Framework: Next.js 13 Pages Router. Do not migrate to App Router.
- Components live in `components/<ComponentName>/<ComponentName>.tsx` + `<ComponentName>.module.css`.
- Shared types live in `@types/index.ts`.
- Shared constants live in `constants/index.ts`.
- Do not change section order on the homepage without updating `brain/frontend/homepage.md` first.
- Do not restore the IntroAnimation component — it was deliberately removed June 26, 2026.
- ContactForm delivery is unverified — do not promote the booking form until confirmed working.
