import React, { useEffect, useRef, useState } from "react";

import type { ContactFormData } from "../../@types";
import { contactFormURL } from "../../constants";
import styles from "./BookingCTA.module.css";

const EVENT_TYPES = [
  "Corporate Event",
  "Wedding",
  "Private Party",
  "Festival / Fair",
  "Employee Appreciation",
  "Holiday Party",
  "Other",
];

export default function BookingCTA(): JSX.Element {
  // ── Form fields ────────────────────────────────────────────────
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState(""); // bot trap

  // ── Submission states ──────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ── Entrance animation ─────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const pitchRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [pitchRef.current, formRef.current].filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ── Validation ─────────────────────────────────────────────────
  const isValid =
    name.trim().length > 2 &&
    email.trim().includes("@") &&
    eventType.length > 0;

  // ── Submit handler ─────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Silently reject bot submissions (honeypot filled)
    if (honeypot) return;
    if (!isValid || loading) return;

    setLoading(true);
    setErrorMsg("");

    // Compose booking context into the message field
    const contextLines: string[] = [];
    if (eventType) contextLines.push(`Event Type: ${eventType}`);
    if (guestCount) contextLines.push(`Estimated Guests: ${guestCount}`);
    if (eventDate) contextLines.push(`Event Date: ${eventDate}`);
    const contextBlock = contextLines.join(" | ");
    const fullMessage = details.trim()
      ? `${contextBlock}\n\n${details.trim()}`
      : contextBlock;

    const payload: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      phoneNumber: phone.trim(),
      message: fullMessage,
    };

    try {
      const response = await fetch(contactFormURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setEventType("");
        setEventDate("");
        setGuestCount("");
        setDetails("");
      } else {
        setErrorMsg(
          "Something went wrong. Please call us at 951-772-3910 or try again."
        );
      }
    } catch {
      setErrorMsg(
        "Network error. Please call us at 951-772-3910 or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      tabIndex={-1}
      ref={sectionRef}
      className={`ds-section ds-section--primary ${styles.section}`}
      aria-labelledby="booking-heading"
    >
      <div className="ds-container">
        <div className={styles.grid}>
          {/* ── Left: pitch ──────────────────────────────────────── */}
          <div
            ref={pitchRef}
            className={`${styles.pitch} ${styles.animatePitch}`}
          >
            <p className={`ds-eyebrow ${styles.eyebrow}`}>
              Ready to Book
            </p>
            <h2 id="booking-heading" className={styles.heading}>
              Let&rsquo;s Make Your Event Unforgettable.
            </h2>
            <p className={styles.pitchBody}>
              Fill out the form and we&rsquo;ll be in touch within one business
              day to discuss your event, walk you through our menu options, and
              schedule a complimentary tasting.
            </p>

            <div className={styles.contactRow}>
              <a
                href="tel:+19517723910"
                className={styles.phoneLink}
                aria-label="Call PTrain's BBQ at 951-772-3910"
              >
                <svg
                  className={styles.phoneIcon}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                951-772-3910
              </a>

              <span className={styles.orSeparator}>— or use the form</span>

              <p className={styles.emailNote}>
                Prefer email? Include your address in the message and we&rsquo;ll
                reply directly.
              </p>
            </div>
          </div>

          {/* ── Right: form card ──────────────────────────────────── */}
          <div
            ref={formRef}
            className={`${styles.formCard} ${styles.animateForm}`}
          >
            {submitted ? (
              /* ── Success state ──────────────────────────────────── */
              <div className={styles.successState} role="status">
                <div className={styles.successIcon} aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ptrain-color-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className={styles.successHeading}>Request Received!</p>
                <p className={styles.successBody}>
                  Thank you — we&rsquo;ll be in touch within one business day.
                  For faster service, call us at{" "}
                  <a href="tel:+19517723910" style={{ color: "var(--ptrain-color-primary)", fontWeight: 700 }}>
                    951-772-3910
                  </a>
                  .
                </p>
              </div>
            ) : (
              /* ── Form ───────────────────────────────────────────── */
              <>
                <p className={styles.formTitle}>Get a Free Quote</p>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Honeypot — hidden from real users */}
                  <div className={styles.honeypot} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Name + Email */}
                  <div className={styles.fieldRow}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="booking-name" className={styles.label}>
                        Your Name<span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <input
                        id="booking-name"
                        className={styles.input}
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Pat Williams"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="booking-email" className={styles.label}>
                        Email<span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <input
                        id="booking-email"
                        className={styles.input}
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Phone + Event Type */}
                  <div className={styles.fieldRow}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="booking-phone" className={styles.label}>
                        Phone Number
                      </label>
                      <input
                        id="booking-phone"
                        className={styles.input}
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="951-000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="booking-event-type" className={styles.label}>
                        Event Type<span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="booking-event-type"
                        className={styles.select}
                        name="eventType"
                        required
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                      >
                        <option value="">Select event type</option>
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date + Guest Count */}
                  <div className={styles.fieldRow}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="booking-date" className={styles.label}>
                        Event Date
                      </label>
                      <input
                        id="booking-date"
                        className={styles.input}
                        type="date"
                        name="eventDate"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="booking-guests" className={styles.label}>
                        Estimated Guests
                      </label>
                      <input
                        id="booking-guests"
                        className={styles.input}
                        type="number"
                        name="guestCount"
                        placeholder="50"
                        min="1"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="booking-details" className={styles.label}>
                      Additional Details
                    </label>
                    <textarea
                      id="booking-details"
                      className={styles.textarea}
                      name="details"
                      placeholder="Tell us a bit about your event — location, any dietary needs, or questions you have."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <div className={styles.errorMsg} role="alert">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <div className={styles.submitRow}>
                    <button
                      type="submit"
                      className={`ds-button-primary ${styles.submitBtn}`}
                      disabled={!isValid || loading}
                      aria-busy={loading}
                    >
                      {loading ? "Sending…" : "Request a Quote"}
                    </button>
                    <p className={styles.privacyNote}>
                      We only use your information to respond to your inquiry.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
