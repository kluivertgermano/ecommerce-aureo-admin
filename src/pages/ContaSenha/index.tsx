import { Text, Box, Flex, Span, For, Stack, VStack, Table, IconButton, Tag, Field, Input, Button } from '@chakra-ui/react'

import { Header, SideBar, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'

function Suporte() {
  return (
    <div>
    
      <Header/>
      <Title title='PAINEL' />
      <Flex  mt={[5,20]} px={[5,40]} direction={["column","row"]}>

          <Box width={["full",300,500]} mb={[5,0]}  p={0}>
            <SideBar />
          </Box>
          <Box flex={1} ml={[0,10]} p={[0,0]} color={COLORS.cinza}>
            <form action="" method="post">
              <Flex direction={["column", "row"]} mt={3}>
                <Field.Root>
                  <Field.Label>Senha actual</Field.Label>
                  <Input placeholder="" />
                </Field.Root>
              </Flex>
              <Flex direction={["column", "row"]} mt={3}>
                <Field.Root mt={[3,0]}>
                  <Field.Label>Senha nova</Field.Label>
                  <Input placeholder="" />
                </Field.Root>
              </Flex>
              <Flex direction={["column", "row"]} mt={3}>
                <Field.Root>
                  <Field.Label>Confirma a Senha</Field.Label>
                  <Input placeholder="" />
                </Field.Root>
              </Flex>
              <Button w={["full","auto"]} mt={5} p={5} bg={COLORS.bg.pretoBaco} rounded={0}>GRAVAR</Button>
            </form>
          </Box>
      </Flex>
      <Footer />
    </div>
  )
}




export default Suporte
