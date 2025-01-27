import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import styles from "./Embla.module.css";

import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Slide from "./Slide";

interface CarouselProps {
  slides: Array<number>;
  options: EmblaOptionsType;
}

function Carousel({ slides, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnEnabled, togglePrevBtn] = useState<boolean>(false);
  const [nextBtnEnabled, toggleNextBtn] = useState<boolean>(false);
  const [selectedIndex, setIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);
  const controls = useAnimationControls();

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    controls.start({
      opacity: [0, 0.2, 0.6, 1],
      x: [0, 50, 0],
      transition: {
        duration: 0.5,
      },
    });
  }, [emblaApi, controls]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    controls.start({
      opacity: [0, 0.2, 0.6, 1],
      x: [0, -50, 0],
      transition: {
        duration: 0.5,
      },
    });
  }, [emblaApi, controls]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return null;
    }
    setIndex(emblaApi.selectedScrollSnap());
    togglePrevBtn(emblaApi.canScrollPrev());
    toggleNextBtn(emblaApi.canScrollNext());
  }, [emblaApi, setIndex]);

  useEffect(() => {
    if (!emblaApi) {
      return () => {};
    }
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => null;
  }, [emblaApi, setScrollSnaps, onSelect]);

  const slidesContent = slides.map((index) => (
    <Slide index={index} key={index} />
  ));

  const slideCaptions: string[] = [
    "Our juicy burgers are made from fresh, locally sourced beef and grilled to perfection. Add your favorite toppings for a delicious meal!",
    "Our BBQ chicken is seasoned with our special blend of spices and slow-cooked over hickory wood for that authentic BBQ flavor.",
    "Our pulled pork is smoked low and slow for hours, then hand-pulled and seasoned with out signature rib",
    "Savor the Flavor: Where pulled pork perfection meets seasoned chicken sensation. We roll up to your favorite festivals, bringing a feast that steals the show! 🍖🔥 #BBQJoy #FoodTruckFiesta",
    "Unleash Your Taste Buds: Our BBQ magic hits the road, delivering mouthwatering moments at every pop-up. From juicy pulled pork to tantalizing vegan delights, we’re the festival flavor-makers! 🚚✨ #BBQRollsIn",
    "Rolling into Good Times: Brace yourselves for a foodie adventure! Our food truck is your ticket to pulled pork paradise, seasoned chicken bliss, and a saucy celebration you won’t forget. 🎉🍗 #BBQOnWheels",
    "Saucy Stories on Wheels: Join the caravan of flavor as we fire up festivals with the finest BBQ delights. From our famous sauces to irresistible eats, we turn every event into a taste sensation! 🔥🚚 #BBQFestivalFeast",
    "Epic Eats, Mobile Style: Your favorite BBQ joint on wheels is here to spice up the scene! Pulled pork dreams, seasoned chicken delights, and a saucy affair that makes every festival unforgettable. 🌶️🍖 #BBQMobileMagic",
  ];

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>{slidesContent}</div>
        </div>
        <section className={styles.embla__nav__container}>
          <article className={styles.embla__text}>
            <header className={styles.embla_text__header}>
              0{selectedIndex + 1}
              <div className={styles.embla_nav__text} />{" "}
              <span style={{ color: "#858585" }}>0{slides.length}</span>
            </header>
            <motion.h5 className="mb-3" animate={controls}>
              P Train&apos;s BBQ Sauce
            </motion.h5>
            <motion.h6 animate={controls} className="md:text-lg">
              {slideCaptions[selectedIndex]}
            </motion.h6>
          </article>
          <article className={styles.embla__button__container}>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </article>
        </section>
      </div>
    </>
  );
}

export default Carousel;
