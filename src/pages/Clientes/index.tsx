import { Avatar, AvatarGroup, Box, Center, Container, createListCollection, Flex, HStack, IconButton, Link, Portal, Select, Skeleton, Table, Tag, Text } from '@chakra-ui/react'
import {COLORS, reloadPage} from '../../helpers'
import { LuRefreshCcw } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import useSWR from 'swr'
import { Alerta } from '../../components/status'
import { Detalhes, Editar, Exclusao, Gerar, Pesquisar, Relatorios } from './components'
import { useStoreEntidadeAllData } from '../../stores'
import { TbLockCheck, TbLockX } from 'react-icons/tb'
import { PiIdentificationBadge } from 'react-icons/pi'
import { Toaster, toaster } from "../../components/ui/toaster"


function Clientes() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState("")
    const {entidadeData} = useStoreEntidadeAllData()
    const [load, setLoad] = useState(false)

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)

    return data
    }

    const { data, error, isLoading }: ResponseSWR = useSWR(`/clientes/entidade/${entidadeData?.empresaId}?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)
    
    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/relatorios/entidade/${entidadeData?.empresaId}/clienteId/${entidadeData?.clienteId}/tipo/Cotacoes?limite=15`, fetcher)

    const getNewDatas = (status:any): void => {
        setPagina(status.page)
    }

    const changeLengthDatas = (status:any): void => {
        setLimite(status.value[0])
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

    const changeTextDefault = (text: string) => {
        if(text == "0")
            return 'Activo'
        else if(text == "1")
            return 'Bloqueado'
        else if(text == "2")
            return 'Suspenso'
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

    const acessoSessao = async (data:any) => {
        setLoad(true)
        try {

          const uri = data.bloqueio == 0 ? `clientes/bloquear/${data.clienteId}` : `clientes/desbloquear/${data.clienteId}`
          
          const response = await RequestAPI.patch(uri)

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

    const acessoServico = async (data:any) => {
        setLoad(true)
        try {

          const estado = data.servico_principal == "true" ? `false` : `true`
          
          const response = await RequestAPI.patch(`configuracoes/principal/${data.clienteId}`,{estado})

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
    <Box bg={COLORS.bg.cinzaPage} minHeight="100vh">
        <Header/>
        <Flex>
            <SideBar/>
            <Container mt={10} mb={5} width={["85%"]}>
                <Title title="Clientes" description="Gere e observe tudo em tempo real" />

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
                        <Relatorios data={dados} error={erro} isLoading={carregar} usuario={entidadeData} />
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
            <Box mt={5} bg={COLORS.bg.branco} justifyContent="center" p={10} rounded={10} shadow="sm">
                
                <Flex>
                    <Table.Root variant="line" fontSize={13}>
                        <Table.Header>
                            <Table.Row>
                            <Table.ColumnHeader>#</Table.ColumnHeader>
                            <Table.ColumnHeader>LOGO</Table.ColumnHeader>
                            <Table.ColumnHeader>ESTADO</Table.ColumnHeader>
                            <Table.ColumnHeader>NOME CLIENTE</Table.ColumnHeader>
                            <Table.ColumnHeader>TERMINAL</Table.ColumnHeader>
                            <Table.ColumnHeader>GERADO</Table.ColumnHeader>
                            <Table.ColumnHeader>MAIS</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.mensagem.map((item: any) => (
                            <Table.Row key={item.clienteId}>
                                <Table.Cell>{item.clienteId}</Table.Cell>
                                <Table.Cell>
                                    <AvatarGroup size={"xl"}>
                                        <Avatar.Root>
                                            <Avatar.Fallback />
                                            <Avatar.Image src={`${BaseInfo.baseURL}images/${item?.fotoCliente}`} />
                                        </Avatar.Root>
                                    </AvatarGroup>
                                </Table.Cell>
                                <Table.Cell>
                                    <Tag.Root size="lg" colorPalette={changeTextForColor(item.bloqueio)}>
                                        <Tag.Label>{changeTextDefault(item.bloqueio)}</Tag.Label>
                                    </Tag.Root>
                                </Table.Cell>
                                <Table.Cell>{item.nomeCliente}</Table.Cell>
                                <Table.Cell>{item.telefoneCliente}</Table.Cell>
                                <Table.Cell>{new Date(item.criado_em).toLocaleString()}</Table.Cell>
                                <Table.Cell>
                                    <Detalhes data={item} func={[acessoSessao, acessoServico]} />
                                    <Editar data={item}/>
                                    <Exclusao data={item}/>
                                    <IconButton ml={[0,2]} onClick={() => acessoSessao(item)} p={3} size={"xs"} bg={item.bloqueio == 0 ? '#1B3B6F' : '#9EB3C2'} color={COLORS.branco} rounded={5}>
                                        {item.bloqueio == 0 ? <TbLockX /> : <TbLockCheck />}
                                    </IconButton>
                                    <IconButton ml={2} p={3} onClick={() => acessoServico(item)} size={"xs"} bg={item.servico_principal == "true" ? "#261C15" : "#BF8860"} color={COLORS.branco} rounded={5}>
                                        <PiIdentificationBadge />
                                    </IconButton>
                                </Table.Cell>
                            </Table.Row>
                            ))}
                        </Table.Body>
                        <Table.Caption mt={5}>
                            <Paginations getNewDatas={getNewDatas} data={data} />
                        </Table.Caption>
                    </Table.Root>
                    <Toaster />
                </Flex>
                
            </Box>
            }
            
            </Container>
        </Flex>
    </Box>
  )
}

export default Clientes
