import { Box, Button, Checkbox, Container, createListCollection, Field, Flex, Heading, HStack, Image, Input, Portal, RadioGroup, Select, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useGetTokenLogin } from '../../hook'

function Login() {

  const navigate = useNavigate()

  const items = [
    { label: "Particular", value: "1" },
    { label: "Empresa", value: "2" },
  ]

  const frameworksProvicias = createListCollection({
  items: [
    { label: "Luanda", value: "react" },
    { label: "Benguela", value: "vue" },
    { label: "Huambo", value: "angular" },
    { label: "Malanje", value: "svelte" },
  ],
})

useEffect(()=>{
        const result = useGetTokenLogin()
        if(result?.hash) navigate("/dashboard")
    },[]) 

  return (
    <Flex direction="column" justifyContent="space-between" maxHeight="100vh">
      <Container px={[20,300]} height="90vh" display="flex" flexDirection="column" justifyContent="center">
          <Flex justifyContent={"center"} mb={4}>
            <Image src={LOGOSONANGOL} width={[100,150,500]}/>
          </Flex>

          <Box my={5}>
            <RadioGroup.Root defaultValue="1">
              <HStack gap="6">
                {items.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </HStack>
            </RadioGroup.Root>
          </Box>

          <Box>
            <Flex>
              <Input type='text' placeholder='Cliente ou Empresa' rounded={10} p={[5,7]} mb={[7]} />
              <Input type='text' ml={4} placeholder='NIF' rounded={10} p={[5,7]} mb={[7]} />
            </Flex>
            <Flex>
              <Input type='email' placeholder='Email' rounded={10} p={[5,7]} mb={[7]} />
              <Input type='tel' ml={4} placeholder='Telefone' rounded={10} p={[5,7]} mb={[7]} />
              <Input type='tel' ml={4} placeholder='Telefone Opcional' rounded={10} p={[5,7]} mb={[7]} />
            </Flex>
            <Flex>
              <Input type='password' placeholder='Sua senha' rounded={10} p={[5,7]} mb={[7]} />
              <Input type='password' ml={4} placeholder='Repita sua senha' rounded={10} p={[5,7]} mb={[7]} />
            </Flex>
            <Flex>
              <Input type='text' placeholder='Endereço' rounded={10} p={[5,7]} mb={[7]} />
              <Select.Root collection={frameworksProvicias} size="lg" ml={4}>
                <Select.HiddenSelect />
                <Select.Label></Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Selecione a provincia" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner p={2}>
                    <Select.Content p={2} rounded={20}>
                      {frameworksProvicias.items.map((framework) => (
                        <Select.Item p={2} item={framework} key={framework.value}>
                          {framework.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </Flex>
          </Box>

          <Box mt={5}>
            <Button mb={5} onClick={()=> navigate("/upload-documentacao")} w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Inscrever - se </Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Já tenho uma conta</Link></Text>
          </Box>
      </Container>

      
    </Flex>
  )
}

export default Login
