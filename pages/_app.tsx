import "../styles/globals.css";
import "../styles/Snipcart.module.css";
import Script from "next/script";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://cdn.tailwindcss.com" />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </Layout>
  );
}
