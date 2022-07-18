import {
      FormLabel,Input,  Text, Stack, Flex, Button  } from '@chakra-ui/react'
  import { useForm } from 'react-hook-form';
  
 
  
  function Register () {
    const { handleSubmit, reset  } = useForm( );
    

    

    const onSubmit =  event => {
        localStorage.setItem('myValueInLocalStorage', event.target.value);
     
        
        reset();
      };
        
       
    

    return (
        <>
        <Flex bgColor={"#29abe2"} justifyContent="center">
        <Flex w={["300px", "400px"]} bgSize={'cover'} bgPosition={"center"} direction={"column"}  bgColor={"#29abe2"}  pt="1rem" pb="4rem"  color="white">
            <Text fontSize={"2rem"} textAlign="center">CADASTRO</Text>
        <form  onSubmit={handleSubmit(onSubmit)} >
  
  <Stack spacing={6} margin="auto" width={"90%"} alignContent={"center"}>
  <FormLabel color={"white"} htmlFor='name' fontSize={"10px"} fontFamily="Roboto"  fontWeight="300">Nome</FormLabel>
  <Input id='Name'
  focusBorderColor="#29abe2" color="white" bgColor={"#29abe2"} borderWidth={"0 0 1px 0"} borderColor="white" placeholder='Fulano Beltrano de Oliveira da Silva' _placeholder={{color: 'white', fontSize: "12px" }} />
  
  <FormLabel color={"white"} htmlFor='email' fontSize={"10px"} fontFamily="Roboto"  fontWeight="300">E-mail</FormLabel>
  <Input id='email' type='email'
   focusBorderColor="#29abe2" color="white" bgColor={"#29abe2"} borderWidth={"0 0 1px 0"} borderColor="white" placeholder='fulanobos@gmail.com' _placeholder={{color: 'white' , fontSize: "12px" }} />

  <FormLabel color={"white"} htmlFor='name' fontSize={"10px"} fontFamily="Roboto"  fontWeight="300">Nascimento</FormLabel>
  <Input  id="birthday" name="birthday" 
  focusBorderColor="#29abe2" color="white" bgColor={"#29abe2"} borderWidth={"0 0 1px 0"} borderColor="white" placeholder='31/10/1995' _placeholder={{color: 'white', fontSize: "12px" }} />
  
  <FormLabel color={"white"} htmlFor='phone'  fontSize={"10px"} fontFamily="Roboto"  fontWeight="300">Telefone</FormLabel>
 <Input type="phone" id="phone" name="phone" maxLength={'10'}
 focusBorderColor="#29abe2" color="white" bgColor={"#29abe2"} borderWidth={"0 0 1px 0"} borderColor="white"  placeholder='(31) 9 9666.1111' _placeholder={{color: 'white', fontSize: "12px" }} />


</Stack>
<Flex justifyContent={"center"}>
<Button  width="90%" mt="2rem" textAlign={"center"} borderRadius='0' borderWidth={"0"} fontSize={"20px"} fontFamily="Zen Maru Gothic"  height={"2.8rem"} bgColor="#011E48" color={"#29abe2"}  type={'submit'}    _hover={{ bg: '#071934' }}>CADASTRAR</Button>
</Flex>

</form>
</Flex>   
</Flex>
        </>
    )
    
}
export default Register;