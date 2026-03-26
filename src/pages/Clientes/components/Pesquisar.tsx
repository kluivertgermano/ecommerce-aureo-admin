"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, HStack, IconButton, Input, Portal, RadioGroup, Stack, Textarea} from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { Pesquisar } from "../../../types/components"
import { LuSearch } from "react-icons/lu"
import { useFormik } from 'formik';
import { Toaster, toaster } from "../../../components/ui/toaster"

const PesquisarReferencias = ({setMesclar, loading}:Pesquisar) => {
  const [open, setOpen] = useState(false)

    const items = [
      { label: "Bloquado", value: "1" },
      { label: "Activo", value: "0" },
      { label: "Todos", value: "" },
    ]

    const formik = useFormik({
     initialValues: {
          nomeCliente: '',
          nifCliente: '',
          emailCliente: '',
          bloqueio: '',
          telefoneCliente: '',
          telefoneClienteAlt: '',
          enderecoCliente: '',
          observacoes: '',
          businessPartnerId:'',
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
    <Drawer.Root size="xl" open={open} onOpenChange={(e) => setOpen(e.open)}>
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
                          <Input name="nomeCliente" onChange={formik.handleChange} value={formik.values.nomeCliente} type='text' placeholder='Cliente ou Empresa' rounded={10} p={[5,7]} mb={[7]} />
                          </Flex>
                      <Flex>
                          <Input name="nifCliente" onChange={formik.handleChange} value={formik.values.nifCliente} type='text'  placeholder='NIF' rounded={10} p={[5,7]} mb={[7]} />
                          <Input name="businessPartnerId" onChange={formik.handleChange} value={formik.values.businessPartnerId} ml={4} type='text' placeholder='Business Parter ID' rounded={10} p={[5,7]} mb={[7]} />
                      </Flex>
                        <Flex direction={["column","row"]}>
                          <Input type='email'  name="emailCliente" onChange={formik.handleChange} value={formik.values.emailCliente} placeholder='Email' rounded={10} p={[7]} mb={[7]} />
                          <Input type='tel'   name="telefoneCliente" onChange={formik.handleChange} value={formik.values.telefoneCliente} ml={[0,4]} placeholder='Telefone' rounded={10} p={[7]} mb={[7]} />
                          <Input type='tel'  name="telefoneClienteAlt" onChange={formik.handleChange} value={formik.values.telefoneClienteAlt} ml={[0,4]} placeholder='Telefone Opcional' rounded={10} p={[7]} mb={[7]} />
                        </Flex>
                        <Flex direction={["column","row"]} mb={[7,0]}>
                          <Input type='text'  name="enderecoCliente" value={formik.values.enderecoCliente} onChange={formik.handleChange}  placeholder='Endereço' rounded={10} p={[7]} mb={[7]} />
                        </Flex>
                        <Flex direction={["column","row"]}>
                          <Field.Root width="100%">
                            <Textarea rows={5}  name="observacoes" onChange={formik.handleChange} value={formik.values.observacoes}  placeholder='Descrição da tua empresa'/>
                          </Field.Root>
                        </Flex>

                    <Field.Root mt={3}>
                      <Field.Label>Estado</Field.Label>
                      <RadioGroup.Root defaultValue="" name="bloqueio" onChange={formik.handleChange} value={formik.values.bloqueio}>
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