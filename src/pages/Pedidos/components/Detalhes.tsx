"use client"

import { Box,  CloseButton, Drawer, Flex, Heading, IconButton, Portal, Tag, Text, Textarea } from "@chakra-ui/react"
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
              <Heading mt={3}># {data.pedidoCotacaoId}</Heading>
              <Box mt={5} fontSize={14} fontWeight={300}>
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
                <Flex mb={5} justifyContent="space-between">
                  <Text>Gerado em</Text>
                  <Text fontWeight={700}>{new Date(data.dataCriacao).toLocaleString()}</Text>
                </Flex>

                <Flex mb={5} direction={"column"}  justifyContent="space-between">
                  <Text>Descrição</Text>
                  <Textarea bg={"gray.100"} outline={"none"} border={"none"} value={data.descricaoPedido} mt={2} rows={10} readOnly  />
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