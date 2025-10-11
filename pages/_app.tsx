import Script from "next/script";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.dataLayer = window.dataLayer = []
      window.dataLayer.push({
        event: 'pageview',
        page: url
      })
    }

    handleRouteChange(router.pathname)

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, router.pathname])
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
