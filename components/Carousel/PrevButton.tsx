import Image from "next/image";
import { CarouselButtonProps } from "../../@types";

import styles from "../../styles/Embla.module.css";

function PrevButton({ enabled, onClick }: CarouselButtonProps) {
  return (
    <button
      className={`${styles.embla__button} ${styles["embla__button--prev"]}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <Image
        className={styles.embla__button__svg}
        src="/right-arrow.png"
        alt="Next Arrow"
        fill
        style={{ transform: "rotate(180deg)" }}
      />
    </button>
  );
}

export default PrevButton;
