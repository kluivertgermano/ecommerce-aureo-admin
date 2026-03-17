import { Heading, Text, Box, Flex, Container, Image, Separator, Input, Checkbox, Grid, GridItem, InputGroup, Button } from '@chakra-ui/react'

import { Header, HearderAlt, Paginations, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
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
        <Title title='NOSSOS PRODUTOS' />
        <Box mt={[5,20]} px={[5,40]}>
          <Flex direction={["column","row"]} justifyContent={"space-between"}>  
            <Box hideBelow={"md"} width={["auto","20%"]} flex={1} border={`1px solid ${COLORS.bg.cinzaBorda}`}>
              <Heading p={3} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`}>{filters.titulo}</Heading>
              {
                filters.filtros.map((fl, idx) =>
                  <Box p={5}>
                    <Heading mb={5} bg={COLORS.bg.cinzaPage} p={1} size={["lg","sm"]}>{fl.titulo}</Heading>
                    <Flex direction={"column"}>
                      { fl.itens.map( (item) =>
                        <Flex mb={2}>
                          <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            {idx != 2 && <Checkbox.Control />}
                            <Checkbox.Label color={COLORS.cinza} fontWeight={400}>{item}</Checkbox.Label>
                          </Checkbox.Root>
                        </Flex>
                        )
                      }
                    </Flex>
                    <Separator mt={5} />
                  </Box>
                )
              }
            </Box>    
            <Box width={["100%","80%"]} ml={[0,7]}>  
              <Grid templateColumns={["repeat(2, 1fr)","repeat(4, 1fr)"]} gapX="5">
                  {
                    products.map(product => 
                      
                    <GridItem mb={[2,5]}>
                      <Image src={`${product.img}`} mb={5} cursor={"pointer"} />
                      <Text fontSize={12} color={COLORS.cinza}>{product.categoria}</Text>
                      <Heading as={Link} to="/loja/:produto" cursor={"pointer"} color={COLORS.azul} size={["sm","lg"]}>{product.descricao}</Heading>
                      <Text color={COLORS.amarelo} fontSize={14} fontWeight={600}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)}</Text>
                    </GridItem>
                )}
              </Grid>
                <Separator mb={5} ml={[0,0]}/>
                <Paginations    />
            </Box>
          </Flex>
        </Box>

      <Footer />
    </div>
  )
}

const products = [
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/01.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/02.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/03.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/04.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/05.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/06.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/07.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/08.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/09.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/10.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  }
]

const filters = {
  titulo: "Filtros",
  filtros: [
    {
      titulo: "Categorias",
      itens:["Camisas(1548) ","Jeans(568) ","Kurtas(784)","Sapatos(358)","Saltos(572) ","Cintos(4923)"]
    },
    {
      titulo: "Marcas",
      itens:[" Reebok(987) ","Adidas(358) ","Puma(5682) ","Ajio(5712) ","Motorola(657) "]
    },
    {
      titulo: "Preço",
      itens: [FilterByPrice()]
      
    },
    {
      titulo: "Cores",
      itens:["Amarelo(968) ","Verde(478)","Skyblue(256) ","Preto(124)","Roxo(897)","Laranja(68)","Brown(532) ","Rosa(452)"]
    }
  ]
}

export default Loja
