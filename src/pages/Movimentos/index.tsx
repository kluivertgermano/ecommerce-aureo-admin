import { Box, Button, Center, Container, createListCollection, Flex, FormatNumber, Heading, HStack, IconButton, Link, Portal, Select, Skeleton, Table, Tag, Text } from '@chakra-ui/react'
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
import { MdPrint } from 'react-icons/md'
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

    const { data, error, isLoading }: ResponseSWR = useSWR(`/movimentos-financeiro/entidade/${entidadeData?.empresaId}/clienteId/${entidadeData?.clienteId}?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)
    
    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/movimentos-financeiro/entidade/${entidadeData?.empresaId}/clienteId/${entidadeData?.clienteId}?limite=15`, fetcher)

    const getNewDatas = (status:any): void => {
        setPagina(status.page)
    }

    const changeTextForColor = (text: string) => {
        if(text == "Entrada")
            return 'green'
        else if(text == "Saída")
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
                <Title title="Movimentos" description="Monitore suas entradas e saidas" />

                <HStack my={10} alignItems="center" justifyContent="space-between">
                    <Flex>
                        {/* <Select.Root onValueChange={changeLengthDatas} collection={frameworks} bg={COLORS.bg.branco} size="md" width={150}>
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
                        </Select.Root> */}
                        <IconButton onClick={reloadPage} p={3} size="md" bg={COLORS.preto} rounded={5}>
                            <LuRefreshCcw /> Recarregar
                        </IconButton>
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
                    <Box mt={5} >
                        <Flex px={0}>
                            <Box flex={1} borderLeft={`10px solid`} borderColor={"green.500"} mb={5} bg={"gray.900"} color={COLORS.branco} p={5} rounded={10} shadow="md">
                                <Text>Saldo disponivel</Text>
                                <Heading color={"green.500"} size={"4xl"}>15.000,00</Heading>
                            </Box>
                            <Box flex={1} ml={10} borderLeft={`10px solid`} borderColor={"yellow.500"} mb={5} bg={"gray.900"} color={COLORS.branco} p={5} rounded={10} shadow="md">
                                <Text>Total de entradas</Text>
                                <Heading color={"yellow.500"} size={"4xl"}>20.000,00</Heading>
                            </Box>
                            <Box flex={1} ml={10} borderLeft={`10px solid`} borderColor={"red.500"} mb={5} bg={"gray.900"} color={COLORS.branco} p={5} rounded={10} shadow="md">
                                <Text>Total de saidas</Text>
                                <Heading color={"red.500"} size={"4xl"}>5.000,00</Heading>
                            </Box>
                        </Flex>
                        <Flex justifyContent={"center"} alignItems={"center"} rounded={10} p={10} bg={COLORS.bg.branco} shadow={"sm"}>

                                <Table.Root variant="line" fontSize={13}>
                                    <Table.Header>
                                        <Table.Row>
                                        <Table.ColumnHeader>DATA</Table.ColumnHeader>
                                        <Table.ColumnHeader>OPERAÇÃO</Table.ColumnHeader>
                                        <Table.ColumnHeader>DESCRIÇÃO</Table.ColumnHeader>
                                        <Table.ColumnHeader>MONTANTE</Table.ColumnHeader>
                                        <Table.ColumnHeader>ACÇÃO</Table.ColumnHeader>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {data.mensagem.map((item: any) => (
                                        <Table.Row bg={""} key={item.movimentoFinanceiroId}>
                                            <Table.Cell>{new Date(item.dataMovimento).toLocaleDateString()}</Table.Cell>
                                            <Table.Cell><Text fontWeight={500} color={changeTextForColor(item.tipoMovimento)}>{item.tipoMovimento}</Text></Table.Cell>
                                            <Table.Cell>{item.descricao}</Table.Cell>
                                            <Table.Cell>
                                                {Intl.NumberFormat("PT-br").format(item.valor)}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Detalhes data={item} />
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
