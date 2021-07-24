import { Flex, Box, Text, ScaleFade } from "@chakra-ui/react";

import { Container } from "../../components/Container";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";
import linkList from "../../data/link.json";

const Index = () => {
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
        <Box w="100%" h={["10vh", "10vh"]}></Box>
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
