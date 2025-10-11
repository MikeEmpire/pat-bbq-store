import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import { AnimatePresence } from "framer-motion";

import IntroAnimation from "../components/IntroAnimation/IntroAnimation";
import Carousel from "../components/Carousel";

import styles from "../styles/Home.module.css";
import "yet-another-react-lightbox/styles.css";
import { CAROUSEL_IMAGES } from "../constants";
import Head from "next/head";

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
      <Head>
        <Head>
          <title>
            P Train&apos;s BBQ | Award-Winning BBQ Catering in Los Angeles
          </title>
          <meta
            name="description"
            content="P Train's BBQ offers world-renowned BBQ catering services. Specializing in smoked brisket, ribs, pulled pork, and more. Book us for your next event!"
          />
          <meta
            name="keywords"
            content="BBQ catering, smoked brisket, BBQ ribs, pulled pork, catering services, event catering, P Train's BBQ"
          />

          {/* Open Graph for social media */}
          <meta
            property="og:title"
            content="P Train's BBQ | Award-Winning BBQ Catering"
          />
          <meta
            property="og:description"
            content="World-renowned BBQ catering services. Book us for your next event!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ptrainsbbq.com" />
          <meta property="og:image" content="https://ptrainsbbq.com/logo.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="P Train's BBQ | Award-Winning BBQ Catering"
          />
          <meta
            name="twitter:description"
            content="World-renowned BBQ catering services."
          />
          <meta
            name="twitter:image"
            content="https://ptrainsbbq.com/logo.png"
          />

          {/* Structured Data for Local Business */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "P Train's BBQ",
              image: "https://ptrainsbbq.com/logo.png",
              description: "Award-winning BBQ catering services",
              servesCuisine: "BBQ, American",
              priceRange: "$$",
              telephone: "+1-951-772-3910",
              url: "https://ptrainsbbq.com",
            })}
          </script>
        </Head>
      </Head>
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
