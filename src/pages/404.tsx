import { Container } from "../components/Container";
import { Box, Text, Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
const p404 = () => {
  return (
    <Container h="100vh" w="100vw">
      <Box w="100%" h="40vh"></Box>
      <Text
        fontSize="lg"
        fontWeight="bold"
        fontFamily="mono"
        bgGradient="linear(to-l, #fd746c,#ff9068)"
        bgClip="text"
      >
        Oh no! I think you're lost
      </Text>
      <Box w="100%" h="2vh"></Box>
      <ChakraLink as={Link} href="/">
        <Button
          colorScheme="orange"
          fontWeight="thin"
          size="md"
          fontFamily="mono"
        >
          🏠 bring me back 🏠
        </Button>
      </ChakraLink>
    </Container>
  );
};

export default p404;
