import { Flex, Text, SlideFade, ScaleFade } from "@chakra-ui/react";

import { Container } from "../../components/Container";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";
import linkList from "../../data/link";

const Index = () => {
  const data = [linkList['geacher'], linkList['wholdstill'], linkList['beta-task-toggler'], linkList['tanabata'], linkList['codeline'], linkList['know'], linkList['menu-memo'], linkList['thai-synonym']];
  return (
    <Container myTitle="projects  — Thanasan Kumdee">
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
              <SlideFade in={true} offsetY="40px">
                <ScaleFade in={true}>
                  <Card
                    key={key}
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
