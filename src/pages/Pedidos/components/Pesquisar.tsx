"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, HStack, IconButton, Input, Portal, RadioGroup, Stack} from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { Pesquisar } from "../../../types/components"
import { LuSearch } from "react-icons/lu"
import { useFormik } from 'formik';
import { FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus } from "react-icons/fa6"
import { Toaster, toaster } from "../../../components/ui/toaster"

const PesquisarReferencias = ({setMesclar, loading}:Pesquisar) => {
  const [open, setOpen] = useState(false)

    const items = [
      { label: "Pendente", value: "Pendente" },
      { label: "Aprovado", value: "Aprovado" },
      { label: "Rejeitado", value: "Rejeitado" },
      { label: "Cancelado", value: "Cancelado" },
      { label: "Todos", value: "" },
    ]

    const changeTextForImage = (text: string) => {
        if(text == "Activo")
            return <FaPlugCircleCheck size={20} color='green' />
        else if(text == "Desativo")
            return <FaPlugCircleMinus size={20} color='red' />
        else if(text == "Em processo")
            return <FaPlugCircleBolt size={20} color='blue' />
        else if(text == "Expirada")
            return <FaPlugCircleExclamation size={20} color='orange' />
        else return text
    }


    const formik = useFormik({
     initialValues: {
       numero_cotacao: '',
       dataCriacao: '',
       statusPedido: '',
       quantidade: '',
       valorTotal:'',
     },
     onSubmit: values => {

      try {
        
       let params = ""
       for (const index in values) {        
            params+=`${index}=${values[index]}&`
       }
       setMesclar(params)

      } catch (error: any) {
          toaster.create({
            title: "Erro".toUpperCase(),
            description: "Tivemos problema em entregar o resultado, tente de novo",
            type: "error",
          })
      }
     },
   });

  return (
    <Drawer.Root size="lg" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} size="md"  bg={COLORS.amarelo} rounded={5}>
            <LuSearch /> Pesquisar
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Pesquisar com precisão</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Box fontSize={16} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4">
                    <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Número da cotaçao</Field.Label>
                          <Input name="numero_cotacao" type="text" onChange={formik.handleChange} value={formik.values.numero_cotacao}/>
                        </Field.Root>

                        <Field.Root ml={4}width="100%">
                          <Field.Label>Data do pedido</Field.Label>
                          <Input name="dataCriacao" type="date" onChange={formik.handleChange} value={formik.values.dataCriacao} />
                        </Field.Root>
                      </Flex>

                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Valor total</Field.Label>
                        <Input name="valorTotal" type="number" onChange={formik.handleChange} value={formik.values.valorTotal} />
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Unidades</Field.Label>
                        <Input name="quantidade" type="number" onChange={formik.handleChange} value={formik.values.quantidade} />
                      </Field.Root>
                    </Flex>

                    <Field.Root mt={3}>
                      <Field.Label>Estado</Field.Label>
                      <RadioGroup.Root defaultValue="" name="statusPedido" onChange={formik.handleChange} value={formik.values.statusPedido}>
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
                    </Field.Root>
                  </Stack>
                <Flex mt={10}>
                  <Button bg={COLORS.amarelo} loading={loading} type="submit" color={COLORS.preto} width={[150]} rounded={10}>Buscar</Button>
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


export default PesquisarReferencias