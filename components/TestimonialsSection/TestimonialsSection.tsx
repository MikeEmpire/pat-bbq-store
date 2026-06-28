import React, { useEffect, useRef, useState } from "react";

import styles from "./TestimonialsSection.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Testimonial data
//
// TODO: Replace ALL placeholder entries with real client-approved reviews
// before launch. Collect from Yelp, Google Reviews, or direct client
// correspondence. Preserve the data structure — only swap the content fields.
//
// Future phases can extend this array to 40+ testimonials and add:
//   - filtering by eventType
//   - pagination or progressive reveal
//   - carousel/slider with accessible keyboard navigation
//   - "Read more" expansion for long quotes
//
// See brain/ptrains-bbq-redesign/section-status.md for launch gate context.
// ─────────────────────────────────────────────────────────────────────────────

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  eventType?: string; // e.g. "Corporate Event", "Wedding", "Private Party"
  rating?: number;    // 1–5; omit to suppress star display
  source?: string;    // display label: "Yelp", "Google", "Direct", etc.
  featured?: boolean; // true = hero treatment (one at a time)
}

// TODO: Replace placeholder quotes and names with real verified client reviews.
// Do not use generated, fabricated, or Figma-sourced testimonials in production.
const TESTIMONIALS: Testimonial[] = [
  // TODO: Replace — use the single most compelling verified client quote as the featured entry.
  // Corporate, wedding, or recurring client preferred. Aim for 2–3 specific, warm sentences.
  {
    id: "featured-01",
    quote:
      "PLACEHOLDER — Replace with a real featured client testimonial before launch. This entry drives the large hero treatment. Choose a quote that names the event type, speaks to the food quality and professionalism, and gives hesitant visitors confidence to book.",
    name: "Client Name",
    eventType: "Corporate Event",
    rating: 5,
    source: "Google",
    featured: true,
  },
  // TODO: Replace — collect from a real wedding or reception client
  {
    id: "tst-02",
    quote:
      "PLACEHOLDER — Replace with a real wedding or reception client testimonial before launch.",
    name: "Client Name",
    eventType: "Wedding Reception",
    rating: 5,
    source: "Yelp",
  },
  // TODO: Replace — collect from a real private party client
  {
    id: "tst-03",
    quote:
      "PLACEHOLDER — Replace with a real private party or birthday event client testimonial before launch.",
    name: "Client Name",
    eventType: "Private Party",
    rating: 5,
    source: "Google",
  },
  // TODO: Replace — collect from a real corporate or employee appreciation client
  {
    id: "tst-04",
    quote:
      "PLACEHOLDER — Replace with a real corporate catering or employee appreciation event testimonial before launch.",
    name: "Client Name",
    eventType: "Corporate Lunch",
    rating: 5,
    source: "Yelp",
  },
  // TODO: Replace — collect from a festival, public event, or large-scale catering client
  {
    id: "tst-05",
    quote:
      "PLACEHOLDER — Replace with a real festival or large public event client testimonial before launch.",
    name: "Client Name",
    eventType: "Festival",
    rating: 5,
    source: "Google",
  },
  // TODO: Replace — any event type; useful for demonstrating breadth of clientele
  {
    id: "tst-06",
    quote:
      "PLACEHOLDER — Replace with a real client testimonial before launch. Any event type is appropriate here.",
    name: "Client Name",
    eventType: "Holiday Party",
    rating: 5,
    source: "Direct",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div
      className={styles.stars}
      aria-label={`${rating} out of ${max} stars`}
      role="img"
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? styles.starFilled : styles.starEmpty}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  return <span className={styles.sourceBadge}>{source}</span>;
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  return (
    <article
      className={styles.card}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
      aria-label={`Testimonial from ${testimonial.name}${testimonial.eventType ? `, ${testimonial.eventType}` : ""}`}
    >
      {testimonial.rating !== undefined && (
        <StarRating rating={testimonial.rating} />
      )}
      <blockquote className={styles.cardQuote}>
        <p>{testimonial.quote}</p>
      </blockquote>
      <footer className={styles.cardFooter}>
        <span className={styles.cardName}>{testimonial.name}</span>
        {testimonial.eventType && (
          <span className={styles.cardEventType}>{testimonial.eventType}</span>
        )}
        {testimonial.source && <SourceBadge source={testimonial.source} />}
      </footer>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

function TestimonialsSection() {
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

  const featured = TESTIMONIALS.find((t) => t.featured);
  const supporting = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section
      id="testimonials"
      tabIndex={-1}
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.container}>

        {/* ── Section header ─────────────────────────────── */}
        <header
          className={styles.header}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <p className={styles.eyebrow}>What Clients Say</p>
          <h2 id="testimonials-heading" className={styles.heading}>
            Trusted by Hundreds
            <span className={styles.headingAccent}> of Happy Guests</span>
          </h2>
          <p className={styles.intro}>
            From intimate backyard gatherings to large corporate events — real
            feedback from the people we&apos;ve had the honor of serving.
          </p>
        </header>

        {/* ── Featured testimonial ───────────────────────── */}
        {featured && (
          <div
            className={styles.featuredWrapper}
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            <div className={styles.featuredInner} aria-label={`Featured testimonial from ${featured.name}${featured.eventType ? `, ${featured.eventType}` : ""}`}>
              <span className={styles.featuredDecorQuote} aria-hidden="true">
                &ldquo;
              </span>
              {featured.rating !== undefined && (
                <StarRating rating={featured.rating} />
              )}
              <blockquote className={styles.featuredQuote}>
                <p>{featured.quote}</p>
              </blockquote>
              <footer className={styles.featuredFooter}>
                <span className={styles.featuredRule} aria-hidden="true" />
                <div className={styles.featuredAttribution}>
                  <span className={styles.featuredName}>{featured.name}</span>
                  {featured.eventType && (
                    <span className={styles.featuredEventType}>
                      {featured.eventType}
                    </span>
                  )}
                  {featured.source && <SourceBadge source={featured.source} />}
                </div>
              </footer>
            </div>
          </div>
        )}

        {/* ── Supporting testimonial grid ────────────────── */}
        <div className={styles.grid} aria-label="More client testimonials">
          {supporting.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={240 + i * 80}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
