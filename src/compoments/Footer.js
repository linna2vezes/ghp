import { Flex , Text , useMediaQuery} from '@chakra-ui/react';
import React from 'react';
import footerMobile from '../images/rodape-mobile.jpg'
import footerDesktop from '../images/rodape-desktop.jpg'

function Footer () {

  const [isLargerThan580] = useMediaQuery('(min-width: 580px)')
   
 
  return (
    <>
      
      {!isLargerThan580? 
      <Flex bgImage={footerMobile} pt="2rem" pb="2rem" direction="column"  fontSize="1rem" lineHeight={"1rem"} fontFamily={"Roboto"} fontWeight="200" textAlign={"center"} color="white" bgRepeat='no-repeat' bgSize={'cover'} bgPosition={"center"}>
 
 <Text>Fulano Beltrano de Oliveira da Silva</Text>
 <Text>fulanobos@gmail.com</Text>
 <Text>(31) 9 9666.1111</Text>
 <Text>Faculdade de Belo Horizonte</Text>
 </Flex>:
 <Flex bgImage={footerDesktop} pt="2rem" pb="2rem" direction="column"  fontSize="1rem" lineHeight={"1rem"} fontFamily={"Roboto"} fontWeight="200" textAlign={"center"} color="white" bgRepeat='no-repeat' bgSize={'cover'} bgPosition={"center"}>
 
      <Text>Fulano Beltrano de Oliveira da Silva</Text>
      <Text>fulanobos@gmail.com</Text>
      <Text>(31) 9 9666.1111</Text>
      <Text>Faculdade de Belo Horizonte</Text>
      </Flex> }
      </> 
    
  );
};


export default Footer;