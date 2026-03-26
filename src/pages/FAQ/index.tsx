import { Avatar, AvatarGroup, Box, Button, Center, Checkbox, Container, createListCollection, Flex, Heading, HStack, IconButton, Input, Portal, RadioGroup, Select, Skeleton, Switch, Table, Tabs, Tag, Text } from '@chakra-ui/react'
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
import { FaLocationArrow } from 'react-icons/fa6'

function SuportePosVenda() {

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
            <Title title="FAQ" description="FAQ – Perguntas Frequentes | Venda de Gás" />
            
                
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
                <Box mt={5} bg={COLORS.bg.branco} p={10} rounded={10} shadow="sm">
                    
                    <Box>
                        <Heading>Quais são os tipos de botijão de gás que vocês vendem?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Vendemos botijões de 13kg (doméstico), 20kg e 45kg (uso comercial ou industrial). Também trabalhamos com gás encanado em algumas regiões.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Qual é o prazo de entrega do gás?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Entregamos em até [coloque o tempo estimado, ex: 30 minutos a 1 hora] após a confirmação do pedido, de segunda a sábado, das [horário de funcionamento].</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Posso agendar a entrega do gás?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Sim! Você pode agendar a entrega para o horário mais conveniente no momento do pedido, pelo nosso site, aplicativo ou telefone.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Vocês instalam o botijão de gás?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Sim. Nossos entregadores são treinados para fazer a instalação com segurança e verificar se está tudo certo antes de sair.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Como posso pagar pelo gás?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Aceitamos pagamento em dinheiro, cartão de crédito/débito, PIX e pagamento via app. Confirme as formas de pagamento no momento do pedido.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>O que é a taxa de vasilhame?</Heading>
                        <Text fontSize={15} color={"gray.500"}>É o valor cobrado quando você não tem um botijão vazio para troca. Esse valor cobre o custo do recipiente (botijão) e é cobrado uma única vez.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Como saber se meu botijão está acabando?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Alguns sinais são: o fogo do fogão fica fraco, demora para acender ou você sente o cheiro de gás. Também é possível pesar o botijão para verificar quanto gás ainda resta.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>É seguro usar gás de cozinha?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Sim, desde que instalado corretamente e usado com atenção. Mantenha o botijão em local ventilado, verifique mangueira e válvula regularmente, e nunca deite o botijão.</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Vocês fazem entregas emergenciais?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Sim, temos atendimento emergencial em horários especiais (consulte disponibilidade na sua região). Ligue para nosso plantão pelo número: [número do plantão].</Text>
                    </Box>
                    <Box mt={5}>
                        <Heading>Como posso entrar em contato com vocês?</Heading>
                        <Text fontSize={15} color={"gray.500"}>Você pode nos chamar pelo WhatsApp [número], telefone [número], ou pelo chat aqui no site. Também estamos no aplicativo [nome do app, se tiver].</Text>
                    </Box>
                    
                </Box>
                }
            </Container>
        </Flex>
    </Box>
  )
}

export default SuportePosVenda
