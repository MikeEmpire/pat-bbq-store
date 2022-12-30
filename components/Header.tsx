import Image from "next/image";
// import Link from "next/link";

import { PTrainMenuLink } from "../@types";

import styles from "../styles/Header.module.css";

const links: Array<PTrainMenuLink> = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Menu",
    link: "#",
  },
  {
    label: "Book Us",
    link: "#",
  },
  {
    label: "About Us",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Buy",
    link: "#",
  },
];

const linksToUse = links.map((l) => <li key={l.label}>{l.label}</li>);

export default function Header() {
  return (
    <nav className={styles.nav__container}>
      <article className={styles.image__wrapper}>
        <Image
          className={styles.logo}
          height={60}
          width={120}
          alt="custom logo"
          src="/logo.png"
        />
      </article>
      <ul className={styles.nav__list}>{linksToUse}</ul>
    </nav>
  );
}
