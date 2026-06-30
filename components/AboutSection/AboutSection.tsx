import Image from "next/image";
import Link from "next/link";
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
              Rooted in Family.
              <span className={styles.headingAccent}> Built on Craft.</span>
            </h2>

            {/* Beat 1 — the origin */}
            <p
              className={styles.body}
              style={{ "--delay": "150ms" } as React.CSSProperties}
            >
              PTrain&apos;s BBQ was born from a simple belief: that real
              wood-smoked barbecue, made with patience and care, brings people
              together. What started as Pat &ldquo;PTrain&rdquo;
              Patterson&apos;s dream &mdash; authentic sauces, slow-smoked
              meats, and the perfect Tri Tip sandwich &mdash; has grown into
              one of Southern California&apos;s most trusted names in catering.
            </p>

            {/* Beat 2 — the craft */}
            <blockquote
              className={styles.pullQuote}
              style={{ "--delay": "230ms" } as React.CSSProperties}
            >
              Real BBQ takes time. We&apos;ve been perfecting ours for over
              two decades.
            </blockquote>

            {/* Beat 3 — the experience */}
            <p
              className={styles.body}
              style={{ "--delay": "310ms" } as React.CSSProperties}
            >
              From backyard cookouts to large-scale catering events, our team
              has spent years behind the pit mastering the low-and-slow craft
              that defines Southern BBQ. We&apos;ve served corporate lunches,
              wedding receptions, employee appreciation events, community
              festivals, and private parties &mdash; always with the same
              commitment to quality, hospitality, and food that people remember.
            </p>

            <div
              className={styles.ctaRow}
              style={{ "--delay": "400ms" } as React.CSSProperties}
            >
              <a href={PHONE_HREF} className="ds-button-primary">
                Call to Book
              </a>
              <Link
                href="/#menu"
                className="ds-button-secondary"
                scroll={false}
                onClick={() => {
                  const el = document.getElementById("menu");
                  if (!el) return;
                  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
                }}
              >
                View Menu
              </Link>
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
