# Component Map

## Current App to Figma Reference

| Current app file/component | Figma/generated source | Migration direction |
| --- | --- | --- |
| `components/Layout.tsx` | Overall `App.tsx` page shell | Keep production layout wrapper. Update metadata/styles deliberately later. |
| `components/Header.tsx` | `App.tsx` fixed `header` nav block | Rebuild current header using Figma visual pattern. Do not copy Vite code directly. |
| `constants/index.ts` `links` | `App.tsx` `navLinks` | Merge intentionally. Current app has Home/Menu/Book Us/About/Contact/Buy; Figma has Menu/Services/About/Testimonials. |
| `components/Carousel/*` | `App.tsx` `heroSlides` image slider | Decide whether to keep Embla carousel or rebuild simpler hero image rotation. Prefer local assets. |
| `pages/index.tsx` about/history blocks | `App.tsx` about block | Use Figma styling only. Current family legacy copy is more authoritative. |
| `pages/index.tsx` menu block | `App.tsx` menu block and `menuCategories` | Use Figma menu preview concept, but verify all menu copy/items before publishing. |
| `pages/menu/index.tsx` | `App.tsx` "Download Full Menu" link | Keep a dedicated full-menu route or add clear view/download action. |
| `components/ContactForm.tsx` | `App.tsx` final CTA/contact links | Current form needs real submission behavior or should be deemphasized in favor of verified phone/email CTAs. |
| `components/Footer.tsx` | `App.tsx` footer block | Rebuild footer layout with verified contact/social details. |
| `styles/globals.css` and CSS Modules | `src/styles/theme.css`, `fonts.css` | Port selected tokens and typography decisions, not whole Tailwind 4 setup. |
| `public/logo.png` | Text brand wordmark in Figma nav/footer | Decide whether to preserve logo image, use text wordmark, or combine both. |
| `public/CateringMenu.jpg` / `.png` | `src/imports/_menu_2025PTrainsCateringMenu.png` | Determine which menu image is current. Do not overwrite without verification. |

## Figma UI Folder

The export's `src/app/components/ui/` folder contains generic shadcn/Radix-style components. The current app has no matching design system layer. Importing the folder wholesale is not recommended.

Potentially useful patterns:

- Button visual styles.
- Tabs pattern for menu categories.
- Sheet/drawer pattern for mobile nav if a component library is intentionally adopted.

Likely unnecessary:

- Calendar, chart, command, table, pagination, input OTP, resizable panels, and most generated UI components.

## Section Ownership Proposal

- `Header`: navigation and primary phone CTA.
- `HeroSection`: catering headline, image, stats if verified, primary CTAs.
- `MenuPreview`: category/menu preview and menu image action.
- `ServicesSection`: catering event types and trust signals.
- `AboutSection`: family story and legacy.
- `FinalCTA`: booking action.
- `Footer`: contact, social, service area, secondary navigation.

These components do not exist yet. Create them only during implementation if the section split keeps `pages/index.tsx` easier to maintain.
