import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_header}>
        <header>Contact Us</header>
        <span>Return To Top</span>
      </section>
      <article>
        <ul className={styles.footer__address}>
          <li>Find us at</li>
          <li>8780 19th Street #215</li>
          <li>Racho Cucamonga, California 91701</li>
          <li>Phone: 909-994-7970</li>
          <li>Fax: 909-980-7279</li>
        </ul>
        <ul></ul>
      </article>
    </footer>
  );
}
