"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, Heading, HStack, IconButton, Input, Portal, RadioGroup, Stack, Tag, Text } from "@chakra-ui/react"
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
      { label: "Activo", value: "1" },
      { label: "Inactivo", value: "0" },
    ]

    const changeTextForImage = (text: string) => {
        if(text == "1")
            return <FaPlugCircleCheck size={20} color='green' />
        else if(text == "0")
            return <FaPlugCircleMinus size={20} color='red' />
        else if(text == "Á processar")
            return <FaPlugCircleBolt size={20} color='blue' />
        else if(text == "Expirada")
            return <FaPlugCircleExclamation size={20} color='orange' />
        else return text
    }

    const changeTextForColor = (text: string) => {
        if(text == "1")
            return 'green'
        else if(text == "0")
            return 'red'
        else return text
    }


  const formik = useFormik({
      initialValues: {
        codigoProduto: data.codigoProduto,
        descricao: data.descricao,
        preco: data.preco,
        ativo: data.ativo,
      },
      onSubmit: async values => {
        
        try {
          setLoad(true)

          const response = await RequestAPI.patch(`produtos/${data.produtoId}`, values)

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
        <IconButton ml={2} size="xs">
            <MdModeEdit />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Actualização de produto</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Heading mt={3} fontSize={30}># {data.produtoId}</Heading>
              <Box border={`1px solid ${COLORS.bg.cinzaBorda}`} rounded={10} p={5} mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Estado</Text>
                  <Tag.Root size="lg" colorPalette={changeTextForColor(data.ativo)}>
                      <Tag.Label>{data.ativo == 1 ? "Activo" : "Inactivo"}</Tag.Label>
                  </Tag.Root>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Produto</Text>
                  <Text fontWeight={700}>{data.descricao}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Preço</Text>
                  <Text fontWeight={700}>{Intl.NumberFormat("PT-br").format(data.preco)} AKZ</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Unidade de medida</Text>
                  <Text fontWeight={700}>{data.unidadeMedida}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Codigo do produto</Text>
                  <Text fontWeight={700}>{data.codigoProduto}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Categoria</Text>
                  <Text fontWeight={700}>{data.categoria}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Gerado em</Text>
                  <Text fontWeight={700}>{new Date(data.produto_time).toLocaleString()}</Text>
                </Flex>
              </Box>

              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4" mt={10}>
                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Descrição do produto</Field.Label>
                        <Input type="text" name="descricao" defaultValue={data.descricao} onChange={formik.handleChange} value={formik.values.descricao}/>
                      </Field.Root>
                    </Flex>

                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Codigo do produto</Field.Label>
                        <Input type="text" name="codigoProduto" defaultValue={data.codigoProduto} onChange={formik.handleChange} value={formik.values.codigoProduto}/>
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Preço</Field.Label>
                        <Input type="number" name="preco" defaultValue={data.preco} onChange={formik.handleChange} value={formik.values.preco}/>
                      </Field.Root>
                    </Flex>

                    <Field.Root mt={5}>
                      <Field.Label>Estado</Field.Label>
                      <RadioGroup.Root defaultValue={data.ativo} name="ativo" onChange={formik.handleChange} value={formik.values.ativo}>
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