import Image from "next/image";
import { CarouselButtonProps } from "../../@types";

import styles from "../../styles/Embla.module.css";

function NextButton({ enabled, onClick }: CarouselButtonProps) {
  return (
    <button
      className={`${styles.embla__button} ${styles["embla__button--next"]}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <Image
        className={styles.embla__button__svg}
        src="/right-arrow.png"
				alt="Next Arrow"
        width={100}
        height={100}
      />
    </button>
  );
}

export default NextButton;
