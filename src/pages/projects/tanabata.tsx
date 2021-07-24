import {
  Flex,
  Button,
  Divider,
  Box,
  Text,
  ScaleFade,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Container } from "../../components/Container";
import { Nav } from "../../components/Nav";
import { useState } from "react";
import Link from "next/link";
import linkList from "../../data/link.json";
const Tanabata = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const img = linkList[0].img ? linkList[0].img : [""];
  const links = linkList[0].links ? linkList[0].links : [""];
  const desc = linkList[0].desc;

  const handleNext = () => {
    setLoading(true);
    if (imgIdx + 1 < img.length) {
      setImgIdx(imgIdx + 1);
    } else {
      setImgIdx(0);
    }
  };

  const handlePrevious = () => {
    setLoading(true);
    if (imgIdx - 1 >= 0) {
      setImgIdx(imgIdx - 1);
    } else {
      setImgIdx(img.length - 1);
    }
  };
  const handleLoaded = () => {
    setLoading(false);
  };
  return (
    <Container myTitle="tanabata — Thanasan Kumdee">
      <Flex
        minH="130vh"
        w="100%"
        px="50px"
        pb="50px"
        justify="flex-start"
        flexDir="column"
        align="center"
      >
        <Box height="10vh" w="100%"></Box>
        <Nav />
        <ScaleFade in={true}>
          <Text
            fontSize={["3xl", "4xl"]}
            textAlign="center"
            fontFamily="mono"
            fontWeight="50"
            color="gray.100"
          >
            Tanabata Wishing Website
          </Text>
          <Divider></Divider>
          <Text
            fontSize={["lg", "xl"]}
            textAlign="center"
            fontFamily="sanSerif"
            fontWeight="300"
            color="gray.300"
          >
            A minimal website for making a wish on tanabata day
          </Text>
        </ScaleFade>
        <Box height="10vh" w="100%"></Box>
        <Box bg="whiteAlpha.200" p="20px" rounded="lg">
          <Tabs
            variant="enclosed"
            size="md"
            fontFamily="sanSerif"
            fontWeight="300"
            colorScheme="yellow"
          >
            <TabList>
              <Tab fontFamily="sanSerif">Preview</Tab>
              <Tab fontFamily="sanSerif">Detail</Tab>
            </TabList>

            <TabPanels>
              <TabPanel h="490px">
                {loading ? (
                  <Flex justify="center" align="center" h="390px" w="100%">
                    <Spinner></Spinner>
                  </Flex>
                ) : (
                  <></>
                )}
                <Image
                  align="center"
                  mx="auto"
                  h="410px"
                  src={img[imgIdx]}
                  onLoad={handleLoaded}
                ></Image>

                <Flex align="center" justify="center" mt="20px">
                  <IconButton
                    mx="10px"
                    colorScheme="yellow"
                    aria-label="previous"
                    icon={<ChevronLeftIcon />}
                    onClick={handlePrevious}
                  />{" "}
                  <IconButton
                    mx="10px"
                    colorScheme="yellow"
                    aria-label="next"
                    icon={<ChevronRightIcon />}
                    onClick={handleNext}
                  />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDir="column">
                  {links.map((x: any, k: any) => {
                    return (
                      <Link href={x.to} key={k}>
                        <Button
                          colorScheme="yellow"
                          variant="outline"
                          size="sm"
                          m="5px"
                        >
                          {x.title}
                        </Button>
                      </Link>
                    );
                  })}
                </Flex>
                <Box mt="10px" maxW="220px">
                  <Text
                    fontFamily="sanSerif"
                    fontWeight="300"
                    textAlign="center"
                  >
                    {desc}
                  </Text>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        {/* <ScaleFade in={true}>
            <Button
              size="sm"
              fontFamily="mono"
              fontWeight="thin"
              onClick={scroll}
            >
              👇 bring me there 👇
            </Button>
          </ScaleFade> */}
      </Flex>
    </Container>
  );
};

export default Tanabata;
