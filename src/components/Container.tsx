import { Flex, useColorMode, FlexProps } from "@chakra-ui/react";
import Head from "next/head";

interface ContainerProps extends FlexProps {
  myTitle?: string;
  myDesc?: string;
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
          content={
            props.myDesc !== undefined
              ? "Hi! I'm Thanasan Kumdee, a random student with strong passions in coding, music, and art."
              : props.myDesc
          }
        ></meta>
      </Head>
      <Flex
        overflowX="hidden"
        maxW="100%"
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
