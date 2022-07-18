import {
  useMediaQuery, Image, Box,  Flex , useDisclosure, Drawer, DrawerBody,Link, Text, DrawerContent, DrawerHeader, DrawerOverlay, Stack, LinkBox,  } from '@chakra-ui/react'
  import React from 'react';
   import menuBG from '../images/index-image-mobile.jpg'
   import menuBGDesktop from '../images/index-image.jpg'
   import menuOpen from '../images/hamburguer-aberto0.svg'
   import menu from '../images/hamburguer.svg'
   import logo from '../images/logo.png'
//    import Register from './compoments/Register';
// import List from './compoments/List';
// import Footer from './compoments/Footer';
   
   
  // import { Link as ReachLink,  Outlet, Route } from "react-router-dom";
  
 


function Menu ( ) {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLargerThan680] = useMediaQuery('(min-width: 680px)')

    return (
        <>
        {!isLargerThan680 ?
        <Box>
        <Flex  bgImage={menuBG} bgRepeat='no-repeat' bgSize={'cover'} bgPosition={"center"} flexDirection={'column'}  width={"680px"} maxW="100vw"
             height={"600px"}>
              
              <Box display={"flex"} flexDirection={'row'} justifyContent={'space-between'}> 
              <Box ref={btnRef} bg='none'  p="4" mt={"2rem"} ml={"2rem"} onClick={onOpen} >
              <Image src={menu}  width={"2rem"}  alt='menu'/>
              </Box>

              <Image src={logo} p="4" mt={"2rem"} mr={"2rem"} width={"8rem"}  alt='menu'/>
   
             
             
              </Box>
              <Box textAlign={"center"} fontFamily={"Zen Maru Gothic"}  mt="1.3rem" color="white">
                <Text fontSize={"3.5rem"} lineHeight="3.5rem" >ESTÁGIO</Text>
                <Text fontSize={"1.4rem"} lineHeight="1.4rem"  >PROVA DE SELEÇÃO</Text>
                </Box>
              </Flex> 
              <Drawer
                 isOpen={isOpen}
                placement='left'
                initialFocusRef={btnRef}
                  onClose={onClose}  >
           <DrawerOverlay  /> 
        <DrawerContent bgColor="#29abe2" maxWidth="50%" height="60%">
          
          <DrawerHeader >
           <Box  bg='none'  p="4" mt={"2rem"} ml={"2rem"} mr={3} onClick={onClose}>
           <Image src={menuOpen}  width={"2rem"}  alt='menu'/>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Stack width={"100%"}>
            
              <Flex gap="2rem" width={"50%"} ml={"2rem"} mt="2rem" direction={"column"} fontFamily={"Roboto"} fontWeight="300" fontSize="1.4rem" color="white">
                <LinkBox >lista</LinkBox>
                <LinkBox  >sobre mim</LinkBox>
                <LinkBox >cadastro</LinkBox>
               
              </Flex>

              </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
      </Box>

      :
      // ---- menu desktop----
      <Box>
        <Flex  bgImage={menuBGDesktop} bgRepeat='no-repeat' bgSize={'cover'} alignContent="center" bgPosition={"center"} flexDirection={'column'}  width={"100%"} maxW="100vw"
             height={"100vw"} maxH={"700px"}>

              <Flex width={"100%"} justify="center" >

              <Flex p="1rem" display={"flex"} flexDirection={'row'}  justifyContent={'space-between'} width="800px"> 
              <Image src={logo} p="4" mt={"2rem"} mr={"2rem"} width={"8rem"} height="-moz-max-content" alt='menu'/>
              <Flex direction={"row"} color="white" pt="2rem" justify={"center"} alignItens="center" gap="1rem">
               <Link   >cadastro</Link >
               <Box borderRadius={"50px"} mt="0.8rem" bgColor="white" width="5px" height={"5px"}></Box>
                <Link   >lista</Link>
                <Box borderRadius={"50px"} mt="0.8rem" bgColor="white" width="5px" height={"5px"}></Box>

                <Link >sobre mim</Link>
                </Flex>
                </Flex>

              </Flex>

              <Flex width={"100%"} justify="center" >
             
              <Flex p="1rem" justify="flex-start" direction="column" width="800px" pt="2.4rem" fontFamily={"Zen Maru Gothic"} color="white">
                <Text fontSize={"5rem"}  mb="0">ESTÁGIO</Text>
                <Text fontSize={"2rem"} mt="0.5rem" >PROVA DE SELEÇÃO</Text>
                </Flex>
                </Flex>

              </Flex> 
           
      </Box> }
      
             
              
              
             
             
              
              </> 
      

    )
    
}
export default Menu;