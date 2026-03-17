import { Heading, Text, Box, Container, Flex } from '@chakra-ui/react'

import { Header,  Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { FaHeadphonesAlt, FaShippingFast } from 'react-icons/fa'
import { MdPayment } from 'react-icons/md'


function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='SOBRE NÓS' />
        <Container py={[5,10]} textAlign={"justify"}>
          <Heading fontWeight={400} size={"3xl"}>Nossa história</Heading>

          <Text fontSize={14} mt={5} mb={5} color={COLORS.cinza}>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma bandeja de tipos e os misturou para criar um livro de amostras de tipos. Ele sobreviveu não apenas a cinco séculos, mas também à transição para a editoração eletrônica, permanecendo essencialmente inalterado.</Text>
          <Text fontSize={14} mb={5} color={COLORS.cinza}>Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma obra da literatura latina clássica de 45 a.C., o que o torna com mais de 2000 anos. Richard McClintock, um professor de latim do Hampden-Sydney College, na Virgínia, pesquisou uma das palavras latinas mais obscuras, consectetur, em uma passagem de Lorem Ipsum e, ao consultar as citações dessa palavra na literatura clássica, descobriu a fonte inquestionável.</Text>
          <Text fontSize={14} mb={5} color={COLORS.cinza}>Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma obra da literatura latina clássica de 45 a.C., o que o torna com mais de 2000 anos. Richard McClintock, um professor de latim do Hampden-Sydney College, na Virgínia, pesquisou uma das palavras latinas mais obscuras, consectetur, em uma passagem de Lorem Ipsum e, ao consultar as citações dessa palavra na literatura clássica, descobriu a fonte inquestionável.</Text>
          <Box>
            <Heading fontWeight={400} size={"3xl"} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`} py={5}>Por que nos escolher?</Heading>
          </Box>
          <Box mt={5}  display={"flex"} flexDirection={["column","row"]}>
                  <Flex bg={COLORS.branco}  direction={["column"]} flex={1}  justifyContent={"space-between"} p={0}>
                    <FaShippingFast size={50} />
                    <Box mt={4} >
                      <Heading fontWeight={400}>ENTREGA GRATUITA</Heading>
                      <Text mt={4} fontSize={12} color={COLORS.cinza}>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido usado pela indústria de alguma forma desde sua criação.</Text>
                    </Box>
                  </Flex>
                  <Flex bg={COLORS.branco}  direction={["column"]} flex={1} ml={[0,5]} mt={[5,0]}  justifyContent={"space-between"} p={0}>
                    <MdPayment size={50} />
                    <Box mt={4} >
                      <Heading fontWeight={400} >PAGAMENTOS SEGURO</Heading>
                      <Text mt={4} fontSize={12} color={COLORS.cinza}>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido usado pela indústria de alguma forma desde sua criação.</Text>
                    </Box>
                  </Flex>
                  <Flex bg={COLORS.branco}  direction={["column"]} flex={1} ml={[0,5]} mt={[5,0]}  justifyContent={"space-between"} p={0}>
                    <FaHeadphonesAlt size={50} />
                    <Box mt={4} >
                      <Heading fontWeight={400}>SUPORTE ONLINE 24/7</Heading>
                      <Text mt={4} fontSize={12} color={COLORS.cinza}>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido usado pela indústria de alguma forma desde sua criação.</Text>
                    </Box>
                  </Flex>
                </Box>
        </Container>
      <Footer />
    </div>
  )
}

const newProducts = [
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/01.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/02.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/03.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/04.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/05.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  }
]

export default Loja
