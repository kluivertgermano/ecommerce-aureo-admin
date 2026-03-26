import { Button, Center, Container, Flex, Input} from '@chakra-ui/react'
import {COLORS, FONT, reloadPage} from '../../../helpers'
import { useState } from 'react'
import { useFormik } from 'formik'
import { toaster, Toaster } from "../../../components/ui/toaster"
import { BaseInfo, RequestAPI } from "../../../config"
import { useStoreEntidadeAllData } from '../../../stores'

function MinhaConta() {

    const {entidadeData}: any = useStoreEntidadeAllData()
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            nomeCliente: entidadeData?.nomeCliente,
            emailCliente: entidadeData?.emailCliente,
            telefoneCliente: entidadeData?.telefoneCliente,
            telefoneClienteAlt: entidadeData?.telefoneClienteAlt,
            enderecoCliente: entidadeData?.enderecoCliente,
        },

        onSubmit: async (values: any) => {
            
            try {
            setLoad(true)
            
            
            const response = await RequestAPI.patch(`empresas/${entidadeData?.clienteId}`, values)
    
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

        <Container mt={10} px={[20,200]}  display="flex" flexDirection="column" justifyContent="center">
            <form onSubmit={formik.handleSubmit} method="POST">
                <Flex>
                    <Input defaultValue={entidadeData?.nomeCliente} required name="nomeCliente" onChange={formik.handleChange} value={formik.values.nomeCliente} type='text' placeholder='Cliente ou Empresa' rounded={10} p={[5,7]} mb={[7]} />
                    <Input defaultValue={entidadeData?.nifCliente} required name="nifCliente" onChange={formik.handleChange} value={formik.values.nifCliente} type='text' ml={4} placeholder='NIF' rounded={10} p={[5,7]} mb={[7]} />
                </Flex>
                <Flex>
                    <Input defaultValue={entidadeData?.emailCliente} required name="emailCliente" onChange={formik.handleChange} value={formik.values.emailCliente} type='email' placeholder='Email' rounded={10} p={[5,7]} mb={[7]} />
                    <Input defaultValue={entidadeData?.telefoneCliente} required name="telefoneCliente" onChange={formik.handleChange} value={formik.values.telefoneCliente} type='tel' ml={4} placeholder='Telefone' rounded={10} p={[5,7]} mb={[7]} />
                    <Input defaultValue={entidadeData?.telefoneClienteAlt} required name="telefoneClienteAlt" onChange={formik.handleChange} value={formik.values.telefoneClienteAlt} type='tel' ml={4} placeholder='Telefone Opcional' rounded={10} p={[5,7]} mb={[7]} />
                </Flex>
                <Flex>
                    <Input defaultValue={entidadeData?.enderecoCliente} required name="enderecoCliente" onChange={formik.handleChange} value={formik.values.enderecoCliente} type='text' placeholder='Endereço' rounded={10} p={[5,7]} mb={[7]} />
                </Flex>
                <Button mb={5} w="full" loading={load} type="submit" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Salvar</Button>
            </form>
            <Toaster/>
        </Container>
                            
  )
}

export default MinhaConta
