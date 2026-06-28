# Implementation Plan

## 0. Design System Foundation

Status: Complete on June 26, 2026.

Source files:

- Current: `styles/globals.css`, `tailwind.config.js`, `components/Header/Header.module.css`
- Figma reference: `Website Redesign for PTrain's BBQ/src/styles/theme.css`, `Website Redesign for PTrain's BBQ/src/styles/fonts.css`, and reusable patterns in `Website Redesign for PTrain's BBQ/src/app/App.tsx`

Target files:

- `styles/globals.css`
- `tailwind.config.js`
- `components/Header/Header.module.css`

Completed changes:

- Added PTrain-specific CSS custom properties for ivory/warm backgrounds, burgundy primary, gold accent, dark/muted text, card surfaces, borders, CTA states, typography, spacing, shape, and media defaults.
- Added global reusable `.ds-*` classes for section wrappers, containers, content widths, two-column layouts, responsive stacks, typography, CTA buttons, cards, card grids, and media/image behavior.
- Extended Tailwind 3 config with matching token aliases and fixed content globs to include nested `pages/**/*` and `components/**/*` files.
- Updated the already-redesigned header CSS to consume shared variables instead of repeating palette literals.
- Kept local Gilroy as the production font foundation; did not import Fraunces/Outfit or any new dependencies.

Validation:

- `npm run lint` remains blocked by existing `react/no-unescaped-entities` errors in `components/About/About.tsx`.
- `npx next lint --file components/Header/Header.tsx --file constants/index.ts` passed.
- `npx tailwindcss -i styles/globals.css -o /private/tmp/ptrain-globals.css --content './pages/**/*.{js,ts,jsx,tsx,mdx}' --content './components/**/*.{js,ts,jsx,tsx,mdx}'` passed.
- `npm run build` remains blocked because the imported Figma Vite app is included in TypeScript and references uninstalled `lucide-react`.
- Dev server route smoke checks returned `200 OK` for `/`, `/menu`, `/contact`, and `/about`.
- Headless Chrome screenshots after the intro animation confirmed the existing homepage renders on desktop and mobile.

Future section agents should use these tokens/classes before adding one-off CSS. This task intentionally did not migrate hero, menu, about, CTA, footer, or any other full page section.

## 1. Navigation

Status: Complete as Section 1 on June 26, 2026.

Source files:

- Current: `components/Header/Header.tsx`, `components/Header/Header.module.css`, `constants/index.ts`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` navigation block

Target files:

- `components/Header/Header.tsx`
- `components/Header/Header.module.css`
- `constants/index.ts`

Expected changes:

- Redesign header with stronger PTrain's BBQ brand treatment, clearer desktop navigation, and mobile menu. Completed.
- Add a prominent catering/contact CTA after contact details are verified. Completed using current app phone `951-772-3910` and existing `/bookus` route.
- Fix current nav mismatch where `Book Us` links to `/#bookus` but the section id is `homebookus`. Not applicable in current code; route was `/bookus`, label updated to `Book Catering`.
- Preserve Next.js routing and avoid importing the Figma Vite structure.

Risk level: Medium

Validation steps:

- Verify desktop and mobile menus. Completed with headless Chrome/CDP at 1440x900 and 390x844.
- Confirm all anchor links land on existing section ids. Completed as route links instead of section anchors; `/menu`, `/bookus`, `/about`, and `/contact` smoke checked with `200 OK`.
- Confirm keyboard/tap accessibility for menu toggle. Completed semantically with a real button, `aria-controls`, `aria-expanded`, and visible/tappable mobile state.
- Confirm phone CTA uses verified number. Completed using current app number `951-772-3910`; Figma number remains unverified.

Implementation notes:

- Removed dead `Shop (coming soon)` nav item from the shared links array.
- Kept existing `public/logo.png` and added a text wordmark instead of introducing new fonts or icon dependencies.
- Used CSS Modules only; no new dependencies.
- Full `npm run lint` and `npm run build` are currently blocked by unrelated existing lint/type scope issues documented in `agent-notes.md`.

## 2. Hero

Source files:

- Current: `pages/index.tsx`, `components/Carousel/*`, `styles/Home.module.css`, `styles/Embla.module.css`, `public/new-slide-*.jpg`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` hero block and `heroSlides`

Target files:

- `pages/index.tsx`
- Possible new section component under `components/`
- Relevant CSS Module/global styles
- `public/` assets if approved

Expected changes:

- Replace or rework the current carousel-led opening with a catering-focused editorial hero.
- Use real/local imagery where possible instead of remote Unsplash URLs.
- Include strong CTAs: call, view menu, request quote/contact.
- Keep responsive hero text from overlapping images or controls.

Risk level: High

Validation steps:

- Check first viewport at mobile, tablet, desktop, and wide desktop.
- Confirm image loading/performance with Next Image if used.
- Verify CTA links and section anchors.
- Confirm no text collisions at narrow widths.

## 3. Menu / Catering Preview

Source files:

- Current: `pages/index.tsx`, `pages/menu/index.tsx`, `public/CateringMenu.jpg`, `public/CateringMenu.png`, `styles/Menu.module.css`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` menu block, `menuCategories`, imported `_menu_2025PTrainsCateringMenu.png`

Target files:

- `pages/index.tsx`
- `pages/menu/index.tsx`
- Possible `components/MenuPreview.tsx`
- Relevant CSS Module/global styles

Expected changes:

- Create a polished menu/catering preview that keeps the current real menu image accessible.
- Treat Figma menu categories/items as placeholder until confirmed.
- Preserve lightbox or full-menu viewing behavior if useful.
- Add a quote CTA tied to verified contact details.

Risk level: Medium

Validation steps:

- Confirm current menu image opens/readable on mobile.
- Check tabs or preview controls if introduced.
- Verify download/view menu behavior.
- Confirm no unverified menu items are presented as real.

## 4. About / Trust Section

Source files:

- Current: `pages/index.tsx`, `public/pat.png`, `styles/Home.module.css`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` about and services blocks

Target files:

- `pages/index.tsx`
- Possible `components/AboutSection.tsx` or `components/ServicesSection.tsx`
- Relevant CSS Module/global styles

Expected changes:

- Preserve and refine the current family legacy copy instead of replacing it with the Figma placeholder story.
- Add trust/catering context such as event types once verified.
- Use warm brand palette and photo treatment from Figma.

Risk level: Medium

Validation steps:

- Confirm copy accuracy with business owner/source.
- Verify image cropping for `pat.png`.
- Check readability on burgundy/dark backgrounds.
- Confirm mobile order supports story comprehension.

## 5. CTA Section

Source files:

- Current: `pages/index.tsx`, `components/ContactForm.tsx`, `styles/ContactForm.module.css`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` final CTA block

Target files:

- `pages/index.tsx`
- `components/ContactForm.tsx` if form is retained or improved
- Relevant CSS Module/global styles

Expected changes:

- Add a strong final catering booking section before footer.
- Clarify primary action: phone, email, or contact form.
- Decide whether the current form should remain, be redesigned, or be replaced with mail/phone CTAs.
- Current form posts to the external `contactFormURL`; production delivery/monitoring should still be verified before presenting it as the primary booking path.

Risk level: High

Validation steps:

- Verify contact actions actually work.
- Confirm form submission behavior if form remains.
- Confirm phone/email values.
- Check mobile CTA button sizing and spacing.

## 6. Footer

Source files:

- Current: `components/Footer.tsx`, `styles/Footer.module.css`, `public/*-icon.png`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` footer block

Target files:

- `components/Footer.tsx`
- `styles/Footer.module.css`
- `constants/index.ts` if footer nav/social data is centralized

Expected changes:

- Expand footer into brand/contact/navigation/social/service area layout.
- Turn social icons/labels into verified links.
- Preserve verified phone number.
- Avoid unverified claims and placeholder Yelp URL.

Risk level: Medium

Validation steps:

- Verify all links.
- Confirm social anchors open correct destinations.
- Check contrast on burgundy background.
- Confirm footer text wraps cleanly on mobile.
