import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import { AnimatePresence } from "framer-motion";

import Carousel from "../components/Carousel";
import IntroAnimation from "../components/IntroAnimation/IntroAnimation";

import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  const [showIntro, toggleIntro] = useState<boolean>(true);

  const handleIntroComplete = (): void => {
    toggleIntro(false);
  };

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>
      {!showIntro && (
        <section className={styles.main}>
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
      )}
    </>
  );
}
