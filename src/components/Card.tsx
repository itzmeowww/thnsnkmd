import { Link as ChakraLink, Flex, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  imgSrc: any;
  url: any;
  name: any;
};
export const Card = ({ imgSrc, url, name }: Props) => {
  const MotionImage = motion(Image);

  return (
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
      <Box height="140px" overflow="hidden">
        <MotionImage
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.2 }}
          height={"140px"}
          objectFit="cover"
          src={imgSrc}
        ></MotionImage>
      </Box>

      <Box w="100%" h="15px"></Box>
      <ChakraLink as={Link} href={url} isExternal>
        <Button variant="solid" colorScheme="orange" size="sm">
          {name}
        </Button>
      </ChakraLink>
    </Flex>
  );
};
