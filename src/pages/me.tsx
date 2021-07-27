import { Container } from "../components/Container";
import {
  Flex,
  Box,
  Text,
  Divider,
  Code,
  ScaleFade,
  Button,
  Tag,
  Checkbox,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import { Nav } from "../components/Nav";
import { useRef, useState } from "react";
import cv from "../data/cv.json";

const Me = () => {
  //JUST BRUTE FORCE FOR NOW
  const refEdu = useRef<HTMLDivElement>(null)!;
  const refAwa = useRef<HTMLDivElement>(null)!;
  const refRes = useRef<HTMLDivElement>(null)!;
  const refExp = useRef<HTMLDivElement>(null)!;
  const refSki = useRef<HTMLDivElement>(null)!;

  const refList = [refEdu, refAwa, refRes, refExp, refSki];

  const [isCoding, setIsCoding] = useState(true);
  const [isResearch, setIsResearch] = useState(true);

  const topicList = [
    "Education",
    "Achievement",
    "Research",
    "Experience",
    "Skills",
  ];
  const scroll = (idx: any) => {
    refList[idx].current?.scrollIntoView({
      behavior: "smooth",
    })!;
  };
  return (
    <Container myTitle="about me — Thanasan Kumdee">
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
            w={["60%", "37%"]}
            textAlign="center"
            m="auto"
          >
            a random student with strong passions in <Code>coding</Code>
            {", "}
            <Code>music</Code>
            {", and"} <Code>art</Code>.
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
      <Section
        sectionKey={0}
        sectionName={topicList[0]}
        sectionRef={refList[0]}
      >
        {cv["Education"].map((x, idx) => {
          return (
            <>
              <Flex
                bgColor="gray.700"
                borderRadius="md"
                p="10px"
                my="20px"
                flexDir="column"
                key={idx}
              >
                <Text fontSize="sm" fontFamily="mono">
                  {x["section-detail"].title}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="gray.300">
                  {x["section-detail"].time}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="green.200">
                  GPA : {x["section-detail"].gpa.toPrecision(3)}
                </Text>
              </Flex>
              {idx == cv["Education"].length - 1 ? (
                <></>
              ) : (
                <Divider
                  height="20px"
                  bgColor="orange"
                  orientation="vertical"
                />
              )}
            </>
          );
        })}
      </Section>
      <Section
        sectionKey={1}
        sectionName={topicList[1]}
        sectionRef={refList[1]}
      >
        <Stack spacing={6} direction="row" fontFamily="mono" fontWeight="100">
          <Checkbox
            colorScheme="yellow"
            isChecked={isCoding}
            onChange={(e) => setIsCoding(e.target.checked)}
          >
            Coding
          </Checkbox>
          <Checkbox
            colorScheme="yellow"
            isChecked={isResearch}
            onChange={(e) => setIsResearch(e.target.checked)}
          >
            Research
          </Checkbox>
        </Stack>
        <Flex flexDir="column" h="80vh" mt="10px" maxH="80vh" overflowY="auto">
          {!isCoding && !isResearch ? (
            <Flex
              bgColor="gray.700"
              borderRadius="md"
              p="10px"
              my="20px"
              minW="200px"
              maxW="250px"
              justify="center"
              bg="red.200"
            >
              <Text fontFamily="mono" color="black">
                No Tag Selected
              </Text>
            </Flex>
          ) : (
            cv["Achievement"].map((x, idx) => {
              if (
                (isCoding && x.tags.includes("Coding")) ||
                (isResearch && x.tags.includes("Research"))
              )
                return (
                  <Flex
                    bgColor="gray.700"
                    borderRadius="md"
                    p="10px"
                    my="20px"
                    minW="200px"
                    maxW="300px"
                    flexDir="column"
                    key={idx}
                  >
                    <HStack justify="space-between">
                      <Text fontSize="md" fontFamily="mono">
                        {x.title}
                      </Text>
                      <Text fontSize="xs" fontFamily="mono" color="gray.300">
                        {x.time}
                      </Text>
                    </HStack>
                    <HStack dir="row" spacing={3}>
                      {x.tags.map((tag, k) => {
                        return (
                          <Tag
                            size="sm"
                            my="5px"
                            fontFamily="sanSerif"
                            fontWeight="300"
                            key={k}
                            borderRadius="full"
                          >
                            {tag}
                          </Tag>
                        );
                      })}
                    </HStack>{" "}
                    <Divider my="5px" />
                    <Text
                      fontSize="sm"
                      fontFamily="sanSerif"
                      color="gray.300"
                      textAlign="left"
                      letterSpacing="wide"
                    >
                      {x.desc}
                    </Text>
                  </Flex>
                );
            })
          )}
        </Flex>
      </Section>
      <Section
        sectionKey={2}
        sectionName={topicList[2]}
        sectionRef={refList[2]}
      >
        {cv["Research"].map((x, idx) => {
          return (
            <>
              <Flex
                bgColor="gray.700"
                borderRadius="md"
                p="10px"
                my="20px"
                flexDir="column"
                key={idx}
                maxW={["80%", "60%"]}
              >
                <Text fontSize="sm" fontFamily="mono">
                  {x["section-detail"].title}
                </Text>
                <Text
                  fontSize="xs"
                  fontFamily="mono"
                  color="gray.300"
                  mb="10px"
                >
                  {x["section-detail"].time}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="green.200">
                  Researchers
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[0]}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[1]}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="green.200">
                  Advisers
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[2]}
                </Text>
                <Text fontSize="xs" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[3]}
                </Text>
              </Flex>
              {idx == cv["Research"].length - 1 ? (
                <></>
              ) : (
                <Divider
                  height="20px"
                  bgColor="orange"
                  orientation="vertical"
                />
              )}
            </>
          );
        })}
      </Section>
      <Section
        sectionKey={3}
        sectionName={topicList[3]}
        sectionRef={refList[3]}
      ></Section>
      <Section
        sectionKey={4}
        sectionName={topicList[4]}
        sectionRef={refList[4]}
      ></Section>
    </Container>
  );
};
export default Me;
