import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import styles from "./Embla.module.css";

import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Slide from "./Slide";

interface CarouselProps {
  slides: Array<number>;
  options: EmblaOptionsType;
}

function Carousel({ slides, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnEnabled, togglePrevBtn] = useState<boolean>(false);
  const [nextBtnEnabled, toggleNextBtn] = useState<boolean>(false);
  const [selectedIndex, setIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);
  const controls = useAnimationControls();

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    controls.start({
      opacity: [0, 0.2, 0.6, 1],
      x: [0, 50, 0],
      transition: {
        duration: 0.5,
      },
    });
  }, [emblaApi, controls]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    controls.start({
      opacity: [0, 0.2, 0.6, 1],
      x: [0, -50, 0],
      transition: {
        duration: 0.5,
      },
    });
  }, [emblaApi, controls]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return null;
    }
    setIndex(emblaApi.selectedScrollSnap());
    togglePrevBtn(emblaApi.canScrollPrev());
    toggleNextBtn(emblaApi.canScrollNext());
  }, [emblaApi, setIndex]);

  useEffect(() => {
    if (!emblaApi) {
      return () => {};
    }
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => null;
  }, [emblaApi, setScrollSnaps, onSelect]);

  const slidesContent = slides.map((index) => (
    <Slide index={index} key={index} />
  ));

  const slideCaptions: string[] = [
    "\"I'm from Los Angeles and I have never tasted bbq this good and it's not even close. I can almost assure you that the cook understands the science behind cooking amazing ribs. The quality speaks for itself. The customer service is also amazing. My children loves their train. We were greeted with a smile and taken care of, almost as if we were family and not just regular customers. One of my favorite go to spots. I highly recommend this to anyone that loves bbq. They will not let you down.\" - Uchenne L.",
    '"I only get to see them once a year when the Thomas the Train event happens in November. But I think these guys nailed it with their BBQ. The ribs have that snappy texture when you bite into it. Its so nice, it\'s something I look forward to when I go to that event. Hope to see them next year. Oh yeah. And the sauce was outstanding as well. I liked the one here way more than some of the well known BBQ places in San Diego." -Kapo K.',
    '"The best grilled chicken of my life. I ordered a while chicken, and it didn\'t disappoint. I could have eaten the whole thing by myself. My party loved it. Truly gourmet." -Lynn P.',
    '"I have eaten a lot of bbq places in my life, but Ptrains is by far some of the tastiest food I\'ve had! I saw them at rolling loud and asked if they catered. Found out they ALSO have bbq chicken pizza!! Soooo good! Highly recommend if you want great tasting food at your party!!" - Cheyenne P.',
    '"Ptrains BBQ was the best catering decision I made for my event! Caira\'s customer service is superior. She was great at communicating up until and the day of my event. All of my guests were impressed and gave outstanding reviews of the food. I ordered the trip tip, ribs, chicken, macaroni and cheese, mashed potatoes and bbq beans and everything was so delicious. My guests are still raving about the bbq and there was plenty of food for all. I will definitely book Ptrains BBQ again." - Chantel P.',
    '"We have had the privilege of having Ptrains BBQ at the Huck Finn Jubilee the last two years! Not only is their BBQ mouth watering delicious, but the owner Caira is such an amazing and kind person to work with. Her story is inspiring and her energy is always positive. Would highly recommend their catering your next event." - Nicki M',
    '"We recently held our annual law enforcement appreciation ceremony at March Air Field Museum and PTrain was our caterer. Not only were they on time, brought their own signage for their food, but they were pleasant, prepared, respectful and friendly. Our 500+ guests were able to enjoy an evening with the best smoked brisket and bbq chicken. (appetizers included salad, corn muffins, macaroni salad, potato salad, bbq beans) Guests were gushing over the amount of food and how delicious everything tasted. They also provided appetizers and deserts and two beverage stations that included water, ice tea, lemonade and coffee. The peach and berry cobbler was outstanding. I can\'t recommend them enough." - Marta N',
    '"We catered PTtrains BBQ for Thanksgiving this year and everything was amazing! The turkey, chicken, ham, Mac and cheese and stuffing all had so much flavor. The turkey, ham and Mac and cheese were smoked and were delicious. It came with cornbread, cranberry sauce and PTrains bbq sauce. All our guest were so happy! We had plenty for leftovers and everyone left happy! Thank you so much, Caira! We\'ll be reaching out next year again." - Melanie L.',
    "\"I'm having Ptrains withdrawals! We had it for our backyard marriage celebration and it was PERFECT! Service was excellent and set everything up nicely while letting us know tips on hosting and where everything was. We had SO many compliments on the food. We have not experienced mac and cheese like this- a must have!  - Anna V. ",
    '"The food was great, I\'m still thinking about the mac n cheese! I was blown away by the kindness of Caira and Rich! More than anything quality eats and portions were generous. Would recommend.  - Joey M. "',
    '"Awesome Service and Food!! Thank you Caira!! Highly recommend to all! For any event or party, they will take care of setting up everything and the food is excellent.  - Brent L. ',
    "\"Food and service is definitely 10/10 would recommend. We also got a jar of BBQ sauce to take home and it was the best on literally everything. We can't wait to get more in the near future to have on deck for any meal. If you haven't checked them out yet - this is your sign!  -Bel G.\" ",
    '"Love the Mac and cheese! ribs fall off the bone and the chefs are family they are very kind and loving, being with them made me feel like I was one of their own.  -Paul P. "',
    '"We have had the privilege of having Ptrains BBQ at the Huck Finn Jubilee the last two years! Not only is their BBQ mouth watering delicious, but the owner Caira is such an amazing and kind person to work with. Her story is inspiring and her energy is always positive. Would highly recommend their catering your next event.  -Nicki M"',
    '"If you haven\'t been to Ptrains California BBQ yet, do yourself a favor and go! The kind of place where the service makes you smile, & the food makes you stay. Everything is cooked to perfection, & you can taste the love in every bite!  -Delia C"',
    '"You have not lived until you have tried these ribs!!!! Very tender and packed with flavor! If you\'re looking for authentic BBQ with excellent service look no further!  -Skai T"',
    '"We catered PTtrains BBQ for Thanksgiving this year and everything was amazing! The turkey, chicken, ham, Mac and cheese and stuffing all had so much flavor. The turkey, ham and Mac and cheese were smoked and were delicious. It came with cornbread, cranberry sauce and PIrains bbq sauce. All our guest were so happy! We had plenty for leftovers and everyone left happy! Thank you so much, Caira! We\'ll be reaching out next year again.  -Melanie L"',
  ];

  const currentSlideNumber =
    selectedIndex > 8 ? selectedIndex + 1 : `0${selectedIndex + 1}`;

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>{slidesContent}</div>
        </div>
        <section className={styles.embla__nav__container}>
          <article className={styles.embla__text}>
            <header className={styles.embla_text__header}>
              {currentSlideNumber}
              <div className={styles.embla_nav__text} />{" "}
              <span style={{ color: "#858585" }}>{slides.length}</span>
            </header>
            <motion.h6 animate={controls} className="md:text-lg">
              {slideCaptions[selectedIndex]}
            </motion.h6>
          </article>
          <article className={styles.embla__button__container}>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          </article>
        </section>
      </div>
    </>
  );
}

export default Carousel;
