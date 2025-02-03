import Image from "next/image";
import { motion } from "framer-motion";
import { CarouselButtonProps } from "../../@types";

import styles from "./Embla.module.css";

function PrevButton({ enabled, onClick }: CarouselButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.embla__button} ${styles["embla__button--prev"]}`}
      onClick={onClick}
      disabled={!enabled}
    >
      <Image
        className={styles.embla__button__svg}
        src="/right-arrow.png"
        alt="Next Arrow"
        width={100}
        height={100}
        style={{ transform: "rotate(180deg)" }}
      />
    </motion.button>
  );
}

export default PrevButton;
