import { Flex, HStack, Text, Divider, Tag } from "@chakra-ui/react";
import { useState } from "react"
import { motion } from "framer-motion";

type DetailsType = {
    title: String,
    time: String,
    tags: Array<String>,
    desc: String,
    reward?: String

}

type Props = {
    idx: Number,
    details: DetailsType
};

export const ActivityDetail = ({ idx, details }: Props) => {
    const [open, setOpen] = useState(true)

    const toggleOpen = () => {
        setOpen(!open)
    }
    const MotionFlex = motion(Flex);
    return (<MotionFlex
        bgColor="gray.700"
        borderRadius="md"
        p="10px"
        my="10px"
        minW="200px"
        maxW="300px"
        flexDir="column"
        key={idx.toString()}
        cursor="pointer"
        onClick={toggleOpen}
        title="Toggle Detail"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
    >
        <HStack justify="space-between">
            <Text fontSize="md" fontFamily="mono">
                {details.title}
            </Text>
            <Text fontSize="xs" fontFamily="mono" color="gray.300">
                {details.time}
            </Text>
        </HStack>
        <HStack dir="row" spacing={3}>
            {details.tags.map((tag, k) => {
                return (
                    <Tag
                        size="sm"
                        my="3px"
                        fontFamily="sanSerif"
                        fontWeight="normal"
                        colorScheme="green"
                        key={k}
                        borderRadius="full"
                    >
                        {tag}
                    </Tag>
                );
            })}
        </HStack>{" "}
        {
            details.reward == undefined || details.reward == "" ? <></> : <>
                <Divider my="5px" />
                <Text
                    fontSize="sm"
                    fontFamily="mono"
                    color="yellow.100"
                    textAlign="left"
                    letterSpacing="wide"
                    hidden={!open}
                >
                    {details.reward}
                </Text>
            </>
        }
        <Divider my="5px" />
        <Text
            fontSize="sm"
            fontFamily="mono"
            color="gray.300"
            textAlign="left"
            letterSpacing="wide"
            hidden={!open}
        >
            {details.desc}
        </Text>

    </MotionFlex>)
}