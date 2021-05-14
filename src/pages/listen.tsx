import { Container } from "../components/Container";
import { Box, Text, ScaleFade } from "@chakra-ui/react";

import { Nav } from "../components/Nav";
const Listen = () => {
  return (
    <Container height="100vh">
      <Nav />
      <Box height="20vh" w="100%"></Box>
      <ScaleFade in={true}>
        <iframe
          src="https://open.spotify.com/embed/playlist/17BFeQfJK2Mv8i5oF2gdKH"
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </ScaleFade>
      <Box height="5vh" w="100%"></Box>
      <ScaleFade in={true}>
        <Text
          fontSize={["sm", "md"]}
          fontFamily="mono"
          fontWeight="thin"
          color="grey"
        >
          ⭐⭐⭐
        </Text>
      </ScaleFade>
    </Container>
  );
};

export default Listen;
