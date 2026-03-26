import { Box, Button, Checkbox, Container, Field, Flex, Heading, HStack, Image, Input, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'

function Login() {

  const navigate = useNavigate()



  return (
    <Flex direction="column" justifyContent="space-between" maxHeight="100vh">
      <Container px={[20,200,400]} height="90vh" display="flex" flexDirection="column" justifyContent="center">
          <Flex justifyContent={"center"} mb={4}>
            <Image src={LOGOSONANGOL} width={[100,150,500]}/>
          </Flex>

          <Box>
            <Input type='password' placeholder='Senha actual' rounded={10} p={[5,7]} mb={[7]} />
            <Input type='password' placeholder='Senha nova' rounded={10} p={[5,7]} mb={[7]} />
            <Input type='password' placeholder='Repita a senha nova' rounded={10} p={[5,7]} />
          </Box>

          <Box mt={5}>
            <Button mb={5} onClick={()=> navigate("/mfa-login")} w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Entrar</Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/inscricao"}>Ainda não tenha uma conta</Link></Text>
          </Box>
      </Container>

      
    </Flex>
  )
}

export default Login
