import { Flex, Button, Box, Text, ScaleFade } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { useRef } from "react";

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
    <Box>
      <Container height="100vh">
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
          <Text
            fontSize={["sm", "md"]}
            fontFamily="mono"
            fontWeight="thin"
            color="grey"
          >
            but, what's down there?
          </Text>
        </ScaleFade>
        <Box height="5vh" w="100%"></Box>
        <Button size="sm" fontFamily="mono" fontWeight="thin" onClick={scroll}>
          👇 bring me down 👇
        </Button>
      </Container>
      <Container minH="100vh" pb="20vh">
        <Box ref={pg2ref} w="100%" h={["8vh", "10vh"]}></Box>
        <Text
          fontSize={["sm", "md"]}
          fontFamily="mono"
          fontWeight="thin"
          color="grey"
        >
          🔥 visit these 🔥
        </Text>

        <Flex
          align="flex-start"
          justify="center"
          w="90vw"
          h="100%"
          flexDir="row"
        >
          <ScaleFade in={true} unmountOnExit={true}>
            {linkList.map((x, key) => {
              return (
                <Card
                  key={key}
                  imgSrc={x.imgSrc}
                  url={x.url}
                  name={x.name}
                ></Card>
              );
            })}
          </ScaleFade>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
