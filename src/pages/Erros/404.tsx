import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { TbError404 } from "react-icons/tb";

function Erro404() {

  const navigate = useNavigate()

  return (
    <Flex direction="column" justifyContent="space-between" maxHeight="100vh">
      <Container px={[20,200,400]} height="90vh" display="flex" flexDirection="column" justifyContent="center">
          <Flex justifyContent={"center"} mb={4}>
            <Image src={LOGOSONANGOL} width={[100,150,200]}/>
          </Flex>

          <Flex textAlign={"center"} justifyContent={"center"}>            
            <TbError404 size={500} color='red' />
          </Flex>
          
          <Text mb={10} textAlign={"center"}>A pagina que tentou acessar não foi encontra. Por favor clique no link abaixo para ter uma boa esperiencia de usabilidade!</Text>
          <Link style={{textAlign:"center",fontWeight:"bold"}} to={"/dashboard"}>Voltar ao dashboard</Link>
          
      </Container>

      
    </Flex>
  )
}

export default Erro404