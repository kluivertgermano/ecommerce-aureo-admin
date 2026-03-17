import { Heading, Text, Box, Flex, Container, Image, Separator, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton } from '@chakra-ui/react'

import { Header, HearderAlt, Paginations } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router'

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
        <Flex border={`1px solid ${COLORS.bg.cinzaBorda}`} px={[5,40]} py={[0,5]} bg={COLORS.bg.cinzaPage}>
            <Heading fontWeight={500}>DETALHES DO PRODUTO</Heading>
        </Flex>
        <Box mt={20} px={[5,40]}>
          <Flex>   
            <Box>  
                  {
                    products.map(product => 
                      
                    <Flex direction={["column","row"]}>
                      <Image p={5} border={`1px solid ${COLORS.bg.cinzaBorda}`} src={`${product.img}`} mb={5} cursor={"pointer"} />
                      <Box p={5}>
                        <Heading cursor={"pointer"} color={COLORS.azul} size={["2xl","4xl"]}>{product.nome_produto}</Heading>  
                        <Text mt={2} color={COLORS.amarelo} fontSize={20} fontWeight={600}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)}</Text>
                        <Text mt={5}>Descrição</Text>
                        <Text fontSize={13} mt={3} color={COLORS.cinza}>{product.descricao}</Text>
                        <Flex mt={5} width={["full","auto"]}>
                          <Text fontSize={14} mt={3}>Id do produto</Text>
                          <Text fontSize={14} mt={3} ml={10} color={COLORS.cinza}>{product.id_produto}</Text>
                        </Flex>
                        <IconButton
                          mt={5}
                          width={["full","auto"]}
                          aria-label="Call support"
                          variant={"solid"}
                          colorScheme={"black"}
                          p={2}
                        >
                          <MdShoppingCart />
                          ADICIONAR AO CORRINHO
                        </IconButton>
                      </Box>
                    </Flex>
                )}
            </Box>
          </Flex>

          <Box mt={20}>
                <Flex align="center" gap={[1,3]}>
                  <Separator flex="1" />
                    <Heading>PRODUTOS SIMILARES</Heading>
                  <Separator flex="1" />
                </Flex>

                <Grid templateColumns={["repeat(2, 1fr)","repeat(4, 1fr)"]} gapX="5" py={7}>
                  {
                    newProducts.map(product => 
                      
                    <GridItem mb={[5,2]}>
                      <Image src={`${product.img}`} mb={5} cursor={"pointer"} />
                      <Text fontSize={12} color={COLORS.cinza}>{product.categoria}</Text>
                      <Heading as={Link} to="/loja/:produto" cursor={"pointer"} color={COLORS.azul} size={["sm","md"]}>{product.descricao}</Heading>
                      <Text color={COLORS.amarelo} fontSize={14} fontWeight={600}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)}</Text>
                    </GridItem>
                )}
              </Grid>
          </Box>
        </Box>

      <Footer />
    </div>
  )
}

const products = [
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/01.png",
    categoria: "Topwear",
    descricao:"A Off-White de Virgil Abloh é uma coleção inspirada em streetwear que continua a romper com as convenções da moda convencional. Feito na Itália, estes tênis Odsy-1000 low-top preto e marrom.",
    nome_produto:"T-shirt de polo masculino Allen Solly",
    preco: 17480.17,
    id_produto: "#BHU5879"
  }
]

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
