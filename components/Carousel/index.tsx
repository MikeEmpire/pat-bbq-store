import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import styles from "../../styles/Embla.module.css";

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

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

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
            <h5>P Train&apos;s BBQ Sauce</h5>
            <h6>{slideCaptions[selectedIndex]}</h6>
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
