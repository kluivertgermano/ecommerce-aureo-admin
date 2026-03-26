import { Avatar, AvatarGroup, Box, Button, Center, Container, createListCollection, Flex, Heading, HStack, IconButton, Input, Portal, RadioGroup, Select, Skeleton, Table, Tabs, Tag, Text } from '@chakra-ui/react'
import {COLORS, FONT, reloadPage} from '../../helpers'
import { LuEyeClosed, LuRefreshCcw, LuSearch, LuSquareCheck, LuUser } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { FaFileAlt } from 'react-icons/fa'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import useSWR from 'swr'
import type { ResponseSWR } from '../../types/responseAPI'
import { Alerta } from '../../components/status'
import { Detalhes, Pesquisar, Relatorios } from './components'
import USERIMG from "../../assets/images/paineis/user.png"
import { Manufacturing } from '../../components/status'

function RelatoriosBussiness() {

    const [limite, setLimite] = useState(10)
    const [pagina, setPagina] = useState(1)
    const [mesclar, setMesclar] = useState(`produtos`)
    const [filtragem, setFiltragem] = useState("")

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)

    return data
    }

    const { data, error, isLoading }: ResponseSWR = useSWR(`${mesclar}?pagina=${pagina}&limite=${limite}&${filtragem}`, fetcher)

    const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/produtos?limite=15`, fetcher)
        

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
    

  return (
    <Box bg={COLORS.bg.cinzaPage} minHeight="100vh">
        <Header/>
        <Flex>
            <SideBar/>
            <Container mt={10} mb={5} width={["85%"]}>
            <Title title="Relatórios e Business Intelligence" description="Gerencie e actualize os seus dados" />
            
                
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
                false ? 
                    <Box mt={5} bg={COLORS.bg.branco} p={10} rounded={10} shadow="sm">
                        

                            <Tabs.Root defaultValue="members" orientation='vertical'>
                                <Tabs.List width={["auto", 200]}>
                                    <Tabs.Trigger value="members">
                                    <LuUser />
                                    Cotação
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="projects">
                                    <LuEyeClosed />
                                    Facturas
                                    </Tabs.Trigger>
                                    <Tabs.Trigger value="tasks">
                                    <LuSquareCheck />
                                    Movimentos
                                    </Tabs.Trigger>
                                </Tabs.List>

                                <Tabs.Content value="members">
                                    <Container mt={10} px={[20,200]}  display="flex" flexDirection="column" justifyContent="center">
                                        <Flex>
                                            <Input type='text' placeholder='Cliente ou Empresa' rounded={10} p={[5,7]} mb={[7]} />
                                            <Input type='text' ml={4} placeholder='NIF' rounded={10} p={[5,7]} mb={[7]} />
                                        </Flex>
                                        <Flex>
                                            <Input type='email' placeholder='Email' rounded={10} p={[5,7]} mb={[7]} />
                                            <Input type='tel' ml={4} placeholder='Telefone' rounded={10} p={[5,7]} mb={[7]} />
                                            <Input type='tel' ml={4} placeholder='Telefone Opcional' rounded={10} p={[5,7]} mb={[7]} />
                                        </Flex>
                                        <Flex>
                                            <Input type='password' placeholder='Sua senha' rounded={10} p={[5,7]} mb={[7]} />
                                            <Input type='password' ml={4} placeholder='Repita sua senha' rounded={10} p={[5,7]} mb={[7]} />
                                        </Flex>
                                        <Flex>
                                            <Input type='text' placeholder='Endereço' rounded={10} p={[5,7]} mb={[7]} />
                                        </Flex>
                                        <Button mb={5} w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Inscrever - se </Button>
                                    </Container>
                                </Tabs.Content>

                                <Tabs.Content value="projects">
                                    <Flex direction="column" justifyContent="space-between">
                                        <Container mt={10} px={[20,200,400]}  display="flex" flexDirection="column" justifyContent="center">
                                
                                            <Box>
                                                <Input type='password' placeholder='Senha actual' rounded={10} p={[5,7]} mb={[7]} />
                                                <Input type='password' placeholder='Senha nova' rounded={10} p={[5,7]} mb={[7]} />
                                                <Input type='password' placeholder='Repita a senha nova' rounded={10} p={[5,7]} />
                                            </Box>
                                
                                            <Box mt={5}>
                                                <Button mb={5} w="full" fontSize={FONT.normal} p={[5,7]} rounded={10} bg={COLORS.amarelo} color={COLORS.preto}>Entrar</Button>
                                            </Box>
                                        </Container>
                                    </Flex>
                                </Tabs.Content>

                                <Tabs.Content color={COLORS.cinza} value="tasks">
                                    <Text p={2}><b>Business parter ID</b> SNL-001</Text>
                                    <Text p={2}><b>Referência multicaixa</b> 001293393</Text>
                                    <Text p={2}><b>Saldo</b> {Intl.NumberFormat("PT-br").format(2455045.96)}</Text>
                                </Tabs.Content>
                            </Tabs.Root>
                        
                    </Box>                
                :
                    <Manufacturing />
            }
            </Container>
        </Flex>
    </Box>
  )
}

export default RelatoriosBussiness
