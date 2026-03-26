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

    const changeTextForColor = (text: string) => {
        if(text == "Entrada")
            return 'green'
        else if(text == "Saída")
            return 'red'
        else if(text == "Pendente")
            return 'blue'
        else if(text == "Cancelado")
            return 'orange'
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
              <Heading mt={3}># {data.movimentoFinanceiroId}</Heading>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Operação</Text>
                  <Text fontWeight={700} color={changeTextForColor(data.tipoMovimento)}>{data.tipoMovimento}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Descrição</Text>
                  <Text fontWeight={700}>{data.descricao}</Text>
                </Flex>
                <Flex mb={5} direction={"column"} justifyContent="space-between">
                  <Text>Observação</Text>
                  <Textarea bg={"gray.100"} outline={"none"} border={"none"} value={data.observacoes} mt={2} rows={10} readOnly  />
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Ocorrência</Text>
                  <Text fontWeight={700}>{new Date(data.dataMovimento).toLocaleString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Valor</Text>
                  <Text fontWeight={700}>{Intl.NumberFormat("PT-br").format(data.valor)} AKZ</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Referência</Text>
                  <Text fontWeight={700}>{data.referenciaTipo}</Text>
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