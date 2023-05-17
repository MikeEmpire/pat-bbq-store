import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";

import useDimensions from "../modules/useDimensions";

import styles from "../styles/Header.module.css";
import { links } from "../constants";

const mobileNavStyles = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const linkVariants = {
  open: {
    transition: { staggerChildren: 0.8, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.5, staggerDirection: -1 },
  },
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};

const linksToUse = links.map((l) => (
  <motion.li
    variants={listItemVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    key={l.label}
  >
    <Link href={l.link}>{l.label}</Link>
  </motion.li>
));

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const handleHeaderClick = () => toggleOpen();
  const menuText = isOpen ? "Close Menu" : "Menu";

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
      <motion.article
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className={styles.mobile__nav}
      >
        <header onClick={handleHeaderClick}>{menuText}</header>
        <motion.article
          variants={mobileNavStyles}
          className={styles.nav__overlay}
        >
          <motion.ul variants={linkVariants}>{linksToUse}</motion.ul>
        </motion.article>
      </motion.article>
    </nav>
  );
}

export default Header;
