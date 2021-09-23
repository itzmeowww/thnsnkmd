import { Image, FlexProps , Box, Tag , Flex ,Skeleton} from "@chakra-ui/react";

import {useState} from "react"


interface ContainerProps extends FlexProps {
  url: string;
  tools: Array<Object>;
}

export const DesignDetail = (props: ContainerProps) => {
    const [loading, setLoading] = useState(true)
  return (
    <>
    
     <Box bg="whiteAlpha.100" rounded="md" m ="2">
        <Skeleton isLoaded={!loading}>
            <Image onLoad={()=>{
                setLoading(false);
            }} m="2" width="200px"  src={props.url}></Image>
        </Skeleton>
        
        <Flex>
        {props.tools.map((tool)=>{
            return <Tag ml="2" mb="2" size="sm">{ tool }</Tag>
        })}
        </Flex>
     </Box>
    </>
  );
};
