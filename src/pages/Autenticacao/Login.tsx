import { Box, Button, Container, Flex, Image, Input} from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/MULTITEL.png"
import {COLORS, FONT} from '../../helpers'
import { useNavigate } from 'react-router'

function Login() {

  const navigate = useNavigate()

  return (
    <Flex direction="column" justifyContent="space-between" maxHeight="100vh">
      <Container px={[20,200,400]} height="90vh" display="flex" flexDirection="column" justifyContent="center">
          <Flex justifyContent={"center"} mb={20}>
            <Image src={LOGOSONANGOL} width={[100,150,500]}/>
          </Flex>

          <Box>
            <Input placeholder='E-MAIL' rounded={10} p={[5,7]} mb={[7]} />
            <Input placeholder='Palavra passe' rounded={10} p={[5,7]} />
          </Box>

          <Box mt={5}>
            <Button onClick={()=> navigate("/dashboard")} w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.azul} color={COLORS.branco}>Entrar</Button>
          </Box>
      </Container>
      
    </Flex>
  )
}

export default Login
