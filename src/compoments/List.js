import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Box} from '@chakra-ui/react'
import React from 'react';

function List(params) {

  

     
  return (
    <>

 <Box>
 <Flex justify={"center"} pt="2rem" pb="2rem" direction={"column"} width="100%">
   <Text textAlign={"center"} m="0" borderRadius='0' borderWidth={"0"} lineHeight="20px" fontSize={"22px"} fontFamily="Zen Maru Gothic"  height={"2.8rem"}  color={"#29abe2"} >LISTA DE CADASTRO</Text>
 <Flex   justify={"center"} m="0">
   <Tabs border={"1px"} variant='solid-rounded'>
<TabList >
<Flex direction={"column"}  >
<Flex direction={"row"}  >
 <Tab ml="0" mr="3px" width={"5rem"} height="2rem" color= '#999999' bgColor= 'white'  borderWidth="1px 1px 0 1px"  borderColor = "#999999"  _selected={{ color: '#2393C3', bg: 'white' , borderWidth: "1px 1px 0 1px", borderColor: "#2393C3" }}>1</Tab>
 <Tab mr="3px" width={"5rem"} color= '#999999' bgColor= 'white'  borderWidth="1px 1px 0 1px"  borderColor = "#999999"  _selected={{ color: '#2393C3', bg: 'white' , borderWidth: "1px 1px 0 1px", borderColor: "#2393C3" }}>2</Tab>
 <Tab mr="3px" width={"5rem"} color= '#999999' bgColor= 'white'  borderWidth="1px 1px 0 1px"  borderColor = "#999999"  _selected={{ color: '#2393C3', bg: 'white' , borderWidth: "1px 1px 0 1px", borderColor: "#2393C3" }}>3</Tab>

 <Tab   mr="0" width={"5rem"} color= '#999999' bgColor= 'white'  borderWidth="1px 1px 0 1px"  borderColor = "#999999"  _selected={{ color: '#2393C3', bg: 'white' , borderWidth: "1px 1px 0 1px", borderColor: "#2393C3" }}>4</Tab>
 
 </Flex>
 <Box bgColor={"#29abe2"} width="100%" height={"1px"}></Box>
 </Flex>
 </TabList>
<TabPanels border="1px" >
 <TabPanel >
   <Box >
     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NOME</Text> <Text color={"#999999"} fontFamily="Roboto">Fulano Beltrano de Oliveira da Silva</Text>
   </Flex>
     <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>E-MAIL</Text> <Text color={"#999999"} fontFamily="Roboto">fulanobos@gmail.com</Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NASC.</Text> <Text color={"#999999"} fontFamily="Roboto">31/10/1995</Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>TEL</Text> <Text color={"#999999"} fontFamily="Roboto">(31) 9 9666.1111</Text>
     </Flex>
  
   </Box>
 </TabPanel>
 <TabPanel>
 <Box >
     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NOME</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
   </Flex>
     <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>E-MAIL</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NASC.</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>TEL</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
     </Flex>
  
   </Box>
 </TabPanel>
 <TabPanel>
 <Box >
     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NOME</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
   </Flex>
     <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>E-MAIL</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NASC.</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>TEL</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
     </Flex>
  
   </Box>
 </TabPanel>
 <TabPanel>
 <Box >
     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NOME</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
   </Flex>
     <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>E-MAIL</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"column"}  >
     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>NASC.</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
    </Flex>
    <Box bgColor={"#29abe2"} alignSelf="center" width="90%" height={"1px"}></Box>
     </Flex>

     <Flex direction={"row"} gap="1rem" >
   <Text width="3.3rem" textAlign={"start"} color={"#011E48"} fontFamily="Roboto" fontWeight={400}>TEL</Text> <Text color={"#999999"} fontFamily="Roboto"> - </Text>
     </Flex>
  
   </Box>
 </TabPanel>
</TabPanels>
</Tabs>
</Flex>
 </Flex>
 </Box>
     
        
    </>
  );
};


export default List;


// import React from 'react';

// function List(params) {
//     const [value, setValue] = React.useState('');
 
//   const onChange = event => {
//     localStorage.setItem('list', event.target.value);
 
//     setValue(event.target.value);
//   };
 
//   return (
//     <div>
//       <h1>Hello React with Local Storage!</h1>
//       <form>
//       <input value={value} type="text" onChange={onChange} />
//        </form>
//       <p>{value}</p>
//     </div>
//   );
// };


// export default List;