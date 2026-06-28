import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import styles from "./AboutSection.module.css";

const PHONE_HREF = "tel:+19517723910";

function AboutSection() {
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

  return (
    <section
      id="about"
      tabIndex={-1}
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Text column ───────────────────────────────── */}
          <div className={styles.textCol}>

            <p
              className={styles.eyebrow}
              style={{ "--delay": "0ms" } as React.CSSProperties}
            >
              Our Story
            </p>

            <h2
              id="about-heading"
              className={styles.heading}
              style={{ "--delay": "60ms" } as React.CSSProperties}
            >
              A Legacy Worth
              <span className={styles.headingAccent}> Carrying Forward</span>
            </h2>

            {/* Beat 1 — the origin */}
            <p
              className={styles.body}
              style={{ "--delay": "150ms" } as React.CSSProperties}
            >
              For us, PTrain&apos;s BBQ is a legacy that is an honor to
              represent. What started as Pat &ldquo;PTrain&rdquo;
              Patterson&apos;s dream of serving real wood-smoked BBQ, his
              original sauces, and the perfect Tri Tip sandwich has turned
              into so much more.
            </p>

            {/* Beat 2 — the inherited wisdom */}
            <blockquote
              className={styles.pullQuote}
              style={{ "--delay": "230ms" } as React.CSSProperties}
            >
              He taught us that with hard work, patience, and love, you can
              achieve any dream that you have.
            </blockquote>

            {/* Beat 3 — the continuation */}
            <p
              className={styles.body}
              style={{ "--delay": "310ms" } as React.CSSProperties}
            >
              When our dad was diagnosed with cancer and passed away suddenly
              in 2021, it was a no-brainer to continue that dream. I&apos;ve
              been smoking BBQ since I was 11 &mdash; early mornings and late
              nights with my dad. We worked festivals, lunches, weddings,
              football games, and conventions, learning the invaluable skills
              he left us with.
            </p>

            <div
              className={styles.ctaRow}
              style={{ "--delay": "400ms" } as React.CSSProperties}
            >
              <a href={PHONE_HREF} className="ds-button-primary">
                Call to Book
              </a>
              <a href="/#menu" className="ds-button-secondary">
                View Menu
              </a>
            </div>

          </div>

          {/* ── Image column ──────────────────────────────── */}
          <figure
            className={styles.imageCol}
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            <div className={styles.imageFrame}>
              <Image
                src="/pat.png"
                alt="Pat Patterson, founder of PTrain's BBQ"
                fill
                sizes="(max-width: 767px) 80vw, 42vw"
                className={styles.image}
              />
              {/* Compositional badge — integrated identity, not a caption */}
              <div className={styles.imageBadge} aria-hidden="true">
                <span className={styles.imageBadgeLabel}>Family Owned</span>
                <span className={styles.imageBadgeSub}>Southern California</span>
              </div>
            </div>
            <figcaption className={styles.caption}>
              Pat &ldquo;PTrain&rdquo; Patterson &mdash; Founder
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
