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
      { label: "Activo", value: "Activo" },
      { label: "Desativo", value: "Inactivo" },
      { label: "Expirada", value: "Expirada" },
      { label: "Em processo", value: "Á processar" },
      { label: "Todas", value: "" },
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
       limite_pagamento: '',
       criacao: '',
       referencia: '',
       estado: '',
       fixo:'',
       nib:''
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
    <Drawer.Root size="md" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} size="md"  bg={COLORS.amarelo} rounded={5}>
            <LuSearch /> Pesquisar
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.preto} color={COLORS.bg.branco} borderBottom={`2px solid ${COLORS.amarelo}`} >
              <Drawer.Title fontWeight={300}>Pesquisar com precisão</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Box fontSize={16} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4">
                    <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Limite de pagamento</Field.Label>
                          <Input name="limite_pagamento" type="date" onChange={formik.handleChange} value={formik.values.limite_pagamento}/>
                        </Field.Root>

                        <Field.Root ml={4}width="100%">
                          <Field.Label>Data de criação</Field.Label>
                          <Input name="criacao" type="date" onChange={formik.handleChange} value={formik.values.criacao} />
                        </Field.Root>
                      </Flex>

                      <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Referência</Field.Label>
                          <Input name="referencia" type="text" onChange={formik.handleChange} value={formik.values.referencia} />
                        </Field.Root>
                      </Flex>

                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Montante Fixo</Field.Label>
                        <Input name="fixo" type="text" onChange={formik.handleChange} value={formik.values.fixo} />
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>NIB</Field.Label>
                        <Input name="nib" type="text" onChange={formik.handleChange} value={formik.values.nib} />
                      </Field.Root>
                    </Flex>

                    <Field.Root mt={3}>
                      <Field.Label>Estado</Field.Label>
                      <RadioGroup.Root defaultValue="" name="estado" onChange={formik.handleChange} value={formik.values.estado}>
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