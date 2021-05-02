import { Link as ChakraLink, Flex, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  imgSrc: any;
  url: any;
  name: any;
};
export const Card = ({ imgSrc, url, name }: Props) => (
  <Flex
    align="center"
    justify="flex-start"
    w="200px"
    h="200px"
    bgColor="gray.50"
    boxShadow="md"
    roundedBottom="md"
    flexDir="column"
    m="40px"
  >
    <Image height="140px" objectFit="cover" src={imgSrc}></Image>
    <Box w="100%" h="20px"></Box>
    <ChakraLink as={Link} href={url} isExternal>
      <Button variant="solid" colorScheme="orange" size="sm">
        {name}
      </Button>
    </ChakraLink>
  </Flex>
);
