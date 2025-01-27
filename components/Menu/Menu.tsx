import { useState } from "react";
import Image from "next/image";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import { motion } from "framer-motion";

import InfiniteScrollText from "../../components/InfiniteScrollText/InfiniteScrollText";
import sectionVariant from "../../animations/variants/sectionVariant";

import styles from "./Menu.module.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox";

function Menu() {
  const [isLightboxOpen, toggleLightbox] = useState<boolean>(false);
  const openLightbox = (): void => {
    toggleLightbox(true);
  };
  const closeLightbox = (): void => {
    toggleLightbox(false);
  };
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
      className={`${styles.container__header} text-4xl`}
    >
      <InfiniteScrollText text="Check Out the Menu!" />
      <h6 className="md:text-3xl px-28 py-14">
        If you&#39;re looking for mouth-watering barbecue that&#39;s sure to
        satisfy your cravings, look no further than P Trains BBQ. Our catering
        services are perfect for any occasion, whether you&#39;re hosting a
        backyard cookout, corporate event, or wedding reception.
      </h6>
      <br />
      <figure
        className={`${styles.menu__figure} flex md:flex-row flex-col px-28`}
      >
        <Image
          height={400}
          width={200}
          onClick={openLightbox}
          alt="P Train's BBQ Menu"
          src="/CateringMenu.jpg"
          className="mb-5 md:mb-0 md:w-10/12 cursor-pointer"
        />
        <>
          <Lightbox
            open={isLightboxOpen}
            plugins={[Zoom]}
            close={closeLightbox}
            slides={[{ src: "/CateringMenu.jpg" }]}
          />
        </>
        <figcaption className="md:text-3xl">
          At P Trains BBQ, we take pride in using only the highest quality
          ingredients and traditional smoking techniques to create our delicious
          meats. From succulent pulled pork and tender brisket to juicy ribs and
          savory chicken, our menu has something for everyone.
          <br />
          <br />
          We also offer a variety of sides to complement your meal, such as
          creamy mac and cheese, tangy coleslaw, and savory baked beans. And
          don&#39;t forget about our signature sauces, which are sure to take
          your taste buds to the next level.
        </figcaption>
      </figure>
    </motion.section>
  );
}

export default Menu;
