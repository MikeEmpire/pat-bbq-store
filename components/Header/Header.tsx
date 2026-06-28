import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "./Header.module.css";
import { links } from "../../constants";

const PHONE_NUMBER = "951-772-3910";
const PHONE_HREF = "tel:+19517723910";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActiveLink = (link: string): boolean => router.pathname === link;

  const navLinks = links.map((item) => (
    <li key={item.label}>
      <Link
        className={`${styles.nav__link} ${
          isActiveLink(item.link) ? styles.nav__link__active : ""
        }`}
        href={item.link}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    </li>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.nav__container} aria-label="Primary navigation">
        <Link
          className={styles.brand}
          href="/"
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
        </Link>

        <ul className={styles.nav__list}>{navLinks}</ul>

        <article className={styles.nav__actions}>
          <a className={styles.phone__link} href={PHONE_HREF}>
            Call {PHONE_NUMBER}
          </a>
          <Link className={styles.cta__link} href="/bookus">
            Book Catering
          </Link>
        </article>

        <button
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

      <section
        className={`${styles.mobile__nav} ${
          isOpen ? styles.mobile__nav__open : ""
        }`}
        id="mobile-navigation"
      >
        <ul>{navLinks}</ul>
        <a
          className={styles.mobile__phone}
          href={PHONE_HREF}
          onClick={() => setIsOpen(false)}
        >
          Call {PHONE_NUMBER}
        </a>
        <Link
          className={styles.mobile__cta}
          href="/bookus"
          onClick={() => setIsOpen(false)}
        >
          Book Catering
        </Link>
      </section>
    </header>
  );
}

export default Header;
