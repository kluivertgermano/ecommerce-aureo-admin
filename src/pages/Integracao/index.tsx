import { Avatar, AvatarGroup, Box, Button, Center, Checkbox, Container, createListCollection, Flex, Heading, HStack, IconButton, Input, Portal, RadioGroup, Select, Skeleton, Switch, Table, Tabs, Tag, Text } from '@chakra-ui/react'
import {COLORS, FONT, reloadPage} from '../../helpers'
import { LuEyeClosed, LuRefreshCcw, LuSearch, LuSquareCheck, LuUser } from 'react-icons/lu'
import { Header, Paginations, SideBar, Title } from '../../components/includes'
import { FaFileAlt } from 'react-icons/fa'
import { useState } from 'react'
import { BaseInfo, RequestAPI } from '../../config'
import useSWR from 'swr'
import type { ResponseSWR } from '../../types/responseAPI'
import { Alerta, Manufacturing } from '../../components/status'
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
            <Title title="Integrações com serviços externos" description="Gerencie e actualize os seus dados" />
            
                
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
                <Box mt={5} bg={COLORS.bg.branco} p={10} rounded={10} shadow="sm"></Box>
                :
                <Manufacturing />
            }
            </Container>
        </Flex>
    </Box>
  )
}

export default SuportePosVenda
