import React, { useEffect, useRef, useState } from "react";

import { YELP_REVIEWS } from "../../constants/yelpreviews";
import type { YelpReview } from "../../constants/yelpreviews";
import styles from "./TestimonialsSection.module.css";

const YELP_IMAGE_HOST = "s3-media0.fl.yelpcdn.com";
const COLLAPSED_REVIEW_LENGTH = 240;

function getSafeProfileUrl(profileUrl?: string): string | null {
  if (!profileUrl) return null;

  try {
    const url = new URL(profileUrl);
    return url.protocol === "https:" && url.hostname === YELP_IMAGE_HOST
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function formatReviewDate(date: string): string {
  const [year, month, day] = date.split("-");
  const parsedDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  );

  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(parsedDate);
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  const safeRating = Math.min(Math.max(Math.round(rating), 0), max);

  return (
    <div
      className={styles.stars}
      aria-label={`${safeRating} out of ${max} stars`}
      role="img"
    >
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={index < safeRating ? styles.starFilled : styles.starEmpty}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewerAvatar({
  name,
  profileUrl,
}: {
  name: string;
  profileUrl?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const safeProfileUrl = getSafeProfileUrl(profileUrl);

  if (!safeProfileUrl || imageFailed) {
    return (
      <span className={styles.avatarFallback} aria-hidden="true">
        {getInitials(name)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={`${name} Yelp profile`}
      className={styles.avatar}
      height={52}
      onError={() => setImageFailed(true)}
      src={safeProfileUrl}
      width={52}
    />
  );
}

function TestimonialCard({
  review,
  delay,
}: {
  review: YelpReview;
  delay: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLongReview = review.user_review.length > COLLAPSED_REVIEW_LENGTH;

  return (
    <article
      className={`ds-card ${styles.card}`}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className={styles.cardTopline}>
        <StarRating rating={review.user_rating} />
        <span className={styles.sourceBadge}>{review.source}</span>
      </div>

      <blockquote
        className={`${styles.cardQuote} ${
          isLongReview && !expanded ? styles.cardQuoteCollapsed : ""
        }`}
      >
        <p>{review.user_review}</p>
      </blockquote>

      {isLongReview && (
        <button
          aria-expanded={expanded}
          className={styles.expandButton}
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          {expanded ? "Show less" : "Read full review"}
        </button>
      )}

      <footer className={styles.cardFooter}>
        <ReviewerAvatar
          name={review.user_name}
          profileUrl={review.user_profile}
        />
        <div className={styles.reviewerDetails}>
          <cite className={styles.cardName}>{review.user_name}</cite>
          {review.user_location && (
            <span className={styles.cardLocation}>{review.user_location}</span>
          )}
          <time className={styles.cardDate} dateTime={review.user_date}>
            {formatReviewDate(review.user_date)}
          </time>
        </div>
      </footer>
    </article>
  );
}

function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      tabIndex={-1}
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="testimonials-heading"
    >
      <div className={`ds-container ${styles.container}`}>
        <header
          className={styles.header}
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          <p className="ds-eyebrow">What Clients Say</p>
          <h2
            id="testimonials-heading"
            className={`ds-section-heading ${styles.heading}`}
          >
            Straight from Our Guests
          </h2>
          <p className="ds-body">
            Yelp reviews from people who have experienced PTrain&apos;s BBQ.
          </p>
        </header>

        <div className={styles.grid} aria-label="Client reviews">
          {YELP_REVIEWS.map((review, index) => (
            <TestimonialCard
              key={`${review.user_name}-${review.user_date}`}
              review={review}
              delay={120 + index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
