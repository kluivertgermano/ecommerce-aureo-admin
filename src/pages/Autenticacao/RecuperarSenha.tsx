import { Box, Button, Checkbox, Container, createListCollection, Field, Flex, Heading, HStack, Image, Input, Portal, RadioGroup, Select, Separator, Text, VStack } from '@chakra-ui/react'
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
  const [typeInput, setTypeInput] = useState({type:"email", placeholder: "E-mail associado"})
  const [load, setLoad] = useState(false) 

  const {setEntidade} = useStoreEntidade()

  const navigate = useNavigate()

  const items = [
    { label: "E-mail", value: "E-mail" },
    { label: "SMS", value: "SMS" },
  ]
    
  const formik = useFormik({
      initialValues: {
        canal: "E-mail",
        emailCliente: ""
      },

      onSubmit: async (values: any) => {
        
      try {
          setLoad(true)

          
          if(!values.canal){
            
            toaster.create({
              title: "Erro".toUpperCase(),
              description: "Preencha o campo do canal, para enviarmos o PIN",
              type: "error",
            })

            setLoad(false)
            return
          }

          if(!values.emailCliente){
            
            toaster.create({
              title: "Erro".toUpperCase(),
              description: "Preencha o campo do remetente, para enviarmos o PIN",
              type: "error",
            })

            setLoad(false)
            return
          }
          
          const response = await RequestAPI.post(`empresas/codigo-seguranca/pedir`, values)

          if(response.data.status == BaseInfo.statusAPI.sucesso){
            toaster.create({
              title: response.data.status.toUpperCase(),
              description: response.data.mensagem,
              type: "success",
            })
            
            setEntidade(response.data.info.entidade)

            formik.resetForm();
            setTimeout(() => {
              navigate("/codigo-confirmacao")
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

  const mudarFormaCanal = (text:string)=>{

    if(text == "SMS") setTypeInput(prev => ({...prev, type:"tel", placeholder: "Telefone associado"}))
    else setTypeInput(prev => ({...prev, type:"email", placeholder: "E-mail associado"}))
  }

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

          <Text textAlign={"center"} color={"gray.500"}>Escolha como quer receber o código de confirmação</Text>
          <form onSubmit={formik.handleSubmit} method="POST">
          <Box my={5}>
            <RadioGroup.Root defaultValue="E-mail" name='canal' onChange={(evt)=> {formik.handleChange(evt); mudarFormaCanal(evt.target.value)}} onValueChange={formik.values.canal} >
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
              <Input required onChange={formik.handleChange} name='emailCliente' value={formik.values.emailCliente} type={typeInput.type} placeholder={typeInput.placeholder} rounded={10} p={[5,7]} mb={[7]} />
            </Flex>
          </Box>

          <Box mt={5}>
            <Button mb={5} loading={load} type="submit" w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Receber codigo de confirmação</Button>
            <Text textAlign={"center"} color={"gray.500"}><Link to={"/"}>Voltar</Link></Text>
          </Box>
        </form>
        <Toaster/>  
      </Container>

      
    </Flex>
  )
}

export default Login
