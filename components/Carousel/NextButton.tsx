import Image from "next/image";
import { motion } from "framer-motion";
import { CarouselButtonProps } from "../../@types";

import styles from "./Embla.module.css";

function NextButton({ enabled, onClick }: CarouselButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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
    </motion.button>
  );
}

export default NextButton;
