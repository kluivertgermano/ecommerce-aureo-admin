import { Box, Center, Container, createListCollection, Flex, HStack, IconButton, Link, Portal, Select, Skeleton, Table, Tag, Text } from '@chakra-ui/react'
import {COLORS, reloadPage} from '../../helpers'
import { LuRefreshCcw, LuSearch } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { FaFileAlt, FaFileContract, FaPlug, FaPlus } from 'react-icons/fa'
import { FaMoneyBillTransfer, FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus } from 'react-icons/fa6'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import useSWR from 'swr'
import { Alerta } from '../../components/status'
import { Detalhes, Editar, Exclusao, Gerar, Pesquisar, Relatorios } from './components'

function Referencias() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState("")

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)

    return data
    }

    const { data, error, isLoading }: ResponseSWR = useSWR(`/referencias/entidade/${BaseInfo.entidade}?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)
    
    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/relatorios/entidade/${BaseInfo.entidade}/tipo/referencias?limite=15`, fetcher)

    const getNewDatas = (status:any): void => {
        setPagina(status.page)
    }

    const changeLengthDatas = (status:any): void => {
        setLimite(status.value[0])
    }

    const changeTextForImage = (text: string) => {
        if(text == "Activo")
            return <FaPlugCircleCheck size={20} color='green' />
        else if(text == "Inactivo")
            return <FaPlugCircleMinus size={20} color='red' />
        else if(text == "Á processar")
            return <FaPlugCircleBolt size={20} color='blue' />
        else if(text == "Expirada")
            return <FaPlugCircleExclamation size={20} color='orange' />
        else return text
    }

    const changeTextForImageAlt = (text: string) => {
        if(text == "true")
            return <FaPlug size={20} color='black' />
        else if(text == "false")
            return <FaPlug size={20} color='gray' />
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
                <Title title="Referências" description="Gerencia suas referencias para que seus clientes possam fazer pagamentos" />

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
                        <Relatorios data={dados} error={erro} isLoading={carregar} />
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
            <Box mt={5} bg={COLORS.bg.branco} justifyContent="center" p={10} rounded={10} shadow="md">
                
                <Flex>
                    <Table.Root variant="line">
                        <Table.Header>
                            <Table.Row>
                            <Table.ColumnHeader>REFERÊNCIA</Table.ColumnHeader>
                            <Table.ColumnHeader>ESTADO</Table.ColumnHeader>
                            <Table.ColumnHeader>TIPO PRODUTO</Table.ColumnHeader>
                            <Table.ColumnHeader>EXPIRAÇÃO</Table.ColumnHeader>
                            <Table.ColumnHeader>USADO</Table.ColumnHeader>
                            <Table.ColumnHeader>GERADO</Table.ColumnHeader>
                            <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.mensagem.map((item: any) => (
                            <Table.Row key={item.id_referencia}>
                                <Table.Cell>{item.num_referencia}</Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="sm" colorPalette={"green"}>
                                        <Tag.Label>{changeTextForImage(item.estado_atm)}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>{item.produto}</Table.Cell>
                                <Table.Cell>{new Date(item.data_limite_pagamento).toLocaleDateString()}</Table.Cell>
                                <Table.Cell>{changeTextForImageAlt(item.usabilidade)}</Table.Cell>
                                <Table.Cell>{new Date(item.criada_r).toLocaleString()}</Table.Cell>
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

                <Flex mt={5}>
                    <Box color={COLORS.cinza} bg={COLORS.preto} rounded={10} p={5}>
                        <Text fontSize={14} color={COLORS.cinza}>Referências geradas</Text>
                        <Flex fontWeight={500} color={COLORS.bg.branco} fontSize={40} alignItems="center"><FaFileContract color={COLORS.amarelo} /> 146</Flex>
                        <Link fontSize={14} color={COLORS.bg.branco}>Visualizar Todas</Link>
                    </Box>
                    <Box shadow="md" ml={5} bg={COLORS.bg.branco} rounded={10} p={5}>
                        <Text fontSize={14} color={COLORS.cinza}>Referências usadas</Text>
                        <Flex fontWeight={500} fontSize={40} alignItems="center"><FaMoneyBillTransfer /> 146</Flex>
                        <Link fontSize={14}>Visualizar Todas</Link>
                    </Box>
                </Flex>
            </Box>
            }
            
            </Container>
        </Flex>
    </Box>
  )
}

export default Referencias
