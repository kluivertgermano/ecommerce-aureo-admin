"use client"

import { Box, CloseButton, Drawer, Flex, Heading, IconButton, Portal, Tag, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import { COLORS } from "../../../helpers"
import type { ANY } from "../../../types/components"

const Detalhes = ({data}:ANY) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root size="md" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton size="xs">
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
              <Heading mt={3}># {data.produtoId}</Heading>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Codigo do produto</Text>
                  <Text fontWeight={700}>{data.codigoProduto}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Descrição</Text>
                  <Text fontWeight={700}>{data.descricao}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Preço</Text>
                  <Tag.Root size="md" colorPalette={"green"}>
                      <Tag.Label fontSize={20}>{Intl.NumberFormat("PT-br").format(data.preco)} AKZ</Tag.Label>
                  </Tag.Root>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Unidade de medida</Text>
                  <Text fontWeight={700}>{data.unidadeMedida}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Categoria</Text>
                  <Text fontWeight={700}>{data.categoria}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Data de criação</Text>
                  <Text fontWeight={700}>{new Date(data.produto_time).toLocaleDateString()}</Text>
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