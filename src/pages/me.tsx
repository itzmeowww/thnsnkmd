import { Container } from "../components/Container";
import { Flex, Box, Text, Divider, Code, ScaleFade } from "@chakra-ui/react";

const Me = () => {
  return (
    <Container myTitle="Thanasan Kumdee">
      <Flex
        h="100vh"
        w="100vw"
        flexDir="column"
        align="center"
        justify="flex-start"
      >
        <Box h="30vh" w="100%"></Box>
        <ScaleFade in={true}>
          <Text
            fontFamily="mono"
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-l, #fd746c,#ff9068)"
            bgClip="text"
          >
            Thanasan Kumdee
          </Text>
        </ScaleFade>
        <Divider w="30%" />
        <ScaleFade in={true}>
          <Text
            fontSize="md"
            fontFamily="mono"
            color="grey"
            w="40%"
            textAlign="center"
            m="auto"
          >
            a random student who has an extremely strong passions in{" "}
            <Code>coding</Code>, <Code>music</Code>, and <Code>art</Code>.
          </Text>
        </ScaleFade>
      </Flex>
    </Container>
  );
};
export default Me;
