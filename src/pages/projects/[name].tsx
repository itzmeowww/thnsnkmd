
import {
    Flex,
    Button,
    Divider,
    Box,
    Text,
    Fade,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Image,
    Tag
} from "@chakra-ui/react";

import { Nav } from "../../components/Nav";
import { Container } from "../../components/Container";
import linkList from "../../data/link.json"
import { Project } from "../../models/project";
import Link from "next/link"
import Head from "next/head"
type PageProps = {
    project: Project
}

const ProjectPage = ({ project }: PageProps) => {
    const img = project.img;
    const links = project.links;
    const desc = project.desc;
    const title = project.title;
    const subtitle = project.subtitle;
    const tech = project.tech;

    return (
        <Container >
            <Head>
                <title>{`${project.name} —  a project by Thanasan Kumdee`}</title>
                <meta name="description" content={project.desc} />
                <meta property="og:title" content={`${project.name} —  a project by Thanasan Kumdee`} />
                <meta property="og:title" content={`${project.name} —  a project by Thanasan Kumdee`} />
                <meta property="og:description" content={project.desc} />
            </Head>

            <Flex
                minH="130vh"
                w="100%"
                px="50px"
                pb="50px"
                justify="flex-start"
                flexDir="column"
                align="center"
            >
                {" "}
                <Nav />
                <Box height="15vh" w="100%"></Box>
                <Fade in={true} >
                    <Text
                        fontSize={["2xl", "4xl"]}
                        textAlign="center"
                        fontFamily="mono"
                        color="gray.100"
                    >
                        {title}
                    </Text>
                    <Divider marginY={2}></Divider>
                    <Text

                        fontSize={["md", "md"]}
                        textAlign="center"
                        fontFamily="sanSerif"
                        color="gray.300"
                    >
                        {subtitle}
                    </Text>
                </Fade>
                <Box height="10vh" w="100%"></Box>
                <Box bg="whiteAlpha.200" p="20px" rounded="lg">
                    <Tabs
                        variant="enclosed"
                        size="md"
                        fontFamily="sanSerif"
                        colorScheme="yellow"
                        width="400px" maxW="90vw"
                    >
                        <TabList>
                            <Tab fontFamily="sanSerif">Preview</Tab>
                            <Tab fontFamily="sanSerif">Detail</Tab>
                        </TabList>

                        <TabPanels >
                            <TabPanel >
                                <Flex flexDir="row" w="350px" maxW="90%" overflowX="scroll" mx="auto">
                                    {img.map((x, k) => {
                                        return (
                                            <Image
                                                key={k}
                                                align="center"
                                                maxH="410px"
                                                objectFit="contain"
                                                src={x}
                                                m="5px"
                                                borderRadius="10px"
                                            ></Image>
                                        );
                                    })}{" "}
                                </Flex>
                            </TabPanel>
                            <TabPanel>

                                <Flex flexDir="column" mx="auto" justifyContent="center" alignItems="center">
                                    {links.map((x: any, k: any) => {
                                        return (
                                            <Link href={x ? x.to : "/"} key={k}>
                                                <Button
                                                    colorScheme="yellow"
                                                    variant="outline"
                                                    size="sm"
                                                    m="5px"
                                                    maxW="fit-content"
                                                >
                                                    {x.title}
                                                </Button>
                                            </Link>
                                        );
                                    })}
                                </Flex>
                                <Box
                                    mt="10px"
                                    w="90%"
                                    bg="whiteAlpha.200"
                                    p="10px"
                                    rounded="md"
                                    mx="auto"
                                >
                                    <Text
                                        fontFamily="sanSerif"
                                        fontWeight="300"
                                        textAlign="center"
                                        color="blanchedalmond"
                                    >
                                        {desc}
                                    </Text>

                                </Box>
                                <Divider my="10px" />
                                <Text align="center"  >Tech stack</Text>
                                <Flex dir="row" width="full" justify="center" flexWrap="wrap">
                                    {tech?.map((x, idx) => {
                                        return <Tag m="5px" key={idx} > {x}</Tag>
                                    })}
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex >

        </Container>
    );
};

type Props = {
    params: {
        name: string
    }
}

export async function getStaticProps({ params }: Props) {
    const projects: Project[] = linkList
    return {
        props: {
            project: projects.filter((project) => {
                return params.name == project.alias
            })[0]
        },
    }
}

export async function getStaticPaths() {
    const projects: Project[] = linkList
    return {
        paths: projects.map((project) => {
            return { params: { name: project.alias } }
        }),
        fallback: false
    };
}

export default ProjectPage;
