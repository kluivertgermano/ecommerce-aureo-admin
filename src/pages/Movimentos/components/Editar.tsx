"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, Heading, HStack, IconButton, Input, Portal, RadioGroup, Stack, Text } from "@chakra-ui/react"
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
        tipo_de_registro: data.tipo_de_registro,
        indicador_de_produtos: data.indicador_de_produtos,
        indicador_produto_id: data.indicador_produto_id,
        data_limite_pagamento: data.data_limite_pagamento,
        hora_limite_pagamento: data.hora_limite_pagamento,
        montante_fixo: data.motante_fixo,
        codigo_de_processamento: data.codigo_de_processamento,
        nib: data.nib,
      },
      onSubmit: async values => {
        
        try {
          setLoad(true)

          if(values.nib.length < 21){
              delete values.nib
          }

          const response = await RequestAPI.patch(`referencias/${data.id_referencia}`,{
            entidade_cliente: BaseInfo.entidade,
            ...values,
            hora_limite_pagamento: values.hora_limite_pagamento.substring(0,5),
          })

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
              <Heading mt={3} fontSize={30}># {data.num_referencia}</Heading>
              <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} rounded={10} p={5} mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Estado</Text>
                  <Text fontWeight={700}>{changeTextForImage(data.estado_atm)}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Produto</Text>
                  <Text fontWeight={700}>{data.produto}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Entidade</Text>
                  <Text fontWeight={700}>{data.entidade_cliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Limite de pagamento</Text>
                  <Text fontWeight={700}>{new Date(data.data_limite_pagamento).toLocaleDateString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Hora limitada</Text>
                  <Text fontWeight={700}>{new Date(data.data_limite_pagamento + " " + data.hora_limite_pagamento).toLocaleTimeString() || "Ilimitada"}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Gerado em</Text>
                  <Text fontWeight={700}>{new Date(data.criada_r).toLocaleString()}</Text>
                </Flex>
              </Box>

              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4" mt={10}>
                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Limite de pagamento</Field.Label>
                        <Input type="date" name="data_limite_pagamento" defaultValue={data.data_limite_pagamento} onChange={formik.handleChange} value={formik.values.data_limite_pagamento}/>
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Hora limitada</Field.Label>
                        <Input type="time" name="hora_limite_pagamento" defaultValue={data.hora_limite_pagamento} onChange={formik.handleChange} value={formik.values.hora_limite_pagamento} />
                      </Field.Root>
                    </Flex>

                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>NIB</Field.Label>
                        <Input type="text" name="nib" defaultValue={data.nib} onChange={formik.handleChange} value={formik.values.nib}/>
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Valor á pagar</Field.Label>
                        <Input type="number" name="montante_fixo" onChange={formik.handleChange} value={formik.values.montante_fixo}/>
                      </Field.Root>
                    </Flex>

                    <Field.Root mt={5}>
                      <Field.Label>Estado</Field.Label>
                      <RadioGroup.Root defaultValue={data.estado_atm} name="codigo_de_processamento" onChange={formik.handleChange} value={formik.values.codigo_de_processamento}>
                      <HStack gap="6">
                        {items.map((item) => (
                          <RadioGroup.Item key={item.value} value={item.value}>
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>{changeTextForImage(item.label)}</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        ))}
                      </HStack>
                    </RadioGroup.Root>
                    </Field.Root>
                  </Stack>
                <Flex mt={10} >
                  <Button bg={COLORS.amarelo} type="submit" loading={load} color={COLORS.preto} width={[150]} rounded={10}>Actualizar</Button>
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