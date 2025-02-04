import styles from "./Embla.module.css";

import { CAROUSEL_IMAGES, slideHeaders } from "../../constants";
import Image from "next/image";

interface SlideProps {
  index: number;
}

function Slide({ index }: SlideProps) {
  const src = CAROUSEL_IMAGES[index];
  console.log(src);
  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__slide__number}>
        <span>{index + 1}</span>
      </div>
      <Image
        fill
        className="object-contain"
        src={src}
        alt={slideHeaders[index]}
      />
    </div>
  );
}

export default Slide;
