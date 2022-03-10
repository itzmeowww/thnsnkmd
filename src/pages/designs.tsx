import { Container } from "../components/Container";
import { Flex, Text } from "@chakra-ui/react";
import { DesignDetail } from "../components/DesignDetail";
import { Nav } from "../components/Nav";
import designs from "../data/designs.json"
import Head from "next/head"
const design = () => {
  return (
    <Container minH="100vh" pb="10" w="100vw" >
      <Head>
        <title>designs  — Thanasan Kumdee </title>
      </Head>
      <Nav />

      <Text
        fontSize={["xl", "3xl"]}
        fontFamily="mono"
        fontWeight="bold"
        bgGradient="linear(to-l, #fd746c,#ff9068)"
        bgClip="text"
        my="10vh"
      >
        Designs
      </Text>
      <Flex flexDir="row" flexWrap="wrap" maxW="80vw" justify="center" align="center">
        {designs.map((val) => {
          return <DesignDetail url={val.url} tools={val.tools} />
        })}
      </Flex>
    </Container>
  );
};

export default design;
