import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel-react";

import styles from "../styles/Home.module.css";
import { AnimatePresence } from "framer-motion";
import IntroAnimation from "../components/IntroAnimation/IntroAnimation";
import Carousel from "../components/Carousel";

export default function Home(): JSX.Element {
  const [showIntro, toggleIntro] = useState<boolean>(true);
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const handleIntroComplete = (): void => {
    toggleIntro(false);
  };
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
