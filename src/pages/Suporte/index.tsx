import { Heading, Text, Box, Flex, Container } from '@chakra-ui/react'

import { HearderAlt } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { FaRegEnvelope } from 'react-icons/fa'

function Suporte() {
  return (
    <div>
    
      <HearderAlt titulo={"Muito mais que internet: somos parte da sua comunidade"} subtitulo={"Atendimento humano, tecnologia de ponta e compromisso com você."}/>
      <Container textAlign={"center"} py={[10,10]}>
          <Flex flexDirection={["column", "row"]} px={[5,20]} py={[5,20]} mt={10}  justifyContent={"center"} alignItems={"center"}>
            <Flex flexDirection={"column"} mt={[15,0]} alignItems={"center"} width={["auto","33%"]} px={10} height={["full"]}>
              <Flex shadow={"2xl"} justifyContent={"center"} alignItems={"center"} p={20} width={[278]} height={[261]} rounded={40} bg={"white"}>
                <BsTelephone color="#3DADFF" size={150} />
              </Flex>
              <Text mt={5} mb={[5,0]} textAlign={"center"}>Atendimento humanizado</Text>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"center"} width={["auto","33%"]}  px={10} height={["full"]}>
              <Flex shadow={"2xl"} justifyContent={"center"} alignItems={"center"} p={20} width={[278]} height={[261]} rounded={40} bg={"white"}>
                <FaRegEnvelope color="#3DADFF" size={150} />
              </Flex>
              <Text mt={5} mb={[5,0]} textAlign={"center"}>Para casos especificos</Text>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"center"} width={["auto","33%"]}  px={10} height={["full"]}>
              <Flex shadow={"2xl"} justifyContent={"center"} alignItems={"center"} p={20} width={[278]} height={[261]} rounded={40} bg={"white"}>
                <BsWhatsapp color="#3DADFF" size={150} />
              </Flex>
              <Text mt={5} mb={[5,0]} textAlign={"center"}>Suporte imediato</Text>
            </Flex>
          </Flex>
          
          <Box textAlign={"center"}>
            <Heading mt={[10,20]} size={["4xl","6xl"]}>FAQ dinâmico abaixo</Heading>
            <Flex justifyContent={"space-evenly"}>
              <Text mt={[0, 20]} p={[10,0]} fontSize={[16,24]}>1º Como emitir a 2ª via da fatura?</Text>
              <Text mt={[0, 20]} p={[10,0]} fontSize={[16,24]}>2º Como testar minha velocidade?</Text>
            </Flex>
          </Box>
      </Container>
      <Footer />
    </div>
  )
}

export default Suporte
