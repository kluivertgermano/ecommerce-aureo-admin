"use client"

import { Box,  CloseButton, Drawer, Flex, Heading, IconButton, Portal, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import { COLORS } from "../../../helpers"
import type { ANY } from "../../../types/components"
import { FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus } from "react-icons/fa6"
import { FaPlug } from "react-icons/fa"

const Detalhes = ({data}:ANY) => {
  const [open, setOpen] = useState(false)

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

    const changeTextForImageAlt = (text: string) => {
        if(text == "true")
            return <FaPlug size={20} color='black' />
        else if(text == "false")
            return <FaPlug size={20} color='gray' />
        else return text
    }

  return (
    <Drawer.Root size="md" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton size="xs" bg={COLORS.cinza}>
            <LuSearch />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`}>
              <Drawer.Title fontWeight={300}>Mais Detalhes</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Heading mt={3}># {data.numeroFactura}</Heading>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Estado</Text>
                  <Text fontWeight={700}>{data.statusFactura}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Contação</Text>
                  <Text fontWeight={700}>{data.numero_cotacao}</Text>
                </Flex>
                <Flex mb={5} direction={"column"} justifyContent="space-between">
                  <Text>Descrição</Text>
                  <Textarea bg={"gray.100"} outline={"none"} border={"none"} value={data.descricao} mt={2} rows={10} readOnly  />
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Data da emissão</Text>
                  <Text fontWeight={700}>{new Date(data.dataEmissao).toLocaleDateString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Data do vencimento</Text>
                  <Text fontWeight={700}>{new Date(data.dataVencimento).toLocaleDateString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Data do pagamento</Text>
                  <Text fontWeight={700}>{data.dataPagamento && new Date(data.dataPagamento).toLocaleDateString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Valor</Text>
                  <Text fontWeight={700}>{Intl.NumberFormat("PT-br").format(data.valorTotalFactura)} AKZ</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Forma de pagamento</Text>
                  <Text fontWeight={700}>{data.formaPagamento}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Moeda</Text>
                  <Text fontWeight={700}>{(data.moeda)}</Text>
                </Flex>
              </Box>

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


export default Detalhes