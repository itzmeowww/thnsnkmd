import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap');
          </style>
          <meta property="og:image" content="./me2.png"></meta>
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
                    name: "About Thanansan Kumdee",
                    item: "https://thnsnkmd.netlify.app/me",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects by Thanansan Kumdee",
                    item: "https://thnsnkmd.netlify.app/projects",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Designs by Thanansan Kumdee",
                    item: "https://thnsnkmd.netlify.app/designs",
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
