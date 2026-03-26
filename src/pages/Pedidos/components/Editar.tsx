"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, Heading, HStack, IconButton, Input, Portal, RadioGroup, Stack, Tag, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { ANY } from "../../../types/components"
import { MdModeEdit } from "react-icons/md"
import { toaster, Toaster } from "../../../components/ui/toaster"
import { FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus } from "react-icons/fa6"
import { useFormik } from "formik"
import { BaseInfo, RequestAPI } from "../../../config"

const Editar = ({data}:ANY) => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)

    const items = [
      { label: "Activo", value: "80" },
      { label: "Inactivo", value: "82" },
    ]

    const changeTextForImage = (text: string) => {
        if(text == "Activo")
            return <FaPlugCircleCheck size={20} color='green' />
        else if(text == "Inactivo")
            return <FaPlugCircleMinus size={20} color='red' />
        else if(text == "Á processar")
            return <FaPlugCircleBolt size={20} color='blue' />
        else if(text == "Expirada")
            return <FaPlugCircleExclamation size={20} color='orange' />
        else return text
    }


  const formik = useFormik({
      initialValues: {
        descricaoPedido: data.descricaoPedido,
        quantidade: data.quantidade,
      },
      onSubmit: async values => {
        
        try {
          setLoad(true)
          

          const response = await RequestAPI.patch(`pedidos-cotacao/${data.pedidoCotacaoId}`, values)

        

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

  const changeTextForColor = (text: string) => {
        if(text == "Aprovado")
            return 'green'
        else if(text == "Rejeitado")
            return 'red'
        else if(text == "Pendente")
            return 'blue'
        else if(text == "Cancelado")
            return 'orange'
        else return text
    }

  return (
    <Drawer.Root size="lg" open={open} onOpenChange={(e) => setOpen(e.open)}>
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
              <Heading mt={3} fontSize={30}># {data.numero_cotacao}</Heading>
              <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} rounded={10} p={5} mt={5} fontSize={14} fontWeight={300}>
                  <Flex mb={5} justifyContent="space-between">
                  <Text>Estado</Text>
                    <Text fontWeight={700}>
                      <Tag.Root size="lg" colorPalette={changeTextForColor(data.statusPedido)}>
                          <Tag.Label>{data.statusPedido}</Tag.Label>
                      </Tag.Root>
                    </Text>
                  </Flex>
                    <Flex mb={5} justifyContent="space-between">
                      <Text>Produto</Text>
                      <Text fontWeight={700}>{data.descricao}</Text>
                    </Flex>
                    {/* <Flex mb={5} justifyContent="space-between">
                      <Text>Data da necessidade</Text>
                      <Text fontWeight={700}>{new Date(data.dataNecessaria).toLocaleDateString()}</Text>
                    </Flex> */}
                    <Flex mb={5} justifyContent="space-between">
                      <Text>Valor Total</Text>
                      <Text fontWeight={700}>{Intl.NumberFormat("PT-br").format(data.valorTotal)} AKZ</Text>
                    </Flex>
                    <Flex mb={5} justifyContent="space-between">
                      <Text>Unidade</Text>
                      <Text fontWeight={700}>{data.quantidade}</Text>
                    </Flex>
    
                    <Flex mb={5} direction={"column"}  justifyContent="space-between">
                      <Text>Descrição</Text>
                      <Textarea bg={"gray.100"} outline={"none"} border={"none"} value={data.descricaoPedido} mt={2} rows={5} readOnly  />
                    </Flex>
              </Box>

              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4">

                    <Stack gap="4" mt={5}>
                      
                      <Flex>
                          <Field.Root width="100%">
                            <Field.Label>Descrição do pedido</Field.Label>
                            <Textarea rows={5} name="descricaoPedido" value={formik.values.descricaoPedido} onChange={formik.handleChange} />
                          </Field.Root>
                      </Flex>  
                      <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Quantidade</Field.Label>
                          <Input type="number" name="quantidade"  onChange={formik.handleChange} value={formik.values.quantidade}/>
                        </Field.Root>
                      </Flex>
                    </Stack>
                  </Stack>
                <Flex mt={5}>
                  <Button bg={COLORS.vermelho} loading={load} type="submit" color={COLORS.branco} width={[150]} rounded={10}>Actualizar</Button>
                </Flex>
                </form>
              </Box>

              <Toaster />

              <Box bg={COLORS.amarelo} w={"70%"} padding={2} roundedTop={20} position={"absolute"} left="15%" bottom={0}></Box>
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