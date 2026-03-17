import { Heading, Text, Box, Flex, Image, Input, Checkbox, Grid, GridItem, InputGroup, Button, IconButton, Stack, Avatar, HStack, Field, Textarea, Separator, Center, Container, Span,  } from '@chakra-ui/react'

import { Header, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { Link } from 'react-router'

function Loja() {

  return (
    <div>
    
      <Header />
        <Title title='NOVA SENHA' />
        <Container mt={[5,20]} width={["auto","40%"]}>
          
            <Box p={[0,5]}  color={COLORS.cinza}>
              <Flex alignItems="center" gap={[1,3]}>
                <Separator flex="1" />
                  <Heading color={COLORS.bg.pretoBaco} size={"2xl"}>Crie nova senha</Heading>
                <Separator flex="1" />
              </Flex>
              <Text mb={10} textAlign={"center"} mt={1} fontSize={14}>Recebemos sua solicitação de redefinição de senha. Por favor, digite sua nova senha!</Text>
              <form action="" method="post">
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>Senha</Field.Label>
                    <Input type='password' placeholder="" />
                  </Field.Root>
                </Flex>
                <Flex direction={["column", "row"]} mt={3}>
                  <Field.Root>
                    <Field.Label>Repita novamente a senha</Field.Label>
                    <Input type='password' placeholder="" />
                  </Field.Root>
                </Flex>
                <Button width={"full"} mt={3} bg={COLORS.azul}>ALTERAR</Button>
                <Text mt={[3]} textAlign={"center"} fontSize={14}><Link to={"/login"}>Voltar ao login</Link></Text>
              </form>
            </Box>
        </Container>

      <Footer />
    </div>
  )
}


export default Loja
