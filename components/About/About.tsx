import { motion } from "framer-motion";
import Image from "next/image";
import styles from './About.module.css'
import sectionVariant from "../../animations/variants/sectionVariant";
import patImg from "../../public/pat.png";

export default function About(): JSX.Element {
  return (
    <section className={`${styles.about_us__section} px-4 md:px-16 lg:px-56 py-12`} id="about">
      {/* Main Header */}
      <motion.header
        animate="visible"
        className="mb-8 text-4xl md:text-5xl font-bold"
        initial="hidden"
        variants={sectionVariant}
      >
        Welcome to Ptrain's California BBQ
      </motion.header>

      {/* Introduction */}
      <motion.div
        animate="visible"
        className="mb-12 text-lg md:text-2xl leading-relaxed"
        initial="hidden"
        variants={sectionVariant}
      >
        <p className="mb-6">
          At Ptrain's California BBQ, we're passionate about bringing authentic,
          mouthwatering BBQ catering to every corner of Southern California.
          From Rancho Cucamonga to Los Angeles County, Orange County, and the
          Inland Empire, our team proudly serves up smoky perfection for every
          occasion — from corporate events to private parties and weddings.
        </p>
      </motion.div>

      {/* Southern California's BBQ Catering Specialists */}
      <motion.div
        animate="visible"
        className="mb-12"
        initial="hidden"
        variants={sectionVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Southern California's BBQ Catering Specialists
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          Whether you're hosting a company picnic, employee appreciation lunch,
          wedding reception, or a large festival, we offer affordable BBQ
          catering packages designed to impress. Choose from full-service BBQ
          catering, drop-off catering, or on-site BBQ setups — perfect for
          events of all sizes.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          We specialize in large event catering for 500 to 5,000+ guests, making
          Ptrain's California BBQ one of the most trusted names in corporate
          catering Southern California.
        </p>
      </motion.div>

      {/* Our Signature Menu */}
      <motion.div
        animate="visible"
        className="mb-12"
        initial="hidden"
        variants={sectionVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Signature Menu
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          We're known for our slow-smoked brisket, tender Dino ribs, loaded
          baked potato bar, pulled pork, grilled chicken, and authentic
          Southern-style BBQ that's cooked low and slow to perfection. Our
          house-made BBQ sauce and smoked mac and cheese bring that irresistible
          backyard BBQ flavor that keeps guests coming back for seconds.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Every bite represents what we call <strong>Destination BBQ</strong> —
          a full flavor experience that turns your event into something
          unforgettable.
        </p>
      </motion.div>

      {/* Perfect for Any Occasion */}
      <motion.div
        animate="visible"
        className="mb-12"
        initial="hidden"
        variants={sectionVariant}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Perfect for Any Occasion
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          Ptrain's California BBQ proudly caters:
        </p>
        <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed space-y-2 ml-4">
          <li>Corporate lunches & employee appreciation events</li>
          <li>Company picnics & business gatherings</li>
          <li>Weddings & private parties</li>
          <li>Festivals, fairs, and large-scale events</li>
        </ul>
        <p className="text-lg md:text-xl leading-relaxed mt-6">
          Whether you're searching for <strong>BBQ catering near me</strong>,
          <strong> corporate lunch catering SoCal</strong>, or
          <strong> wedding BBQ buffet catering in Southern California</strong>,
          we've got you covered.
        </p>
      </motion.div>

      {/* Our History Section */}
      <motion.div
        animate="visible"
        initial="hidden"
        variants={sectionVariant}
        className="mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our History</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12">
            <Image
              src={patImg}
              alt="Pat 'Ptrain' Patterson - Founder of Ptrain's BBQ"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-7/12">
            <p className="text-lg md:text-2xl leading-relaxed mb-4">
              For us, P Train's BBQ is a legacy that is an honor to represent.
              What started as Pat "Ptrain" Patterson's dream of serving real
              wood smoked pizzas, his original bbq sauces and the perfect Tri
              Tip sandwich has turned into so much more.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed">
              When our dad was diagnosed and shortly later passed away from
              cancer suddenly in 2021, it was a no-brainer to continue that
              dream. I've been smoking BBQ since I was 11, early mornings-late
              nights with my dad. He taught us that with hard work, patience and
              love you can achieve any dream that you have. We worked at
              festivals, lunches, weddings, football games, conventions…
              learning the invaluable skills he left us with.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
