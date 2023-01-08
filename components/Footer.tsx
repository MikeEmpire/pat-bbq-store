import Image from "next/image";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_header}>
        <header>Contact Us</header>
        <span>Return To Top</span>
      </section>
      <article className={styles.footer__info_container}>
        <ul className={styles.footer__address}>
          <li>Find us at</li>
        </ul>
        <ul className={styles.footer__social_icons}>
          <li>
            <Image
              height={25}
              width={20}
              alt="Instagram Logo"
              src="/instagram-icon.png"
            />
          </li>
          <li>
            <Image
              height={25}
              width={20}
              alt="facebook Logo"
              src="/facebook-icon.png"
            />
          </li>
          <li>
            <Image
              height={25}
              width={20}
              alt="twitter Logo"
              src="/twitter-icon.png"
            />
          </li>
        </ul>
      </article>
    </footer>
  );
}
