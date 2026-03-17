"use client"

import { Box, Button, Center, CloseButton, Drawer, Flex, Heading, Image, Input, Portal, Span, Tag, Text } from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { ANY } from "../../../types/components"
import { BsPlus } from "react-icons/bs"
import MULTITEL from "../../../assets/images/logos/MULTITEL.png"
import Confirmacao from "./Confirmacao"

const Detalhes = ({data}:ANY) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button fontSize={13} mt={2} display="flex" width={20} height={5} rounded={30} p={3}>Obter <Span justifySelf="end" rounded="50%" bg={COLORS.branco}><BsPlus color={COLORS.azulSegundo} /></Span></Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.azul} color={COLORS.bg.branco} borderBottom={`5px solid ${COLORS.azulSegundo}`}>
              <Drawer.Title fontWeight={300}>Realizar Pagamento</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Box p={5}>
                <Center>
                  <Image textAlign="center" width={[200]} src={MULTITEL} />
                </Center>
                <Heading  mt={7} color={COLORS.azul}>{data.nome_plano}</Heading>
                <Box mt={5}>
                  <Text color={COLORS.cinza} fontSize={12}>Trafego lmitado</Text>
                  <Text fontWeight={500} bg={COLORS.bg.cinzaPage} p={2} rounded={5} mt={1} fontSize={20}>{data.megas}</Text>
                </Box>
                <Box mt={2}>
                  <Text color={COLORS.cinza} fontSize={12}>Montante</Text>
                  <Text fontWeight={500} bg={COLORS.bg.cinzaPage} p={2} rounded={5} mt={1} fontSize={20}>{data.montante}</Text>
                </Box>
                <Box mt={2} width="50%">
                  <Text color={COLORS.cinza} fontSize={12}>{data.desc}</Text>
                </Box>
                <Box mt={5}>
                  <form>
                    <Input placeholder="Número assossiado ao Multicaixa Express" />
                    <Confirmacao data={data} />
                  </form>
                </Box>
              </Box>              
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