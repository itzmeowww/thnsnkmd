import {
  Link as ChakraLink,
  Flex,
  Button,
  Box,
  Text,
  ScaleFade,
} from "@chakra-ui/react";

import { Container } from "../components/Container";
import { useRef } from "react";
import Link from "next/link";
import Head from "next/head"
import { Card } from "../components/Card";
import projects from "../data/link.json";
import { Project } from "../models/project";

const Index = () => {
  const pg2ref = useRef<HTMLDivElement>(null)!;

  const scroll2 = () => {
    pg2ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const data: Project[] = projects.sort((a, b) => {
    const dateA = Date.parse(a.date);
    const dateB = Date.parse(b.date);
    return dateB - dateA
  });



  return (
    <Container >
      <Head>
        <title>Thanasan Kumdee</title>
        <meta name="description" content="Thanasan Kumdee's personal website: projects and info" />
        <meta property="og:image" content="https://thnsnkmd.netlify.app/preview.png" />
      </Head>
      <Flex
        h="80vh"
        w="100%"
        justify="flex-start"
        flexDir="column"
        align="center"
      >

        <Box height="40vh" w="100%"></Box>

        <ScaleFade in={true} >
          <Text
            fontSize={["xl", "3xl"]}
            fontFamily="mono"
            fontWeight="bold"
            bgGradient="linear(to-l, #fd746c,#ff9068)"
            bgClip="text"

          >
            Hi!, I'm Thanasan Kumdee
          </Text>

          <ChakraLink as={Link} href={"/me"}>
            <Button
              my="5px"
              size="sm"
              fontFamily="mono"
              fontWeight="thin"
              variant="outline"
            >
              about me
            </Button>
          </ChakraLink>
          <Button
            ml="10px"
            my="5px"
            size="sm"
            variant="outline"
            fontFamily="mono"
            fontWeight="thin"
            onClick={scroll2}
          >
            projects
          </Button>
          <ChakraLink as={Link} href={"/designs"}>
            <Button
              ml="10px"
              my="5px"
              size="sm"
              variant="outline"
              fontFamily="mono"
              fontWeight="thin"

            >
              designs
            </Button>
          </ChakraLink>
          {/* <Text
            fontSize={["sm", "md"]}
            fontFamily="mono"
            fontWeight="thin"
            color="grey"
          >
            but, what's below?
          </Text> */}
        </ScaleFade>
        <Box height="20vh" w="100%"></Box>
        {/* <ScaleFade in={true}>
          <Button
            size="sm"
            fontFamily="mono"
            fontWeight="thin"
            onClick={scroll}
          >
            👇 bring me there 👇
          </Button>
        </ScaleFade> */}
      </Flex>
      <Flex
        w="100%"
        justify="flex-start"
        flexDir="column"
        align="center"
        minH="100vh"
        pb="20vh"
      >
        <Box ref={pg2ref} w="100%" h={["0vh"]}></Box>
        <ScaleFade in>
          <Text
            fontSize={["sm", "md"]}
            fontFamily="mono"
            fontWeight="thin"
            color="white"
          >
            💡 my projects 💡
          </Text>
        </ScaleFade>
        <Flex
          id="projects"
          align="flex-start"
          justify="center"
          w="80vw"
          h="100%"
          flexDir="row"
          flexWrap="wrap"
          pt="20px"
        >
          {data.map((x, key) => {
            return (
              <ScaleFade key={key} in={true} unmountOnExit={true}>
                <Card

                  imgSrc={x.imgSrc}
                  url={x.url}
                  name={x.name}
                ></Card>
              </ScaleFade>
            );
          })}
        </Flex>
      </Flex>
    </Container >
  );
};

export default Index;
