/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { PropsWithChildren } from "react";

import Footer from "./Footer";
import Header from "./Header";

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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
