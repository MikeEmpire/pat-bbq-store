import Image from "next/image";

import { links } from "../../constants";
import styles from "./Footer.module.css";

const PHONE_DISPLAY = "951-772-3910";
const PHONE_HREF = "tel:+19517723910";

const SOCIAL_LINKS = [
  {
    label: "PTrain's BBQ on Yelp",
    href: "https://www.yelp.com/biz/ptrains-california-bbq-rancho-cucamonga-3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={styles.socialIcon}
      >
        <path d="M20.16 12.56c-.28-.4-.64-.6-1.08-.72l-4.08-1.12c-.56-.16-.96.16-1 .72-.04.48.24.84.68 1l1.52.44-2.44 1.04a.77.77 0 0 0-.44.96c.12.44.52.68.96.6l4.24-.96c.48-.12.8-.36.96-.8.16-.44.08-.88-.32-1.16zM11.12 15.8l-1.2-1.16.36-1.52c.08-.52-.2-.96-.72-1.04-.48-.08-.88.2-.96.68l-1.04 4.2c-.12.52.08 1 .48 1.24.4.24.92.12 1.2-.28l1.04-1.44 1.52.44c.52.12.96-.12 1.08-.6.12-.52-.24-.96-.76-1.08l-.08.08-.92.48zm-2.36-6.96L12.52 4c.32-.44.28-.96-.08-1.28-.4-.32-.96-.24-1.24.2L8.52 7.24c-.28.44-.2.96.2 1.24.4.28.96.2 1.24-.2l-.2.56zm-3 2.56-4.08 1.08c-.48.12-.76.52-.72.96.08.48.48.8.96.72l1.52-.4.04 1.6c.04.52.36.88.88.88.52 0 .88-.36.88-.88l-.04-4.28c0-.52-.4-.92-.88-.88-.44.04-.72.36-.72.8l.16-.6zM10.8 8.8c.28.4.8.52 1.24.28l3.64-2.16c.44-.28.56-.8.28-1.24-.28-.44-.8-.52-1.24-.28L11.08 7.56C10.64 7.84 10.52 8.36 10.8 8.8z" />
      </svg>
    ),
  },
  {
    label: "PTrain's BBQ on Instagram",
    href: "https://www.instagram.com/ptrainsbbq/?hl=en",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={styles.socialIcon}
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "PTrain's BBQ on Facebook",
    href: "https://www.facebook.com/PTrainsBBQ/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={styles.socialIcon}
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function BackToTopButton() {
  const handleClick = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={styles.backToTop}
      aria-label="Back to top of page"
      type="button"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={styles.backToTopIcon}
      >
        <polyline points="4 14 10 8 16 14" />
      </svg>
      <span>Back to top</span>
    </button>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer nav excludes "Home" (users don't need to navigate away from top of same page)
  // and adds "Book Catering" which points to the booking section
  const footerNavLinks = [
    ...links.filter((l) => l.label !== "Home"),
    { label: "Book Catering", link: "/#booking" },
  ];

  return (
    <footer
      tabIndex={-1}
      className={styles.footer}
      aria-labelledby="footer-contact-heading"
    >
      <div className={styles.footerInner}>
        <div className="ds-container">
          <div className={styles.grid}>
            {/* ── Brand column ─────────────────────────────────────── */}
            <div className={styles.brandCol}>
              <a href="/#hero" className={styles.logoLink} aria-label="PTrain's BBQ — back to top">
                <Image
                  src="/logo.png"
                  alt="PTrain's BBQ logo"
                  width={64}
                  height={64}
                  className={styles.logo}
                />
              </a>
              <p className={styles.brandName}>PTrain&rsquo;s BBQ</p>
              <p className={styles.brandTagline}>
                Wood-Smoked Catering.<br />
                Southern California.
              </p>
              <div className={styles.socialRow} aria-label="Social media links">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={styles.socialLink}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Navigation column ──────────────────────────────────── */}
            <nav className={styles.navCol} aria-label="Footer navigation">
              <p className={styles.colHeading} id="footer-nav-heading">
                Quick Links
              </p>
              <ul className={styles.navList} aria-labelledby="footer-nav-heading">
                {footerNavLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.link} className={styles.navLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Contact column ─────────────────────────────────────── */}
            <div className={styles.contactCol}>
              <p
                className={styles.colHeading}
                id="footer-contact-heading"
              >
                Contact Us
              </p>

              <div className={styles.contactItem}>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={styles.contactIcon}
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href={PHONE_HREF}
                  className={styles.phoneLink}
                  aria-label={`Call PTrain's BBQ at ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className={styles.contactItem}>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={styles.contactIcon}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={styles.serviceArea}>
                  Southern California
                </span>
              </div>

              <div className={styles.contactCTA}>
                <a
                  href={PHONE_HREF}
                  className={`ds-button-primary ${styles.ctaBtn}`}
                  aria-label={`Call to book catering: ${PHONE_DISPLAY}`}
                >
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className={styles.bottomBar}>
        <div className={`ds-container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            &copy; {currentYear} PTrain&rsquo;s BBQ. All rights reserved.
          </p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
