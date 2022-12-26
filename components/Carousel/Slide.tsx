import Image from "next/image";

import styles from "../../styles/Embla.module.css";

import imageByIndex from "../../modules/imageByIndex";

interface SlideProps {
  index: number;
}
function Slide({ index }: SlideProps) {
  const imageData = imageByIndex(index);
  const { src } = imageData;
  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__slide__number}>
        <span>{index + 1}</span>
      </div>
      <Image
        className={styles.embla__slide__img}
        src={src}
        alt="slide image"
        width={300}
        height={600}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Slide;
