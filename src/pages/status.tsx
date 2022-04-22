import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Countdown from "../components/Countdown";

const Status = () => {
    return (
        <Container >
            <Head>
                <title>Thanasan Kumdee</title>
                <meta name="description" content="Thanasan Kumdee's personal website: projects and info" />
                <meta property="og:image" content="https://thnsnkmd.vercel.app/preview.png" />
            </Head>

            <Flex flexDir="column" w="full" h="100vh" justifyContent="center" alignItems="center">
                <Countdown />
            </Flex>



        </Container>
    );
}

export default Status;