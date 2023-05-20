import Image from "next/image";

import styles from "../../styles/Embla.module.css";

interface SlideProps {
  index: number;
}
function Slide({ index }: SlideProps) {
  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__slide__number}>
        <span>{index + 1}</span>
      </div>
      <Image
        className={styles.embla__slide__img}
        src={`/slide-${index + 1}.png`}
        alt="slide image"
        width={300}
        height={600}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Slide;
