import { Box, Center, Container, createListCollection, Flex, HStack, IconButton, Link, Portal, Select, Skeleton, Table, Tag, Text } from '@chakra-ui/react'
import {COLORS, reloadPage} from '../../helpers'
import { LuRefreshCcw, LuSearch } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { FaDotCircle, FaFileAlt, FaFileContract, FaPlug, FaPlus } from 'react-icons/fa'
import { FaMoneyBillTransfer, FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus } from 'react-icons/fa6'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import useSWR from 'swr'
import { Alerta } from '../../components/status'
import { Detalhes, Editar, Exclusao, Gerar, Pesquisar, Relatorios } from './components'
import { useStoreEntidadeAllData } from '../../stores'
import { Manufacturing } from '../../components/status'

function Pedidos() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState("")
    const {entidadeData} = useStoreEntidadeAllData()

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)

    return data
    }

    const { data, error, isLoading }: ResponseSWR = useSWR(`/pedidos-cotacao/entidade/${entidadeData?.empresaId}/clienteId/${entidadeData?.clienteId}?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)
    
    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/pedidos-cotacao/entidade/${entidadeData?.empresaId}/clienteId/${entidadeData?.clienteId}?limite=15`, fetcher)

    const getNewDatas = (status:any): void => {
        setPagina(status.page)
    }

    const changeLengthDatas = (status:any): void => {
        setLimite(status.value[0])
    }

    const changeTextForColor = (text: string) => {
        if(text == "Aprovado")
            return 'green'
        else if(text == "Rejeitado")
            return 'red'
        else if(text == "Pendente")
            return 'blue'
        else if(text == "Cancelado")
            return 'orange'
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
                <Title title="Pedidos dos clientes" description="Gere e observe tudo em tempo real" />

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
                                    <Select.Item item={framework} key={framework.value}>
                                        {framework.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                    ))}
                                </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>
                        <IconButton onClick={reloadPage} p={3} ml={3} size="md" bg={COLORS.preto} rounded={5}>
                            <LuRefreshCcw /> Recarregar
                        </IconButton>
                    </Flex>
                    <Flex>
                        <Pesquisar setMesclar={setMesclar} loading={isLoading}/>
                        {/* <Relatorios data={dados} error={erro} isLoading={carregar} /> */}
                        <Gerar/>
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
                false ? 
                    <Box mt={5} bg={COLORS.bg.branco} justifyContent="center" p={10} rounded={10} shadow="sm">
                        
                        <Flex>
                            <Table.Root variant="line" fontSize={13}>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.ColumnHeader>#</Table.ColumnHeader>
                                    <Table.ColumnHeader>ID. COTAÇÃO</Table.ColumnHeader>
                                    <Table.ColumnHeader>ESTADO</Table.ColumnHeader>
                                    <Table.ColumnHeader>VALOR TOTAL</Table.ColumnHeader>
                                    <Table.ColumnHeader>QUANTIDADE</Table.ColumnHeader>
                                    <Table.ColumnHeader>GERADO</Table.ColumnHeader>
                                    <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {data.mensagem.map((item: any) => (
                                    <Table.Row key={item.pedidoCotacaoId}>
                                        <Table.Cell>{item.pedidoCotacaoId}</Table.Cell>
                                        <Table.Cell fontWeight={700}>{item.numero_cotacao}</Table.Cell>
                                        <Table.Cell>
                                            <Tag.Root size="lg" colorPalette={changeTextForColor(item.statusPedido)}>
                                                <Tag.Label>{item.statusPedido}</Tag.Label>
                                            </Tag.Root>
                                        </Table.Cell>
                                        <Table.Cell>{Intl.NumberFormat("PT-br").format(item.valorTotal)} AKZ</Table.Cell>
                                        <Table.Cell>{item.quantidade}</Table.Cell>
                                        <Table.Cell>{new Date(item.dataCriacao).toLocaleString()}</Table.Cell>
                                        <Table.Cell>
                                            <Detalhes data={item}/>
                                            <Editar data={item}/>
                                            <Exclusao data={item}/>
                                        </Table.Cell>
                                    </Table.Row>
                                    ))}
                                </Table.Body>
                                <Table.Caption mt={5}>
                                    <Paginations getNewDatas={getNewDatas} data={data} />
                                </Table.Caption>
                            </Table.Root>
                        </Flex>
                        
                    </Box>
                :
                    <Manufacturing />
            }
            
            </Container>
        </Flex>
    </Box>
  )
}

export default Pedidos
