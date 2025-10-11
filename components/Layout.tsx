/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { PropsWithChildren } from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Script from "next/script";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>P Train&apos;s BBQ</title>
        <meta name="description" content="Worlds Renown P Train's BBQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5GXHQH2R');
          `,
        }}
      />
      <Header />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5GXHQH2R"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <main>{children}</main>
      <Footer />
    </>
  );
}
