"use client"

import { Box,  Button,  Center,  CloseButton, Drawer, Flex, Image, Portal, Text } from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import type { ANY } from "../../../types/components"
import MULTITEL from "../../../assets/images/logos/MULTITEL.png"
import { BaseInfo, RequestAPI } from "../../../config"
import { Toaster, toaster } from "../../../components/ui/toaster"
import Verificacao from "./Verificacao"

const Confirmacao = ({data}:ANY) => {
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
        <Button width="full" bg={COLORS.azul} mt={4}>Comprar</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.azul} color={COLORS.bg.branco} borderBottom={`2px solid ${COLORS.azulSegundo}`} >
              <Drawer.Title fontWeight={300}>Confirmar Compra</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Center>
                  <Image textAlign="center" width={[200]} src={MULTITEL} />
              </Center>
              <Box mt={5} fontSize={16} fontWeight={300}>
                <Flex mb={5} justifyContent="center">
                  <Text fontWeight={500} textAlign="center">Efectuar a compra?</Text>
                </Flex>
                <Flex mb={5} justifyContent="center">
                  <Button bg={COLORS.vermelho} width={[150]} onClick={()=> setOpen(false)} rounded={7} fontWeight={700}>Cancelar</Button>
                  <Verificacao data={data} />
                </Flex>
              </Box>

              <Toaster />
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


export default Confirmacao