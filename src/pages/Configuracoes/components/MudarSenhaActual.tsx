import {Box, Button, Container, Flex, Input} from '@chakra-ui/react'
import {COLORS, FONT} from '../../../helpers'
import { useState } from 'react'
import { useFormik } from 'formik'
import { toaster, Toaster } from "../../../components/ui/toaster"
import { BaseInfo, RequestAPI } from "../../../config"
import { useStoreEntidadeAllData } from '../../../stores'

function MudarSenhaActual() {

    const {entidadeData} = useStoreEntidadeAllData()
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            senha_actual: '',
            senha: '',
            confirmar_senha: ''
        },

        onSubmit: async (values: any) => {
            
            try {
            setLoad(true)

            if(!values.senha_actual){
                              
                toaster.create({
                    title: "Erro".toUpperCase(),
                    description: "Campo da senha actual vazio",
                    type: "error",
                })

                setLoad(false)
                return
            }

            
            if(!values.senha){
                
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
            
            const response = await RequestAPI.patch(`empresas/${entidadeData?.clienteId}/alterar-senha`, values)
    
            if(response.data.status == BaseInfo.statusAPI.sucesso){
                toaster.create({
                title: response.data.status.toUpperCase(),
                description: response.data.mensagem,
                type: "success",
                })
    
                formik.resetForm();
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

  return (

        <Flex direction="column" justifyContent="space-between">
            <Container mt={10} px={[20,200,300]}  display="flex" flexDirection="column" justifyContent="center">
                <form onSubmit={formik.handleSubmit} method="POST">
                    <Box>
                        <Input required type='password' name="senha_actual" onChange={formik.handleChange} value={formik.values.senha_actual} placeholder='Senha actual' rounded={10} p={[5,7]} mb={[7]} />
                        <Input required type='password' name="senha" onChange={formik.handleChange} value={formik.values.senha} placeholder='Senha nova' rounded={10} p={[5,7]} mb={[7]} />
                        <Input required type='password' name="confirmar_senha" onChange={formik.handleChange} value={formik.values.confirmar_senha} placeholder='Repita a senha nova' rounded={10} p={[5,7]} />
                    </Box>
        
                    <Box mt={5}>
                        <Button mb={5} loading={load} type="submit" w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Alterar</Button>
                    </Box>
                </form>
                <Toaster/>
            </Container>
        </Flex>
  )
}

export default MudarSenhaActual
