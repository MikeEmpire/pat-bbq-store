import Head from "next/head";
import About from "../../components/About/About";

export default function AboutUsPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>About Us | P Train&apos;s BBQ - Our Story & Team</title>
        <meta
          name="description"
          content="Learn about P Train's BBQ - our story, our passion for authentic BBQ, and our commitment to making your event special with world-class catering."
        />
        <meta
          name="keywords"
          content="about P Train's BBQ, BBQ story, catering team, authentic BBQ"
        />

        <meta property="og:title" content="About P Train's BBQ" />
        <meta
          property="og:description"
          content="Our story and passion for authentic BBQ catering."
        />
      </Head>
      <About />
    </>
  );
}
