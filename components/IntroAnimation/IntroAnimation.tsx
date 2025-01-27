import { motion } from "framer-motion";
import React from "react";

import styles from "./IntroAnimation.module.css";

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

const textCSS =
  "text-white text-4xl md:text-6xl lg:text-8xl my-2 mx-2 text-wrap";

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
      <motion.div variants={textVariants} className={textCSS}>
        Welcome
      </motion.div>
      <motion.div variants={textVariants} className={textCSS}>
        to
      </motion.div>
      <motion.div variants={textVariants} className={textCSS}>
        PTrain&lsquo;s
      </motion.div>
      <motion.div variants={textVariants} className={textCSS}>
        BBQ
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
