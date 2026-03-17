import { Heading, Text, Box, Flex, Image, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton, Stack, Avatar, HStack, Field, Textarea, Separator, Center, Container, Span,  } from '@chakra-ui/react'

import { Header, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'

function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='CADASTRO' />
        <Container mt={[5,20]} width={["auto","40%"]}>
          
            <Box p={[0,5]} color={COLORS.cinza}>
              <Flex alignItems="center" gap={[1,3]}>
                <Separator flex="1" />
                  <Heading color={COLORS.bg.pretoBaco} size={"2xl"}>Inscreva-se na loja</Heading>
                <Separator flex="1" />
              </Flex>
              <Text mb={10} textAlign={"center"} mt={1} fontSize={14}>Já tem uma conta? <Link to={"/login"}><Span color={"blue.500"}> Inicie sessão aqui.</Span></Link></Text>
              <form action="" method="post">
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
                </Flex>
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>Telefone Principal</Field.Label>
                    <Input placeholder="" />
                  </Field.Root>
                  <Field.Root ml={[0,5]} mt={[3,0]}>
                    <Field.Label>Telefone Alternativo</Field.Label>
                    <Input placeholder="" />
                  </Field.Root>
                </Flex>
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>Senha</Field.Label>
                    <Input type='password' placeholder="" />
                  </Field.Root>
                  <Field.Root ml={[0,5]} mt={[3,0]}>
                    <Field.Label>Senha repetida</Field.Label>
                    <Input type='password' placeholder="" />
                  </Field.Root>
                </Flex>
                <Flex>
                  <Checkbox.Root size={"sm"} mt={3}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontWeight={400} color={COLORS.cinza}>Li e concordo com os Termos e Condições.</Checkbox.Label>
                  </Checkbox.Root>
                </Flex>
                <Button width={"full"} mt={3} bg={COLORS.azul}>INSCREVER-SE</Button>
              </form>
            </Box>
        </Container>

      <Footer />
    </div>
  )
}


export default Loja
