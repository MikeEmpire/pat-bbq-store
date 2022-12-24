import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pat's BBQ Train</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link rel="stylesheet" href="../styles/snipcart.css" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <script src="https://cdn.snipcart.com/themes.v3.2.0/default/snipcart.js"></script>
        <div
          hidden
          id="snipcart"
          data-api-key="YWIwNzE5ZjYtMGE0Mi00YTc3LTgzNjQtZDg5ZDg5YTEzOWNjNjM3MjYyMDkxNzk5NzgwNzY2"
        ></div>
      </Head>
      <main className={styles.main}>
        <p className={styles.mainFont}>Get started by editing&nbsp;</p>
      </main>
    </>
  );
}
