import { Box, Button, Checkbox, Container, Field, Flex, Heading, HStack, Image, Input, Separator, Text, VStack } from '@chakra-ui/react'
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
              senhaCliente: '',
              confirmar_senha: ''
            },
    
            onSubmit: async (values: any) => {
              
              try {
                setLoad(true)
  
                
                if(!values.senhaCliente){
                  
                  toaster.create({
                    title: "Erro".toUpperCase(),
                    description: "Campo da senha vazio",
                    type: "error",
                  })
  
                  setLoad(false)
                  return
                }

                if(!values.confirmar_senha){
                  
                  toaster.create({
                    title: "Erro".toUpperCase(),
                    description: "Campo da senha repetida vazia",
                    type: "error",
                  })
  
                  setLoad(false)
                  return
                }

                if(values.confirmar_senha != values.confirmar_senha){
                  
                  toaster.create({
                    title: "Erro".toUpperCase(),
                    description: "As senhas não conscidem",
                    type: "error",
                  })
  
                  setLoad(false)
                  return
                }
                
                const response = await RequestAPI.patch(`empresas/${entidade}/redifinir-senha`, values)
      
                if(response.data.status == BaseInfo.statusAPI.sucesso){
                  toaster.create({
                    title: response.data.status.toUpperCase(),
                    description: response.data.mensagem,
                    type: "success",
                  })
      
                  formik.resetForm();
                  setTimeout(() => {
                    navigate("/status-confirmacao")
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
      <Container px={[20,200,400]} height="90vh" display="flex" flexDirection="column" justifyContent="center">
          <Flex justifyContent={"center"} mb={4}>
            <Image src={LOGOSONANGOL} width={[100,150,500]}/>
          </Flex>
          <form onSubmit={formik.handleSubmit} method="POST">
          <Box>
            <Input required type='password' name="senhaCliente" onChange={formik.handleChange} value={formik.values.senhaCliente} placeholder='Senha nova' rounded={10} p={[5,7]} mb={[7]} />
            <Input required type='password' name="confirmar_senha" onChange={formik.handleChange} value={formik.values.confirmar_senha} placeholder='Repita a senha nova' rounded={10} p={[5,7]} />
          </Box>

          <Box mt={5}>
            <Button mb={5} loading={load} type="submit" w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Mudar</Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Voltar</Link></Text>
          </Box>
          </form>
          <Toaster/>
      </Container>

      
    </Flex>
  )
}

export default Login
