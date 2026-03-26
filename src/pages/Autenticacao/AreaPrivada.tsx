import { Box, Button, Field, Flex, Heading, Image, Input, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/Sonangol_Logo.svg.png"
import PAINELSONANGOL from "../../assets/images/paineis/painelLogin.jpg"

function AreaPrivada() {

  return (
    <>
        <Box px={5} borderBottom="5px solid" borderColor="orange.300">
          <Image src={LOGOSONANGOL} width={[100,150,200]}/>
        </Box>
        <Flex width="full">
          <Box background="tomato" width="50%" color="white" bgImage={`url(${PAINELSONANGOL})`} bgRepeat="no-repeat" bgSize="cover">
            This is the Box
          </Box>
          <Flex direction="column" width="50%" color="gray.600" minHeight="100vh">
            <VStack p={20}>
              <Heading textAlign="center" size="3xl" color="gray.900">Área Privada</Heading>
              <Text textAlign="center">Aceda a sua conta</Text>
              
              <Box mt={10}>
                <Field.Root width={500}>
                  <Field.Label>Email</Field.Label>
                  <Input rounded={10} type='email' placeholder="Digite o seu Email" />
                  <Button colorPalette="red" width={500} rounded={10}>Enviar código de verificação</Button>
                </Field.Root>
              </Box>
              
            </VStack>
          </Flex>
        </Flex>
    </>
  )
}

export default AreaPrivada