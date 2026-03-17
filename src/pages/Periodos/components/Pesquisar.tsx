"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, HStack, IconButton, Image, Input, Portal, RadioGroup, Stack} from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { Pesquisar } from "../../../types/components"
import { LuSearch } from "react-icons/lu"
import MULTICAIXA_EXPRESS from '../../../assets/images/Icones/EXPRESS.png'
import MULTICAIXA from '../../../assets/images/Icones/MULTICAIXA.png'
import INTERNET_BANK from '../../../assets/images/Icones/BANK.png'
import { useFormik } from 'formik';
import { Toaster, toaster } from "../../../components/ui/toaster"

const PesquisarTransacional = ({setMesclar, loading}:Pesquisar) => {
  const [open, setOpen] = useState(false)

    const items = [
      { label: "MULTICAIXA EXPRESS", value: "M" },
      { label: "ATM", value: "A" },
      { label: "INTERNET BANK", value: "L" },
       { label: "Todos", value: "" },
    ]

    const changeTextForImage = (text: string) => {
          if(text == "MULTICAIXA EXPRESS")
              return <Image width="8" src={MULTICAIXA_EXPRESS} />
          else if(text == "ATM")
              return <Image width="8" src={MULTICAIXA} />
          else if(text == "INTERNET BANK")
              return <Image width="10" src={INTERNET_BANK} />
          else return text
    }


    const formik = useFormik({
     initialValues: {
       periodo: '',
       referencia: '',
       montante: '',
       tarifa:'',
       log_transacao:'',
       terminal:''
     },
     onSubmit: values => {

      try {
        let params = ""
        for (const index in values) {        
              params+=`${index}=${values[index]}&`
        }
        setMesclar(params)
        
      } catch (error) {
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
        <IconButton p={3} size="md" bg={COLORS.amarelo} rounded={5}>
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
                        <Field.Label>Referência</Field.Label>
                        <Input name="referencia" type="text" onChange={formik.handleChange} value={formik.values.referencia} />
                      </Field.Root>
                    </Flex>

                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Montante</Field.Label>
                        <Input name="montante" type="text" onChange={formik.handleChange} value={formik.values.montante} />
                      </Field.Root>

                      <Field.Root ml={4} width="100%">
                        <Field.Label>Tarifa aplicada</Field.Label>
                        <Input name="tarifa" type="text" onChange={formik.handleChange} value={formik.values.tarifa}/>
                      </Field.Root>
                    </Flex>

                    <Flex>

                      <Field.Root width="100%">
                        <Field.Label>Periodo</Field.Label>
                        <Input name="periodo" type="text" onChange={formik.handleChange} value={formik.values.periodo} />
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Transação</Field.Label>
                        <Input name="log_transacao" type="text" onChange={formik.handleChange} value={formik.values.log_transacao} />
                      </Field.Root>
                    </Flex>

                    <Field.Root mt={3}>
                      <Field.Label>Terminal</Field.Label>
                      <RadioGroup.Root defaultValue="" name="terminal" onChange={formik.handleChange} value={formik.values.terminal}>
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

                    {/*<Heading mt={5} color={COLORS.cinza} size="md">Intervalo entre datas</Heading>
                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Inicio</Field.Label>
                        <Input name="montante" type="date" onChange={formik.handleChange} value={formik.values.montante} />
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Final</Field.Label>
                        <Input name="nib" type="date" onChange={formik.handleChange} value={formik.values.nib} />
                      </Field.Root>
                    </Flex>*/}
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


export default PesquisarTransacional