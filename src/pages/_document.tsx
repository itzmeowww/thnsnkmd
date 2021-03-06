import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap');
          </style>

          <link rel="icon" href="./icon.jpg"></link>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "About Thanasan Kumdee",
                    item: "https://thnsnkmd.vercel.app/me",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects by Thanasan Kumdee",
                    item: "https://thnsnkmd.vercel.app/projects",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Designs by Thanasan Kumdee",
                    item: "https://thnsnkmd.vercel.app/designs",
                  },
                ],
              }),
            }}
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
