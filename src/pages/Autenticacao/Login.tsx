import { Box, Button, Checkbox, Container, Field, Flex, Heading, HStack, Image, Input, Separator, Text, VStack } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { toaster, Toaster } from "../../components/ui/toaster"
import { BaseInfo, RequestAPI } from "../../config"
import { useGetTokenLogin } from '../../hook'

function Login() {

  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false) 

  const navigate = useNavigate()

   const formik = useFormik({
        initialValues: {
          emailEmpresa: '',
          senhaEmpresa: ''
        },

        onSubmit: async (values: any) => {
          
          try {
            setLoad(true)
            
            const response = await RequestAPI.post(`empresas/login`, values)
  
            if(response.data.status == BaseInfo.statusAPI.sucesso){
              toaster.create({
                title: response.data.status.toUpperCase(),
                description: response.data.mensagem.text,
                type: "success",
              })
  
              formik.resetForm();
              setTimeout(() => {
                navigate("/mfa-login")
              }, 1000);
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
            <Input required type='email' name="emailEmpresa" onChange={formik.handleChange} value={formik.values.emailEmpresa} placeholder='E-mail' rounded={10} p={[5,7]} mb={[7]} />
            <Input required type='password' name="senhaEmpresa" onChange={formik.handleChange} value={formik.values.senhaEmpresa} placeholder='Palavra passe' rounded={10} p={[5,7]} />
          </Box>
          <Box mt={5}>
            <Button mb={5} loading={load} type="submit" w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.vermelho} color={COLORS.branco}>Entrar</Button>
          </Box>
          </form>
          <Toaster/>  
      </Container>
    </Flex>
  )
}

export default Login
