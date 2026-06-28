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
| 2 | Trust Bar | Trust | Complete (June 27, 2026) |
| 3 | About | Trust | Complete (June 27, 2026) |
| 4 | Catering Services | Interest | Complete (June 27, 2026) |
| 5 | Menu Preview | Interest | In progress |
| 6 | Gallery | Proof | Not started |
| 7 | Testimonials | Proof | Complete (June 28, 2026) |
| 8 | Booking CTA | Action | Complete (June 27, 2026) |
| 9 | Footer | — | Complete (June 27, 2026) |

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
- Secondary: `/#menu` homepage anchor

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

- Component: `components/TrustBar/TrustBar.tsx`
- Canonical anchor: `/#trust`
- The Ticker remains a separate visual transition and is not a navigation destination

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

Each service listed here is a long-term candidate for its own dedicated landing page. Until those pages exist, navigation should point to the homepage Services section rather than speculative routes that return 404s.

**Implementation:**

- Component: `components/ServicesSection/ServicesSection.tsx`
- Canonical anchor: `/#services`
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

- Primary site navigation → `/#menu`
- "View Full Menu" → the current verified menu asset until `/bbq-menu` exists
- "Request a Quote" → contact action (phone or form)

**Implementation:**

- Component: `components/MenuSection/MenuSection.tsx`
- Canonical anchor: `/#menu`
- Full-menu asset: `/menu/new-menu.PNG`
- Styles: `components/MenuSection/MenuSection.module.css`

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

- Reviews are the hardcoded Yelp entries in `constants/yelpreviews.ts`; do not replace them with Figma content or scraped data
- Preserve reviewer names, review text, ratings, dates, locations, and supplied profile URLs
- The Yelp business URL remains available in the verified production footer

**Implementation:**

- Component: `components/TestimonialsSection/TestimonialsSection.tsx`
- Canonical anchor: `/#testimonials`
- The component renders the supplied Yelp reviews as consistent cards with safe profile-image fallbacks and expandable long-form copy

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

- Component: `components/BookingCTA/BookingCTA.tsx`
- Canonical anchor: `/#booking`
- Styles: `components/BookingCTA/BookingCTA.module.css`
- Book Catering navigation and the legacy `/bookus` redirect target this section
- Form delivery and monitoring remain a launch-verification requirement

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
- Canonical anchor: `/#contact`
- Styles: `components/Footer/Footer.module.css`
- The footer renders shared homepage navigation plus the Book Catering anchor

---

## Navigation and Routing Strategy

The homepage is the canonical marketing experience. Shared navigation uses root-relative anchors so destinations work from the homepage and any preserved legacy route.

### Canonical homepage section IDs

| Destination | ID | Current state |
|---|---|---|
| Home / Hero | `hero` | Rendered |
| Trust Bar | `trust` | Rendered; not shown in primary navigation |
| About | `about` | Rendered |
| Services | `services` | Rendered |
| Menu | `menu` | Rendered |
| Testimonials | `testimonials` | Rendered with supplied Yelp review content |
| Contact / Footer | `contact` | Rendered |
| Booking | `booking` | Rendered |

Primary navigation order is Home, About, Services, Menu, Testimonials, and Contact. Book Catering remains a visually distinct CTA and points to `/#booking`.

Anchor targets use the fixed-header offset in `styles/globals.css`. Smooth scrolling is disabled when the visitor prefers reduced motion.

The Header uses a lightweight scrollspy to correlate navigation state with the visible section. Home remains active through the hero/trust introduction; About, Services, Menu, and Testimonials activate their matching links; Booking activates the Book Catering CTA; and the footer activates Contact. Scrollspy does not modify the URL or browser history.

### Current route decisions

| Route | Decision | Rationale |
|---|---|---|
| `/` | Keep as canonical experience | Contains the full marketing journey and all current navigation destinations. |
| `/about` | Temporary redirect to `/#about`; preserve source file | Duplicates the current About section and may be retired after the one-page strategy stabilizes. |
| `/bookus` | Temporary redirect to `/#booking`; preserve source file | The homepage now contains the canonical booking experience. |
| `/contact` | Temporary redirect to `/#contact`; preserve source file | The form delivery is unverified; retain the route for future dedicated contact-page SEO. |
| `/menu` | No active page route | The former page file is already removed in the current worktree. Site navigation uses `/#menu`; the full-menu action opens the static menu asset. |

The preserved `/about`, `/bookus`, and `/contact` page files should not be deleted during navigation work. Reassess them when dedicated landing pages are implemented and redirects can become permanent.

### Future SEO expansion

Create these pages only when each has unique, verified content and a deliberate landing-page strategy:

- `/corporate-catering`
- `/wedding-catering`
- `/private-party-catering`
- `/festival-catering`
- `/bbq-menu`
- `/contact`

Until then, keep homepage anchors canonical and do not expose unimplemented routes in navigation or service cards.

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

Each major catering service type should eventually receive a dedicated SEO landing page using the paths documented in Navigation and Routing Strategy. The homepage Catering Services section is the current index. Add route links only after the corresponding landing pages exist.

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
- Unverified business claims (stats, Figma testimonials, social links, email)

---

## Agent Rules

1. **This document is the homepage source of truth.** Implementation agents should consult it before touching any homepage section.

2. **Do not change section order** without updating the Section Order table in this document first.

3. **Do not change section responsibilities** without a documented reason in this file.

4. **If a task conflicts with this architecture**, surface the conflict explicitly before implementing. Do not silently deviate.

5. **Unverified content must stay out of production.** The phone number `951-772-3910` and the user-supplied Yelp reviews are verified inputs for this implementation. Other contact details, stats, Figma testimonials, social links, and service area claims require client confirmation.

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
