import { Box, Button, Checkbox, Container, createListCollection, Field, Flex, Heading, HStack, Image, Input, PinInput, Portal, RadioGroup, Select, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { toaster, Toaster } from "../../components/ui/toaster"
import { BaseInfo, RequestAPI } from "../../config"
import { useStoreEntidade } from '../../stores'
import { useGetTokenLogin } from '../../hook'

function Login() {

      const [open, setOpen] = useState(false)
      const [load, setLoad] = useState(false) 

      const {entidade} = useStoreEntidade()
    
      const navigate = useNavigate()
    
       const formik = useFormik({
            initialValues: {
              codigo_seguranca: "",              
            },
    
            onSubmit: async (values: any) => {
              
              try {
                setLoad(true)
  
                
                if(values.codigo_seguranca.length < 6){
                  
                  toaster.create({
                    title: "Erro".toUpperCase(),
                    description: "PIN mal formatado",
                    type: "error",
                  })
  
                  setLoad(false)
                  return
                }
                
                const response = await RequestAPI.post(`empresas/codigo-seguranca/autenticar`, {...values, entidade})
      
                if(response.data.status == BaseInfo.statusAPI.sucesso){
                  toaster.create({
                    title: response.data.status.toUpperCase(),
                    description: response.data.mensagem,
                    type: "success",
                  })
      
                  formik.resetForm();
                  setTimeout(() => {
                    navigate("/senha-nova-recuperacao")
                  }, 2000);
                }
      
                if(response.data.status == BaseInfo.statusAPI.erro){
                  toaster.create({
                    title: response.data.status.toUpperCase(),
                    description: response.data.mensagem,
                    type: "error",
                  })
                }
      
                setLoad(false)
      
            } catch (error:any) {
              
              toaster.create({
                title: error?.response.data.status.toUpperCase(),
                description: error?.response.data.mensagem,
                type: "error",
              })
              setLoad(false)
            }
            
          },
        });

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

          <Text textAlign={"center"} color={"gray.500"}>Digite o código de 6 dígitos enviado para o seu email ou telefone.</Text>
          <form onSubmit={formik.handleSubmit} method="POST">
          <Box my={5} textAlign={"center"}>
            <PinInput.Root size={"2xl"} name='codigo_seguranca' onChange={formik.handleChange} onValueChange={formik.values.codigo_seguranca}>
              <PinInput.HiddenInput />
              <PinInput.Control>
                <PinInput.Input index={0} />
                <PinInput.Input index={1} />
                <PinInput.Input index={2} />
                <PinInput.Input index={3} />
                <PinInput.Input index={4} />
                <PinInput.Input index={5} />
              </PinInput.Control>
            </PinInput.Root>
          </Box>

          <Box mt={5}>
            <Button mb={5} loading={load} type="submit" w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Verificar o PIN</Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Voltar</Link></Text>
          </Box>
          </form>
          <Toaster/>  
      </Container>

      
    </Flex>
  )
}

export default Login
