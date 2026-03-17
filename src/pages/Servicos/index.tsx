import { Heading, Box, Flex, Container, Text, Button, IconButton } from '@chakra-ui/react'

import { HearderAlt } from '../../components/includes'

import INTERNET from '../../assets/images/paineis/Internet.png'
import VPN from '../../assets/images/paineis/VPN.png'
import INFRA from '../../assets/images/paineis/INFRA.png'
import SEGURANCA from '../../assets/images/paineis/SEGU.png'
import COLOCACAO from '../../assets/images/paineis/COLOCA.png'
import SMARTSMS from '../../assets/images/paineis/SMART.png'
import HOSTING from '../../assets/images/paineis/HOSTING.png'

import Footer from '../../components/includes/Footer'
import { HiArrowSmUp } from 'react-icons/hi'
import { Link } from 'react-router'

function Servicos() {
  return (
    <div>
    
      <HearderAlt titulo={"Muito além da internet: soluções completas para você e sua empresa"} subtitulo={""}/>
        <Container>
          <Heading mt={[10,20]} textAlign={"center"} fontWeight={400} size={["xl","3xl"]}>Infraestrutura, segurança e comunicação digital com a confiabilidade que você já conhece.</Heading>
        </Container>
        <Flex mt={10} flexDirection={"column"} flexWrap={"wrap"} p={[0,20]}>
            <Flex flexDirection={["column", "row"]} mt={[15,0]} alignItems={"center"} width={["auto","auto"]} px={[0,10]} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5} shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${INTERNET})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Internet</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Conexão de alta velocidade, estável e com suporte próximo. Ideal para residências, empresas e usuários exigentes.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/1"} w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} mt={[15, 0]} alignItems={"center"} width={["auto","auto"]} px={10} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5} shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${VPN})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>VPN</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Acesse seus dados e sistemas com segurança, mesmo fora da empresa. Conexão criptografada para trabalho remoto e filiais.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/2"}  w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} mt={[15, 0]} alignItems={"center"} width={["auto","auto"]} px={10} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5}shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${INFRA})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Instalação de nfraestrutura</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Configuração e instalação de roteadores, switches, servidores e outros equipamentos essenciais.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/3"}  w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} mt={[15, 0]} alignItems={"center"} width={["auto","auto"]} px={10} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5}shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${SEGURANCA})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Segurança de redes</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Plataforma de envio de SMS em massa para comunicação rápida com clientes e equipes.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/4"}  w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} mt={[15, 0]} alignItems={"center"} width={["auto","auto"]} px={10} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5}shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${COLOCACAO})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Colocação</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Servidores estáveis para hospedar sites, sistemas e aplicações empresariais.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/5"}  w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} mt={[15, 0]} alignItems={"center"} width={["auto","auto"]} px={10} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5}shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${SMARTSMS})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Smart SMS</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Projetamos e instalamos redes cabeadas e sem fio para empresas, condomínios e órgãos públicos.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/6"}  w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} mt={[15, 0]} alignItems={"center"} width={["auto","auto"]} px={10} height={["full"]}>
              <Box position={"relative"} ml={[0,5]} my={5}shadow={"xl"} rounded={30} width={[278]} height={[260]} bgRepeat={"no-repeat"} bgPos={"inherit"} bgSize={"cover"} bgImage={`url(${HOSTING})`}>
                <Heading height={[100]} roundedBottom={30} width={"full"} bottom={0} position={"absolute"} bgImage={"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"} p={5} color={"white"}>Hospedagem</Heading>
              </Box>
              <Box width={["auto","50%"]} textAlign={"left"} ml={[3, 5]}>
                <Text p={[5,10]} textAlign={["center","initial"]} color={"gray.500"} mb={[2,0]}>Monitoramento, firewall e soluções avançadas contra ameaças digitais.</Text>
              </Box>
              <Flex flex={1} alignItems={"center"} ml={[3, 5]}>
                <Button as={Link} to={"/servicos/7"}  w={"full"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
              </Flex>
            </Flex>
        </Flex> 

      <Footer />
    </div>
  )
}

export default Servicos
