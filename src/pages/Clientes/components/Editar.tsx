"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, Heading, IconButton, Input, Portal, Stack, Tag, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { COLORS, FONT } from "../../../helpers"
import type { ANY } from "../../../types/components"
import { MdModeEdit } from "react-icons/md"
import { toaster, Toaster } from "../../../components/ui/toaster"
import { useFormik } from "formik"
import { BaseInfo, RequestAPI } from "../../../config"

const Editar = ({data}:ANY) => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)

  const formik = useFormik({
      initialValues: {
            nomeCliente: data?.nomeCliente,
            emailCliente: data?.emailCliente,
            telefoneCliente: data?.telefoneCliente,
            telefoneClienteAlt: data?.telefoneClienteAlt,
            enderecoCliente: data?.enderecoCliente,
            nifCliente: data?.nifCliente,
            businessPartnerId: data?.businessPartnerId
        },
      onSubmit: async values => {
        
        try {
          setLoad(true)
          

          const response = await RequestAPI.patch(`clientes/${data?.clienteId}`, values)

        

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

  
    const changeTextDefault = (text: string) => {
        if(text == "0")
            return 'Activo'
        else if(text == "1")
            return 'Bloqueado'
        else if(text == "2")
            return 'Suspenso'
        else return text
    }

    const changeTextForColor = (text: string) => {
            if(text == "0")
                return 'green'
            else if(text == "1")
                return 'red'
            else if(text == "2")
                return 'orange'
            else return text
        }


  return (
    <Drawer.Root size="xl" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton ml={2} size="xs" colorPalette="green">
            <MdModeEdit />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Actualização de referência</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Heading mt={3} fontSize={30}># {data.clienteId}</Heading>
              <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} rounded={10} p={5} mt={5} fontSize={14} fontWeight={300}>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Estado</Text>
                    <Text fontWeight={700}>
                      <Tag.Root size="lg" colorPalette={changeTextForColor(data.bloqueio)}>
                          <Tag.Label>{changeTextDefault(data.bloqueio)}</Tag.Label>
                      </Tag.Root>
                    </Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Nome do cliente</Text>
                    <Text fontWeight={700}>{data.nomeCliente}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Email</Text>
                    <Text fontWeight={700}>{data.emailCliente}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Telefone</Text>
                    <Text fontWeight={700}>{data.telefoneCliente}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Telefone alt.</Text>
                    <Text fontWeight={700}>{data.telefoneClienteAlt}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>NIF</Text>
                    <Text fontWeight={700}>{data.nifCliente}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Localização</Text>
                    <Text fontWeight={700}>{data.enderecoCliente}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Identificador BP</Text>
                    <Text fontWeight={700}>{data.businessPartnerId}</Text>
                  </Flex>
                  <Flex mb={5} justifyContent="space-between">
                    <Text>Referência de pagamento (EMIS)</Text>
                    <Text fontWeight={700}>{data.referenciaEMIS}</Text>
                  </Flex>
              </Box>

              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                      <Flex>
                          <Input defaultValue={data?.nomeCliente} required name="nomeCliente" onChange={formik.handleChange} value={formik.values.nomeCliente} type='text' placeholder='Cliente ou Empresa' rounded={10} p={[5,7]} mb={[7]} />
                          </Flex>
                      <Flex>
                          <Input defaultValue={data?.nifCliente} required name="nifCliente" onChange={formik.handleChange} value={formik.values.nifCliente} type='text'  placeholder='NIF' rounded={10} p={[5,7]} mb={[7]} />
                          <Input minLength={7} maxLength={7} defaultValue={data?.businessPartnerId} required name="businessPartnerId" onChange={formik.handleChange} value={formik.values.businessPartnerId} ml={4} type='text' placeholder='Business Parter ID' rounded={10} p={[5,7]} mb={[7]} />
                      </Flex>
                      <Flex>
                          <Input defaultValue={data?.emailCliente} required name="emailCliente" onChange={formik.handleChange} value={formik.values.emailCliente} type='email' placeholder='Email' rounded={10} p={[5,7]} mb={[7]} />
                          <Input defaultValue={data?.telefoneCliente} required name="telefoneCliente" onChange={formik.handleChange} value={formik.values.telefoneCliente} type='tel' ml={4} placeholder='Telefone' rounded={10} p={[5,7]} mb={[7]} />
                          <Input defaultValue={data?.telefoneClienteAlt} required name="telefoneClienteAlt" onChange={formik.handleChange} value={formik.values.telefoneClienteAlt} type='tel' ml={4} placeholder='Telefone Opcional' rounded={10} p={[5,7]} mb={[7]} />
                      </Flex>
                      <Flex>
                          <Input defaultValue={data?.enderecoCliente} required name="enderecoCliente" onChange={formik.handleChange} value={formik.values.enderecoCliente} type='text' placeholder='Endereço' rounded={10} p={[5,7]} mb={[7]} />
                      </Flex>
                      <Button mb={5} loading={load} type="submit" p={[5]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Salvar</Button>
                  </form>
              </Box>

              <Toaster />
              
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


export default Editar