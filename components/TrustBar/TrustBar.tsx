import { useEffect, useRef, useState } from "react";

import styles from "./TrustBar.module.css";

/*
 * Trust signals — qualitative only.
 * Stats (events catered, years in business, ratings) are unverified
 * and live in the Hero stats row pending client confirmation.
 * These four items use claims that are established in existing copy.
 */
const ITEMS = [
  {
    label: "Wood-Smoked On-Site",
    sub: "Authentic smoke at every event",
  },
  {
    label: "Family Owned & Operated",
    sub: "Built on legacy, run with pride",
  },
  {
    label: "Southern California",
    sub: "Proudly local since day one",
  },
  {
    label: "Complimentary Tasting",
    sub: "Try the food before you book",
  },
] as const;

function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trust"
      tabIndex={-1}
      ref={ref}
      className={`${styles.trustBar} ${visible ? styles.visible : ""}`}
      aria-label="Why clients choose PTrain's BBQ"
    >
      <div className={styles.container}>
        <ul className={styles.items} role="list">
          {ITEMS.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.rule} aria-hidden="true" />
              <span className={styles.label}>{item.label}</span>
              <span className={styles.sub}>{item.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustBar;
