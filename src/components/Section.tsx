import { Divider, Text, Flex, FlexProps } from "@chakra-ui/react";

interface SectionProps extends FlexProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  sectionKey: number;
  sectionName: string;
}
export const Section = (props: SectionProps) => {
  return (
    <Flex
      key={props.sectionKey}
      w="100vw"
      maxW="100%"
      align="center"
      justify="center"
      flexDir="column"
      ref={props.sectionRef}
      id={props.sectionName.toLowerCase()}
    >
      <Divider w="80vw" />
      <Flex
        minH="50vh"
        pb="5vh"
        pt="5vh"
        justify="flex-start"
        align="center"
        flexDir="column"
      >
        <Text
          fontSize="2xl"
          fontFamily="mono"
          fontWeight="bold"
          bgGradient="linear(to-l, #fd746c,#ff9068)"
          bgClip="text"
          mb="30px"
        >
          {props.sectionName}
        </Text>

        <Flex
          justify="flex-start"
          align="center"
          flexDir="column"
          {...props}
        ></Flex>
      </Flex>
    </Flex>
  );
};
