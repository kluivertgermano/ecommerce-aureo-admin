import {Box, Center, Container, Skeleton, createListCollection, Flex, HStack, IconButton, Portal, Select, Table, Tag, Image } from '@chakra-ui/react'
import {COLORS, reloadPage} from '../../helpers'
import { LuRefreshCcw } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import useSWR from 'swr'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import { useState } from 'react'
import MULTICAIXA_EXPRESS from '../../assets/images/Icones/EXPRESS.png'
import MULTICAIXA from '../../assets/images/Icones/MULTICAIXA.png'
import INTERNET_BANK from '../../assets/images/Icones/BANK.png'
import { Detalhes, Pesquisar, Relatorios } from './components'
import { Alerta } from '../../components/status'

function Transacoes() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState("")
    

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)

    return data
  }

  const { data, error, isLoading }: ResponseSWR = useSWR(`/pagamentos/entidade/${BaseInfo.entidade}?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)

  const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/relatorios/entidade/${BaseInfo.entidade}/tipo/pagamentos?limite=15`, fetcher)

  const getNewDatas = (status:any): void => {
    setPagina(status.page)
  }

  const changeLengthDatas = (status:any): void => {
    setLimite(status.value[0])
  }

  const changeTextForImage = (text: string) => {
        if(text == "MULTICAIXA EXPRESS")
            return <Image width="8" src={MULTICAIXA_EXPRESS} />
        else if(text == "ATM")
            return <Image width="8" src={MULTICAIXA} />
        else if(text == "INTERNET BANK")
            return <Image width="10" src={INTERNET_BANK} />
        else return text
  }

 const frameworks = createListCollection({
  items: [
    { label: "10", value: "10" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
    { label: "500", value: "500" },
    { label: "1000", value: "1000" },
    { label: "2000", value: "2000" },
    { label: "5000", value: "5000" },
  ],
})

  return (
    <Box bg={COLORS.bg.cinzaPage} minHeight="100vh">
        <Header/>
        <Flex>
            <SideBar/>
            <Container mt={10} mb={5} width={["85%"]}>
                <Title title="Transações" description="Monitore em tempo real seus pagamentos chegando até voçê!" />

                <HStack my={10} alignItems="center" justifyContent="space-between">
                    <Flex>
                        <Select.Root onValueChange={changeLengthDatas} collection={frameworks} bg={COLORS.bg.branco} size="md" width={150}>
                            <Select.HiddenSelect /> 
                            <Select.Control>
                                <Select.Trigger>
                                <Select.ValueText placeholder="10" />
                                </Select.Trigger>
                                <Select.IndicatorGroup>
                                <Select.Indicator />
                                </Select.IndicatorGroup>
                            </Select.Control>
                            <Portal>
                                    <Select.Positioner>
                                    <Select.Content>
                                        {frameworks.items.map((framework) => (
                                        <Select.Item  item={framework} key={framework.value}>
                                            {framework.label}
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                        ))}
                                    </Select.Content>
                                    </Select.Positioner>
                            </Portal>
                        </Select.Root>
                        <IconButton p={3} ml={3} size="md" onClick={reloadPage} bg={COLORS.preto} rounded={5}>
                            <LuRefreshCcw /> Recarregar
                        </IconButton>
                    </Flex>
                    <Flex>
                        <Pesquisar loading={isLoading} setMesclar={setMesclar}/>
                        <Relatorios data={dados} error={erro} isLoading={carregar} />
                    </Flex>
                </HStack>

     {error ? 
        <Center>
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
            <Flex mt={5} bg={COLORS.bg.branco} justifyContent="center" p={10} rounded={10} shadow="md">
                
                <Table.Root variant="line">
                    <Table.Header>
                        <Table.Row>
                        <Table.ColumnHeader>REFERÊNCIA</Table.ColumnHeader>
                        <Table.ColumnHeader>VALOR</Table.ColumnHeader>
                        <Table.ColumnHeader>TARIFA APLICADA</Table.ColumnHeader>
                        <Table.ColumnHeader>TERMINAL</Table.ColumnHeader>
                        <Table.ColumnHeader>TRANSAÇÃO</Table.ColumnHeader>
                        <Table.ColumnHeader>TEMPO</Table.ColumnHeader>
                        <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>

                        <Table.Body>
                            {data.mensagem.map((item:any) => (
                            <Table.Row key={item.id_pagamento}>
                                <Table.Cell>{item.referencia_do_servico}</Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="sm" colorPalette={"green"}>
                                        <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(item.montante_da_operacao)}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="sm" colorPalette={"gray"}>
                                        <Tag.Label>AKZ {Intl.NumberFormat("PT-br").format(item.tarifa_aplicada_a_operacao)}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>{changeTextForImage(item.tipo_de_Terminal)}</Table.Cell>
                                <Table.Cell>{item.Identificacao_Log_EGR}</Table.Cell>
                                <Table.Cell>{new Date(item.data_hora_transacao_cliente).toLocaleString()}</Table.Cell>
                                <Table.Cell>
                                    <Detalhes data={item}/>
                                </Table.Cell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                        
                    <Table.Caption mt={5}>
                        <Paginations getNewDatas={getNewDatas} data={data} />
                    </Table.Caption>
                </Table.Root>
            </Flex>
            }
            </Container>
        </Flex>
    </Box>
  )
}

export default Transacoes
