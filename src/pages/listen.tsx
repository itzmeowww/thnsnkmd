import { Container } from "../components/Container";
import {
  Link as ChakraLink,
  Button,
  Box,
  Text,
  ScaleFade,
} from "@chakra-ui/react";
import Link from "next/link";
const Listen = () => {
  return (
    <Container height="100vh">
      <Box height="40vh" w="100%"></Box>
      <ScaleFade in={true}>
        <ChakraLink
          as={Link}
          href="https://open.spotify.com/playlist/17BFeQfJK2Mv8i5oF2gdKH?si=66105e9e819b41b0"
          isExternal
        >
          <Button size="md" fontFamily="mono" fontWeight="thin">
            🎵 listen 🎵
          </Button>
        </ChakraLink>
      </ScaleFade>
      <Box height="5vh" w="100%"></Box>
      <ScaleFade in={true}>
        <Text
          fontSize={["sm", "md"]}
          fontFamily="mono"
          fontWeight="thin"
          color="grey"
        >
          ⭐ just for you ⭐
        </Text>
      </ScaleFade>
    </Container>
  );
};

export default Listen;
