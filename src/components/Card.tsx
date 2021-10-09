import { Link as ChakraLink, Flex, Image, Box, Button, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react"

type Props = {
  imgSrc: any;
  url: any;
  name: any;
  isExternal?: boolean;
  alt?: string;
};
export const Card = ({ imgSrc, url, name, isExternal = false, alt }: Props) => {

  const MotionFlex = motion(Flex);
  const [loading, setLoading] = useState(true)
  return (
    <ChakraLink as={Link} href={url} isExternal={isExternal}>
      <MotionFlex
        align="center"
        justify="flex-start"
        w="200px"
        h="200px"
        bgColor="gray.50"
        boxShadow="md"
        roundedBottom="md"
        flexDir="column"
        m="20px"

        cursor="pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
      >
        <Box height="140px" overflow="hidden">
          <Skeleton w="160px" minH="140px" isLoaded={!loading} >
            <Image alt={alt} objectFit="cover" onLoad={() => {
              setLoading(false);
            }} w="160px" src={imgSrc}></Image>
          </Skeleton>

        </Box>

        <Box w="100%" h="15px"></Box>

        <Button variant="solid" colorScheme="orange" size="sm">
          {name}
        </Button>

      </MotionFlex>
    </ChakraLink>
  );
};
