import { Heading, Text, Box, Flex, Container, IconButton } from '@chakra-ui/react'

import { Header } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { BiErrorCircle } from 'react-icons/bi'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'
import { MdArrowBackIos } from 'react-icons/md'

function Suporte() {
  return (
    <div>
    
      <Header/>
      <Container textAlign={"center"} py={[10,10]}>
          <Flex flexDirection={["column", "row"]} mt={10}  justifyContent={"center"} alignItems={"center"}>
            <BiErrorCircle size={200} color={COLORS.amarelo} />
          </Flex>
          
          <Box textAlign={"center"}>
            <Heading size={["4xl","6xl"]}>Pagína não encontrada</Heading>
            <Text fontSize={14} mb={5} color={COLORS.cinza} mt={[0, 5]} p={[0,0]} >A pagina que tentou acessar não foi encontrada, por favor clique nos links acima na barra de menú</Text>
          </Box>
          <IconButton as={Link} to="/loja" mb={[3,0]} width={["100%","auto"]} bg={COLORS.amarelo} p={5} aria-label="Search database" variant={"outline"}>
            <MdArrowBackIos/> VOLTAR AO INICIO
          </IconButton>
      </Container>
      <Footer />
    </div>
  )
}

export default Suporte
