"use client"

import { Box,  CloseButton, Drawer, Flex, Heading, IconButton, Image, Portal, Tag, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import { COLORS } from "../../../helpers"
import MULTICAIXA_EXPRESS from '../../../assets/images/Icones/EXPRESS.png'
import MULTICAIXA from '../../../assets/images/Icones/MULTICAIXA.png'
import INTERNET_BANK from '../../../assets/images/Icones/BANK.png'
import type { ANY } from "../../../types/components"

const Detalhes = ({data}:ANY) => {
  const [open, setOpen] = useState(false)

    const changeTextForImage = (text: string) => {
          if(text == "MULTICAIXA EXPRESS")
              return <Image width="8" src={MULTICAIXA_EXPRESS} />
          else if(text == "ATM")
              return <Image width="8" src={MULTICAIXA} />
          else if(text == "INTERNET BANK")
              return <Image width="10" src={INTERNET_BANK} />
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
            <Drawer.Header bg={COLORS.preto} color={COLORS.bg.branco} borderBottom={`2px solid ${COLORS.amarelo}`}>
              <Drawer.Title fontWeight={300}>Mais Detalhes</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Heading mt={3}># {data.id_pagamento}</Heading>
              <Box mt={5} fontSize={16} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Referência</Text>
                  <Text fontWeight={700}>{data.referencia_do_servico}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Periodo</Text>
                  <Text fontWeight={700}>{data.Identificacao_Log_EGR}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Log na EGR</Text>
                  <Text fontWeight={700}>{data.numero_Log_EGR}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Transação única</Text>
                  <Text fontWeight={700}>{data.Identificacao_Log_EGR}{data.numero_Log_EGR}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Data do movimento</Text>
                  <Text fontWeight={700}>{new Date(data.data_movimento).toLocaleDateString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Hora do movimento</Text>
                  <Text fontWeight={700}>{new Date('2000-01-01 '+data.hora_do_movimento).toLocaleTimeString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Número do periodo</Text>
                  <Text fontWeight={700}>{data.numero_Periodo_Contabilistico}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Identificacao do terminal</Text>
                  <Text fontWeight={700}>{data.identificacao_Transacao_Local}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Terminal</Text>
                  <Text fontWeight={700}>{changeTextForImage(data.tipo_de_Terminal)}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Moeda</Text>
                  <Text fontWeight={700}>{data.codigo_de_Moeda}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Tarifa aplicada pelo banco</Text>
                  <Text fontWeight={700} color="red.300">
                    <Tag.Root size="sm" colorPalette={"red"}>
                        <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(data.tarifa_aplicada_a_operacao)}</Tag.Label>
                    </Tag.Root>
                  </Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Movimento</Text>
                  <Text fontWeight={700} color="green.300">
                    <Tag.Root size="sm" colorPalette={"green"}>
                        <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(data.montante_da_operacao)}</Tag.Label>
                    </Tag.Root>
                  </Text>
                </Flex>
              </Box>
              <Box mt={5}>
                <Box padding={10}>
                  
                </Box>
                <Heading size="md">Custo á pagar pela transação</Heading>
                <Box mt={10} fontSize={16} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Percentual da operação</Text>
                  <Text fontWeight={700}>{data.percentagem_actual}%</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Valor minimo respeitado</Text>
                  <Text fontWeight={700}>AKZ {Intl.NumberFormat('PT-br').format(data.minimo_actual)}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Valor total á cobrar</Text>
                  <Text fontWeight={700} color="green.300">
                    <Tag.Root size="sm" colorPalette={"green"}>
                        <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(data.valor_total)}</Tag.Label>
                    </Tag.Root>
                  </Text>
                </Flex>
                </Box>
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