import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import sectionVariant from "../../animations/variants/sectionVariant";
import patImg from "../../public/pat.png";

export default function About(): JSX.Element {
  return (
    <section className="px-56" id="about">
      <motion.header
        animate="visible"
        className="mb-8 text-4xl"
        initial="hidden"
        variants={sectionVariant}
      >
        About Us
      </motion.header>
      <motion.h4
        animate="visible"
        className="md:text-3xl sm:text-lg px-3 sm:p-0"
        initial="hidden"
        variants={sectionVariant}
      >
        For us, P Train&#39;s BBQ is a legacy that is an honor to represent.
        What started as Pat “Ptrain” Patterson&#39;s dream of serving real wood
        smoked pizzas, his original bbq sauces and the perfect Tri Tip sandwich
        has turned into so much more.
      </motion.h4>
      <motion.figure
        animate="visible"
        initial="hidden"
        variants={sectionVariant}
      >
        <header className="text-4xl">Our History</header>
        <figure className="flex md:flex-row flex-col items-center justify-center gap-5">
          <Image src={patImg} alt="Pat Front Profile" className="w-5/12" />
          <figcaption className="md:text-3xl sm:text-lg">
            When our dad was diagnosed and shortly later passed away from cancer
            suddenly in 2021, it was a no-brainer to continue that dream.
            I&#39;ve been smoking BBQ since I was 11, early mornings-late nights
            with my dad. He taught us that with hard work, patience and love you
            can achieve any dream that you have. We worked at festivals,
            lunches, weddings, football games, conventions… learning the
            invaluable skills he left us with.
          </figcaption>
        </figure>
      </motion.figure>
    </section>
  );
}
