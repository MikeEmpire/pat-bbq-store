# Skill: Scroll Animation

Add scroll-triggered entrance animations to a section component.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

A repeatable pattern for adding entrance animations that fire once when a section enters the viewport. Used in TrustBar and AboutSection. Consistent with the project's animation standards (pure CSS keyframes, `prefers-reduced-motion`, `cubic-bezier(0.22, 1, 0.36, 1)` easing).

---

## Required Context

- `brain/ptrains-bbq-redesign/agent-notes.md` — animation decisions logged (June 26–27 entries)
- `components/TrustBar/TrustBar.tsx` — reference implementation (scroll-triggered)
- `components/AboutSection/AboutSection.module.css` — reference CSS (stagger pattern)

---

## Workflow

### Step 1 — Add Observer Hook to Component

```tsx
import { useEffect, useRef, useState } from 'react';

const sectionRef = useRef<HTMLElement>(null);
const [visible, setVisible] = useState(false);

useEffect(() => {
  const el = sectionRef.current;
  if (!el) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(el);
  return () => observer.disconnect();
}, []);
```

- Use `threshold: 0.1` for sections that are tall (fires early).
- Use `threshold: 0.3` for compact sections or card grids (fires when more is visible).
- Always `disconnect()` after first intersection — animations run once only.

### Step 2 — Apply Stagger via CSS Custom Property

In the JSX, assign `--delay` per animated element:

```tsx
<div
  ref={sectionRef}
  className={`${styles.section} ${visible ? styles.visible : ''}`}
>
  <h2
    className={styles.heading}
    style={{ '--delay': '0ms' } as React.CSSProperties}
  >
    ...
  </h2>
  <p
    className={styles.body}
    style={{ '--delay': '120ms' } as React.CSSProperties}
  >
    ...
  </p>
</div>
```

### Step 3 — Write CSS Keyframes

```css
/* Default: hidden */
.heading,
.body {
  opacity: 0;
  transform: translateY(20px);
}

/* Triggered by JS adding .visible to the container */
.visible .heading,
.visible .body {
  animation: fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0ms) both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Required: accessibility */
@media (prefers-reduced-motion: reduce) {
  .heading,
  .body {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
```

### Step 4 — Hero-Style Load Animations (alternative)

For sections that animate on page load (not scroll):
- Do not use `IntersectionObserver` — animations fire immediately via CSS.
- Use `animation-fill-mode: both` on all animated elements.
- Apply delays directly in JSX via `--delay` style prop.
- See `components/HeroSection/HeroSection.module.css` for the `hero-reveal-up` and `hero-fade-up` keyframe patterns.

---

## Rules

- Never animate without `@media (prefers-reduced-motion: reduce)` fallback.
- Use `animation-fill-mode: both` — prevents invisible flash before delay fires.
- Use `cubic-bezier(0.22, 1, 0.36, 1)` as the default easing.
- Do not import Framer Motion for new sections — pure CSS only unless an existing component already uses it.
- Stagger delays: start at `0ms`, increment by `80ms`–`150ms` per element (shorter for cards, longer for hero-scale elements).
- Do not animate content that is above the fold on initial load with a scroll trigger — use load-time animations there.

---

## Deliverables

- `IntersectionObserver` setup added to component
- `.visible` CSS class that triggers animations
- All animated elements have `--delay` style props
- `@media (prefers-reduced-motion: reduce)` block in the CSS module
