import { Heading, Text, Box, Container, IconButton } from '@chakra-ui/react'

import { Header } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router'

function Suporte() {
  return (
    <div>
    
      <Header/>
      <Container textAlign={"center"} py={[10,10]}>

          <Box textAlign={"center"} border={`1px solid ${COLORS.bg.cinzaBorda}`} p={5}>
            <Heading size={"3xl"}>Obrigado pelo seu pedido!</Heading>

            <Text fontSize={14} mt={5} color={COLORS.cinza}>Seu pedido foi realizado e será processado o mais breve possível.</Text>
            <Text fontSize={14} color={COLORS.cinza}>Certifique-se de anotar o número do seu pedido, que é 34VB5540K83.</Text>
            <Text fontSize={14} mb={5} color={COLORS.cinza}>Você receberá em breve um e-mail com a confirmação do seu pedido. Agora você pode:</Text>

            <IconButton as={Link} to="/loja" mb={[3,0]} width={["100%","auto"]} bg={COLORS.amarelo} p={5} aria-label="Search database" variant={"outline"}>
              <MdArrowBackIos/> VOLTAR AS COMPRAS
            </IconButton>
          </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default Suporte
