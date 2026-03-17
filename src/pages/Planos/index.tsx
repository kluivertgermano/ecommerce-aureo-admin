import { Button, Heading, Text, Box, Flex, Container, IconButton } from '@chakra-ui/react'

import { HiArrowSmUp } from 'react-icons/hi'
import { HearderAlt } from '../../components/includes'
import Footer from '../../components/includes/Footer'

function index() {
  return (
    <div>
    
      <HearderAlt titulo={"Planos de internet para todos os perfis"} subtitulo={"Seja para sua casa ou empresa, temos a velocidade certa para o seu dia a dia."}/>
      <Container textAlign={"center"} py={[10,10]}>
          <Heading mt={[-1,10]} fontWeight={400} size={["xl","4xl"]}>Navegue sem travar, faça videochamadas estáveis e aproveite streaming em alta qualidade</Heading>
          
          <Flex my={[20,20]} flexDirection={["column","row"]} justifyContent={"center"} flexWrap={"wrap"}>
            <Box shadow={"lg"} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>3 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>17.900,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box shadow={"lg"} ml={[0,5]} mt={[5,0]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>6 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>26.200,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box  shadow={"lg"} ml={[0,5]} mt={[5,0]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>8 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>32.200,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box  shadow={"lg"} ml={[0,0]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>10 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>44.000,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
          </Flex>
          <Button w={["100%","fit"]} flex={[0,1]} p={6} width={["xs","sm"]} rounded={15} mt={[]} shadow={["lg"]} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Ver todos os planos</Button>
      </Container>
      <Flex justifyContent={"center"} mb={10}>
          <Box rounded={10} mt={20} width={"90%"} height={3} bgImage="linear-gradient(90deg, rgba(61, 173, 255, 0) 0%, rgba(61, 173, 255, 0.67) 31.25%, rgba(61, 173, 255, 0.67) 71.63%, rgba(61, 173, 255, 0) 100%)"></Box>
      </Flex>
      <Container textAlign={"center"} py={[10,10]}>
          <Heading mt={[-10,20]} size={["xl","6xl"]}>Conexão empresarial confiável</Heading>
          <Text textAlign={"center"} mt={[5,0]} fontSize={[14,20]}>Soluções com suporte dedicado e SLA<br/> para o seu negócio não parar.</Text>
      
          <Flex my={[20,20]} flexDirection={["column","row"]} justifyContent={"center"} flexWrap={"wrap"}>
            <Box shadow={"lg"} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>20 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>88.000,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box shadow={"lg"} ml={[0,5]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>30 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>132.000,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box  shadow={"lg"} ml={[0,5]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>40 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>140.000,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box shadow={"lg"}  ml={[0,5]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>50 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>187.500,00 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box shadow={"lg"} ml={[0,5]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>100 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>374.999,58 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box  shadow={"lg"} ml={[0,5]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>150 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>549.999,84 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
            <Box  shadow={"lg"} ml={[0,5]} mt={[5,5]} rounded={30} textAlign={"left"}>
                <Box p={[7,10]}>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"} fontSize={[16,20]}>Ilimitado</Text>
                  <Text mb={7} pb={3} borderBottom={"1px solid rgba(0,0,0,0.09)"}  fontSize={[16,20]}>200 Mbps</Text>
                  <Text mb={7} fontSize={[24,34]} fontWeight={600}>734.997,90 AKZ/mês</Text>
                  <Flex alignItems={"center"}>
                    <Button w={"fit"} flex={1} p={6} rounded={15} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Contratar</Button><IconButton borderColor={"black"} size={"2xl"} variant={"outline"} rounded="full"><HiArrowSmUp/></IconButton>
                  </Flex>
                </Box>
            </Box>
          </Flex>
          <Button w={["100%","fit"]} flex={[0,1]} p={6} width={["xs","sm"]} rounded={15} mt={[]} shadow={["lg"]} fontSize={15} bg={"#3DADFF;"} color={"white"} mr={2}>Ver todos os planos</Button>
      </Container>

      <Footer />
    </div>
  )
}

export default index
