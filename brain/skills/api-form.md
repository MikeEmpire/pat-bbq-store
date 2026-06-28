# Skill: API Form Integration

Implement a contact or booking form that submits to the existing PTrain's BBQ API endpoint.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

Any new form on this site should reuse the existing submission endpoint and types rather than creating a parallel implementation. This skill documents where the existing form logic lives, how to extend it safely, and the full set of UX expectations for all form states.

---

## Existing Implementation

### API endpoint

```ts
// constants/index.ts
export const contactFormURL: string =
  "https://empire-api.afam.app/api/v1/ptrains/contact";
```

This is an external third-party endpoint. It delivers submitted contact/booking requests to Caira (PTrain's BBQ owner). No API key or secret is required on the frontend — the URL is the only credential and it is safe to expose in client code.

**Do not** create a Next.js API route (`pages/api/`) to proxy this unless there is a specific, documented reason. The existing architecture calls the endpoint directly from the client.

### Type contract

```ts
// @types/index.ts
export interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}
```

The API accepts exactly these four fields. If your form needs additional fields (e.g. `eventType`, `eventDate`, `guestCount`), compose them into the `message` field as structured text before submitting:

```ts
const contextBlock = [
  eventType && `Event Type: ${eventType}`,
  guestCount && `Estimated Guests: ${guestCount}`,
  eventDate  && `Event Date: ${eventDate}`,
].filter(Boolean).join(' | ');

const payload: ContactFormData = {
  name,
  email,
  phoneNumber: phone,
  message: details ? `${contextBlock}\n\n${details}` : contextBlock,
};
```

### Reference implementations

| File | What it shows |
|------|---------------|
| `components/ContactForm/ContactForm.tsx` | Original form — basic 4-field implementation using `useState` |
| `components/BookingCTA/BookingCTA.tsx` | Extended 7-field booking form — loading/success/error states, honeypot, accessible labels, `IntersectionObserver` entrance animation |

---

## How to Reuse the Submission Handler

Copy the fetch pattern from `BookingCTA.tsx`:

```ts
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (honeypot || !isValid || loading) return;

  setLoading(true);
  setErrorMsg('');

  const payload: ContactFormData = { name, email, phoneNumber: phone, message };

  try {
    const res = await fetch(contactFormURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSubmitted(true);
      // reset fields
    } else {
      setErrorMsg('Something went wrong. Please call us at 951-772-3910 or try again.');
    }
  } catch {
    setErrorMsg('Network error. Please call us at 951-772-3910 or try again later.');
  } finally {
    setLoading(false);
  }
};
```

---

## Validation Expectations

**Required fields** (minimum): `name` (>2 chars), `email` (contains `@`).

**Per-form additions:** Add `eventType` or other fields to `isValid` when they are structurally required for the inquiry to be actionable.

**Do not** add complex regex validation unless there is a specific client requirement. The API validates server-side.

**Honeypot pattern** (bot protection):

```tsx
<div className={styles.honeypot} aria-hidden="true">
  <label htmlFor="website">Website</label>
  <input id="website" type="text" name="website" tabIndex={-1}
         autoComplete="off" value={honeypot}
         onChange={e => setHoneypot(e.target.value)} />
</div>
```

CSS hides it from real users (`display: none`). If the value is non-empty on submit, silently return early — do not call the API.

---

## Loading / Success / Error State Expectations

| State | UX requirement |
|-------|----------------|
| **Loading** | Submit button shows "Sending…", `disabled`, `aria-busy={true}` |
| **Success** | Replace form with a confirmation message (do not just add text above the form). Include a phone fallback CTA. |
| **Error** | Show an inline `role="alert"` message above the submit button. Always include the verified phone number `951-772-3910` as a fallback. |

The submit button must be disabled when `!isValid || loading`.

---

## Security Rules

- **Never hardcode a private API key, password, or secret in frontend code.**
- `contactFormURL` is the only endpoint config needed — it is not a secret.
- If an endpoint ever requires authentication, handle it via a Next.js API route proxy in `pages/api/`, not by exposing credentials on the client.
- Do not add `console.log` calls that expose payload data.

---

## Accessible Labels

- Every input and select must have a visible `<label>` linked via `htmlFor` / `id`.
- Do not use placeholder text as the only label.
- Required fields: add a visible `*` marker (`aria-hidden="true"`) and rely on `required` HTML attribute for native validation signaling.
- Error messages: use `role="alert"` on the error container.
- Success state: use `role="status"` on the confirmation container.

---

## Deliverables Checklist

For any new form task, confirm:

- [ ] Uses `contactFormURL` from `constants/index.ts` — no new endpoint
- [ ] Uses `ContactFormData` from `@types/index.ts` — no duplicate interface
- [ ] Loading state: button disabled + text changes
- [ ] Success state: form replaced by confirmation + phone fallback
- [ ] Error state: `role="alert"` inline message + phone fallback
- [ ] Honeypot field present
- [ ] All inputs have visible `<label>` elements
- [ ] No secrets in frontend code
- [ ] Lint passes on new file
