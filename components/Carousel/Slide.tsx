/* eslint-disable @next/next/no-img-element */

import styles from "./Embla.module.css";

import { CAROUSEL_IMAGES } from "../../constants";

interface SlideProps {
  index: number;
}

function Slide({ index }: SlideProps) {
  const src = CAROUSEL_IMAGES[index];
  const imgStyle =
    index !== 6 ? { width: "100%" } : { width: "100%", height: "auto" };
  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__slide__number}>
        <span>{index + 1}</span>
      </div>
      <img
        className={styles.embla__slide__img}
        src={src}
        alt="slide image"
        width={300}
        style={imgStyle}
      />
    </div>
  );
}

export default Slide;
