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

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>{slidesContent}</div>
        </div>
        <section className={styles.embla__nav__container}>
          <article className={styles.embla__text}>
            <h6>P Train's BBQ Sauce</h6>
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
