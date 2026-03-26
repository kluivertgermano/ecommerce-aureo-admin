import { Box, Center, Flex, Heading, Image, Skeleton, Table, Tag } from '@chakra-ui/react'
import {COLORS} from '../../../helpers'
import { Alerta } from '../../../components/status'
import MULTICAIXA_EXPRESS from '../../../assets/images/Icones/EXPRESS.png'
import MULTICAIXA from '../../../assets/images/Icones/MULTICAIXA.png'
import INTERNET_BANK from '../../../assets/images/Icones/BANK.png'
import { Detalhes } from '../../Pedidos/components'
import { Detalhes as Datails } from '../../Produtos/components'
import type { ResponseSWR } from '../../../types/responseAPI'


function Dashboard({datas:{error, data, isLoading}}: ResponseSWR) {


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
        error ? 
        <Center mt={5}>
            <Alerta title='Erro de comunicação' description='Não conseguimos carregar suas informações, por favor recarregue a pagina!' status='error'/>
        </Center>
      : isLoading ? 
        <>
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
        </>
      :
        <Flex mt={5} bg={COLORS.bg.branco} p={5} rounded={10} shadow="lg" justifyContent="space-between">
            
            <Box width="49%">
                <Table.Root size="sm" variant="outline" rounded={10}>
                    <Table.Header>
                        <Table.Row bg={COLORS.amarelo}>
                        <Table.ColumnHeader>REFERÊNCIA</Table.ColumnHeader>
                        <Table.ColumnHeader>VALOR</Table.ColumnHeader>
                        <Table.ColumnHeader>TERMINAL</Table.ColumnHeader>
                        <Table.ColumnHeader>TRANSAÇÃO</Table.ColumnHeader>
                        <Table.ColumnHeader>TEMPO</Table.ColumnHeader>
                        <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body fontSize={12}>
                        {data.mensagem.resumo.ultimos_pagamentos.map((item:any) => (
                        <Table.Row key={item.id_pagamento}>
                            <Table.Cell>{item.referencia_do_servico}</Table.Cell>
                            <Table.Cell>
                                <Tag.Root size="sm" colorPalette={"green"}>
                                    <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(item.montante_da_operacao)}</Tag.Label>
                                </Tag.Root>
                            </Table.Cell>
                            <Table.Cell>{changeTextForImage(item.tipo_de_Terminal)}</Table.Cell>
                            <Table.Cell>{item.Identificacao_Log_EGR}{item.numero_Log_EGR}</Table.Cell>
                            <Table.Cell>{new Date(item.data_movimento).toLocaleDateString()} {new Date("1970-01-01 "+item.hora_do_movimento).toLocaleTimeString()}</Table.Cell>
                            <Table.Cell>
                                <Detalhes data={item}/>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Caption mt={5}>
                        <Heading>Recentes Pagamentos</Heading>
                    </Table.Caption>
                </Table.Root>
            </Box>

            <Box width="49%">
                <Table.Root size="sm" variant="outline" rounded={10}>
                    <Table.Header>
                        <Table.Row bg={COLORS.amarelo}>
                        <Table.ColumnHeader>MOVIMENTO</Table.ColumnHeader>
                        <Table.ColumnHeader>MONTANTE</Table.ColumnHeader>
                        <Table.ColumnHeader>PERIODO</Table.ColumnHeader>
                        <Table.ColumnHeader>TEMPO</Table.ColumnHeader>
                        <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body fontSize={12}>
                        {data.mensagem.resumo.ultimos_periodos.map((item:any) => (
                        <Table.Row key={item.data_periodo}>
                            <Table.Cell>{item.quantidade}</Table.Cell>
                            <Table.Cell>
                                <Tag.Root size="sm" colorPalette={"green"}>
                                    <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(item.somatorio)}</Tag.Label>
                                </Tag.Root>
                            </Table.Cell>
                            <Table.Cell>{item.periodo}</Table.Cell>
                            <Table.Cell>{item.data_periodo}</Table.Cell>
                            <Table.Cell>
                                <Datails data={item}/>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Caption mt={5}>
                        <Heading>Recentes Periodos</Heading>
                    </Table.Caption>
                </Table.Root>
            </Box>
        </Flex>
  )
}

export default Dashboard
