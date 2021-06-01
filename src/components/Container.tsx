import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";
import Head from "next/head";

interface ContainerProps extends FlexProps {
  myTitle?: string;
}
export const Container = (props: ContainerProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <>
      <Head>
        <title>
          {props.myTitle !== undefined
            ? props.myTitle
            : "Thanasan Kumdee | ItzMeOwww"}
        </title>
        <meta
          name="description"
          content="Hi! I'm Thanasan Kumdee, a random student with strong passions in coding, music, and art."
        ></meta>
        <meta property="og:image" content="./me2.png"></meta>
        <script type="application/ld+json">
          {{
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Thanasan Kumdee",
            sameAs: [
              "https://www.facebook.com/thanasan.kumdee/",
              "https://github.com/itzmeowww",
              "https://www.instagram.com/thnsn_kmd/",
            ],
          }}
        </script>
        <link rel="icon" href="./icon.jpg"></link>
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </>
  );
};
