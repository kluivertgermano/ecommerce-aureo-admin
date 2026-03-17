import { Heading, Text, Box, Flex, Image, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton, Stack, Avatar, HStack, Field, Textarea,  } from '@chakra-ui/react'

import { Header, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'
import { FaRegEdit } from 'react-icons/fa'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

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
        <Title title='DETALHES DO CHECKOUT' />
        <Flex mt={[5,20]} px={[5,40]} justifyContent={"space-between"} direction={["column","row"]}>

          <Box flex={1} mr={[0,5]}>
                
                <Flex direction={["column", "row"]} p={[0,5]} alignItems={"center"} justifyContent={"space-between"}>
                  <Stack gap="8">
                    {users.map((user) => (
                      <HStack key={user.email} gap="4">
                        <Avatar.Root size={"2xl"}>
                          <Avatar.Fallback name={user.name} />
                          <Avatar.Image src={user.avatar} />
                        </Avatar.Root>
                        <Stack gap="0">
                          <Text fontWeight="medium">{user.name}</Text>
                          <Text color="fg.muted" textStyle="sm">
                            {user.email}
                          </Text>
                        </Stack>
                      </HStack>
                    ))}
                  </Stack>
                  <IconButton  mt={[3,0]} mb={[3,0]} width={["full","auto"]} bg={COLORS.amarelo} p={5} aria-label="Search database" variant={"outline"}>
                    <FaRegEdit/> EDITAR O PERFIL
                  </IconButton>
                </Flex>

                <Box mt={[0,10]} p={[5]} border={`1px solid ${COLORS.bg.cinzaBorda}`} color={COLORS.cinza}>
                  <form action="" method="post">
                    <Heading color={COLORS.preto} pb={3} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`}>Endereço para envio</Heading>
                    <Flex direction={["column", "row"]} mt={3}>
                      <Field.Root>
                        <Field.Label>Primeiro nome</Field.Label>
                        <Input placeholder="" />
                      </Field.Root>
                      <Field.Root ml={[0,5]} mt={[3,0]}>
                        <Field.Label>Sobrenome</Field.Label>
                        <Input placeholder="" />
                      </Field.Root>
                    </Flex>
                    <Flex direction={["column", "row"]} mt={3}>
                      <Field.Root>
                        <Field.Label>E-mail</Field.Label>
                        <Input placeholder="" />
                      </Field.Root>
                      <Field.Root ml={[0,5]} mt={[3,0]}>
                        <Field.Label>Número de telefone</Field.Label>
                        <Input placeholder="" />
                      </Field.Root>
                    </Flex>
                    <Flex direction={["column", "row"]} mt={3}>
                      <Field.Root>
                        <Field.Label>Endereço 1</Field.Label>
                        <Textarea placeholder="" />
                      </Field.Root>
                      <Field.Root ml={[0,5]} mt={[3,0]}>
                        <Field.Label>Endereço 2</Field.Label>
                        <Textarea placeholder="" />
                      </Field.Root>
                    </Flex>
                    <Heading color={COLORS.preto} py={3} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`}>Endereço de Cobrança</Heading>
                    <Checkbox.Root size={"sm"} mt={3}>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label fontWeight={400} color={COLORS.cinza}>Igual ao endereço de entrega.</Checkbox.Label>
                    </Checkbox.Root>
                  </form>
                  <Flex mt={5} justifyContent={"space-between"} alignItems={"center"} flexDirection={["column","row"]}>
                    <IconButton as={Link} to="/carrinho" mb={[3,0]} width={["100%","auto"]} bg={COLORS.amarelo} p={5} aria-label="Search database" variant={"outline"}>
                      <MdArrowBackIos/> VOLTAR AO CARRINHO
                    </IconButton>
                    <IconButton as={Link} to="/checkout-entregas" mb={[3,0]} width={["100%","auto"]} ml={[0,3]} bg={COLORS.azul} color={COLORS.branco} borderColor={COLORS.bg.cinzaPage} p={5} aria-label="Search database" variant={"outline"}>
                      FAZER O CHECKOUT <MdArrowForwardIos/>
                    </IconButton>
                  </Flex>
                </Box>
          </Box>

          <Box p={5} bg={COLORS.bg.cinzaPage} mt={[5,0]}>

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

const users = [
  {
    id: "1",
    name: "Aureo Inacio",
    email: "aureo.inacio@example.com",
    avatar: "https://i.pravatar.cc/300?u=iu",
  }
]

export default Loja
