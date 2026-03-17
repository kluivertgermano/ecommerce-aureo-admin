import { Heading, Text, Box, Flex, Image, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton, Stack, Avatar, HStack, Field, Textarea, Separator, Center, Container, Span,  } from '@chakra-ui/react'

import { Header, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'

function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='Esqueceu sua senha' />
        <Container mt={[5,20]} width={["auto","40%"]}>
          
            <Box p={[0,5]}  color={COLORS.cinza}>
              <Flex alignItems="center" gap={[1,3]}>
                <Separator flex="1" />
                  <Heading color={COLORS.bg.pretoBaco} size={"2xl"}>Esqueceu sua senha?</Heading>
                <Separator flex="1" />
              </Flex>
              <Text mb={10} textAlign={"center"} mt={1} fontSize={14}>Insira seu endereço de e-mail cadastrado para redefinir a senha.</Text>
              <form action="" method="post">
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>E-mail</Field.Label>
                    <Input placeholder="" />
                  </Field.Root>
                </Flex>
                <Button as={Link} to="/esqueceu-senha-pin" width={"full"} mt={3} bg={COLORS.azul}>ENVIAR</Button>
                <Text mt={[3]} textAlign={"center"} fontSize={14}><Link to={"/login"}>Voltar ao login</Link></Text>
              </form>
            </Box>
        </Container>

      <Footer />
    </div>
  )
}


export default Loja
