import Image from "next/image";
import Script from "next/script";
import { EmblaOptionsType } from "embla-carousel-react";

import styles from "../styles/Home.module.css";

import Carousel from "../components/Carousel";

import patImg from "../public/pat.png";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <>
      <section className={styles.main}>
        <div
          hidden
          id="snipcart"
          data-api-key="YWIwNzE5ZjYtMGE0Mi00YTc3LTgzNjQtZDg5ZDg5YTEzOWNjNjM3MjYyMDkxNzk5NzgwNzY2"
        />
        <Carousel slides={SLIDES} options={OPTIONS} />
        <section className={styles.about_us__container}>
          <header>About Us</header>
          <article>
            <figure>
              <Image
                src={patImg}
                alt="Pat Front Profile"
                width={300}
                height={300}
              />
              <figcaption>
                Pat Paterson is the epitome of a man with who won’t let go of
                his dream. It all began at age 10 when Pat a Minnesota native
                with a hunger for BBQ asked his mom to let him experiment with
                making his own sauce. His mom a single parent with 2 boys, Pat
                and his brother Jason agreed and allowed Pat to experiment with
                sauces.
                <article className={styles.read__more__container}>
                  <button>Read More</button>
                </article>
              </figcaption>
            </figure>
          </article>
        </section>
      </section>
      <Script src="https://cdn.snipcart.com/themes.v3.2.0/default/snipcart.js" />
    </>
  );
}
