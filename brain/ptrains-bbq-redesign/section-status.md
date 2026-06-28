# Section Status

> **Homepage architecture source of truth:** [`brain/frontend/homepage.md`](../frontend/homepage.md)
> Section order, responsibilities, content strategy, and agent rules live there.
> Update that document before changing section scope or order here.

Status values:

- Not started
- Audited
- Ready
- In progress
- Complete
- Needs review

| Section | Status | Notes |
| --- | --- | --- |
| Project structure audit | Complete | Live app and Figma export inspected. |
| Design direction | Complete | Ivory/gold/burgundy, premium/playful/warm/family/catering direction captured in `design-direction.md`. |
| Design system foundation | Complete | Implemented June 26, 2026. Added `--ptrain-*` tokens, `.ds-*` global primitives, Tailwind token aliases, and connected the header CSS to shared variables. |
| Navigation | Complete | Implemented June 26, 2026. Header: ivory/gold/burgundy styling, logo + text wordmark, verified phone CTA, `/bookus` catering CTA, accessible mobile toggle. |
| Hero | Complete | Implemented June 27, 2026. `components/HeroSection/` + `components/HeroPromoCard/`. Split-panel layout, crossfade slider, CSS keyframe entrance animations, HeroPromoCard ("Complimentary / TASTING"). Stats row (500+/15+/5★) flagged for client verification. |
| Ticker | Complete | Implemented June 27, 2026. `components/Ticker/Ticker.tsx`. Scrolling catering keywords band below hero. |
| Trust Bar | Not started | Decide whether Ticker satisfies this or a separate static trust bar is needed. See `brain/frontend/homepage.md` §2. |
| About | Complete | Implemented June 27, 2026. `components/AboutSection/AboutSection.tsx` + `AboutSection.module.css`. Two-column layout, scroll-triggered CSS fade-up animations, existing copy preserved, pat.png image frame, verified phone CTA. |
| Catering Services | Not started | New component required. Each service card should be built with future landing page routes in mind. |
| Menu preview | In progress | `public/menu/2026PTrainsCateringMenu.png` updated. `Menu.tsx` shows lightbox image. Full homepage section redesign pending. |
| Gallery | Not started | Requires client-approved photography. Do not use Unsplash URLs from Figma export. |
| Testimonials | Not started | All Figma testimonials are placeholders. Requires real client-collected reviews before implementation. |
| Booking CTA | Audited | `components/BookUs/BookUs.tsx` exists. Needs redesign as strong final conversion section. `contactFormURL` delivery must be verified before promoting the form. |
| Footer | Audited | `components/Footer/Footer.tsx` exists. Needs social link verification and full redesign layout. |
| Figma generated UI components | Audited | Reference only; not ready for wholesale migration. |

## Ready Candidates

- Hero is the next likely high-impact section, but should use local production imagery and avoid unverified Figma stats/claims.
- Palette/token migration foundation is complete; future sections should use the `.ds-*` classes and `--ptrain-*` variables instead of adding new one-off styling.

## Needs Review Before Migration

- Phone number conflict remains unresolved globally. Section 1 navigation intentionally kept the current app phone number `951-772-3910` as source of truth and did not use the Figma export number.
- Email address `bookings@ptrainsbbq.com` appears only in the Figma export.
- Testimonials and stats are unverified.
- Social URLs are unverified/placeholders.
- Figma about copy should be replaced or edited to preserve the real legacy story.
