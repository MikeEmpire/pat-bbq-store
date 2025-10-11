import Head from "next/head";
import BookUs from "../../components/BookUs/BookUs";

export default function BookUsPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Book Catering | P Train&apos;s BBQ - Get a Quote Today</title>
        <meta
          name="description"
          content="Book P Train's BBQ for your next event. We cater weddings, corporate events, parties, and more. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="book BBQ catering, event catering quote, wedding catering, corporate catering, party catering"
        />

        <meta property="og:title" content="Book P Train's BBQ Catering" />
        <meta
          property="og:description"
          content="Award-winning BBQ catering for your next event. Get a free quote!"
        />
      </Head>
      <BookUs />
    </>
  );
}
