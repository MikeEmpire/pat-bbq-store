import Head from "next/head";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactFormPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Contact Us | P Train&apos;s BBQ - Questions & Inquiries</title>
        <meta
          name="description"
          content="Contact P Train's BBQ for catering inquiries, questions, or feedback. We're here to help make your event unforgettable!"
        />
        <meta
          name="keywords"
          content="contact BBQ catering, catering inquiry, BBQ questions, event planning"
        />

        <meta property="og:title" content="Contact P Train's BBQ" />
        <meta
          property="og:description"
          content="Get in touch for catering inquiries and questions."
        />
      </Head>
      <ContactForm />;{" "}
    </>
  );
}
