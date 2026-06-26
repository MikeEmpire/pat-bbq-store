# Implementation Plan

## 1. Navigation

Source files:

- Current: `components/Header.tsx`, `styles/Header.module.css`, `constants/index.ts`
- Figma reference: `Website Redesign for PTrain's BBQ/src/app/App.tsx` navigation block

Target files:

- `components/Header.tsx`
- `styles/Header.module.css`
- `constants/index.ts`

Expected changes:

- Redesign header with stronger PTrain's BBQ brand treatment, clearer desktop navigation, and mobile menu.
- Add a prominent catering/contact CTA after contact details are verified.
- Fix current nav mismatch where `Book Us` links to `/#bookus` but the section id is `homebookus`.
- Preserve Next.js routing and avoid importing the Figma Vite structure.

Risk level: Medium

Validation steps:

- Verify desktop and mobile menus.
- Confirm all anchor links land on existing section ids.
- Confirm keyboard/tap accessibility for menu toggle.
- Confirm phone CTA uses verified number.

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
- Current form only logs data to console, so production behavior must be addressed before presenting it as a real booking form.

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
