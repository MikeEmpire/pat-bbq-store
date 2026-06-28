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
| Navigation | Complete | Updated June 27, 2026 for the one-page strategy. Desktop/mobile/footer links use homepage anchors, Book Catering targets `/#booking`, legacy routes redirect without deleting source pages, sticky-header offsets are applied, and the mobile menu supports focus entry and Escape-to-close. |
| Hero | Complete | Implemented June 27, 2026. `components/HeroSection/` + `components/HeroPromoCard/`. Split-panel layout, crossfade slider, CSS keyframe entrance animations, HeroPromoCard ("Complimentary / TASTING"). Stats row (500+/15+/5★) flagged for client verification. |
| Ticker | Complete | Implemented June 27, 2026. `components/Ticker/Ticker.tsx`. Scrolling catering keywords band below hero. |
| Trust Bar | Complete | Implemented June 27, 2026. `components/TrustBar/TrustBar.tsx`. Four qualitative signals (Wood-Smoked On-Site, Family Owned, Southern California, Complimentary Tasting). Desktop 4-column row with dividers; mobile 2×2 grid. No unverified stats. |
| About | Complete | Implemented June 27, 2026. `components/AboutSection/AboutSection.tsx` + `AboutSection.module.css`. Two-column layout, scroll-triggered CSS fade-up animations, existing copy preserved, pat.png image frame, verified phone CTA. |
| Catering Services | Complete | Implemented June 27, 2026. `components/ServicesSection/ServicesSection.tsx` + `ServicesSection.module.css`. 6 image-topped service cards in 3-column grid. Proof imagery (slideshow slides) integrated per card. Scroll-triggered entrance animations. All service routes built for future `/services/{id}` landing pages. Service list requires client confirmation before launch. |
| Menu Preview | Complete | `components/MenuSection/MenuSection.tsx` + `MenuSection.module.css`. Tab-navigation layout (Smoked Meats / Signature Sides / Packages), split photo+list body panel, scroll-triggered entrance animations. All menu content flagged for client verification before launch. |
| Gallery | Not started | Requires client-approved photography. Do not use Unsplash URLs from Figma export. |
| Testimonials | Needs review | `components/TestimonialsSection/` is rendered at `#testimonials`, but all current testimonial entries are explicit placeholders. Replace with verified client reviews before launch. |
| Booking CTA | Complete | Implemented June 27, 2026. `components/BookingCTA/BookingCTA.tsx` + `BookingCTA.module.css`. Burgundy `.ds-section--primary` split layout. 7-field booking form submits to `contactFormURL`. Loading/success/error states, honeypot bot protection, accessible labels, scroll-triggered entrance animation. `id="booking"` anchor rendered. |
| Footer | Complete | Implemented June 27, 2026. `components/Footer/Footer.tsx` fully redesigned: dark deep-brown bg, 3-column grid (Brand / Quick Links / Contact), verified social links (Yelp, Instagram, Facebook), phone CTA, Southern California service area, back-to-top button, copyright. |
| Figma generated UI components | Audited | Reference only; not ready for wholesale migration. |

## Ready Candidates

- Hero is the next likely high-impact section, but should use local production imagery and avoid unverified Figma stats/claims.
- Palette/token migration foundation is complete; future sections should use the `.ds-*` classes and `--ptrain-*` variables instead of adding new one-off styling.

## Needs Review Before Migration

- Phone number conflict remains unresolved globally. Section 1 navigation intentionally kept the current app phone number `951-772-3910` as source of truth and did not use the Figma export number.
- Email address `bookings@ptrainsbbq.com` appears only in the Figma export.
- Testimonials and stats are unverified.
- Social URLs (Yelp, Instagram, Facebook) are verified — sourced from the previous production footer. Twitter icon exists in `/public/` but was not in the old footer and is excluded.
- Figma about copy should be replaced or edited to preserve the real legacy story.
