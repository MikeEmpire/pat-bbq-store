# Figma Export Audit

## Location

Imported project: `Website Redesign for PTrain's BBQ/`

The export README links to a Figma design file and describes the bundle as generated code. It runs as a separate Vite app, not as part of the production Next.js app.

## Major Files

- `src/app/App.tsx`: Main generated single-page React implementation.
- `src/main.tsx`: Vite entry point.
- `src/styles/theme.css`: CSS variables for color, radius, and Tailwind 4 theme mapping.
- `src/styles/fonts.css`: Google font import for Fraunces and Outfit.
- `src/styles/globals.css`, `tailwind.css`, `index.css`: Global style composition.
- `src/app/components/ui/`: Large shadcn/Radix-style generated component set.
- `src/app/components/figma/ImageWithFallback.tsx`: Figma helper component.
- `src/imports/`: Imported screenshots, menu image, and BBQ imagery.
- `ATTRIBUTIONS.md`: Notes shadcn/ui MIT components and Unsplash photos.

## Major Sections in `App.tsx`

- Fixed navigation with mobile menu, brand text, nav buttons, and call CTA.
- Full-height hero with responsive image slider, editorial headline, stats, and call/menu actions.
- Burgundy ticker strip with catering/event keywords.
- Menu section with tabbed categories, photo panel, menu item list, and quote CTA.
- Services section for weddings, corporate events, private parties, and festivals.
- About/story section with dark burgundy background, CTA buttons, image, and gold badge.
- Testimonials section with hardcoded reviews.
- Final CTA section.
- Footer with navigation, social links, service area, phone, email, and large background wordmark.

## Components Present

The export includes many generic UI components that are not actively used by the generated page. Examples include accordion, alert, avatar, badge, button, carousel, dialog, drawer, dropdown menu, form, input, label, navigation menu, popover, select, sheet, tabs, textarea, tooltip, and more.

These can be treated as reference only. The production app does not currently use shadcn/Radix as a design system, so importing the whole UI folder would add unnecessary dependencies and style surface.

## Assets

Local export assets:

- `src/imports/_menu_2025PTrainsCateringMenu.png`
- `src/imports/IMG_5300.PNG`
- Several screenshot/pasted image files dated June 2026.

Remote assets:

- Multiple Unsplash image URLs embedded directly in `App.tsx` for hero, menu, services, and about sections.

Production already has:

- `public/logo.png`
- `public/CateringMenu.jpg`
- `public/CateringMenu.png`
- `public/new-slide-*.jpg`
- `public/pat.png`
- Social icons and other supporting assets.

## Generated Code Quality

Strengths:

- Strong visual direction and clear section hierarchy.
- Useful token palette for ivory/gold/burgundy brand direction.
- Responsive intent is present for nav, hero, menu, and CTA areas.
- Good CTA density for catering conversion.

Concerns:

- `App.tsx` is monolithic and mixes data, layout, styling, animations, and behavior.
- Heavy use of inline styles and generated Tailwind utility strings.
- Uses Vite/Tailwind 4 while production is Next.js 13 with Tailwind 3 and CSS Modules.
- Hardcoded business content, testimonials, stats, years, social links, email, phone number, and service area.
- Uses remote Unsplash images that may not match the actual business or licensing/performance needs.
- Includes a broad dependency set that the production app does not need.

## Dependencies

Export dependencies include React 18.3 peer deps, Vite 6, Tailwind 4, lucide-react, motion, Radix packages, MUI packages, embla-carousel-react 8, and many shadcn-related utility libraries.

Production dependencies include Next 13, React 18.2, Tailwind 3, framer-motion, embla-carousel-react 7, react-intersection-observer, react-pdf, and yet-another-react-lightbox.

## Hardcoded Content to Verify

- Phone number in export: `+19617713118` and displayed `(961) 771-3118`.
- Phone number in current app footer: `951-772-3910`.
- Email in export: `bookings@ptrainsbbq.com`.
- Social links in export: Instagram, TikTok, Facebook, Yelp placeholders.
- Claims: `Est. 2010`, `500+ Events`, `15+ Years`, testimonials, serving areas.
- Menu categories/items and package names.
- About story in export conflicts with current family legacy copy and should be rewritten from the current app or verified source material.

## Reusable

- Palette and theme tokens.
- Editorial hero structure and CTA hierarchy.
- Responsive fixed nav pattern.
- Menu preview interaction concept.
- Services grid concept.
- Final CTA and footer composition.
- Icon choices from lucide-react if added intentionally.

## Should Not Be Copied Directly

- Full `App.tsx` as a replacement.
- Entire `src/app/components/ui` folder.
- Generated hardcoded testimonials.
- Unverified phone/email/social links.
- Remote Unsplash URLs without approval.
- Vite/Tailwind 4 config into the Next.js app.
- Inline style-heavy implementation without adapting to current architecture.
