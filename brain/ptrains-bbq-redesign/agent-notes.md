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

## About Section Refinement — June 27, 2026

- Extracted pull quote ("He taught us that with hard work, patience, and love...") from the second paragraph and elevated it as a `<blockquote>` with a gold left border between the two narrative beats.
- Replaced uniform `gap: 1.5rem` on `.textCol` with explicit `margin-bottom` per element for intentional rhythm: eyebrow tight to heading (0.875rem), heading pauses before body (2rem), pull quote framed (0.5rem top / 1.25rem bottom), CTA breathing room (2rem top).
- Heading font-size increased from `clamp(2.25rem, 4.5vw, 3.5rem)` to `clamp(2.5rem, 5vw, 4.25rem)` for editorial authority.
- Section padding increased from `7rem` to `8.5rem` on desktop — story sections warrant more air.
- Image frame now has a layered `box-shadow` (depth) + `inset 0 0 0 1px` border (containment) to make it feel framed, not just placed.
- Added `.imageBadge` absolutely positioned at bottom-left of image frame: "FAMILY OWNED / SOUTHERN CALIFORNIA" in burgundy/ivory — verified identity claims only, no unverified stats. `aria-hidden="true"`; existing `<figcaption>` remains accessible equivalent.
- Animation delay sequence updated to account for pull quote: 0 / 60 / 150 / 230 / 310 / 400ms (text), 120ms (image).
- All rejected ideas: decorative line above eyebrow (Ticker already provides threshold), portrait aspect-ratio crop (square photo composition unknown), background texture (too busy), HeroPromoCard reuse in About (too repetitive), grid proportion change (55/45 already appropriate asymmetry).

## Catering Services Section Simplification — June 27, 2026

Reverted the image-card-grid approach after review. Too complex and portfolio-like for the intended design direction.

**What was removed:**

- 6 image-topped service cards (each with image, category label, heading, body, and "Get a Quote" link)
- 3-column card grid layout
- Section-level CTA row (call + view menu buttons)
- `Link` import and `PHONE_HREF` constant (no longer needed in this section)
- `ServiceCard` interface replaced with simpler `Service` interface (no `image`, `imageAlt`, `category`, `href`)

**New structure:**

1. Split header — eyebrow "WHAT WE DO" + heading "Catering Services" on the left; supporting copy on the right (baseline-aligned)
2. 2×2 text-only service grid — number, title, short description; hairline border dividers; no images or CTAs per item
3. Proof image strip below — 3 real event photos in a 3-column row; desktop grid, mobile horizontal scroll with snap

**Services reduced from 6 to 4:** Weddings, Corporate Events, Private Parties, Festivals & Fairs. Employee Appreciation and Holiday Parties removed — can be reinstated if client confirms. Service `href` fields removed from data model entirely (not needed without CTAs).

**Image strip:** `scroll-snap-type: x mandatory` on mobile; each image `flex: 0 0 75vw` so the next image peeks in. Scrollbar hidden (`scrollbar-width: none` + `::-webkit-scrollbar`). Section has no `overflow: hidden` so mobile scroll is not clipped.

**Animation:** Same `IntersectionObserver` pattern; header at `0ms`, service items stagger `80ms + i*80ms`, image strip at `440ms`.

## Catering Services Section — June 27, 2026

- Created `components/ServicesSection/ServicesSection.tsx` and `ServicesSection.module.css`.
- Section uses plain ivory background (`--ptrain-color-background`) to contrast with About's warm tan (`--ptrain-color-surface-alt`).
- Layout: centered eyebrow/heading/intro header → 3-column grid of image-topped service cards → section CTA row.
- Card design: no padding on the card shell (image spans full width at top, 3:2 aspect ratio); content area below has `1.5rem` padding. `overflow: hidden` clips image to `--ptrain-radius-card` corners.
- Proof imagery: `/slideshow/slide-{1-6}.jpeg` assigned to the 6 service cards — these are real business event photos. Each card answers "have they actually done this?" with a real photo before the descriptive copy.
- Service cards (confirm list with client before launch): Corporate Events, Weddings, Private Parties, Festivals & Events, Employee Appreciation, Holiday Parties.
- All service card CTAs use `next/link` pointing to `/services/{id}` (e.g. `/services/corporate`) per the homepage architecture requirement for future SEO landing pages. These routes do not exist yet — they will 404 until individual pages are built.
- Card hover: subtle `translateY(-3px)` lift + `--ptrain-shadow-card` drop shadow. Disabled via `transition: none` in `prefers-reduced-motion`.
- Scroll animations: `IntersectionObserver` at `threshold: 0.1`; header at `0ms`, cards staggered `80ms + i*90ms` (6 cards = 80→530ms), section CTA at `640ms`. Disconnect after first intersection (one-time).
- `@media (prefers-reduced-motion: reduce)` sets `opacity: 1; transform: none; animation: none` for all animated elements.
- Responsive: 3-col (desktop) → 2-col (≤1023px) → 1-col (≤479px). `ctaRow` stacks vertically on mobile.
- No new npm dependencies introduced.
- Service card body copy: all descriptions are general, non-specific catering descriptions — no unverified stats, service areas, or testimonials.
- `ServiceCard` interface kept in component file (narrowly scoped, not reused elsewhere); `@types/index.ts` not modified.

## Menu Preview Section — June 27, 2026

- Created `components/MenuSection/MenuSection.tsx` and `MenuSection.module.css`.
- Registered in `pages/index.tsx` after `<ServicesSection />` per homepage architecture (Section 5).
- Background: `--ptrain-color-surface-alt` (warm tan) — differentiates from Services' ivory and gives the section appetite warmth. Same tone as About, bookending the Interest phase.

**Layout (from Figma visual reference):**

1. Split header — eyebrow "THE FULL SPREAD" + heading "Our Menu" on the left; "View Full Menu" text CTA (link to `/menu` route) on the right, baseline-aligned.
2. Horizontal tab bar — three tabs: Smoked Meats / Signature Sides / Packages. `overflow-x: auto` for mobile. Tab switching is wired to `useState(activeTab)` and is fully functional.
3. Menu body panel — bordered card with `2fr / 3fr` column grid (photo left, item list right). The active tab drives both the photo and the item list.
4. Photo panel — real event photo from `/slideshow/` with a dark gradient overlay showing "Now Serving / [Category Name]".
5. Item list — each row has an index number, item name, optional tag badge, and a short description. Rows have divider borders and hover tint.
6. Quote CTA row at the bottom of the item list — burgundy-tinted background, "Custom menus available" copy, phone CTA (`tel:+19517723910` — verified number).

**Content decisions:**

- Used three menu categories from the Figma export structure (Smoked Meats, Signature Sides, Packages) — these are structural, not verified item data.
- Item names are drawn from Figma but descriptions were rewritten conservatively to remove unverified specific claims (e.g. "12+ hour smoke", "Santa Maria-style"). All item names and descriptions flagged with TODO comments for client sign-off.
- Package names and guest-count tiers require client confirmation.
- Did NOT use the Figma's Unsplash image URLs — used `/slideshow/slide-1.jpeg`, `slide-3.jpeg`, `slide-5.jpeg` (real event photos) for the left panel.
- Phone CTA uses verified `tel:+19517723910`. Email CTA (`bookings@ptrainsbbq.com`) intentionally excluded — not yet verified.
- "View Full Menu" routes to `/menu` (existing lightbox page) — not a direct PDF download, because no PDF has been confirmed.

**Intentionally deferred for later interaction pass:**

- Tab panel cross-fade/slide animation between categories — TODO comment in place.
- PDF download link for "View Full Menu" CTA — blocked on client providing a PDF; currently routes to `/menu`.
- Email "Get a Quote" CTA — blocked on verifying `bookings@ptrainsbbq.com`.
- Client verification of all menu item names, descriptions, and package tiers.

**Responsive behavior:**

- Desktop (≥1024px): 2fr/3fr photo+list grid inside the menu body.
- Tablet (≤1023px): single-column stacked layout; photo fixed at 260px height above the item list.
- Mobile (≤767px): section padding reduced; header stacks vertically; photo 220px; quoteCta stacks with full-width button.
- Tab bar scrolls horizontally on narrow screens (`overflow-x: auto`, scrollbar hidden).
- Touch targets: tab buttons `min-height: 44px`.

**Animations:**

- Same `IntersectionObserver` + CSS keyframe (`menu-fade-up`) pattern as Services and About sections.
- Stagger: header at 0ms, tab bar at 80ms, menu body at 160ms.
- `prefers-reduced-motion`: animations disabled, elements visible at full opacity.

**No new npm dependencies introduced.**

- Lint passed: `npx next lint --file components/MenuSection/MenuSection.tsx --file pages/index.tsx` — no warnings or errors.

## Testimonials Section — June 27, 2026

- Created `components/TestimonialsSection/TestimonialsSection.tsx` and `TestimonialsSection.module.css`.
- Registered in `pages/index.tsx` after `<MenuSection />` per homepage architecture (Section 7; Gallery slot skipped — blocked on client photography).
- Background: `--ptrain-color-background` (ivory) — contrasts with MenuSection's warm tan (`--ptrain-color-surface-alt`).

**Layout chosen: Option A — Featured testimonial hero + 5-card supporting grid.**

Rationale: The editorial hierarchy (one large quote dominates, five smaller cards support) fits the premium/warm/confident design language better than a uniform rail or three-plus-three split. A featured entry also creates a clear promotion path — client or agent can rotate which testimonial gets the hero treatment by toggling `featured: true` in the data.

**Data structure:**

```ts
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  eventType?: string;
  rating?: number;    // 1–5; omit to suppress stars
  source?: string;    // display label: "Yelp" | "Google" | "Direct" | custom
  featured?: boolean; // one at a time → drives the hero panel
}
```

All 6 entries are in a typed `TESTIMONIALS` constant at the top of the component file with `// TODO:` comments. Interface is narrowly scoped (not added to `@types/index.ts`).

**What is placeholder:**
All 6 testimonials — quotes, names, event types, and sources. Every entry is flagged with a `// TODO:` comment. The rendered text makes it obvious during development that real content is needed. Do not launch with this content.

**Future scalability to 40+ testimonials:**

- Extend `TESTIMONIALS` array — no structural changes needed.
- Add `filterBy?: string[]` prop to filter by `eventType` client-side.
- Wrap the grid in a paginated or progressively-revealed container (`slice(0, page * 6)`).
- Replace the grid with an Embla/Swiper carousel for mobile (already in project dependencies).
- Add a "Read more" toggle using `useState` on each card to uncollapse the `-webkit-line-clamp: 5` text limit.
- Source badges can link to verified Yelp/Google review URLs once social links are confirmed.
- `featured` can be a server-side or CMS-driven flag to rotate the hero entry without a deploy.

**Visual details:**

- Featured panel: centered blockquote, decorative gold open-quote (ornamental, opacity 0.45), `StarRating` above the quote, thin gold rule before attribution.
- Supporting cards: gold 3px top border accent, star rating, italic quote clamped to 5 lines, small-caps name, italic event type, pill source badge.
- `SourceBadge` uses `--ptrain-color-accent-soft` background — consistent with existing accent usage.

**Animations:**

- Same `IntersectionObserver` + `testimonials-fade-up` keyframe pattern as About, Services, Menu.
- Stagger: header 0ms → featured 120ms → cards 240ms + i×80ms (5 cards = 240–560ms).
- `prefers-reduced-motion`: all opacity set to 1, animations disabled.

**Intentionally deferred:**

- Real testimonial content (launch blocker — all content is placeholder).
- Carousel/slider for mobile.
- Filtering by event type.
- "Read more" expansion for long quotes.
- Source badge hyperlinks to Yelp/Google pages (social URLs unverified).
- Client photography pairing per testimonial.

**Responsive:**

- Desktop (≥1024px): featured panel full-width centered, 3-col supporting grid.
- Tablet (≤1023px): 2-col grid, featured panel padding reduced.
- Mobile (≤767px): section padding reduced, header left-aligned, featured panel left-aligned, 1-col grid.

**No new npm dependencies introduced.**

Lint passed: `npx next lint --file components/TestimonialsSection/TestimonialsSection.tsx --file pages/index.tsx`

## One-Page Navigation Alignment — June 27, 2026

**What was built:**
Aligned desktop and mobile navigation with the rendered homepage sections. Added stable anchor behavior, temporary legacy-route redirects, contact/footer targeting, and a reusable navigation audit skill.

**Key decisions:**

- Canonical primary destinations are `/#hero`, `/#about`, `/#services`, `/#menu`, `/#testimonials`, and `/#contact`; the Trust Bar also has the stable `/#trust` target.
- Book Catering uses the rendered `/#booking` section; Contact remains `/#contact` on the footer.
- `/about`, `/bookus`, and `/contact` temporarily redirect to their matching homepage anchors. Their source page files remain in place so future SEO work can repurpose them safely.
- The already-removed `/menu` page was not restored. Old `/menu` CTAs now target `/#menu`; the full-menu action continues to open the static menu asset.
- Future SEO targets are `/corporate-catering`, `/wedding-catering`, `/private-party-catering`, `/festival-catering`, `/bbq-menu`, and `/contact`. Do not link them before implementation.
- The fixed header offset is shared through `--ptrain-header-offset`; reduced-motion preferences disable smooth scrolling.
- The mobile menu moves focus to its first link when opened and closes on Escape while restoring focus to the toggle.

**Excluded content (unverified):**

- This navigation task did not alter booking-form content or add landing pages. The rendered Booking CTA is used as the anchor target, while form delivery remains a launch-verification requirement.

**Dependencies introduced:** None.

**Open questions:**

- Should `/about` eventually become a unique story page or be retired after the one-page strategy is established?
- When form delivery is verified, should `/contact` replace its temporary redirect and become the first dedicated SEO page?
- All rendered testimonial content remains placeholder copy and must be replaced before launch.

**Validation:**

- Targeted Next.js lint passed with no warnings or errors for all touched TypeScript navigation and section files.
- `/` returned `200`; `/about`, `/bookus`, and `/contact` returned `307` with the intended homepage fragments. `/bookus` now targets `/#booking`.
- At 390px and 1440px, document width matched viewport width with no horizontal overflow.
- At 390px, the mobile toggle measured 48×44px, opening moved focus to Home, and Escape closed the menu and restored focus to the toggle.
- `/#services` landed at 82px below the viewport top against an 83px fixed-header edge (sub-pixel rounding), so the target is not obscured.
- A direct `/#contact` load re-focused the footer after hydration; at 390px it landed at 82px with no horizontal overflow, and at 1440px the footer remained fully visible at the bottom of the viewport.
- Reduced-motion emulation reported `scroll-behavior: auto`.

## Booking CTA Section — June 27, 2026

- Created `components/BookingCTA/BookingCTA.tsx` and `BookingCTA.module.css`.
- Registered in `pages/index.tsx` after `<TestimonialsSection />` as Section 8 per homepage architecture.
- Background: `.ds-section--primary` (burgundy) — strong contrast from Testimonials' ivory, signals the final action call.
- Section ID: `#booking` — active target for Header, mobile, footer, and legacy `/bookus` navigation.

**API / Form:**

- Reuses `contactFormURL` from `constants/index.ts` — no new endpoint, no API route, no secrets on the client.
- Reuses `ContactFormData` type from `@types/index.ts` — no interface duplication.
- Additional booking fields (`eventType`, `eventDate`, `guestCount`) are composed into the `message` body before submission to preserve the existing 4-field API contract.
- Submission flow: loading state (button disabled + "Sending…") → on success: form replaced by confirmation panel → on error: inline `role="alert"` message with phone fallback.
- Honeypot field (`name="website"`, `tabIndex={-1}`, CSS `display: none`) silently rejects bot submissions without calling the API.

**Layout:**

- Desktop: two-column grid (pitch left, form card right); pitch panel is `position: sticky` while scrolling.
- Left panel: eyebrow "READY TO BOOK" + headline + body copy + phone call link (`tel:+19517723910`) + "or use the form" note.
- Right panel: ivory `.formCard` with `box-shadow` against the burgundy background.
- Responsive: single-column stack on ≤1023px; `fieldRow` grids collapse to single column on ≤767px.

**Form fields (7):** Name (required), Email (required), Phone, Event Type (required select), Event Date, Estimated Guests, Additional Details.

**Animation:** Same `IntersectionObserver` + CSS keyframe (`booking-fade-up`) pattern as all prior sections. Pitch at 0ms, form card at 120ms. `prefers-reduced-motion` disables all animations.

**No new npm dependencies introduced.**

**Skill created:** `brain/skills/api-form.md` — documents endpoint, type contract, compose-into-message pattern, honeypot, state expectations, and security rules for all future form tasks.

**Content excluded (unverified):** Email address `bookings@ptrainsbbq.com` intentionally not included — not yet confirmed as a monitored address. Only `951-772-3910` (verified) appears.

**Open note:** The `contactFormURL` endpoint at `empire-api.afam.app` delivers to Caira, but delivery and monitoring confirmation from the client is still recommended before launch.

## Footer Section — June 27, 2026

**What was built:**
Full redesign of `components/Footer/Footer.tsx` and `Footer.module.css`. Dark deep-brown (`#231409`) background with 3-column grid layout: Brand column (logo + wordmark + tagline + social icons), Quick Links column (homepage anchor nav), and Contact column (phone CTA + service area + Book Catering button). Bottom bar: copyright + keyboard-accessible back-to-top button. Rendered globally by `components/Layout.tsx` after page content.

**Key decisions:**

- Used dark background (`var(--ptrain-color-text)` / `#231409`) to naturally close the page and contrast every ivory/tan section above it — creates "premium editorial end cap" feel.
- Inline SVG icons for Yelp, Instagram, Facebook rather than `next/image` PNG files — gives `currentColor` theming and hover state control without dependency on fixed image dimensions.
- `BackToTopButton` uses `window.matchMedia('(prefers-reduced-motion: reduce)')` at click time to decide `scroll-behavior: auto` vs `smooth` — honors the user's system preference dynamically.
- Footer nav adds "Book Catering" → `/#booking` beyond the standard `constants/links` items; omits "Home" (redundant in a footer).
- Gold (`var(--ptrain-color-accent)`) used for social icon hover fills, column heading borders, contact icons, and back-to-top button — consistent with the rest of the design system.
- Imported `links` from `constants/index.ts` — no hardcoded nav items; Footer stays in sync with nav changes automatically.
- `#contact` anchor retained on the `<footer>` element for all Contact navigation; Book Catering targets the preceding `#booking` section.

**Excluded content (unverified):**

- `bookings@ptrainsbbq.com` — not in the old footer, not confirmed as monitored; excluded entirely.
- Twitter/X — icon exists at `/public/twitter-icon.png` but was never in the production footer and is not confirmed active; excluded.

**Dependencies introduced:** None.

**Open questions:**

- Should the footer eventually show a verified email address once confirmed?
- Client should confirm Yelp, Instagram, and Facebook URLs are the correct/current business pages (sourced from previous production footer, assumed accurate).

## Navigation Scrollspy — June 27, 2026

**What was built:**
Added section-aware active states to the desktop and mobile Header navigation. Removed the duplicate JavaScript hash-scroll correction so native CSS anchor scrolling controls Contact and other section landings.

**Key decisions:**

- Scrollspy reads the canonical section order (`hero`, `about`, `services`, `menu`, `testimonials`, `booking`, `contact`) and updates against a stable viewport marker below the fixed Header.
- Home remains active through the unlinked Trust/Ticker introduction.
- Booking activates the separate Book Catering CTA; Contact activates at the footer and is forced active at the end of the page.
- Scroll work is passive and throttled through `requestAnimationFrame`; scrollspy does not rewrite the hash or browser history.
- Native `scroll-behavior` and `scroll-margin-top` remain the only scroll-position writers.

**Excluded content (unverified):** None; no content changed.

**Dependencies introduced:** None.

**Open questions:** None.

## Testimonials Yelp Review Formatting — June 28, 2026

**What was built:**
Replaced the rendered placeholder testimonial array with the six supplied hardcoded Yelp reviews from `constants/yelpreviews.ts`. Standardized the cards, added reviewer profile images and attribution metadata, and added an accessible expand/collapse control for long reviews.

**Key decisions:**
- Review content remains data-driven in a typed exported constant so additional entries can be appended without changing the card component.
- Yelp profile images use `next/image` with an exact HTTPS host allowlist in both component validation and `next.config.js`; missing, invalid, or failed images fall back to reviewer initials.
- Mobile uses a horizontal scroll-snap row with a visible next-card peek; tablet and desktop retain two- and three-column grids.
- The standalone Figma/Vite reference directory and empty test placeholders are excluded from the production TypeScript scope so reference-only dependencies and non-module stubs no longer block deploy checks.

**Excluded content (unverified):**
- No Figma testimonials, scraped Yelp content, or newly written reviews were added.

**Dependencies introduced:** None.

**Open questions:**
- None.

**Validation:**
- Targeted lint passed for the testimonial component, Yelp data, and Next.js image configuration.
- `npx tsc --noEmit` passed after production-scope exclusions.
- `npm run lint` passed with no warnings or errors.
- `npm run build` completed successfully after the Figma reference exclusion.

## Future Agent Guidance

> **Homepage source of truth:** `brain/frontend/homepage.md`
> All homepage section decisions, ordering, responsibilities, and SEO/content strategy live there.
> Read that document before making any homepage changes.

- Navigation is complete; continue with one section at a time.
- Gallery is the next unbuilt section. Testimonials now render the supplied hardcoded Yelp review content.
- Before editing production, read the current target component and CSS Module.
- Follow the documented one-page route decisions and preserve legacy page source files until future SEO pages are ready.
- Do not import the full Figma dependency set.
- Keep implementation changes small enough to validate section by section.
- Verify responsive layout with desktop and mobile screenshots once implementation begins.
- Use `styles/globals.css` design tokens and classes first: `.ds-section`, `.ds-container`, `.ds-two-column`, `.ds-display`, `.ds-section-heading`, `.ds-body`, `.ds-eyebrow`, `.ds-button-primary`, `.ds-button-secondary`, `.ds-button-text`, `.ds-card` variants, and `.ds-media` utilities.
- Use `tailwind.config.js` `ptrain.*` aliases only where Tailwind utilities are already the cleanest local fit.
