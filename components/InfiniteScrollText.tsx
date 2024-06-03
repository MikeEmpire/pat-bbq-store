import React from "react";
import styles from "../styles/ScrollText.module.css"; // Adjust the path as needed

interface InfiniteScrollTextProps {
  text: string;
}

const InfiniteScrollText = ({ text }: InfiniteScrollTextProps): JSX.Element => {
  return (
    <div className={styles.animated_text_strip}>
      <span className={styles.marquee}>{text}&nbsp;</span>
      <span className={styles.marquee}>{text}&nbsp;</span>
      <span className={styles.marquee}>{text}&nbsp;</span>
    </div>
  );
};

export default InfiniteScrollText;
