import { Box, Button, Checkbox, Container, createListCollection, Field, FileUpload, Flex, Heading, HStack, Icon, Image, Input, Portal, RadioGroup, Select, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { LuUpload } from 'react-icons/lu'
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
          
          <Text textAlign={"center"} color={"gray.500"}>Carregue seu documento de identificação legal</Text>

          <Flex my={5} justifyContent={"center"}>
            <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
                <FileUpload.HiddenInput />
               <FileUpload.Dropzone>
        <Icon size="md" color="fg.muted">
          <LuUpload />
        </Icon>
        <FileUpload.DropzoneContent>
          <Box>Arraste e large o arquivo aqui</Box>
          <Box color="fg.muted">.pdf até 5MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
          </Flex>

          <Box mt={5}>
            <Button mb={5} onClick={()=> navigate("/dashboard")} w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Enviar</Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Voltar</Link></Text>
          </Box>
      </Container>

      
    </Flex>
  )
}

export default Login
