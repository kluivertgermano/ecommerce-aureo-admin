import { Heading, Text, Box, Flex, Image, Input, Grid, GridItem, Button, IconButton, Stack,  For, Table,  } from '@chakra-ui/react'

import { Header, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='CONFIRA' />
        <Flex mt={[5,20]} px={[5,40]} justifyContent={"space-between"} direction={["column","row"]}>

          <Box flex={1} mr={[0,5]}>
                
                <Heading px={[5]}>Escolha o método de envio</Heading>

                <Box mt={[0,0]} p={[5]} color={COLORS.cinza}>
                  <Stack gap="10">
                    <For each={["outline"]}>
                      {(variant) => (
                        <Table.Root interactive key={variant} size="sm" variant={variant}>
                          <Table.Header>
                            <Table.Row>
                              <Table.ColumnHeader>Método</Table.ColumnHeader>
                              <Table.ColumnHeader>Tempo</Table.ColumnHeader>
                              <Table.ColumnHeader textAlign="end">Taixa</Table.ColumnHeader>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            {items.map((item) => (
                              <Table.Row cursor={"pointer"} key={item.id}>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell textAlign="end">{item.price}</Table.Cell>
                              </Table.Row>
                            ))}
                          </Table.Body>
                        </Table.Root>
                      )}
                    </For>
                  </Stack>
                  <Flex mt={5} justifyContent={"space-between"} alignItems={"center"} flexDirection={["column","row"]}>
                    <IconButton as={Link} to="/checkout-detalhes" mb={[3,0]} width={["100%","auto"]} bg={COLORS.amarelo} p={5} aria-label="Search database" variant={"outline"}>
                      <MdArrowBackIos/> VOLTAR AOS DETALHES
                    </IconButton>
                    <IconButton mb={[3,0]} as={Link} to="/checkout-pagamento" width={["100%","auto"]} ml={[0,3]} bg={COLORS.azul} color={COLORS.branco} borderColor={COLORS.bg.cinzaPage} p={5} aria-label="Search database" variant={"outline"}>
                      PROSSEGUIR PARA O PAGAMENTO <MdArrowForwardIos/>
                    </IconButton>
                  </Flex>
                </Box>
          </Box>

          <Box p={5} bg={COLORS.bg.cinzaPage}>

                <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} p={4}>
                  <Heading size={["sm","xl"]} mb={2}>Aplicar código de desconto</Heading>
                  <Flex>
                    <Input p={[3,5]} bg={COLORS.branco} rounded={0} m={0} type='search' placeholder='Insira código de desconto' />
                    <Button p={[3,5]} bg={COLORS.bg.pretoBaco} rounded={0}>APLICAR</Button>
                  </Flex>
                </Box>

                <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} p={4}>
                  <Heading size={["sm","xl"]} mb={2}>Resumo do pedido</Heading>
                  <Grid templateColumns={["repeat(1, 1fr)"]} gapX="5">
                    {
                      newProducts.map(product => 
                        
                      <GridItem mb={[5,5]} borderTop={`1px solid ${COLORS.bg.cinzaBorda}`} display={"flex"} flexDirection={["column","row"]} justifyContent={"space-between"} alignItems={"center"}>
                        <Flex mt={5} justifyContent={"space-between"}>
                          <Image width={[10]} src={`${product.img}`} cursor={"pointer"} />
                          <Box ml={[5]}>
                            <Heading as={Link} to="/loja/:produto" cursor={"pointer"} color={COLORS.azul} size={["sm","lg"]}>{product.descricao}</Heading>
                            <Text fontSize={14} color={COLORS.cinza}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)} x 2</Text>
                          </Box>
                        </Flex>
                      </GridItem>
                  )}
                </Grid>
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
    preco: 180
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/02.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 170
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/03.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 180.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/04.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/similar-products/05.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 148
  }
]

const items = [
  { id: 1, name: "Taxa fixa", category: "2 dias", price: 2999.99 },
  { id: 2, name: "Entrega no mesmo dia", category: "1 dia", price: 5100.00 },
  { id: 3, name: "Envio expresso", category: "--", price: 7200.0 },
  { id: 4, name: "Retirada no local", category: "--", price: 0.0 },
  { id: 5, name: "UPS Ground", category: "2 a 5 dias", price: 4599.99 },
]

export default Loja
