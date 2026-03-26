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
              <Heading mt={3}># {data.periodo}</Heading>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Movimentos</Text>
                  <Text fontWeight={700}>{data.quantidade}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Data mesclada</Text>
                  <Text fontWeight={700}>{new Date(data.data_periodo).toLocaleDateString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Montante</Text>
                  <Tag.Root size="md" colorPalette={"green"}>
                      <Tag.Label fontSize={20}>AKZ {Intl.NumberFormat("PT-br").format(data.somatorio)}</Tag.Label>
                  </Tag.Root>
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