import { Flex, Text, SlideFade, ScaleFade } from "@chakra-ui/react";

import { Container } from "../../components/Container";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";
import projects from "../../data/link.json";
import { Project } from "../../models/project";
import Head from "next/head"
const Index = () => {
  const data: Project[] = projects.sort((a, b) => {
    const dateA = Date.parse(a.date);
    const dateB = Date.parse(b.date);
    return dateB - dateA
  });
  return (
    <Container>
      <Head>
        <title>projects - Thanasan Kumdee</title>
        <meta name="description" content={`Checkout latest projects by Thanasan Kumdee: ${projects.map((project) => {
          return project.name
        }).join(", ")}`} />
        <meta property="og:image" content="https://thnsnkmd.vercel.app/preview_project.png" />
      </Head>
      <Flex
        w="100%"
        justify="flex-start"
        flexDir="column"
        align="center"
        minH="100vh"
        pb="20vh"
      >
        <Nav />

        <Text
          fontSize={["sm", "md"]}
          fontFamily="mono"
          fontWeight="thin"
          color="white"
          mt="15vh"
        >
          💡 my projects 💡
        </Text>

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
              <SlideFade key={key} in={true} offsetY="40px">
                <ScaleFade in={true}>
                  <Card

                    imgSrc={x.imgSrc}
                    url={x.url}
                    name={x.name}
                  ></Card>
                </ScaleFade>
              </SlideFade>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
