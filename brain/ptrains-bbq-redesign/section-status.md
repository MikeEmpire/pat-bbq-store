# Section Status

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
| Design direction | Audited | Ivory/gold/burgundy, premium/playful/warm/family/catering direction captured. |
| Navigation | Audited | Ready after contact details and nav destinations are confirmed. Current `Book Us` anchor mismatch should be fixed during implementation. |
| Hero | Audited | Needs image/content decisions before implementation. Figma hero is strong but uses remote stock photos and unverified stats. |
| Menu / catering preview | Audited | Needs menu source-of-truth decision between current `public/CateringMenu.*` and export `_menu_2025PTrainsCateringMenu.png`. |
| About / trust | Audited | Current app copy should remain source of truth; Figma copy needs editing before migration. |
| CTA section | Audited | Needs verified phone/email and decision on current non-submitting contact form. |
| Footer | Audited | Needs verified social links and contact details. |
| Figma generated UI components | Audited | Reference only; not ready for wholesale migration. |
| Production implementation | Not started | No production app files changed as part of this brain initialization. |

## Ready Candidates

- Navigation can be the first implementation section if phone/contact details are verified or the existing current-app phone remains source of truth.
- Palette/token migration can happen early, but only as part of a scoped styling task.

## Needs Review Before Migration

- Phone number conflict: current app shows `951-772-3910`; Figma export uses `+19617713118` / `(961) 771-3118`.
- Email address `bookings@ptrainsbbq.com` appears only in the Figma export.
- Testimonials and stats are unverified.
- Social URLs are unverified/placeholders.
- Figma about copy should be replaced or edited to preserve the real legacy story.
