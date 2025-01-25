import { motion, useAnimation } from "framer-motion";

import sectionVariant from "../../animations/variants/sectionVariant";
import InfiniteScrollText from "../InfiniteScrollText/InfiniteScrollText";

export default function BookUs(): JSX.Element {
  const sectionControl = useAnimation();
  return (
    <motion.section
      animate={sectionControl}
      variants={sectionVariant}
      initial="hidden"
    >
      <InfiniteScrollText text="Book With Us!" />
      <h6 className="text-3xl">
        If you&#39;re ready to book P Trains BBQ for your upcoming event, or if
        you have any questions about our catering services, we&#39;d love to
        hear from you! Simply fill out the contact form below and one of our
        friendly team members will be in touch shortly. <br /> <br />
        We understand that planning an event can be stressful, which is why
        we&#39;re committed to making the catering process as easy and seamless
        as possible. By filling out the contact form, you&#39;ll be taking the
        first step toward a delicious and stress-free event.
      </h6>
    </motion.section>
  );
}
