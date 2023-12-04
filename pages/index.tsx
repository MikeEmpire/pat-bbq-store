import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { EmblaOptionsType } from "embla-carousel-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Home.module.css";

import ContactForm from "../components/ContactForm";
import Carousel from "../components/Carousel";

import patImg from "../public/pat.png";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: -50 },
};

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const control = useAnimation();
  const imageControl = useAnimation();
  const menuControl = useAnimation();
  const bookUsControl = useAnimation();
  const contactFormControl = useAnimation();
  const [ref, inView] = useInView();
  const [imageRef, isImageInView] = useInView();
  const [menuRef, isMenuInView] = useInView();
  const [bookUsRef, isBookUsInView] = useInView();
  const [contactFormRef, isContactFormInView] = useInView();
  useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");
    isMenuInView ? menuControl.start("visible") : menuControl.start("hidden");
    isContactFormInView
      ? contactFormControl.start("visible")
      : contactFormControl.start("hidden");
    isBookUsInView
      ? bookUsControl.start("visible")
      : bookUsControl.start("hidden");
    isImageInView
      ? imageControl.start("visible")
      : imageControl.start("hidden");
  }, [
    bookUsControl,
    contactFormControl,
    control,
    imageControl,
    inView,
    isBookUsInView,
    isContactFormInView,
    isImageInView,
    isMenuInView,
    menuControl,
  ]);
  return (
    <>
      <section className={styles.main}>
        <div
          hidden
          id="snipcart"
          data-api-key="YWIwNzE5ZjYtMGE0Mi00YTc3LTgzNjQtZDg5ZDg5YTEzOWNjNjM3MjYyMDkxNzk5NzgwNzY2"
        />
        <Carousel slides={SLIDES} options={OPTIONS} />
        <section id="about" className={styles.about_us__container}>
          <motion.header
            variants={boxVariant}
            initial="hidden"
            animate={control}
            ref={ref}
            className={styles.container__header}
          >
            About Us
          </motion.header>
          <motion.h4
            className={`${styles.about_us__header} text-3xl`}
            initial="hidden"
            variants={boxVariant}
            animate={control}
            ref={ref}
          >
            For us, P Train&#39;s BBQ is a legacy that is an honor to represent.
            What started as Pat “Ptrain” Patterson&#39;s dream of serving real
            wood smoked pizzas, his original bbq sauces and the perfect Tri Tip
            sandwich has turned into so much more.{" "}
          </motion.h4>
          <motion.figure
            ref={imageRef}
            animate={imageControl}
            initial="hidden"
            variants={boxVariant}
            className={styles.history__container}
          >
            <header className={styles.history__header}>Our History</header>
            <Image
              src={patImg}
              alt="Pat Front Profile"
              width={300}
              height={300}
            />
            <figcaption>
              When our dad was diagnosed and shortly later passed away from
              cancer suddenly in 2021, it was a no-brainer to continue that
              dream. I&#39;ve been smoking BBQ since I was 11, early
              mornings-late nights with my dad. He taught us that with hard
              work, patience and love you can achieve any dream that you have.
              We worked at festivals, lunches, weddings, football games,
              conventions… learning the invaluable skills he left us with.{" "}
            </figcaption>
          </motion.figure>
        </section>
        <motion.section
          variants={boxVariant}
          initial="hidden"
          id="homemenu"
          animate={menuControl}
          ref={menuRef}
          className={styles.section__container}
        >
          <header className={styles.container__header}>Menu</header>
          <h6>
            If you&#39;re looking for mouth-watering barbecue that&#39;s sure to
            satisfy your cravings, look no further than P Trains BBQ. Our
            catering services are perfect for any occasion, whether you&#39;re
            hosting a backyard cookout, corporate event, or wedding reception.
          </h6>
          <br />
          <figure className={styles.menu__figure}>
            <Image
              height={400}
              width={200}
              alt="P Train's BBQ Menu"
              src="/CateringMenu.jpg"
            />
            <figcaption>
              At P Trains BBQ, we take pride in using only the highest quality
              ingredients and traditional smoking techniques to create our
              delicious meats. From succulent pulled pork and tender brisket to
              juicy ribs and savory chicken, our menu has something for
              everyone.
              <br />
              <br />
              We also offer a variety of sides to complement your meal, such as
              creamy mac and cheese, tangy coleslaw, and savory baked beans. And
              don&#39;t forget about our signature sauces, which are sure to
              take your taste buds to the next level.
            </figcaption>
          </figure>
        </motion.section>
        <motion.section
          id="homebookus"
          ref={bookUsRef}
          variants={boxVariant}
          initial="hidden"
          animate={bookUsControl}
          className={styles.section__container}
          style={{ padding: "0 6%", textAlign: "center" }}
        >
          <header className={styles.container__header}>Book Us</header>
          <h6>
            If you&#39;re ready to book P Trains BBQ for your upcoming event, or
            if you have any questions about our catering services, we&#39;d love
            to hear from you! Simply fill out the contact form below and one of
            our friendly team members will be in touch shortly. <br /> <br />
            We understand that planning an event can be stressful, which is why
            we&#39;re committed to making the catering process as easy and
            seamless as possible. By filling out the contact form, you&#39;ll be
            taking the first step toward a delicious and stress-free event.
          </h6>
        </motion.section>
        <motion.section
          id="homecontact"
          ref={contactFormRef}
          variants={boxVariant}
          initial="hidden"
          animate={contactFormControl}
          className={styles.section__container}
        >
          <header className={styles.container__header}>Get in touch</header>
          <ContactForm />
        </motion.section>
      </section>
      <Script type="text/css" src="https://cdn.tailwindcss.com" />
    </>
  );
}
