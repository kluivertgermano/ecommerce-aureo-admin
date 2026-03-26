"use client"

import { Avatar, AvatarGroup, Box,  Center,  CloseButton, Drawer, Flex, Heading, IconButton, Portal, Tag, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import { COLORS } from "../../../helpers"
import { BaseInfo } from "../../../config"
import { MdDownload } from "react-icons/md"
import { TbLockCheck, TbLockX } from "react-icons/tb"
import { PiIdentificationBadge } from "react-icons/pi"

const Detalhes = ({data, func}:any) => {
  const [open, setOpen] = useState(false)

    const changeTextDefault = (text: string) => {
        if(text == "0")
            return 'Activo'
        else if(text == "1")
            return 'Bloqueado'
        else if(text == "2")
            return 'Suspenso'
        else return text
    }

    const changeTextDefaultCliente = (text: string) => {
        if(text == "0")
            return 'Sim'
        else if(text == "1")
            return 'Não'
        else return text
    }

    const changeTextForColor = (text: string) => {
            if(text == "0")
                return 'green'
            else if(text == "1")
                return 'red'
            else if(text == "2")
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
              <Heading mt={3}># {data.clienteId}</Heading>
              <Center>
                <AvatarGroup size={"2xl"}>
                    <Avatar.Root>
                        <Avatar.Fallback />
                        <Avatar.Image src={`${BaseInfo.baseURL}images/${data?.fotoCliente}`} />
                    </Avatar.Root>
                </AvatarGroup>
              </Center>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Estado</Text>
                  <Text fontWeight={700}>
                    <Tag.Root size="lg" colorPalette={changeTextForColor(data.bloqueio)}>
                        <Tag.Label>{changeTextDefault(data.bloqueio)}</Tag.Label>
                    </Tag.Root>
                  </Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Nome do cliente</Text>
                  <Text fontWeight={700}>{data.nomeCliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Email</Text>
                  <Text fontWeight={700}>{data.emailCliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Telefone</Text>
                  <Text fontWeight={700}>{data.telefoneCliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Telefone alt.</Text>
                  <Text fontWeight={700}>{data.telefoneClienteAlt}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>NIF</Text>
                  <Text fontWeight={700}>{data.nifCliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Categoria</Text>
                  <Text fontWeight={700}>{data.tipoCliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Localização</Text>
                  <Text fontWeight={700}>{data.enderecoCliente}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Identificador BP</Text>
                  <Text fontWeight={700}>{data.businessPartnerId}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Arq. legal</Text>
                  <Text fontWeight={700} p={1} bg={"gray.300"}><MdDownload size={24} color="black" /></Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Hash de sessão</Text>
                  <Text fontWeight={700}>{data.endereco_mac_unico}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Referência de pagamento (EMIS)</Text>
                  <Text fontWeight={700}>{data.referenciaEMIS}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Ultimo Login</Text>
                  <Text fontWeight={700}>{new Date(data.ultimo_login).toLocaleString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Criado em</Text>
                  <Text fontWeight={700}>{new Date(data.criado_em).toLocaleString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Actualizado <em></em></Text>
                  <Text fontWeight={700}>{new Date(data.actualizado_em).toLocaleString()}</Text>
                </Flex>
                <Flex mb={5} justifyContent="space-between">
                  <Text>Novo cliente</Text>
                  <Text fontWeight={700}>
                    <Tag.Root size="lg">
                        <Tag.Label>{changeTextDefaultCliente(data.novo_cliente)}</Tag.Label>
                    </Tag.Root>
                    </Text>
                </Flex>

                <IconButton onClick={() => func[0](data)} p={3} size={"lg"} bg={data.bloqueio == 0 ? '#1B3B6F' : '#9EB3C2'} color={COLORS.branco} rounded={5}>
                    {data.bloqueio == 0 ? <TbLockX size={34} /> : <TbLockCheck size={34} />}
                </IconButton>
                <IconButton ml={2} p={3} onClick={() => func[1](data)} size={"lg"} bg={data.servico_principal == "true" ? "#261C15" : "#BF8860"} color={COLORS.branco} rounded={5}>
                    <PiIdentificationBadge size={34} />
                </IconButton>
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