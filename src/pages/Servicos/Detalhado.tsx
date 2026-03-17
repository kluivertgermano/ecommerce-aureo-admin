import { Heading, Box, Flex, Container, Text, Button, IconButton } from '@chakra-ui/react'

import { HearderAlt } from '../../components/includes'

import INTERNET from '../../assets/images/paineis/Internet.png'

import Footer from '../../components/includes/Footer'
import { HiArrowSmUp } from 'react-icons/hi'

function ServicosDetalhado() {
  return (
    <div>
    
      <HearderAlt titulo={"Muito além da internet: soluções completas para você e sua empresa"} subtitulo={""}/>
        <Flex mt={0} flexDirection={"column"} flexWrap={"wrap"} p={[0,20]}>
            <Flex flexDirection={"column"} alignItems={"center"} width={["auto","auto"]} px={[0,10]} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5} shadow={"xl"} rounded={30} width={[300,1200]} height={[150,500]} bgRepeat={"no-repeat"} bgPos={"center"} bgSize={"cover"} bgImage={`url(${INTERNET})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Internet</Heading>
              </Box>
              <Box mt={[0,10]} fontSize={[14,20]} fontWeight={500} p={[10,0]} width={["auto","auto"]} textAlign={"left"}>
                <Text textAlign={["justify","initial"]} mb={[2,0]}>Conexão de alta velocidade, estável e com suporte próximo. Ideal para residências, empresas e usuários exigentes.</Text>
                <Text textAlign={["justify","initial"]} mb={[2,0]}>Conexão de alta velocidade, estável e com suporte próximo. Ideal para residências, empresas e usuários exigentes.</Text>
                <Text textAlign={["justify","initial"]} mb={[2,0]}>Conexão de alta velocidade, estável e com suporte próximo. Ideal para residências, empresas e usuários exigentes.</Text>
              </Box>
              <Flex mt={[0,10]} flex={1} px={[10,20]} width={["full","auto"]} alignItems={"center"}>
                <Button w={["auto",300]} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
        </Flex> 

      <Footer />
    </div>
  )
}

export default ServicosDetalhado
