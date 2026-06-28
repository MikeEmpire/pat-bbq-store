# PTrain's BBQ Redesign Overview

## Purpose

This brain folder captures the planning baseline for redesigning the PTrain's BBQ site using the imported Figma/generated code as a design reference and component donor. The current Next.js app remains the source of truth for routing, production behavior, real assets, contact details, and existing content until each section is intentionally migrated.

## Current State

The production app is a small Next.js 13 Pages Router site at the repository root. It uses React 18, TypeScript, CSS Modules, Tailwind utility imports, Framer Motion animations, Embla carousel, and Next Image. The main user-facing page is `pages/index.tsx`, wrapped by `components/Layout.tsx`, `components/Header.tsx`, and `components/Footer.tsx`.

Primary live app sections:

- Header navigation with desktop links and animated mobile menu.
- Home carousel using `components/Carousel` and images from `public/new-slide-*.jpg`.
- About and history sections using `public/pat.png`.
- Menu/catering section with `public/CateringMenu.jpg` and a lightbox.
- Book Us copy section.
- Contact form component.
- Footer with phone number and social icons.

## Figma Reference State

The imported design lives in `Website Redesign for PTrain's BBQ/`. It is a standalone Vite React app with one large generated `src/app/App.tsx`, Tailwind 4 CSS token files, shadcn/Radix-style UI component files, lucide icons, remote Unsplash images, and imported menu/screenshot assets under `src/imports/`.

The export is valuable for visual direction, section structure, tokens, and possible interaction patterns. It should not be copied wholesale into the app because its generated code is monolithic, has hardcoded business content, uses a different runtime/toolchain, and contains contact details that conflict with the current app.

## Implementation Approach

1. Migrate section by section instead of replacing the app.
2. Preserve the current app's production routes and contact/source-of-truth content unless explicitly verified.
3. Extract design intent from the Figma export: palette, typography direction, layout rhythm, catering CTA hierarchy, and section composition.
4. Rebuild sections in the current Next.js architecture using local CSS Modules/global CSS or a deliberate styling decision.
5. Validate each section on desktop and mobile before moving to the next.

## Current App Structure

- `pages/`: Pages Router entry points. `pages/index.tsx` is the homepage, `pages/menu/index.tsx` displays the menu image, and `pages/api/products/index.ts` plus `pages/api/hello.ts` are API routes.
- `components/`: Shared React components: layout, header, footer, contact form, product components, and carousel.
- `styles/`: CSS Modules and global styles.
- `public/`: Production images, logo, menu images, carousel slides, icons, and favicon.
- `fonts/`: Local Gilroy font files.
- `modules/`: Small React utilities such as media query and dimension hooks.
- `constants/`: Navigation links, breakpoints, and carousel image paths.

## Homepage Architecture

The homepage has a dedicated source-of-truth document:

**`brain/frontend/homepage.md`**

It defines the section order, each section's purpose and responsibilities, content strategy, SEO strategy, design principles, and agent rules. All homepage implementation work should start there.

## Guardrails

- Do not copy the Figma app into production as a replacement.
- Do not change production files until a section-specific implementation task starts.
- Treat Figma copy, phone numbers, email addresses, social links, stats, testimonials, and dates as unverified.
- Keep the site mobile-friendly and catering-focused.
