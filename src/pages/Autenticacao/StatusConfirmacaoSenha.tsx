import { Box, Button, Checkbox, Container, createListCollection, Field, Flex, Heading, HStack, Image, Input, Portal, RadioGroup, Select, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { RiVerifiedBadgeFill, RiVerifiedBadgeLine } from "react-icons/ri";
import { useEffect } from 'react';
import { useGetTokenLogin } from '../../hook';

function Login() {

  const navigate = useNavigate()

  useEffect(()=>{
          const result = useGetTokenLogin()
          if(result?.hash) navigate("/dashboard")
      },[]) 

  return (
    <Flex direction="column" justifyContent="space-between" maxHeight="100vh">
      <Container px={[20,300]} height="90vh" display="flex" flexDirection="column" justifyContent="center">
          <Flex justifyContent={"center"} mb={4}>
            <Image src={LOGOSONANGOL} width={[100,150,500]}/>
          </Flex>
          
          <Text textAlign={"center"} color={"gray.500"}>Recuperação feita com sucesso</Text>

          <Flex my={5} textAlign={"center"} justifyContent={"center"}>
            <RiVerifiedBadgeLine color='green' size={300} />
          </Flex>

          <Box mt={5}>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Voltar</Link></Text>            
          </Box>
      </Container>

      
    </Flex>
  )
}

export default Login
