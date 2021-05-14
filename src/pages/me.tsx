import { Container } from "../components/Container";
import {
  Flex,
  Box,
  Text,
  Divider,
  Code,
  ScaleFade,
  Button,
} from "@chakra-ui/react";
import { Nav } from "../components/Nav";
import { useRef } from "react";
const Me = () => {
  // JUST BRUTE FORCE FOR NOW
  const refEdu = useRef<HTMLDivElement>(null)!;
  const refAwa = useRef<HTMLDivElement>(null)!;
  const refRes = useRef<HTMLDivElement>(null)!;
  const refExp = useRef<HTMLDivElement>(null)!;
  const refSki = useRef<HTMLDivElement>(null)!;

  const refList = [refEdu, refAwa, refRes, refExp, refSki];

  const topicList = ["Education", "Awards", "Research", "Experience", "Skills"];
  const scroll = (idx: any) => {
    refList[idx].current?.scrollIntoView({
      behavior: "smooth",
    })!;
  };
  return (
    <Container myTitle="Thanasan Kumdee">
      <Nav />
      <Flex
        h="100vh"
        w="100vw"
        maxW="100%"
        flexDir="column"
        align="center"
        justify="flex-start"
      >
        <Box h="30vh" w="100%"></Box>
        <ScaleFade in={true}>
          <Text
            fontFamily="mono"
            fontSize={["2xl", "4xl"]}
            fontWeight="bold"
            bgGradient="linear(to-l, #fd746c,#ff9068)"
            bgClip="text"
          >
            Thanasan Kumdee
          </Text>
        </ScaleFade>
        <Divider w={["50%", "30%"]} />
        <ScaleFade in={true}>
          <Text
            fontSize={["xs", "md"]}
            fontFamily="mono"
            color="grey"
            w={["60%", "40%"]}
            textAlign="center"
            m="auto"
          >
            a random student who has an extremely strong passions in{" "}
            <Code>coding</Code>, <Code>music</Code>, and <Code>art</Code>.
          </Text>
        </ScaleFade>
        <Box h={["20vh", "20vh"]} w="100%"></Box>
        <ScaleFade in={true}>
          <Flex w="95vw" justify="center" flexDir="row" flexWrap="wrap">
            {topicList.map((x, idx) => {
              return (
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => {
                    scroll(idx);
                  }}
                  key={idx}
                  size="sm"
                  m="5px"
                >
                  {x}
                </Button>
              );
            })}
          </Flex>
        </ScaleFade>
      </Flex>
      {topicList.map((x, idx) => {
        return (
          <Flex
            key={idx}
            w="100vw"
            maxW="100%"
            align="center"
            justify="center"
            flexDir="column"
            ref={refList[idx]}
            id={x.toLowerCase()}
          >
            <Divider w="80vw" />
            <Flex minH="100vh" pt="5vh" justify="center">
              <Text
                fontSize="2xl"
                fontFamily="mono"
                fontWeight="bold"
                bgGradient="linear(to-l, #fd746c,#ff9068)"
                bgClip="text"
              >
                {x}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Container>
  );
};
export default Me;
