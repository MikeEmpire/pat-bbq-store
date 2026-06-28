# Agent Notes

## Assumptions

- The root Next.js app is production source of truth.
- `Website Redesign for PTrain's BBQ/` is an imported Figma/Vite reference project.
- Business facts from the existing production app are more reliable than generated Figma copy unless the user says otherwise.
- For Section 1 navigation, the existing production phone number `951-772-3910` remains the safest contact source of truth.

## Decisions Made

- Created a dedicated brain folder at `brain/ptrains-bbq-redesign/`.
- Treated the Figma export as visual/design reference, not as replaceable application code.
- Flagged the Figma UI component library as a donor/reference only because the production app does not currently use shadcn/Radix.
- Recommended section-by-section migration.
- Implemented Navigation as the first production section on June 26, 2026.
- Kept the current Next.js Pages Router structure and shared `links` constant.
- Used the existing logo image plus a text wordmark; did not introduce Fraunces/Outfit or new icon dependencies for this section.
- Removed the dead `Shop (coming soon)` navigation item and renamed `Book Us` to `Book Catering`.
- Used the existing `/bookus` route for the catering CTA and `tel:+19517723910` for the phone CTA.
- Implemented the design system foundation on June 26, 2026 before migrating any additional page sections.
- Chose CSS custom properties plus global `.ds-*` classes as the reusable design system layer because the production app already uses global CSS, CSS Modules, and Tailwind utilities.
- Extended Tailwind 3 config with token aliases and nested content globs, but did not import the Figma Tailwind 4 setup.
- Kept local Gilroy for both body and display tokens; Fraunces/Outfit remain visual references until a deliberate font-loading decision is made.
- Connected the existing redesigned header CSS to shared tokens instead of duplicating palette values.
- Removed the five-second homepage opening animation on June 26, 2026; the existing carousel now renders immediately.

## Important Findings

- The live app is Pages Router Next.js 13 with CSS Modules, local Gilroy fonts, Framer Motion, Embla, and Next Image.
- The Figma export is Vite + Tailwind 4 + generated React code.
- The Figma export's main page is a single large `App.tsx`; it should be split or selectively rebuilt if used.
- The Figma export uses Fraunces/Outfit from Google Fonts; production currently uses local Gilroy.
- The current app's contact form posts to `contactFormURL`, but delivery/monitoring should be verified before it becomes the primary booking CTA.
- The live `constants/index.ts` used `/bookus`, not the previously documented `/#bookus`; the section 1 change kept route navigation.
- `npm run lint` and `npm run build` are currently blocked by pre-existing `react/no-unescaped-entities` errors in `components/About/About.tsx`.
- A full `npx tsc --noEmit` is currently blocked because `tsconfig.json` includes the imported Figma Vite project and empty `*.test.tsx` files; the Figma folder references dependencies that are not installed in the production Next app.
- Targeted validation for touched files passed: `npx next lint --file components/Header/Header.tsx --file constants/index.ts` and an isolated TypeScript command including `next-env.d.ts`, `components/Header/Header.tsx`, `constants/index.ts`, and `./@types/index.ts`.
- Design foundation validation passed with `npx tailwindcss -i styles/globals.css -o /private/tmp/ptrain-globals.css --content './pages/**/*.{js,ts,jsx,tsx,mdx}' --content './components/**/*.{js,ts,jsx,tsx,mdx}'`.
- Route smoke checks after the foundation returned `200 OK` for `/`, `/menu`, `/contact`, and `/about`.
- Headless Chrome screenshots after the intro animation confirmed the existing homepage renders on desktop and mobile.
- Existing homepage mobile carousel/testimonial text still overflows horizontally; this was not introduced or fixed in the design-system foundation task.
- Desktop visual verification passed at 1440x900 after the intro animation: nav links and CTAs are in bounds with no overlap.
- Mobile verification passed at 390x844 via Chrome DevTools Protocol emulation: media query matched, menu button visible at the right edge, and opened menu measured full-width.
- Route smoke checks returned `200 OK` for `/menu`, `/bookus`, `/about`, and `/contact`.
- The removed `components/IntroAnimation/` files are no longer part of the production experience and should not be restored during section migration.

## Open Questions

- What is the correct phone number: `951-772-3910` from the current app, or the number in the Figma export?
- Is `bookings@ptrainsbbq.com` a real monitored email address?
- Which menu image is current: `public/CateringMenu.jpg` / `.png` or `src/imports/_menu_2025PTrainsCateringMenu.png` from the export?
- Are Figma claims such as `500+ events`, `15+ years`, `Est. 2010`, testimonials, and service areas approved?
- Should production use the existing logo image, a text wordmark, or both?

## Hero Implementation — June 27, 2026

- Implemented hero as new `components/HeroSection/HeroSection.tsx` and `HeroSection.module.css`.
- `pages/index.tsx` now renders `<HeroSection />` directly (old Embla carousel removed from homepage).
- Used local `/public/slideshow/slide-{1-5}.jpeg` images instead of Figma's remote Unsplash URLs.
- Split-panel layout: 52% ivory left text panel / 48% right image panel on desktop; full-bleed crossfade with dark overlay on mobile.
- Headline adapted from Figma ("The BBQ That Changes Everything.") — kept as 4-line stacked editorial copy.
- Eyebrow reduced to "Southern California" only; removed "Est. 2010" (unverified).
- Body copy rewritten to remove the Figma's specific "Temecula to San Diego" service area claim.
- Stats row (500+ Events, 15+ Years, 5★ Rated) present but marked with a code TODO for client verification before launch.
- Phone CTA uses `tel:+19517723910` (verified current-app number) — NOT the Figma export number.
- "View Menu" CTA routes to `/menu` (Next.js Link) rather than a scroll anchor.
- `margin-top: -10vw` + matching height offset cancels `globals.css main { padding-top: 10% }` so hero is viewport-flush.
- `npm run lint` on new files: clean. Build failure is pre-existing (Figma Vite export in tsconfig includes).

## Hero Entrance Animation — June 27, 2026

- Pure CSS keyframe animations. Framer Motion (available) was not used — transform+opacity CSS is sufficient and has zero additional bundle cost.
- Four keyframes added to `HeroSection.module.css`: `hero-reveal-up`, `hero-fade-up`, `hero-media-enter`, `hero-fade-in`.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` throughout — steep initial deceleration, smooth landing, no overshoot.
- `.headlineClip` (overflow:hidden wrapper) + `.headlineReveal` (inner span animation) create the theatrical upward reveal for each headline line.
- `.revealFade` is a shared utility class for all non-headline elements; reads `--delay` CSS custom property for stagger.
- Stagger sequence (all delays in ms): PromoCard 0 → Eyebrow 80 → H1 L1 160 → H1 L2 250 → H1 L3 340 → H1 L4 430 → Body 560 → CTAs 660 → Stats 740. Full sequence completes ~1000ms.
- Right panel (desktop image): `hero-media-enter` at 80ms delay, 720ms duration — starts with text, finishes shortly after.
- Mobile background: `hero-fade-in` 600ms, no delay.
- `animation-fill-mode: both` on all animated classes prevents flash-of-content before delay expires.
- `@media (prefers-reduced-motion: reduce)` disables all hero animations.
- `react` import changed from named to default (`import React, { ... }`) to support `React.CSSProperties` typing for CSS custom properties.
- HeroPromoCard JSX (which was missing from HeroSection.tsx despite the comment) was restored as part of the animation sequence.

## HeroPromoCard — June 27, 2026

- Added `components/HeroPromoCard/HeroPromoCard.tsx` and `HeroPromoCard.module.css`.
- Reusable component with props: `title`, `subtitle`, `description`, `icon`, `variant`.
- Two variants: `brass` (deep burgundy plate, gold lettering — default) and `parchment` (warm ivory for light contexts).
- Styling references: double-rule top border (`4px double var(--ptrain-color-accent)`), thin gold side/bottom frame — vintage locomotive nameplate / brass plaque convention.
- Inserted above the "Southern California" eyebrow in `HeroSection` leftPanel.
- Used in hero as: title="Complimentary", subtitle="Tasting", description="Let us earn your business before you book."
- `subtitle` is the emphasis word (TASTING) — rendered large, display font, uppercase.
- Component is intentionally content-free; all text is passed via props — nothing hardcoded.
- Mobile: smaller subtitle and tighter margin-bottom to preserve leftPanel breathing room.
- No new dependencies introduced. Uses existing `--ptrain-*` CSS custom properties only.

## Future Agent Guidance

> **Homepage source of truth:** `brain/frontend/homepage.md`
> All homepage section decisions, ordering, responsibilities, and SEO/content strategy live there.
> Read that document before making any homepage changes.

- Navigation is complete; continue with one section at a time.
- Next unbuilt sections in priority order: Trust Bar → About (redesign) → Catering Services → Gallery → Testimonials → Booking CTA → Footer.
- Before editing production, read the current target component and CSS Module.
- Prefer preserving current routing and local assets.
- Do not import the full Figma dependency set.
- Keep implementation changes small enough to validate section by section.
- Verify responsive layout with desktop and mobile screenshots once implementation begins.
- Use `styles/globals.css` design tokens and classes first: `.ds-section`, `.ds-container`, `.ds-two-column`, `.ds-display`, `.ds-section-heading`, `.ds-body`, `.ds-eyebrow`, `.ds-button-primary`, `.ds-button-secondary`, `.ds-button-text`, `.ds-card` variants, and `.ds-media` utilities.
- Use `tailwind.config.js` `ptrain.*` aliases only where Tailwind utilities are already the cleanest local fit.
