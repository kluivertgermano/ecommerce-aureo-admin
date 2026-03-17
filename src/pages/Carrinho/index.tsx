import { Heading, Text, Box, Flex, Container, Image, Separator, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton, NumberInput, HStack } from '@chakra-ui/react'

import { Header, HearderAlt, Paginations, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { MdDelete, MdRemove, MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router'
import { FaRemoveFormat } from 'react-icons/fa'
import { BiX, BiXCircle } from 'react-icons/bi'
import { HiOutlineShoppingBag, HiRefresh } from 'react-icons/hi'
import { LuMinus, LuPlus } from 'react-icons/lu'

function FilterByPrice(){
  return  <InputGroup  endElement="USD">
          <>
            <Input placeholder="0.00"/>
          </>
        </InputGroup>        
                      
                      
}

function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='MEU CARRINHO' />
        <Flex mt={[5,20]} px={[5,40]} justifyContent={"space-between"} direction={["column","row"]}>

          <Box flex={1} mr={[0,5]}>
                <Grid templateColumns={["repeat(1, 1fr)"]} gapX="5">
                  {
                    newProducts.map(product => 
                      
                    <GridItem mb={[5,5]} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`} display={"flex"} flexDirection={["column","row"]} justifyContent={"space-between"} alignItems={"center"}>
                      <Flex justifyContent={"space-between"}>
                        <Image width={[150]} src={`${product.img}`} mb={5} cursor={"pointer"} />
                        <Box ml={[5]}>
                          <Heading as={Link} to="/loja/:produto" cursor={"pointer"} color={COLORS.azul} size={["sm","lg"]}>{product.descricao}</Heading>
                          <Text fontSize={12} color={COLORS.cinza}>{product.categoria}</Text>
                          <Text mt={2} fontSize={14} color={COLORS.cinza}>Tamanho: Regular</Text>
                          <Text fontSize={14} color={COLORS.cinza}>Cor: Branco e Azul</Text>
                          <Text mt={3} color={COLORS.amarelo} fontSize={[14,20]} fontWeight={600}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)}</Text>
                        </Box>
                      </Flex>
                      <Flex justifyContent={"space-between"} alignItems={["start","center"]} mb={[5,0]}>
                        <NumberInput.Root defaultValue="3" unstyled spinOnPress={false}>
                          <HStack gap="2">
                            <NumberInput.DecrementTrigger asChild>
                              <IconButton variant="outline" size="sm">
                                <LuMinus />
                              </IconButton>
                            </NumberInput.DecrementTrigger>
                            <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                            <NumberInput.IncrementTrigger asChild>
                              <IconButton variant="outline" size="sm">
                                <LuPlus />
                              </IconButton>
                            </NumberInput.IncrementTrigger>
                          </HStack>
                        </NumberInput.Root>
                        <IconButton ml={5} width={["50%",40]} borderColor={COLORS.preto} p={5} aria-label="Search database" variant={"outline"}>
                          <BiX/> REMOVER
                        </IconButton>
                      </Flex>
                    </GridItem>
                )}
              </Grid>
              <Flex justifyContent={"space-between"} my={[5,0]} flexDirection={["column","row"]}>
                <Flex mb={[3,0]} justifyContent={"space-between"}>
                  <IconButton width={["100%","auto"]} as={Link} to="/loja" bg={COLORS.amarelo} p={5} aria-label="Search database" variant={"solid"}>
                    <HiOutlineShoppingBag/> CONTINUAR A COMPRAR
                  </IconButton>
                </Flex>
                <Flex justifyContent={"space-between"} alignItems={"center"} flexDirection={["column","row"]}>
                  <IconButton mb={[3,0]} width={["100%","auto"]} bg={COLORS.bg.cinzaPage} p={5} aria-label="Search database" variant={"outline"}>
                    <BiXCircle/> LIMPAR O CARRINHO
                  </IconButton>
                  <IconButton mb={[3,0]} width={["100%","auto"]} ml={[0,3]} bg={COLORS.azul} color={COLORS.branco} borderColor={COLORS.bg.cinzaPage} p={5} aria-label="Search database" variant={"outline"}>
                    <HiRefresh/> ACTUALIZAR O CARRINHO
                  </IconButton>
                </Flex>
              </Flex>
          </Box>

          <Box p={5} bg={COLORS.bg.cinzaPage}>

                <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} p={4}>
                  <Heading size={["sm","xl"]} mb={2}>Aplicar código de desconto</Heading>
                  <Flex>
                    <Input p={[3,5]} bg={COLORS.branco} rounded={0} m={0} type='search' placeholder='Insira código de desconto' />
                    <Button p={[3,5]} bg={COLORS.bg.pretoBaco} rounded={0}>APLICAR</Button>
                  </Flex>
                </Box>

                <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} p={4} color={COLORS.cinza}>
                  <Flex py={2} fontSize={[12,13]} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>Subtotal:</Text>
                    <Text>{Intl.NumberFormat("PT").format(1981.16)}</Text>
                  </Flex>
                  <Flex py={2} fontSize={[12,13]} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>Impostos:</Text>
                    <Text>{Intl.NumberFormat("PT").format(19.16)}</Text>
                  </Flex>
                  <Flex py={2} fontSize={[12,13]} justifyContent={"space-between"} alignItems={"center"}>
                    <Text>Desconto:</Text>
                    <Text>{Intl.NumberFormat("PT").format(197)}</Text>
                  </Flex>
                  <Flex py={5} fontSize={[13,13]} justifyContent={"space-between"} alignItems={"center"} color={COLORS.preto} borderTop={`1px solid ${COLORS.bg.cinzaBorda}`}>
                    <Heading>Total do pedido:</Heading>
                    <Heading>{Intl.NumberFormat("PT").format(2971.33)}</Heading>
                  </Flex>
                  <Button as={Link} to="/checkout-detalhes" w={"full"} p={5} bg={COLORS.bg.pretoBaco} rounded={0}>FAZER O CHECK-OUT</Button>
                </Box>

          </Box>
        </Flex>

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
