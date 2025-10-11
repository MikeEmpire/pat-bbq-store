import Head from "next/head";
import Menu from "../../components/Menu/Menu";

export default function MenuPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>
          Menu | P Train&apos;s BBQ Catering - Brisket, Ribs, Pulled Pork
        </title>
        <meta
          name="description"
          content="View P Train's BBQ full catering menu. We specialize in smoked brisket, baby back ribs, pulled pork, smoked chicken, and homemade sides. Perfect for events of all sizes."
        />
        <meta
          name="keywords"
          content="BBQ menu, smoked brisket, baby back ribs, pulled pork, BBQ sides, catering menu, smoked meats"
        />

        <meta property="og:title" content="P Train's BBQ Catering Menu" />
        <meta
          property="og:description"
          content="Smoked brisket, ribs, pulled pork, and more. View our full catering menu."
        />
        <meta
          property="og:image"
          content="https://ptrainsbbq.com/menu/2025PtrainsCateringMenu.png"
        />

        {/* Menu Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            name: "P Train's BBQ Catering Menu",
            description:
              "Full catering menu featuring smoked meats and homemade sides",
            hasMenuSection: [
              {
                "@type": "MenuSection",
                name: "Smoked Meats",
                hasMenuItem: [
                  {
                    "@type": "MenuItem",
                    name: "Smoked Brisket",
                    description: "Slow-smoked Texas-style brisket",
                  },
                  {
                    "@type": "MenuItem",
                    name: "Baby Back Ribs",
                    description: "Fall-off-the-bone tender ribs",
                  },
                  {
                    "@type": "MenuItem",
                    name: "Pulled Pork",
                    description: "Hickory smoked pulled pork",
                  },
                ],
              },
            ],
          })}
        </script>
      </Head>
      <Menu />{" "}
    </>
  );
}
