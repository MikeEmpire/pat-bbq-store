# Design Direction

## Brand Position

PTrain's BBQ should feel premium, playful, warm, family-focused, and built around BBQ catering. The redesign should elevate the current functional site into a stronger catering sales experience without losing the family legacy and approachable local-business feel.

## Desired Feel

- Premium: editorial layouts, strong type hierarchy, considered spacing, polished photo use, confident calls to action.
- Playful: small expressive details, warm copy moments, tactile BBQ/event energy, but not gimmicky.
- Warm: ivory backgrounds, rich BBQ tones, family story, food photography, human language.
- Family-focused: preserve the current history/legacy content around Pat and the continuation of the business.
- BBQ/catering focused: lead with event catering, menus, booking, phone/email actions, and service areas.
- Mobile-friendly: primary CTA and navigation must work well on small screens with no text collisions.

## Color Direction

Use the Figma export palette as the starting point:

- Ivory background: `#F8F4ED`
- Warm card surface: `#FBF8F2`
- Secondary ivory/tan: `#EFE8D8`
- Muted tan: `#E8DFCC`
- Deep brown text: `#231409`
- Burgundy primary: `#6B1D2A`
- Gold accent: `#C4872A`
- Muted text: `#7A6A52`
- Subtle border: `rgba(35, 20, 9, 0.12)`

Avoid drifting into an overly dark, one-note brown/orange theme. The ivory/gold/burgundy direction should stay bright enough for food photography and family warmth.

## Typography

The Figma export uses:

- Display: Fraunces, serif, black/italic for editorial BBQ personality.
- Body/UI: Outfit, sans-serif, for readable modern text.

The live app currently has local Gilroy fonts. Before implementation, decide whether to:

- Keep Gilroy for body/UI and introduce a local or hosted serif display face, or
- Move toward the Figma Fraunces/Outfit pairing and handle font loading intentionally.

Do not add remote Google font imports casually in production without deciding performance and privacy expectations.

## Spacing and Shape

- Use generous section padding for desktop, tighter but still breathable spacing on mobile.
- Prefer full-width section bands and clean grids.
- Use low or zero border radius for a premium editorial feel; the Figma export sets `--radius: 0rem`.
- Avoid nested card structures and decorative containers that make the catering flow feel busy.

## Components and UI

Primary components to emulate or rebuild:

- Fixed responsive nav with strong brand wordmark and direct phone CTA.
- Hero with editorial typography, strong catering copy, food/event imagery, and direct "Call Now" / "View Menu" actions.
- Menu preview with category tabs and full-menu download/view action.
- Services/trust section focused on weddings, corporate events, private parties, and festivals.
- Family/about story section that preserves current legacy copy more accurately than the Figma placeholder.
- Final booking CTA with phone/email actions.
- Footer with navigation, social links, service area, and contact details.

## CTA Direction

Catering booking is the main conversion goal. Every major page segment should support either:

- Call now.
- Email/get a quote.
- View/download menu.
- Learn the family story enough to trust the business.

Phone and email details must be verified before implementation.
