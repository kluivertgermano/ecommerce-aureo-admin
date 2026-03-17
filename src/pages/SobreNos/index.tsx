import { Heading, Text, Box, Flex } from '@chakra-ui/react'

import { HearderAlt } from '../../components/includes'
import RUIANTENA from '../../assets/images/paineis/Sobrenos.jpg'
import TeamCat from '../../assets/images/paineis/teamCat.png'
import Footer from '../../components/includes/Footer'

function Suporte() {
  return (
    <div>
    
      <HearderAlt titulo={"Muito mais que internet: somos parte da sua comunidade"} subtitulo={"Atendimento humano, tecnologia de ponta e compromisso com você."}/>
      
          <Flex flexDirection={["column", "row"]} px={[5, 40]} py={[5,40]} mt={20} justifyContent={"center"}>
            <Box  px={[0, 10]}>
              <Heading textAlign={["center","initial"]} size={["2xl","4xl"]}>Há mais de 25 anos conectando Angola ao mundo e contribuindo para o seu desenvolvimento</Heading>
              <Text mt={10} textAlign={"justify"} fontSize={[14,20]}>
                A <b>CA Telecom</b> é uma empresa angolana com mais de 25  anos de experiência no sector de telecomunicações. Durante  este tempo, focamo-nos principalmente em atender clientes empresariais de grande porte, como o Ministério do Interior e  o sector petrolífero, oferecendo soluções de conectividade de  alta qualidade.
              </Text>
              <Text mt={10} textAlign={"justify"} fontSize={[14,20]}>
                Atualmente, estamos em expansão para atender  também ao mercado residencial e aumentar nossa presença  em outras províncias do país, levando soluções de internet e  comunicação de dados a mais angolanos.
              </Text>
            </Box>
            <Box px={[0, 10]} mt={[5,0]} rounded={40} height={[400, 545]} bgPos={"center"} bgSize={"cover"} width={["auto", 761, 961]} textAlign={"right"} bgImage={`url(${RUIANTENA})`}></Box>
          </Flex>
          
          <Flex justifyContent={"center"} mb={10}>
              <Box rounded={10} mt={20} width={"full"} height={3} bgImage="linear-gradient(90deg, rgba(61, 173, 255, 0) 0%, rgba(61, 173, 255, 0.67) 31.25%, rgba(61, 173, 255, 0.67) 71.63%, rgba(61, 173, 255, 0) 100%)"></Box>
          </Flex>
          
          <Box textAlign={"center"} px={[5, 40]}>
            <Heading mt={[10,20]} width={["auto", 500]}  textAlign={["center","initial"]} size={["2xl","4xl"]}>Atendimento próximo, suporte rápido, conexão estável.</Heading>
          </Box>
      <Flex mt={7} height={[212,612]} bgSize={["cover"]} bgRepeat={"no-repeat"} alignItems={"center"} justifyContent={"center"} bgImage={`url(${TeamCat})`}></Flex>
      <Footer />
    </div>
  )
}

export default Suporte
