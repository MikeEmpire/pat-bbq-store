import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import styles from "./Header.module.css";
import { links } from "../../constants";

const PHONE_NUMBER = "951-772-3910";
const PHONE_HREF = "tel:+19517723910";
const SECTION_IDS = [
  "hero",
  "about",
  "services",
  "menu",
  "testimonials",
  "booking",
  "contact",
] as const;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const mobileNavRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        mobileToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    if (router.pathname !== "/") return;

    let animationFrame = 0;

    const updateActiveSection = () => {
      const headerOffsetValue = getComputedStyle(document.documentElement)
        .getPropertyValue("--ptrain-header-offset")
        .trim();
      const headerOffset = Number.parseFloat(headerOffsetValue) || 0;
      const viewportMarker = headerOffset + Math.min(window.innerHeight * 0.3, 240);
      let nextSection = "hero";

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= viewportMarker) {
          nextSection = sectionId;
        } else {
          break;
        }
      }

      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      setActiveSection(isAtPageEnd ? "contact" : nextSection);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [router.pathname]);

  const isActiveLink = (link: string): boolean => {
    if (router.pathname !== "/") return false;
    return link === `/#${activeSection}`;
  };

  const isBookingActive = router.pathname === "/" && activeSection === "booking";

  const renderNavLinks = () =>
    links.map((item) => {
      const isActive = isActiveLink(item.link);

      return (
        <li key={item.label}>
          <a
            aria-current={isActive ? "location" : undefined}
            className={`${styles.nav__link} ${
              isActive ? styles.nav__link__active : ""
            }`}
            href={item.link}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        </li>
      );
    });

  return (
    <header className={styles.header}>
      <nav className={styles.nav__container} aria-label="Primary navigation">
        <a
          className={styles.brand}
          href="/#hero"
          aria-label="P Train's BBQ home"
          onClick={() => setIsOpen(false)}
        >
          <span className={styles.logo__mark}>
            <Image
              className={styles.logo}
              height={54}
              width={78}
              alt=""
              src="/logo.png"
              priority
            />
          </span>
          <span className={styles.brand__text}>
            <span>P Train&apos;s</span>
            <strong>BBQ</strong>
          </span>
        </a>

        <ul className={styles.nav__list}>{renderNavLinks()}</ul>

        <div className={styles.nav__actions}>
          <a className={styles.phone__link} href={PHONE_HREF}>
            Call {PHONE_NUMBER}
          </a>
          <a
            aria-current={isBookingActive ? "location" : undefined}
            className={`${styles.cta__link} ${
              isBookingActive ? styles.cta__link__active : ""
            }`}
            href="/#booking"
          >
            Book Catering
          </a>
        </div>

        <button
          ref={mobileToggleRef}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className={styles.mobile__toggle}
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <nav
        ref={mobileNavRef}
        aria-label="Mobile navigation"
        className={`${styles.mobile__nav} ${
          isOpen ? styles.mobile__nav__open : ""
        }`}
        id="mobile-navigation"
      >
        <ul>{renderNavLinks()}</ul>
        <a
          className={styles.mobile__phone}
          href={PHONE_HREF}
          onClick={() => setIsOpen(false)}
        >
          Call {PHONE_NUMBER}
        </a>
        <a
          aria-current={isBookingActive ? "location" : undefined}
          className={`${styles.mobile__cta} ${
            isBookingActive ? styles.cta__link__active : ""
          }`}
          href="/#booking"
          onClick={() => setIsOpen(false)}
        >
          Book Catering
        </a>
      </nav>
    </header>
  );
}

export default Header;
