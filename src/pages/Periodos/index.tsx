import { Box, Center, Container, createListCollection, Flex, HStack, IconButton, Portal, RadioGroup, Select, Skeleton, Table, Tag } from '@chakra-ui/react'
import {COLORS, reloadPage} from '../../helpers'
import { LuRefreshCcw, LuSearch } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { FaFileAlt } from 'react-icons/fa'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import useSWR from 'swr'
import type { ResponseSWR } from '../../types/responseAPI'
import { Alerta } from '../../components/status'
import { Detalhes, Pesquisar, Relatorios } from './components'

function Periodos() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState(`periodos/entidade/${BaseInfo.entidade}/ver`)
    const [filtragem, setFiltragem] = useState("")

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)

    return data
    }

    const { data, error, isLoading }: ResponseSWR = useSWR(`${mesclar}?pagina=${pagina}&limite=${limite}&${filtragem}`, fetcher)

    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/relatorios/entidade/${BaseInfo.entidade}/tipo/periodos?limite=15`, fetcher)
        

      const getNewDatas = (status:any): void => {
            setPagina(status.page)
        }

        const changeLengthDatas = (status:any): void => {
            setLimite(status.value[0])
        }

        const changeValueRadio = (status:any): void => {
            setMesclar(status.value)
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

    const items = [
        { label: "Separado", value: `periodos/entidade/${BaseInfo.entidade}/ver` },
        { label: "Mesclado", value: `periodos/ver/mesclados/entidade/${BaseInfo.entidade}` },
    ]

  return (
    <Box bg={COLORS.bg.cinzaPage} minHeight="100vh">
        <Header/>
        <Flex>
            <SideBar/>
            <Container mt={10} mb={5} width={["85%"]}>
                <Title title="Periodos Contabilistico" description="Seus pagamentos são organizados em periodos para que possas fazer um balanço diario!" />

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
                        <IconButton p={3} ml={3} onClick={reloadPage} size="md" bg={COLORS.preto} rounded={5}>
                            <LuRefreshCcw /> Recarregar
                        </IconButton>
                    </Flex>
                    <Flex>
                        <Pesquisar loading={isLoading} setMesclar={setFiltragem}/>
                        <Relatorios data={dados} error={erro} isLoading={carregar} />
                    </Flex>
                </HStack>
                <RadioGroup.Root 
                    onValueChange={changeValueRadio}
                    size="lg"
                    colorPalette={"yellow"}
                    defaultValue={`periodos/entidade/${BaseInfo.entidade}/ver`}
                    spaceX="8" 
                    ml={3}
                    >
                    <HStack gap="6" alignContent="center" justifyContent="center">
                        {items.map((item) => (
                        <RadioGroup.Item key={item.value} value={item.value}>
                            <RadioGroup.ItemHiddenInput />
                            <RadioGroup.ItemIndicator />
                            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                        </RadioGroup.Item>
                        ))}
                    </HStack>
                </RadioGroup.Root>
        {error ? 
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
                <Flex mt={5} bg={COLORS.bg.branco} p={10} rounded={10} shadow="md">
                    <Table.Root variant="line">
                        <Table.Header>
                            <Table.Row>
                            <Table.ColumnHeader>MOVIMENTOS</Table.ColumnHeader>
                            <Table.ColumnHeader>MONTANTE</Table.ColumnHeader>
                            <Table.ColumnHeader>TARIFA SOMADA</Table.ColumnHeader>
                            <Table.ColumnHeader>PERIODO</Table.ColumnHeader>
                            <Table.ColumnHeader>TEMPO</Table.ColumnHeader>
                            <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.mensagem.map((item: any) => (
                            <Table.Row key={item.periodo}>
                                <Table.Cell>{item.quantidade}</Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="sm" colorPalette={"green"}>
                                        <Tag.Label fontSize={14} fontWeight={500}>AKZ {Intl.NumberFormat("PT-br").format(item.somatorio)}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="sm" colorPalette={"gray"}>
                                        <Tag.Label fontSize={14} fontWeight={500}>AKZ {Intl.NumberFormat("PT-br").format(item.tarifa_somada)}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>{item.periodo}</Table.Cell>
                                <Table.Cell>{new Date(item.data_periodo).toLocaleDateString()}</Table.Cell>
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

export default Periodos
