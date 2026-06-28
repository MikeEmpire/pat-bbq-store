# Homepage Architecture — PTrain's BBQ

> **This is the canonical source of truth for the PTrain's BBQ homepage.**
>
> Future frontend agents must treat this document as the homepage authority.
> Do not change section order or section responsibilities without updating this document first.
> If a task conflicts with this architecture, surface the conflict before implementation rather than silently deviating.

---

## Philosophy

The homepage is not a digital flyer.

It is a guided sales experience.

Every section answers one question and leads naturally into the next.

The visitor moves through:

```
Curiosity
   ↓
Trust
   ↓
Interest
   ↓
Proof
   ↓
Action
```

Each section below is assigned to exactly one phase of this journey.

---

## Conversion Goal

**Primary:** Secure a catering inquiry — phone call, email, or contact form submission.

**Secondary:** Build enough trust that a visitor who leaves today returns to book.

Every CTA on the page should support one of these two outcomes.

---

## Section Order

| # | Section | Journey Phase | Implementation Status |
|---|---------|---------------|-----------------------|
| 1 | Hero | Curiosity | Complete (June 27, 2026) |
| 2 | Trust Bar | Trust | Not started |
| 3 | About | Trust | Complete (June 27, 2026) |
| 4 | Catering Services | Interest | Not started |
| 5 | Menu Preview | Interest | In progress |
| 6 | Gallery | Proof | Not started |
| 7 | Testimonials | Proof | Not started |
| 8 | Booking CTA | Action | Audited |
| 9 | Footer | — | Audited |

---

## Section 1 — Hero

**Journey phase:** Curiosity

**Purpose:** Create an emotional first impression that immediately communicates what PTrain's does, who it serves, and that it is worth the visitor's time.

**Responsibilities:**

- Communicate the core value proposition (authentic Southern California BBQ catering)
- Establish premium quality before anything else on the page
- Present the primary CTA (call to book)
- Present the secondary CTA (view menu)
- Trigger desire, not just recognition

**Content notes:**

- Headline should be editorial and confident — not a tagline soup
- Body copy should speak directly to event planners, not to walk-in diners
- Stats row (events catered, years in business, rating) requires client verification before launch; the current placeholder values are flagged in code
- Eyebrow should be geographic and specific ("Southern California") without unverified claims
- The "Complimentary Tasting" HeroPromoCard establishes a low-risk first step for new visitors

**Imagery:**

- Hero imagery must use the highest-quality available photography
- Real customer/event photography belongs in the Gallery section, not the Hero
- The current split-panel layout uses `/public/slideshow/slide-{1-5}.jpeg` — these should be replaced with the strongest available event imagery when approved assets are provided

**CTAs:**

- Primary: `tel:+19517723910` (verified current-app number — do not change without client confirmation)
- Secondary: `/menu` route

**Implementation:**

- Component: `components/HeroSection/HeroSection.tsx`
- Styles: `components/HeroSection/HeroSection.module.css`
- Sub-component: `components/HeroPromoCard/HeroPromoCard.tsx`
- Layout: 52% ivory left text panel / 48% right image panel on desktop; full-bleed crossfade with dark overlay on mobile
- Animations: pure CSS keyframes with `prefers-reduced-motion` support; no Framer Motion

---

## Section 2 — Trust Bar

**Journey phase:** Trust

**Purpose:** Immediately reassure visitors before asking them to scroll further. A visitor who trusts PTrain's at section 2 is far more likely to reach the Booking CTA.

**Responsibilities:**

- Establish credibility quickly through social proof signals
- Reduce doubt before the visitor invests time in the rest of the page

**Potential content (all values require client verification before publishing):**

- Years serving Southern California
- Number of events catered
- Guest capacity range
- Complimentary tasting offer
- Notable client categories (corporate, weddings, festivals)
- Awards or recognitions
- Star rating / review platform

**Design notes:**

- This section should be compact — a single horizontal band on desktop, a tight two-column grid on mobile
- Use the Ticker component or a static Trust Bar; do not duplicate the Ticker's content here
- Gold accent color for stat numbers; muted text for labels

**Implementation:**

- Component: does not exist yet — create `components/TrustBar/TrustBar.tsx` when this section is built
- Consider whether the existing `components/Ticker/Ticker.tsx` satisfies this section or runs separately below the Hero

---

## Section 3 — About

**Journey phase:** Trust

**Purpose:** Introduce PTrain's BBQ as a family business with a real story. Visitors who understand who they are booking trust the business more and convert at higher rates.

**Responsibilities:**

- Tell the story of the BBQ train origin
- Communicate Southern hospitality and craftsmanship
- Reinforce family ownership and authenticity
- Avoid long historical timelines — tell a concise, emotionally resonant story

**Content notes:**

- The current production copy in `components/About/About.tsx` is more authoritative than the Figma placeholder story
- The Figma about block copy should not be used directly — it needs editing or replacement with real client-approved copy
- `public/pat.png` is the current visual asset; client should approve before removing or replacing
- Focus on hospitality, quality, and the "why" behind the business — not a list of milestones

**Implementation:**

- Existing component: `components/About/About.tsx`
- The component currently has pre-existing `react/no-unescaped-entities` lint errors that must be fixed before or during migration
- Styles: `components/About/About.module.scss`

---

## Section 4 — Catering Services

**Journey phase:** Interest

**Purpose:** Help visitors immediately recognize their specific use case. A corporate event planner and a bride have different needs — this section lets both self-select.

**Responsibilities:**

- Present the range of event types PTrain's serves
- Help visitors mentally connect their event to PTrain's capability
- Each service card should surface its own CTA (get a quote for this event type)

**Service categories (confirm with client before publishing):**

- Corporate Catering
- Wedding Catering
- Private Parties
- Festivals and Public Events
- Employee Appreciation
- Holiday Parties

**SEO note:**

Each service listed here is a long-term candidate for its own dedicated landing page. The homepage section functions as a directory that links out to those future pages. Build the service cards with this routing architecture in mind from the start — use anchor or route links, not static text.

**Implementation:**

- Component: does not exist yet — create `components/ServicesSection/ServicesSection.tsx` when this section is built
- Use `.ds-service-card` and `.ds-card-grid` global classes from `styles/globals.css`

---

## Section 5 — Menu Preview

**Journey phase:** Interest

**Purpose:** Provide enough confidence about the menu to move a visitor toward booking without overwhelming them with a full catering packet.

**Responsibilities:**

- Show featured meats and featured sides
- Show available meal packages at a high level
- Provide a clear path to the full menu without embedding the entire catering menu on the homepage
- Encourage the visitor to contact PTrain's for a custom quote

**Content notes:**

- Do not place the full catering menu image directly on the homepage
- Feature three to five signature items only
- Figma menu categories and item names are placeholders — do not use without client verification
- The current menu image is `public/menu/2026PTrainsCateringMenu.png` (updated June 27, 2026)

**CTAs:**

- "View Full Menu" → `/menu` route
- "Request a Quote" → contact action (phone or form)

**Implementation:**

- Existing component: `components/Menu/Menu.tsx` (updated June 27, 2026 to display new menu image)
- Full section redesign is still pending — current implementation is the lightbox image only
- Styles: `components/Menu/Menu.module.css`

---

## Section 6 — Gallery

**Journey phase:** Proof

**Purpose:** Show that PTrain's actually does what it claims. Authenticity here is more valuable than studio-quality photography.

**Responsibilities:**

- Demonstrate real event catering setups
- Show the actual BBQ train
- Show real food, real staff, real crowds
- Make the visitor feel like they can picture their own event

**Content notes:**

- Real customer event photography is preferred over staged or stock imagery
- Photography does not need to be professional — authentic candids outperform polished fakes in this section
- The Figma export's Unsplash images are not appropriate here; use only approved client-owned photography
- Current available images: `public/slideshow/slide-{1-5}.jpeg` and any images in `public/images/`

**Implementation:**

- Component: does not exist yet — create `components/Gallery/Gallery.tsx` when this section is built
- Consider a masonry grid or a curated three-column layout for desktop
- Mobile should be a single-column scroll or a simple swipe carousel

---

## Section 7 — Testimonials

**Journey phase:** Proof

**Purpose:** Reinforce trust through the words of real customers. This section closes the "is this real?" doubt before the final booking ask.

**Responsibilities:**

- Present testimonials from corporate clients, wedding clients, and event planners
- Pair testimonials with event imagery where possible
- Avoid generic praise — specific, event-type-anchored testimonials are more persuasive

**Content notes:**

- All testimonials in the Figma export are generated placeholders and must not be published
- Collect real testimonials from client before implementing this section
- Consider linking testimonials to Google Reviews or Yelp once social URLs are verified

**Implementation:**

- Component: does not exist yet — create `components/Testimonials/Testimonials.tsx` when this section is built

---

## Section 8 — Booking CTA

**Journey phase:** Action

**Purpose:** Present the clearest possible conversion opportunity. This is the strongest CTA outside of the Hero.

**Responsibilities:**

- Give visitors a direct and low-friction path to booking
- Offer multiple contact modalities (phone, email, form) to accommodate different visitor preferences
- Reinforce the value proposition one final time before the footer

**CTA hierarchy:**

1. Phone call (most direct, highest conversion for local service businesses)
2. Email / "Get a Quote" form submission
3. "View Menu" as a secondary action for undecided visitors

**Content notes:**

- Phone number: `951-772-3910` (verified — do not change without client confirmation)
- Email address `bookings@ptrainsbbq.com` appears in the Figma export only — verify with client before using
- The existing `components/ContactForm/ContactForm.tsx` posts to `contactFormURL` — delivery and monitoring must be verified before presenting this form as the primary booking path

**Implementation:**

- Component: does not exist yet — create `components/BookingCTA/BookingCTA.tsx` when this section is built
- The existing `components/BookUs/BookUs.tsx` may be refactored into this component
- Styles: use `.ds-section--primary` (burgundy) or `.ds-section--alt` (warm ivory) for visual contrast from surrounding sections

---

## Section 9 — Footer

**Journey phase:** — (utility)

**Purpose:** Provide orientation, contact access, and trust signals for visitors who scroll past the Booking CTA or navigate directly to the footer.

**Required content:**

- Business name and tagline
- Phone number (verified: `951-772-3910`)
- Email address (verify before publishing)
- Service area (verify with client before publishing)
- Navigation links (consistent with `constants/index.ts`)
- Social links (verify URLs before publishing — current Figma placeholders are unverified)
- Copyright line
- Brief business descriptor

**Implementation:**

- Existing component: `components/Footer/Footer.tsx`
- Styles: `components/Footer/Footer.module.css`
- Full redesign pending; current implementation is the pre-redesign footer

---

## Content Strategy

Different sections serve fundamentally different purposes and should not share the same tone or imagery.

| Section | Primary content type | Tone |
|---------|---------------------|------|
| Hero | Aspirational, editorial | Confident, premium |
| Trust Bar | Quantified social proof | Direct, factual |
| About | Narrative, personal | Warm, human |
| Services | Practical, use-case | Helpful, clear |
| Menu Preview | Appetizing, practical | Inviting, enticing |
| Gallery | Authentic photography | Real, unpolished |
| Testimonials | Real customer voice | Honest, specific |
| Booking CTA | Action-oriented | Urgent, inviting |
| Footer | Navigational utility | Neutral, accessible |

---

## SEO Strategy

The homepage should naturally target the following phrases. These must appear organically in copy — not stuffed into headings.

**Primary targets:**

- Southern California BBQ Catering
- BBQ Catering Los Angeles
- BBQ Catering Orange County / Inland Empire

**Secondary targets:**

- Corporate BBQ Catering
- Wedding BBQ Catering
- Private Event Catering
- Festival Catering
- Real Wood Smoked BBQ

**Long-term architecture:**

Each major catering service type (Corporate, Wedding, Festival, etc.) should receive its own dedicated SEO landing page. The homepage Catering Services section functions as the index. Build all service cards with route links rather than static copy so the architecture is ready when those pages are created.

---

## Design Principles

The homepage should feel **premium, modern, warm, intentional, and confident.**

**Do:**

- Use generous section padding
- Lead with food photography and event photography
- Apply the established `--ptrain-*` token palette
- Use the `.ds-*` global class system from `styles/globals.css`
- Maintain strong CTA visibility at every scroll depth

**Avoid:**

- Flyer-like layouts with oversized promotional graphics
- Clutter from too many competing CTAs in a single viewport
- Generic stock imagery as the primary visual subject
- Overly rustic or "old western" styling
- Unverified business claims (stats, testimonials, social links, email)

---

## Agent Rules

1. **This document is the homepage source of truth.** Implementation agents should consult it before touching any homepage section.

2. **Do not change section order** without updating the Section Order table in this document first.

3. **Do not change section responsibilities** without a documented reason in this file.

4. **If a task conflicts with this architecture**, surface the conflict explicitly before implementing. Do not silently deviate.

5. **Unverified content must stay out of production.** The phone number `951-772-3910` is verified. All other contact details, stats, testimonials, social links, and service area claims require client confirmation.

6. **Each section should be implemented independently** — validate one section before starting the next.

7. **Use existing design system primitives first.** Reach for `.ds-*` global classes and `--ptrain-*` CSS variables before adding new one-off CSS.

8. **Read the current component before editing.** Never suggest changes to code you have not read in this session.

---

## Related Documents

| Document | Purpose |
|----------|---------|
| [brain/ptrains-bbq-redesign/overview.md](../ptrains-bbq-redesign/overview.md) | Project origin, current app state, Figma reference |
| [brain/ptrains-bbq-redesign/design-direction.md](../ptrains-bbq-redesign/design-direction.md) | Color palette, typography, spacing, CTA design |
| [brain/ptrains-bbq-redesign/component-map.md](../ptrains-bbq-redesign/component-map.md) | Design system classes and current-to-Figma component mapping |
| [brain/ptrains-bbq-redesign/implementation-plan.md](../ptrains-bbq-redesign/implementation-plan.md) | Section-by-section implementation tasks and validation steps |
| [brain/ptrains-bbq-redesign/section-status.md](../ptrains-bbq-redesign/section-status.md) | Live implementation status table |
| [brain/ptrains-bbq-redesign/agent-notes.md](../ptrains-bbq-redesign/agent-notes.md) | Decisions made, open questions, implementation findings |
| [brain/ptrains-bbq-redesign/figma-export-audit.md](../ptrains-bbq-redesign/figma-export-audit.md) | What is reusable vs. what must not be copied from the Figma export |
