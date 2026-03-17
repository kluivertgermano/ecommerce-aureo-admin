import { Box, Center, Skeleton, Table, Tag } from '@chakra-ui/react'
import type { ResponseSWR } from '../../../types/responseAPI'
import { Alerta } from '../../../components/status'
import { COLORS } from '../../../helpers'

function TabelaMensal({datas:{error, data, isLoading}}: ResponseSWR) {

  const changeText = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]

  const totalTransacoes = data?.mensagem?.resumo.tabela_mensais.reduce((prev:any, curr:any) => {

        prev.quantidade += curr.quantidade
        prev.soma += curr.montante

        return prev;
        
        },{soma:0, quantidade:0})

  return (
    error ? 
            <Center ml={2} width={["50%"]}>
                <Alerta title='Erro de comunicação' description='Não conseguimos carregar suas informações, por favor recarregue a pagina!' status='error'/>
            </Center>
          : isLoading ? 
          <>
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
            <Skeleton mt={5} height={30}/> 
          </>
          :
        <Box ml={3} width={["25%"]} mt={5} bg={COLORS.bg.branco} p={2} rounded={10} shadow="lg">
                <Table.Root size="sm" variant="outline" rounded={10}>
                    <Table.Header>
                        <Table.Row bg={COLORS.amarelo}>
                        <Table.ColumnHeader>Mês</Table.ColumnHeader>
                        <Table.ColumnHeader>Nº</Table.ColumnHeader>
                        <Table.ColumnHeader>Valume</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body fontSize={11}>
                        {data.mensagem.resumo.tabela_mensais.map((item:any, index: number) => (
                        <Table.Row key={item.mensal} >
                            <Table.Cell fontWeight={700}>{changeText[index]}</Table.Cell>
                            <Table.Cell>{item.quantidade}</Table.Cell>
                            <Table.Cell>
                                <Tag.Root size="sm" colorPalette={"green"}>
                                    <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(item.montante)}</Tag.Label>
                                </Tag.Root>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>

                <Table.Root mt={2} size="sm" variant="outline" rounded={10}>
                    <Table.Body fontSize={13} bg={COLORS.bg.cinzaBorda}>
                        <Table.Row>
                            <Table.Cell fontWeight={700}>&nbsp;&nbsp;&nbsp;</Table.Cell>
                            <Table.Cell textAlign="right" fontWeight={700}>{totalTransacoes.quantidade}</Table.Cell>
                            <Table.Cell textAlign="right" fontWeight={700}> AKZ {Intl.NumberFormat("PT-br").format(totalTransacoes.soma)}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Box>
  )
}

export default TabelaMensal