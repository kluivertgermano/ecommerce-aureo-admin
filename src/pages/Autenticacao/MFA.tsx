import { Box, Button, Checkbox, Container, createListCollection, Field, Flex, Heading, HStack, Image, Input, PinInput, Portal, RadioGroup, Select, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { toaster, Toaster } from "../../components/ui/toaster"
import { BaseInfo, RequestAPI } from "../../config"
import { useGetTokenLogin, useSetTokenLogin } from '../../hook'

function Login() {

    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false) 
  
    const navigate = useNavigate()
  
     const formik = useFormik({
          initialValues: {
            codigo_confirmacao: []
          },
  
          onSubmit: async (values: any) => {
            
            try {
              setLoad(true)

              
              if(values.codigo_confirmacao.length < 6){
                
                toaster.create({
                  title: "Erro".toUpperCase(),
                  description: "PIN mal formatado",
                  type: "error",
                })

                setLoad(false)
                return
              }
              
              const response = await RequestAPI.post(`empresas/activar-por-codigo`, values)
    
              if(response.data.status == BaseInfo.statusAPI.sucesso){
                toaster.create({
                  title: response.data.status.toUpperCase(),
                  description: response.data.mensagem.text,
                  type: "success",
                })

                useSetTokenLogin(response.data.mensagem, 1);
    
                formik.resetForm();
                setTimeout(() => {
                  navigate("/dashboard")
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

          <Text textAlign={"center"} color={"gray.500"}>Por favor digite o PIN envviado por SMS para poder aceder.</Text>

          <form onSubmit={formik.handleSubmit} method="POST">
          <Box my={5} textAlign={"center"}>
            <PinInput.Root size={"2xl"} name="codigo_confirmacao" onChange={formik.handleChange} onValueChange={formik.values.codigo_confirmacao}>
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
            <Button mb={5} w="full" loading={load} type="submit" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.vermelho} color={COLORS.branco}>Autenticar</Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Voltar</Link></Text>
          </Box>
          </form>
          <Toaster/>  
      </Container>

      
    </Flex>
  )
}

export default Login
