# PTrain's Website Overhaul - Implementation Plan (Roadmap Aligned)

## Scope
This plan implements the roadmap in:
- `.claude/session-notes/2026-03-03-roadmap.md`

Primary outcomes:
- Premium "Rustic Luxury" visual system.
- Conversion-first homepage architecture.
- Stronger SEO and local business presence.
- More trust signals and better booking funnel.

## Current Baseline (As Of March 4, 2026)
Completed foundation work:
- Structural cleanup (no functional regressions).
- Centralized global design tokens.
- Reusable primitives introduced (`Section`, `Container`, `Card`, `Button`).
- Primitives applied to key page sections (Home/About/BookUs/Menu/Contact).

## Non-Negotiables
1. Keep homepage section order from roadmap.
2. Mobile-first behavior must be fully intentional.
3. Every section must support a booking CTA path.
4. Preserve accessibility and performance during redesign.

## Homepage Build Order (Exact)
1. Intro Animation
2. Cinematic Hero
3. Signature Highlights
4. Social Proof
5. Our Story
6. Catering Services
7. Service Areas
8. Instagram Gallery
9. Booking CTA Section
10. Footer

## Implementation Phases

### Phase A - Content and Component Architecture
Goal:
- Prepare content/data shape and reusable section components before visual polish.

Tasks:
1. Create `components/home/` with section-specific components.
2. Move static copy and list content to typed constants in `constants/`.
3. Define section props interfaces and avoid hardcoded page-level content blocks.
4. Keep current functionality while replacing old monolithic home composition.

Deliverables:
- New typed section component files for each homepage block.
- `pages/index.tsx` rewritten as section orchestration only.

Acceptance:
- Home renders from modular components.
- No lint/build regressions.

### Phase B - Visual System Application (Rustic Luxury)
Goal:
- Apply roadmap palette, type hierarchy, and spacing rhythm consistently.

Tasks:
1. Add brand utility classes/tokens for surfaces, accents, borders, and shadows.
2. Introduce display typography style for hero and section headers.
3. Standardize card and CTA appearance using primitive variants.
4. Add subtle textured/gradient background treatment per roadmap direction.

Deliverables:
- Updated global tokens and home section styles.
- Unified section-level visual language.

Acceptance:
- Brand palette visible across home.
- Clear typography hierarchy and section rhythm.

### Phase C - Motion and Interaction System
Goal:
- Implement premium motion with restraint.

Tasks:
1. Refine intro animation to 2.5-3 seconds and add skip control.
2. Add subtle section reveal animations (fade-up 150-300ms).
3. Apply controlled hover effects on cards and CTAs.
4. Respect `prefers-reduced-motion` across all new motion.

Deliverables:
- Updated `IntroAnimation` behavior and controls.
- Shared motion variants for home sections.

Acceptance:
- Motion feels intentional, not noisy.
- Reduced-motion users get non-animated fallback.

### Phase D - Conversion and Booking Funnel
Goal:
- Make booking intent the dominant user path.

Tasks:
1. Rebuild booking section fields per roadmap (event type, date, guests, budget).
2. Add sticky/floating booking CTA behavior for mobile.
3. Improve form validation states and submission feedback UX.
4. Keep existing backend endpoint contract unless API changes are approved.

Deliverables:
- New conversion-first booking section on home.
- Improved `/contact` experience or merged booking flow.

Acceptance:
- Booking path is visible from hero through footer.
- Form interaction is clear, fast, and trust-building.

### Phase E - SEO, Trust, and Presence
Goal:
- Strengthen discoverability and proof.

Tasks:
1. Add structured data updates for local business + services.
2. Build service-area section for Southern California geography.
3. Implement social proof block with rating + curated testimonials.
4. Add Instagram/event gallery section using current assets first, live integration second.

Deliverables:
- Updated metadata/schema per page.
- Search-friendly service area content.

Acceptance:
- Valid schema output in rendered HTML.
- Social proof and geography are visible without deep navigation.

### Phase F - QA and Launch Hardening
Goal:
- Ship with confidence.

Tasks:
1. Run full responsive QA (mobile/tablet/desktop).
2. Validate accessibility (focus order, contrast, labels, alt text).
3. Confirm performance budget (image sizes, loading strategy, animation cost).
4. Rebuild sitemap/robots and verify crawl outputs.

Deliverables:
- QA checklist completion notes.
- Final launch candidate commit.

Acceptance:
- `npm run lint` and `npm run build` pass.
- No blocking accessibility/performance issues.

## Suggested PR Slices
1. `feat/home-component-architecture`
2. `feat/home-brand-system-pass`
3. `feat/home-motion-system`
4. `feat/home-conversion-booking`
5. `feat/home-seo-trust-presence`
6. `chore/launch-qa-hardening`

## Immediate Next Steps
1. Build `components/home/` section scaffolds and wire `pages/index.tsx` to new order.
2. Port existing content into typed constants before copy refinement.
3. Implement Hero + Signature Highlights first as the visual anchor.
