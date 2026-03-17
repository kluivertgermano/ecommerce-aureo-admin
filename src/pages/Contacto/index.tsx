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
        <Title title='CONTACTOS' />
        <Flex mt={[5,20]} px={[5,40]} justifyContent={"space-between"} direction={["column","row"]}>

          <Box flex={1} mr={[0,5]}>
                
              <Flex direction={["column"]} alignItems={"center"} justifyContent={"space-between"}>
                <Stack gap="8" width={"full"}>
                  <iframe style={{"border":"none"}} src="https://mapy.com/s/nomejevoke" width="100%" height="380" frameborder="0"></iframe>
                </Stack>
              </Flex>

              <Flex mt={[5]} direction={["column","row"]}>
                <Box flex={1} p={5} border={`1px solid ${COLORS.bg.cinzaBorda}`} color={COLORS.cinza}>
                  <form action="" method="post">
                    <Heading color={COLORS.preto} pb={3} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`}>Envie-nos uma mensagem</Heading>
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
                        <Field.Label>Mensagem</Field.Label>
                        <Textarea placeholder="" />
                      </Field.Root>
                    </Flex>
                    <Button mt={3} bg={COLORS.bg.pretoBaco}>ENVIAR MENSAGEM</Button>
                  </form>
                </Box>
                <Box ml={[0,5]} p={5} mt={[5,0]} bg={COLORS.bg.cinzaPage}>
                  <Heading fontWeight={400}>Endereço</Heading>
                  <Text color={COLORS.cinza} mb={3} fontSize={12}>123 Nome da Rua, Cidade, Austrália</Text>

                  <Heading fontWeight={400}>Telefone</Heading>
                  <Text color={COLORS.cinza} fontSize={12}>Ligação gratuita (123) 472-796</Text>
                  <Text color={COLORS.cinza} mb={3} fontSize={12}>Celular: +91-9910XXXX</Text>

                  <Heading fontWeight={400}>E-mail</Heading>
                  <Text color={COLORS.cinza} mb={3} fontSize={12}>mail@exemplo.com</Text>

                  <Heading fontWeight={400}>DIAS ÚTEIS</Heading>
                  <Text color={COLORS.cinza} fontSize={12}>Segunda a sexta, das 9h30 às 18h30.</Text>
                </Box>
              </Flex>
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
