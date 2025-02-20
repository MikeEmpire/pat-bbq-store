import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import { AnimatePresence } from "framer-motion";

import IntroAnimation from "../components/IntroAnimation/IntroAnimation";
import Carousel from "../components/Carousel";

import styles from "../styles/Home.module.css";
import "yet-another-react-lightbox/styles.css";
import { CAROUSEL_IMAGES } from "../constants";

export default function Home(): JSX.Element {
  const [showIntro, toggleIntro] = useState<boolean>(true);
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = CAROUSEL_IMAGES.length;
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
