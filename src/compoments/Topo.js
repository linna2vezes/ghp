import { Flex, Image   } from "@chakra-ui/react";
import React from "react";
import topo from '../images/topo-pag.svg'

function Topo () {

    return (
        <>
        
        <Flex width={"100%"} justifyContent="flex-end">

    <Image src={topo} mt="0" mr="20%" mb="1rem" width="40px"  height="40px" position={"relative"}   /> 
    </Flex>
        
         </>
    )
}



export default Topo;