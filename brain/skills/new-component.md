# Skill: New Reusable Component

Create a new reusable UI component that follows project conventions.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

When a UI element is needed in multiple sections or will be composed into a section, it should be built as a standalone component rather than inlined. This skill defines the structure, typing, and styling conventions for any new reusable component.

---

## Required Context

- `brain/ptrains-bbq-redesign/component-map.md` — existing `.ds-*` class catalogue (check before inventing anything)
- `brain/ptrains-bbq-redesign/design-direction.md` — brand tokens, variant conventions
- `components/HeroSection/HeroPromoCard.tsx` — reference: props-only, variant system, no hardcoded text
- `@types/index.ts` — where shared interfaces live

---

## Workflow

### Step 1 — Justify the Component

Before creating, confirm:
- Is this needed in more than one place, or will it be?
- Can an existing `.ds-*` class handle this without a new component?
- Is there an existing component to extend instead?

If the answer to the last two is yes, prefer extending or composing rather than creating.

### Step 2 — Define the Props Interface

Add the interface to `@types/index.ts` if the component is shared. Keep it in the component file if it is narrowly scoped.

```typescript
// @types/index.ts
export interface MyCardProps {
  heading: string;
  body: string;
  variant?: 'primary' | 'secondary';  // use semantic names, not color names
  href?: string;
}
```

Rules:
- All content via props — no hardcoded text.
- Use optional props with defaults rather than required props where it improves composability.
- Variant names should describe intent (`primary`, `featured`, `compact`) not appearance (`brass`, `dark`, `large`).

### Step 3 — Create Files

```
components/
  <ComponentName>/
    <ComponentName>.tsx
    <ComponentName>.module.css
```

Component file structure:

```tsx
import styles from './<ComponentName>.module.css';
import type { MyCardProps } from '@/types';

const variantClass: Record<NonNullable<MyCardProps['variant']>, string> = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
};

export default function MyCard({ heading, body, variant = 'primary', href }: MyCardProps) {
  return (
    <div className={`ds-card ${styles.card} ${variantClass[variant]}`}>
      <h3 className={`ds-section-heading ${styles.heading}`}>{heading}</h3>
      <p className={`ds-body ${styles.body}`}>{body}</p>
      {href && (
        <a href={href} className="ds-button-primary">{/* CTA text from prop */}</a>
      )}
    </div>
  );
}
```

### Step 4 — Write Module CSS

```css
/* Consume design tokens; do not hardcode values */
.card {
  background: var(--ptrain-color-surface);
  border-radius: 0.375rem;  /* cards */
  padding: var(--ptrain-spacing-card, 1.5rem);
}

.variantPrimary {
  border: 1px solid var(--ptrain-color-gold);
}

.variantSecondary {
  background: var(--ptrain-color-ivory);
}
```

Rules:
- Use `.ds-*` classes in JSX for all layout, type, and CTA primitives.
- CSS Module handles only what `.ds-*` cannot: component shape, variant overrides, internal spacing.
- Reference `--ptrain-*` tokens, not literal color/size values.
- Border radius: `0.375rem` for cards, `0.5rem` for media/images.

### Step 5 — Validate

- Run targeted lint: `npx next lint --file components/<ComponentName>/<ComponentName>.tsx`
- Confirm all props are typed (no `any`)
- Confirm no hardcoded content, no new dependencies
- If the component has animations, apply the **Scroll Animation** skill: `brain/skills/scroll-animation.md`

### Step 6 — Document

Add a brief entry to `brain/ptrains-bbq-redesign/agent-notes.md`:
- Component name and purpose
- Props and variants
- Where it is used
- Whether new dependencies were introduced (should be: none)

---

## Rules

- All text content via props — never hardcoded.
- Variant lookup via record map, not ternary chains.
- Use `next/image` for all images (not `<img>`), with `alt` text required.
- Use `next/link` for internal navigation (not `<a href>`).
- No `any` types.
- No new npm dependencies.
- Do not add `useEffect` unless specifically needed — prefer pure, stateless components.

---

## Deliverables

- `components/<ComponentName>/<ComponentName>.tsx`
- `components/<ComponentName>/<ComponentName>.module.css`
- Props interface in `@types/index.ts` (if shared)
- Lint passes on new file
- Entry in `agent-notes.md`
