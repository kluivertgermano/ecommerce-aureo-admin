"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex,  IconButton, Input, Portal, Stack, Text, Textarea} from "@chakra-ui/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { COLORS } from "../../../helpers"
import { useFormik } from "formik"
import { BaseInfo, RequestAPI } from "../../../config"
import { FaPlus } from "react-icons/fa"
import { toaster, Toaster } from "../../../components/ui/toaster"
import { useGetTokenLogin } from "../../../hook"
import { type Options, passwordStrength } from "check-password-strength"
import { PasswordStrengthMeter } from '../../../components/ui/password-input'
import { withMask } from "use-mask-input"

  const strengthOptions: Options<string> = [
    { id: 1, value: "Fraco", minDiversity: 0, minLength: 0 },
    { id: 2, value: "Médio", minDiversity: 2, minLength: 6 },
    { id: 3, value: "Forte", minDiversity: 3, minLength: 8 },
    { id: 4, value: "Muito forte", minDiversity: 4, minLength: 10 },
  ]  


const Gerar = () => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)
  const [produto, setProduto] = useState<any>(null)
  const [entidade, setEntidade] = useState({empresa:''})
  
const formik = useFormik({
        initialValues: {
          nomeCliente: '',
          nifCliente: '',
          emailCliente: '',
          senhaCliente: '',
          confirmar_senha: '',
          telefoneCliente: '',
          telefoneClienteAlt: '',
          enderecoCliente: '',
          observacoes: '',
          empresaId:'',
        },

        onSubmit: async (values: any) => {
          
          try {
            setLoad(true)
                        
            const response = await RequestAPI.post(`clientes`, {...values, empresaId: entidade?.empresa},{headers:{criador:1}})
  
            if(response.data.status == BaseInfo.statusAPI.sucesso){
              toaster.create({
                title: response.data.status.toUpperCase(),
                description: response.data.mensagem,
                type: "success",
              })
              
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

const strength = useMemo(() => {
    if (!formik.values.senhaCliente) return 0
    const result = passwordStrength(formik.values.senhaCliente, strengthOptions)
    return result.id
  }, [formik.values.senhaCliente])

const strengthAlt = useMemo(() => {
    if (!formik.values.confirmar_senha) return 0
    const result = passwordStrength(formik.values.confirmar_senha, strengthOptions)
    return result.id
  }, [formik.values.confirmar_senha])

  useEffect(()=>{
      const result = useGetTokenLogin()
      setEntidade({empresa: result?.empresa})
  }, []) 

    
  return (
    <Drawer.Root size="xl" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} ml={3} size="md" bg={COLORS.vermelho} rounded={5}>
            <FaPlus /> Novo Pedido
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Solicitar uma nova cotação</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">

                <Box my={10}>
                  <Flex direction={["column","row"]}>
                    <Input type='text' required name="nomeCliente" onChange={formik.handleChange} value={formik.values.nomeCliente} placeholder='Nome da sua empresa' rounded={10} p={[7]} mb={[7]} />
                    <Input type='text' required name="nifCliente" onChange={formik.handleChange} value={formik.values.nifCliente} ml={[0,4]} placeholder='NIF' rounded={10} p={[7]} mb={[7]} />
                  </Flex>
                  <Flex direction={["column","row"]}>
                    <Input type='email' required name="emailCliente" onChange={formik.handleChange} value={formik.values.emailCliente} placeholder='Email' rounded={10} p={[7]} mb={[7]} />
                    <Input type='tel' ref={withMask("244999999999")} required name="telefoneCliente" onChange={formik.handleChange} value={formik.values.telefoneCliente} ml={[0,4]} placeholder='Telefone' rounded={10} p={[7]} mb={[7]} />
                    <Input type='tel' ref={withMask("244999999999")} name="telefoneClienteAlt" onChange={formik.handleChange} value={formik.values.telefoneClienteAlt} ml={[0,4]} placeholder='Telefone Opcional' rounded={10} p={[7]} mb={[7]} />
                  </Flex>
                  <Flex direction={["column","row"]}>
                    <Box mb={[7]} width={["auto","50%"]}>
                      <Input mb={2} type='password' required name="senhaCliente" onChange={formik.handleChange} value={formik.values.senhaCliente} placeholder='Sua senha' rounded={10} p={[7]} />
                      <PasswordStrengthMeter value={strength} />
                    </Box>
                    <Box mb={[7]} ml={[0,4]} width={["auto","50%"]}>
                      <Input mb={2} type='password' required name="confirmar_senha" onChange={formik.handleChange} value={formik.values.confirmar_senha} placeholder='Repita sua senha' rounded={10} p={[7]} />
                      <PasswordStrengthMeter value={strengthAlt} />
                    </Box>
                  </Flex>
                  <Flex direction={["column","row"]} mb={[7,0]}>
                    <Input type='text' required name="enderecoCliente" value={formik.values.enderecoCliente} onChange={formik.handleChange}  placeholder='Endereço' rounded={10} p={[7]} mb={[7]} />
                  </Flex>
                  <Flex direction={["column","row"]}>
                    <Field.Root width="100%">
                      <Textarea rows={5} required name="observacoes" onChange={formik.handleChange} value={formik.values.observacoes}  placeholder='Descrição da tua empresa'/>
                    </Field.Root>
                  </Flex>
                </Box>

                <Box>
                  <Button mb={5} loading={load} type="submit" p={[5]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Cadastrar</Button>
                </Box>
                </form> 
              </Box>
              <Toaster/>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}


export default Gerar