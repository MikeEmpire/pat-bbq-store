import Image from "next/image";
// import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav__container}>
      <article className={styles.image__wrapper}>
        <Image height={60} width={120} alt="custom logo" src="/logo.png" />
      </article>
      <ul className={styles.nav__list}>
        <li>Home</li>
        <li>Menu</li>
        <li>Book Us</li>
        <li>About Us</li>
        <li>Contact</li>
        <li className="buy-link">Buy</li>
      </ul>
    </nav>
  );
}
