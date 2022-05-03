import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Nav } from '../components/Nav'
const Countdown = () => {

    const [time, setTime] = useState({
        d: -1,
        h: -1,
        m: -1,
        s: -1
    });
    const endDate = new Date('2022-05-11T23:59:00')


    useEffect(() => {
        setInterval(() => {
            const ms = +endDate - +new Date();
            let s = Math.floor(ms / 1000);
            let m = Math.floor(s / 60);
            s = s % 60;
            let h = Math.floor(m / 60);
            m = m % 60;
            let d = Math.floor(h / 24);
            h = h % 24;
            // console.log(d, h, m, s)
            setTime({
                d, h, m, s
            })
        }, 1000)
    }, [])

    return (
        <Flex flexDir="column" justifyContent="center" alignItems="center" gridGap="2">
            <Nav />
            <Text fontFamily="mono" fontSize="md">
                relocate to Japan
            </Text>
            <Flex gridGap="2" fontSize="xs" color="gray.100">
                <Box border="1px" borderColor="gray.600" width="9" display="flex" justifyContent="right" alignItems="center" borderLeftRadius="md" p="1.5">
                    {time.d == -1
                        ? <Skeleton >00</Skeleton>
                        : <Text fontFamily="mono"
                            fontWeight="thin"
                            color="white"
                        >{time.d}</Text>
                    }
                </Box>
                <Box border="1px" borderColor="gray.600" width="9" display="flex" justifyContent="right" alignItems="center" p="1.5">
                    {time.h == -1
                        ? <Skeleton >00</Skeleton>
                        : <Text fontFamily="mono"
                            fontWeight="thin"
                            color="white"
                        >{time.h}</Text>
                    }

                </Box>

                <Box border="1px" borderColor="gray.600" width="9" display="flex" justifyContent="right" alignItems="center" p="1.5">
                    {time.m == -1
                        ? <Skeleton >00</Skeleton>
                        : <Text fontFamily="mono"
                            fontWeight="thin"
                            color="white"
                        >{time.m}</Text>
                    }
                </Box>

                <Box border="1px" borderColor="gray.600" width="9" display="flex" justifyContent="right" alignItems="center" borderRightRadius="md" p="1.5">
                    {time.s == -1
                        ? <Skeleton >00</Skeleton>
                        : <Text fontFamily="mono"
                            fontWeight="thin"
                            color="white"
                        >{time.s}</Text>
                    }

                </Box>


            </Flex>
        </Flex >
    );
}

export default Countdown;