import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import styles from "./ServicesSection.module.css";

interface Service {
  id: string;
  number: string;
  title: string;
  body: string;
}

interface ProofImage {
  src: string;
  alt: string;
}

// Confirm final service list with client before launch
const SERVICES: Service[] = [
  {
    id: "weddings",
    number: "01",
    title: "Wedding Catering",
    body: "From intimate ceremonies to grand receptions, we deliver wood-smoked wedding catering your guests will be talking about long after the last plate is cleared.",
  },
  {
    id: "corporate",
    number: "02",
    title: "Corporate Catering",
    body: "Corporate BBQ catering for company lunches, employee appreciation events, holiday parties, and team celebrations. Professional setup, on-time service, and food that actually impresses.",
  },
  {
    id: "private-parties",
    number: "03",
    title: "Private Events",
    body: "Birthdays, graduations, family reunions, and private parties — the food that brings everyone to the table, no matter the size of the crowd.",
  },
  {
    id: "festivals",
    number: "04",
    title: "Festivals & Community Events",
    body: "High-volume festival catering and large-scale event service for public gatherings and community celebrations across Southern California.",
  },
];

const PROOF_IMAGES: ProofImage[] = [
  { src: "/slideshow/slide-1.jpeg", alt: "PTrain's BBQ serving at a catered event" },
  { src: "/slideshow/slide-3.jpeg", alt: "PTrain's BBQ food spread at an event" },
  { src: "/slideshow/slide-5.jpeg", alt: "PTrain's BBQ setup at a large event" },
];

function ServicesSection() {
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
      id="services"
      tabIndex={-1}
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>

        {/* ── Section header — split layout ─────────────────── */}
        <div
          className={styles.sectionHeader}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>What We Do</p>
            <h2
              id="services-heading"
              className={styles.heading}
            >
              Catering Services
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerBody}>
              PTrain&apos;s BBQ brings authentic wood-smoked flavor to corporate
              catering, weddings, festivals, and private events across Southern
              California. From business lunches to large-scale celebrations —
              whatever the occasion, we&apos;ve got it covered.
            </p>
          </div>
        </div>

        {/* ── 2×2 service text grid ─────────────────────────── */}
        <ul className={styles.servicesGrid} role="list">
          {SERVICES.map((svc, i) => (
            <li
              key={svc.id}
              className={styles.serviceItem}
              style={{ "--delay": `${80 + i * 80}ms` } as React.CSSProperties}
            >
              <span className={styles.serviceNumber} aria-hidden="true">
                {svc.number}
              </span>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceBody}>{svc.body}</p>
            </li>
          ))}
        </ul>

        {/* ── Proof image strip ─────────────────────────────── */}
        {/*
         * Three real event photos answer "have they actually done this?"
         * Desktop: 3-column row. Mobile: horizontal scroll with snap.
         */}
        <div
          className={styles.imageStrip}
          style={{ "--delay": "440ms" } as React.CSSProperties}
          aria-label="Event photos"
        >
          {PROOF_IMAGES.map((img) => (
            <div key={img.src} className={styles.stripImage}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 767px) 75vw, 33vw"
                className={styles.stripImg}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
