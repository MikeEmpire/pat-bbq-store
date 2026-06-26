# Agent Notes

## Assumptions

- The root Next.js app is production source of truth.
- `Website Redesign for PTrain's BBQ/` is an imported Figma/Vite reference project.
- This task is documentation only; no production app files should be edited yet.
- Business facts from the existing production app are more reliable than generated Figma copy unless the user says otherwise.

## Decisions Made

- Created a dedicated brain folder at `brain/ptrains-bbq-redesign/`.
- Treated the Figma export as visual/design reference, not as replaceable application code.
- Flagged the Figma UI component library as a donor/reference only because the production app does not currently use shadcn/Radix.
- Recommended section-by-section migration.

## Important Findings

- The live app is Pages Router Next.js 13 with CSS Modules, local Gilroy fonts, Framer Motion, Embla, and Next Image.
- The Figma export is Vite + Tailwind 4 + generated React code.
- The Figma export's main page is a single large `App.tsx`; it should be split or selectively rebuilt if used.
- The Figma export uses Fraunces/Outfit from Google Fonts; production currently uses local Gilroy.
- The current app's contact form only logs to console and does not submit inquiries.
- Current `constants/index.ts` has `Book Us` linking to `/#bookus`, while the homepage section id is `homebookus`.

## Open Questions

- What is the correct phone number: `951-772-3910` from the current app, or the number in the Figma export?
- Is `bookings@ptrainsbbq.com` a real monitored email address?
- Which menu image is current: `public/CateringMenu.jpg` / `.png` or `src/imports/_menu_2025PTrainsCateringMenu.png` from the export?
- Are Figma claims such as `500+ events`, `15+ years`, `Est. 2010`, testimonials, and service areas approved?
- Should production use the existing logo image, a text wordmark, or both?

## Future Agent Guidance

- Start with navigation or hero, not the full page.
- Before editing production, read the current target component and CSS Module.
- Prefer preserving current routing and local assets.
- Do not import the full Figma dependency set.
- Keep implementation changes small enough to validate section by section.
- Verify responsive layout with desktop and mobile screenshots once implementation begins.
