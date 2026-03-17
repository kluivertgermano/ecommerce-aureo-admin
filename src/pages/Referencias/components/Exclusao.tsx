"use client"

import { Box,  Button,  CloseButton, Drawer, Flex, Heading, IconButton, Portal, Text } from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { ANY } from "../../../types/components"
import { PiTrashDuotone } from "react-icons/pi"
import { BaseInfo, RequestAPI } from "../../../config"
import { Toaster, toaster } from "../../../components/ui/toaster"

const Exclusao = ({data}:ANY) => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)

    const exclusao = async (id:string) => {
        setLoad(true)
        try {
          
          const response = await RequestAPI.delete(`referencias/${id}`)

          if(response.data.status == BaseInfo.statusAPI.sucesso){
            toaster.create({
              title: response.data.status.toUpperCase(),
              description: response.data.mensagem,
              type: "success",
            })
          }

          if(response.data.status == BaseInfo.statusAPI.erro){
            toaster.create({
              title: response.data.status.toUpperCase(),
              description: response.data.mensagem,
              type: "error",
            })
          }

          setLoad(false)
        } catch (error:any) {
          
            toaster.create({
              title: error?.response.data.status.toUpperCase(),
              description: error?.response.data.mensagem,
              type: "error",
            })

          setLoad(false)
        }
    }

  return (
    <Drawer.Root size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton ml={2} size="xs" colorPalette="red">
            <PiTrashDuotone />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.preto} color={COLORS.bg.branco} borderBottom={`2px solid ${COLORS.amarelo}`} >
              <Drawer.Title fontWeight={300}>Mais Detalhes</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Heading textAlign="center" fontSize={40} mt={3}># {data.num_referencia}</Heading>
              <Box mt={5} fontSize={16} fontWeight={300}>
                <Flex mb={5} justifyContent="center">
                  <Text fontWeight={500} textAlign="center">Deseja realmente excluir a referência?</Text>
                </Flex>
                <Flex mb={5} justifyContent="center">
                  <Button bg={COLORS.amarelo} loading={load} onClick={()=>exclusao(data.id_referencia)} color={COLORS.preto} width={[150]} rounded={10}>Excluir</Button>
                  <Button bg={COLORS.vermelho} ml={1} width={[150]} onClick={()=> setOpen(false)} rounded={10} fontWeight={700}>Cancelar</Button>
                </Flex>
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


export default Exclusao