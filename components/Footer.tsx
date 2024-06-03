import Image from "next/image";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <header className={styles.footer_header}>Contact Us</header>
      <section className={styles.footer_info_outer__container}>
        <article className={styles.footer_info__container}>
          <h6>For inquiries, call us at</h6>
          <h6>Phone: 951-772-3910</h6>
        </article>
        <article
          className={styles.footer_info__container}
          style={{ display: "flex", gap: "19px", marginBottom: "10px" }}
        >
          <Image
            width={27}
            height={34}
            src="/twitter-icon.png"
            alt="twitter link"
          />
          <Image
            width={27}
            height={34}
            src="/instagram-icon.png"
            alt="instagram link"
          />
          <Image
            width={27}
            height={34}
            src="/facebook-icon.png"
            alt="facebook link"
          />
        </article>
      </section>
    </footer>
  );
}
