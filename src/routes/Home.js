import Register from '../compoments/Register';
// import Menu from '../compoments/Menu';
import List from '../compoments/List';
import Footer from '../compoments/Footer';
import { Box } from '@chakra-ui/react';
import {
  useMediaQuery, Image,   Flex , useDisclosure, Drawer, DrawerBody,Link, Text, DrawerContent, DrawerHeader, DrawerOverlay, Stack,   } from '@chakra-ui/react'
  import React from 'react';
   import menuBG from '../images/index-image-mobile.jpg'
   import menuBGDesktop from '../images/index-image.jpg'
   import menuOpen from '../images/hamburguer-aberto0.svg'
   import menu from '../images/hamburguer.svg'
   import logo from '../images/logo.png'
import ListDesktop from '../compoments/ListDesktop';
import Topo from '../compoments/Topo';

function Home() {

  const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan680] = useMediaQuery('(min-width: 680px)')
  const [isLargerThan580] = useMediaQuery('(min-width: 580px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')


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
              <Box textAlign={"center"} fontFamily={"Zen Maru Gothic"} mt="1.3rem" color="white">
                <Text fontSize={"3.5rem"} mt="1.3rem" mb="0">ESTÁGIO</Text>
                <Text fontSize={"1.4rem"} mt="0.5rem" >PROVA DE SELEÇÃO</Text>
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
                <Link href="#list" >lista</Link>
                <Link href="#footer" >sobre mim</Link>
                <Link href="#register" >cadastro</Link>
               
              </Flex>

              </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
      </Box>

      :
      // ---- menu desktop----
      <Box>
        <Flex id="topo" bgImage={menuBGDesktop} bgRepeat='no-repeat' bgSize={'cover'} alignContent="center" bgPosition={"center"} flexDirection={'column'}  width={"100%"} maxW="100vw"
             height={"100vw"} maxH={"700px"}>

              <Flex width={"100%"} justify="center" >

              <Flex p="1rem" display={"flex"} flexDirection={'row'}  justifyContent={'space-between'} width="800px"> 
              <Image src={logo} p="4" mt={"2rem"} mr={"2rem"} width={"8rem"} height="-moz-max-content" alt='menu'/>
              <Flex direction={"row"} color="white" pt="2rem" justify={"center"} alignItens="center" gap="1rem">
               <Link  href="#register" >cadastro</Link >
               <Box borderRadius={"50px"} mt="0.8rem" bgColor="white" width="5px" height={"5px"}></Box>
                <Link  href="#list"  >lista</Link>
                <Box borderRadius={"50px"} mt="0.8rem" bgColor="white" width="5px" height={"5px"}></Box>

                <Link  href="#footer" >sobre mim</Link>
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

        <Box id="register"> 
        <Register />
        </Box>
        <Box id="list"> 
        {!isLargerThan580 ? <List /> : < ListDesktop />}
        </Box>
        <Box pb="20px">
        {!isLargerThan1000 ? "" :<Link  href="#topo" > <Topo /> </Link >}

        </Box>
        <Box id="footer"> 
        <Footer/>
        </Box>
        
         
        </>
      
    );
  }
  
  export default Home;