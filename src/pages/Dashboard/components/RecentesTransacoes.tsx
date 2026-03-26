import { Box, Button, Center, DownloadTrigger, Flex, Heading, IconButton, Link as Links, Skeleton, Table, Tag, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { changeTextForColor, COLORS } from '../../../helpers'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { ImCalculator } from 'react-icons/im'
import { FaFileDownload } from 'react-icons/fa'
import { TbCreditCardPay, TbFileDownload, TbTransactionDollar } from 'react-icons/tb'
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router'
import { Alerta } from '../../../components/status'
import type { ResponseSWR } from '../../../types/responseAPI'
import { BaseInfo, RequestAPI } from '../../../config'
import { toaster } from '../../../components/ui/toaster'
import { DialogConfirm } from '../../../components/includes'

function RecentesTransacoes({datas:{error, data, isLoading}}: ResponseSWR)  {

    const [load, setLoad] = useState(false)

    const pay = async () => {
        setLoad(true)
        try {
          
          const response = await RequestAPI.post(`facturas/pagar/`,{...data})

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
    error ? 
        <Center mt={10}>
            <Alerta title='Erro de comunicação' description='Não conseguimos carregar suas informações, por favor recarregue a pagina!' status='error'/>
        </Center>
        : isLoading ? 
        <>
        <Skeleton mt={5} height={30}/> 
        <Skeleton mt={5} height={30}/> 
        <Skeleton mt={5} height={30}/> 
        <Skeleton mt={5} height={30}/> 
        </>
        :
        <Flex my={10}>
            <Box bg={COLORS.bg.branco} p={5} shadow={"sm"} rounded={10} flex={1}>
                <Flex mb={5} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading  size={"md"}>Facturas Recentes</Heading>
                    <Button as={Link} to="/facturas" size={"xs"}>Ver todas as facturas</Button>
                </Flex>
                <Box fontSize={12} p={5} my={5}>
                    <Table.Root variant="line" fontSize={12}>
                        <Table.Header>
                            <Table.Row>
                            <Table.ColumnHeader>#</Table.ColumnHeader>
                            <Table.ColumnHeader>CLIENTE</Table.ColumnHeader>
                            <Table.ColumnHeader>MONTANTE</Table.ColumnHeader>
                            <Table.ColumnHeader>ESTADO</Table.ColumnHeader>
                            <Table.ColumnHeader>METODO DE PAGAMENTO</Table.ColumnHeader>
                            {/* <Table.ColumnHeader>DOWNLOAD</Table.ColumnHeader> */}
                            <Table.ColumnHeader>DATA VENCIMENTO</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data?.mensagem?.facturas_recentes_e_transacoes?.facturas_recentes?.map((item: any) => (
                            <Table.Row>
                                <Table.Cell>{item.numeroFactura}</Table.Cell>
                                <Table.Cell>{item.nomeCliente}</Table.Cell>
                                <Table.Cell>{Intl.NumberFormat("PT-br").format(item.valorTotalFactura)} AKZ</Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="lg" colorPalette={changeTextForColor(item.statusFactura)}>
                                        <Tag.Label>{item.statusFactura}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>{item.formaPagamento}</Table.Cell>
                                {/* <Table.Cell>
                                   <Links href={`${BaseInfo.baseURL}reports/${item.arquivoFactura}`} download={true}>
                                        <IconButton size="md" p={1} bg={COLORS.preto} color={"white"}>                       
                                            <TbFileDownload   />
                                        </IconButton>
                                    </Links>
                                </Table.Cell> */}
                                <Table.Cell>{new Date(item.dataVencimento).toLocaleDateString()}</Table.Cell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>   
            </Box>
            <Box ml={5} bg={COLORS.bg.branco} p={5} shadow={"sm"} rounded={10} width={"30%"}>
                <Heading  mb={5} size={"md"}>Transações Recentes</Heading>
                <Box fontSize={12} p={5} my={5} >
                    <Box mb={10}>
                        {/* <Heading>Hoje</Heading> */}
                        {data?.mensagem?.facturas_recentes_e_transacoes?.movimento_financeiro?.map((item: any) => (
                        <Flex mt={5} justifyContent={"space-between"} alignItems={"center"}>
                            <Flex>
                                <IconButton size="xl" variant={"outline"} rounded={"100%"}>
                                    {item.referenciaTipo == "Depósito" ? <IoArrowForwardOutline  /> : <IoArrowBackOutline  />}
                                </IconButton>
                                <Box fontSize={10} ml={2}>
                                    <Heading size={"sm"}>{item.referenciaTipo}</Heading>
                                    <Text color={"gray.600"}>{item.descricao}</Text>
                                    <Text fontWeight={600} color={"gray.600"}>{item.nomeCliente}</Text>
                                </Box>
                            </Flex>
                            <Text fontSize={14} fontWeight={600} color={item.referenciaTipo == "Depósito" ? "green.500" : "red.500"}>
                                {item.referenciaTipo == "Depósito" ? "+" : "-"} 
                                {Intl.NumberFormat("PT-br").format(item.valor)}
                            </Text>
                        </Flex>
                        ))}
                    </Box>
                </Box>   
            </Box>
        </Flex>
  )
}

export default RecentesTransacoes