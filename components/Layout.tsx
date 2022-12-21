import Footer from "./Footer";
import Header from "./Header";

import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
