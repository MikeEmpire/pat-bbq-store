import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./HeroSection.module.css";

const PHONE_HREF = "tel:+19517723910";

function HeroSection() {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div className={styles.media}>
        <Image
          alt="Sliced smoked brisket with a dark bark on a butcher block"
          className={styles.mediaImage}
          fill
          priority
          quality={88}
          sizes="100vw"
          src="/images/hero-smoked-brisket.jpg"
        />
        <div className={styles.mediaTone} aria-hidden="true" />
      </div>

      <div className={styles.contentVeil} aria-hidden="true" />

      <div className={styles.leftPanel}>
        <p
          className={`${styles.eyebrow} ${styles.revealFade}`}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          Southern California · Wood-Smoked Catering
        </p>

        <h1 id="hero-heading" className={styles.headline}>
          <span
            className={styles.headlineClip}
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            <span className={`${styles.headlineLine} ${styles.headlineReveal}`}>
              The BBQ
            </span>
          </span>
          <span
            className={styles.headlineClip}
            style={{ "--delay": "170ms" } as React.CSSProperties}
          >
            <span className={`${styles.headlineItalic} ${styles.headlineReveal}`}>
              That
            </span>
          </span>
          <span
            className={styles.headlineClip}
            style={{ "--delay": "260ms" } as React.CSSProperties}
          >
            <span className={`${styles.headlineLine} ${styles.headlineReveal}`}>
              Changes
            </span>
          </span>
          <span
            className={styles.headlineClip}
            style={{ "--delay": "350ms" } as React.CSSProperties}
          >
            <span
              className={`${styles.headlineLine} ${styles.headlineSmall} ${styles.headlineReveal}`}
            >
              Everything.
            </span>
          </span>
        </h1>

        <p
          className={`${styles.body} ${styles.revealFade}`}
          style={{ "--delay": "480ms" } as React.CSSProperties}
        >
          Premium wood-smoked BBQ catering for corporate events, weddings,
          festivals, and private parties across Southern California — served
          with family-owned hospitality.
        </p>

        <div
          className={`${styles.ctaRow} ${styles.revealFade}`}
          style={{ "--delay": "580ms" } as React.CSSProperties}
        >
          <a href={PHONE_HREF} className={styles.ctaPrimary}>
            Call Now
          </a>
          <Link
            href="/#menu"
            className={styles.ctaOutline}
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
    </section>
  );
}

export default HeroSection;
