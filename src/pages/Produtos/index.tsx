import { Box, Center, Container, createListCollection, Flex, Heading, HStack, IconButton, Image, Link, Portal, Select, Skeleton, Table, Tag, Text } from '@chakra-ui/react'
import {COLORS, reloadPage} from '../../helpers'
import { LuRefreshCcw, LuSearch } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { FaDotCircle, FaFileAlt, FaFileContract, FaPlug, FaPlus } from 'react-icons/fa'
import { FaLocationArrow, FaMoneyBillTransfer, FaPlugCircleBolt, FaPlugCircleCheck, FaPlugCircleExclamation, FaPlugCircleMinus } from 'react-icons/fa6'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import useSWR from 'swr'
import { Alerta } from '../../components/status'
import IMGLEVITA from "../../assets/images/produtos/levita.png"
import { Detalhes, Gerar, Pesquisar, Editar, Exclusao } from '../Produtos/components'
import { useStoreEntidadeAllData } from '../../stores'

function Pedidos() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState("")
    const {entidadeData} = useStoreEntidadeAllData()

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url) 

    return data
    }

    const { data, error, isLoading }: ResponseSWR = useSWR(`/produtos/entidade/${entidadeData?.empresaId}?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)
    
    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/produtos/entidade/${entidadeData?.empresaId}?limite=15`, fetcher)
    const getNewDatas = (status:any): void => {
        setPagina(status.page)
    }

    const changeLengthDatas = (status:any): void => {
        setLimite(status.value[0])
    }

        const changeTextForColor = (text: string) => {
        if(text == "1")
            return 'green'
        else if(text == "0")
            return 'red'
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
            <Container mt={10} width={["85%"]}>
                <Title title="Produtos" description="Observe tudo em tempo real" />

                <HStack my={5} alignItems="center" justifyContent="space-between">
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
                        <IconButton ml={3} onClick={reloadPage} p={3} size="md" bg={COLORS.preto} rounded={5}>
                            <LuRefreshCcw /> Recarregar
                        </IconButton>
                        <Pesquisar setMesclar={setMesclar} loading={isLoading}/>
                    </Flex>
                    <Flex>
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
            <Box mt={5} >
                
                <Flex mt={5} bg={COLORS.bg.branco} justifyContent="center" p={10} rounded={10} shadow="sm"  mb={10} wrap={"wrap"} width={"100%"} flex={1} >

                    {!data.mensagem.produtos.length && <Heading>{"Nenhum resultado encontrado"}</Heading>}

                    <Table.Root variant="line" fontSize={13}>
                        <Table.Header>
                            <Table.Row>
                            <Table.ColumnHeader>#</Table.ColumnHeader>
                            <Table.ColumnHeader>IMAGEM</Table.ColumnHeader>
                            <Table.ColumnHeader>DESCRIÇÃO</Table.ColumnHeader>
                            <Table.ColumnHeader>ESTADO</Table.ColumnHeader>
                            <Table.ColumnHeader>PREÇO</Table.ColumnHeader>
                            <Table.ColumnHeader>GERADO</Table.ColumnHeader>
                            <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.mensagem.produtos.map((item: any) => (
                            <Table.Row key={item.produtoId}>
                                <Table.Cell>{item.produtoId}</Table.Cell>
                                <Table.Cell><Image width={["7%"]} src={IMGLEVITA} /></Table.Cell>
                                <Table.Cell fontWeight={700}>{item.descricao}</Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="lg" colorPalette={changeTextForColor(item.ativo)}>
                                        <Tag.Label>{item.ativo == 1 ? "Activo" : "Inactivo"}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>{Intl.NumberFormat("PT-br").format(item.preco)} AKZ</Table.Cell>
                                <Table.Cell>{new Date(item.produto_time).toLocaleString()}</Table.Cell>
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
            }
            
            </Container>
        </Flex>
    </Box>
  )
}

export default Pedidos
