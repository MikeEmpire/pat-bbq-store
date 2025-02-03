import { motion } from "framer-motion";
import React from "react";

import styles from "../styles/IntroAnimation.module.css"; // Create this CSS module for styling

const introVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 5000); // 5 seconds duration for the intro
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.introContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={introVariants}
    >
      <motion.div variants={textVariants} className={styles.introText}>
        Welcome
      </motion.div>
      <motion.div variants={textVariants} className={styles.introText}>
        to
      </motion.div>
      <motion.div variants={textVariants} className={styles.introText}>
        Ptrains
      </motion.div>
      <motion.div variants={textVariants} className={styles.introText}>
        BBQ
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
