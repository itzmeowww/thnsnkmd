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
import { Card } from "../components/Card";
import linkList from "../data/link.json";

const Index = () => {
  const pg2ref = useRef<HTMLDivElement>(null)!;

  const scroll = () => {
    pg2ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Container myTitle="Thanasan Kumdee">
      <Flex
        h="100vh"
        w="100%"
        justify="flex-start"
        flexDir="column"
        align="center"
      >
        <Box height="40vh" w="100%"></Box>
        <ScaleFade in={true}>
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
            onClick={scroll}
          >
            projects
          </Button>
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
        <Box ref={pg2ref} w="100%" h={["8vh", "10vh"]}></Box>
        <Text
          fontSize={["sm", "md"]}
          fontFamily="mono"
          fontWeight="thin"
          color="grey"
        >
          💡 my projects 💡
        </Text>

        <Flex
          id="projects"
          align="flex-start"
          justify="center"
          w="90vw"
          h="100%"
          flexDir="row"
          flexWrap="wrap"
          pt="20px"
        >
          {linkList.map((x, key) => {
            return (
              <ScaleFade in={true} unmountOnExit={true}>
                <Card
                  key={key}
                  imgSrc={x.imgSrc}
                  url={x.url}
                  name={x.name}
                ></Card>
              </ScaleFade>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
