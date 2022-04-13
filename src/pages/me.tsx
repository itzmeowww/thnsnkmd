import { Container } from "../components/Container";
import {
  Flex,
  Box,
  Text,
  Divider,
  Code,
  ScaleFade,
  Button,
  Checkbox,
  Stack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import { Nav } from "../components/Nav";
import { useState } from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Head from "next/head"
import cv from "../data/cv.json";
import { ActivityDetail } from "../components/ActivityDetail";
import * as Scroll from 'react-scroll';
import { motion } from "framer-motion";

const Me = () => {
  const MotionFlex = motion(Flex);
  const scroller = Scroll.scroller;

  const animateScroll = Scroll.animateScroll;

  const [isCoding, setIsCoding] = useState(true);
  const [isResearch, setIsResearch] = useState(true);

  const topicList = [
    "Education",
    "Achievement",
    "Research",
    "Skills",
    "Extra Curriculum",
  ];


  const scrollToName = (name: string) => {
    scroller.scrollTo(name, {
      smooth: true
    })
  };
  return (
    <Container >
      <Head>
        <title>
          about me — Thanasan Kumdee
        </title>
        <meta property="og:image" content="https://thnsnkmd.vercel.app/preview_me.png" />
        <meta name="description" content="Thanasan Kumdee, the MEXT scholarship student with strong passions in coding, music, and art." />
      </Head>
      <IconButton
        position="fixed"
        bottom="20px"
        right="20px"
        aria-label="Scroll To Top"
        colorScheme="teal"
        icon={<TriangleUpIcon />}
        onClick={() => {
          animateScroll.scrollToTop()
        }}
      />
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

        <Divider w={["50%", "30%"]} my={2} />
        <ScaleFade in={true}>
          <Text
            fontSize={["xs", "md"]}
            fontFamily="mono"
            color="white"
            w={["60%", "37%"]}
            textAlign="center"
            m="auto"
          >
            the MEXT scholarship student with strong passions in <Code>coding</Code>
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
                    scrollToName(topicList[idx]);
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

      >
        {cv["Education"].map((x, idx) => {
          return (

            <>
              <a href={x["section-detail"].url} >
                <MotionFlex
                  bgColor="gray.700"
                  borderRadius="md"
                  p="10px"
                  my="20px"
                  flexDir="column"
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.05 }}
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
                </MotionFlex>
              </a>
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
        <Flex flexDir="column" mt="10px" >
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
                  <ActivityDetail details={x} idx={idx} />
                );
            })
          )}
        </Flex>
      </Section>

      <Section
        sectionKey={4}
        sectionName={topicList[4]}

      >
        <Flex flexDir="column" mt="10px" >
          {cv["Extra Curriculum"].map((x, idx) => {
            return (
              <ActivityDetail details={x} idx={idx} />
            );
          })}
        </Flex>
      </Section>
      <Section
        sectionKey={2}
        sectionName={topicList[2]}

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
                <Text fontSize="md" fontFamily="mono">
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
                <Text fontSize="sm" fontFamily="mono" color="green.200">
                  Researchers
                </Text>
                <Text fontSize="sm" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[0]}
                </Text>
                <Text fontSize="sm" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[1]}
                </Text>
                <Text fontSize="sm" fontFamily="mono" color="green.200">
                  Advisers
                </Text>
                <Text fontSize="sm" fontFamily="mono" color="gray.300">
                  - {x["section-detail"].name[2]}
                </Text>
                <Text fontSize="sm" fontFamily="mono" color="gray.300">
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

      >
        <Flex w="500px" maxW="90vw" flexWrap="wrap" align="center" justify="center">
          {cv["Skills"].map((x, k) => {
            return (
              <HStack key={k} m="10px">
                <Flex fontFamily="mono" fontSize="xs">
                  <Text
                    bg={x.isCoding ? "green.200" : "yellow.200"}
                    color="black"
                    p="5px"
                    px="7px"
                    borderLeftRadius="md"
                    fontWeight="bold"
                  >
                    {x.skill}
                  </Text>{" "}
                  <Text
                    bg="whiteAlpha.400"
                    p="5px"
                    borderRightRadius="md"
                    letterSpacing="wide"
                  >
                    {x.level}
                  </Text>{" "}
                </Flex>
              </HStack>
            );
          })}
        </Flex>
      </Section>
    </Container>
  );
};
export default Me;
