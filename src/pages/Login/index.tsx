import { Heading, Text, Box, Flex, Image, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton, Stack, Avatar, HStack, Field, Textarea, Separator, Center, Container, Span,  } from '@chakra-ui/react'

import { Header, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'

function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='LOGIN' />
        <Container mt={[5,20]} width={["auto","40%"]}>
          
            <Box p={[0,5]}  color={COLORS.cinza}>
              <Flex alignItems="center" gap={[1,3]}>
                <Separator flex="1" />
                  <Heading color={COLORS.bg.pretoBaco} size={"2xl"}>Entrar</Heading>
                <Separator flex="1" />
              </Flex>
              <Text mb={10} textAlign={"center"} mt={1} fontSize={14}>Ainda não tem uma conta? <Link to={"/cadastro"}><Span color={"blue.500"}> Cadastre-se aqui.</Span></Link></Text>
              <form action="" method="post">
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>E-mail</Field.Label>
                    <Input placeholder="" />
                  </Field.Root>
                </Flex>
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>Senha</Field.Label>
                    <Input type='password' placeholder="" />
                  </Field.Root>
                </Flex>
                <Flex direction={["column","row"]} justifyContent={"space-between"} alignItems={"center"}>
                  <Checkbox.Root size={"sm"} mt={3}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontWeight={400} color={COLORS.cinza}>Lembre de mim</Checkbox.Label>
                  </Checkbox.Root>

                  <Text mt={[0,3]} fontSize={14} color={"blue.500"}><Link to={"/esqueceu-senha"}>Esqueceu sua senha ?</Link></Text>
                </Flex>
                <Button width={"full"} mt={3} bg={COLORS.azul}>LOGIN</Button>
              </form>
            </Box>
        </Container>

      <Footer />
    </div>
  )
}


export default Loja
