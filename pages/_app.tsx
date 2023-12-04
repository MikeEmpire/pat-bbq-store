import Script from "next/script";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://cdn.tailwindcss.com" />
      <Script
        type="text/javascript"
<<<<<<< HEAD
=======
        src="https://cdn.snipcart.com/themes.v3.2.0/default/snipcart.js"
      />
      <Script
        type="text/javascript"
>>>>>>> f1be080 (updated images and added tailwind for responsive design. Also updated nav links)
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </Layout>
  );
}
