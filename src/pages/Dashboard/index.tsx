import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import {COLORS} from '../../helpers'
import { Header, SideBar, Title } from '../../components/includes'
import { Cards, Grafico, TabelaMensal, Transacao } from './components'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import useSWR from 'swr'

function Dashboard() {

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)
        return data
    }
    
    const { data, error, isLoading } : ResponseSWR = useSWR(`/dashboard/entidade/${BaseInfo.entidade}`, fetcher)

  return (
    <Box bg={COLORS.bg.cinzaPage} minHeight="100vh">

        <Header/>

        <Flex>
            <SideBar/>
            <Container mt={10} mb={5} width={["90%"]}>

                <Title title="Dashboard" description="Tenha uma visão simplificada do que acontece em suas finanças"/>
                <Cards datas={{data, error, isLoading}}/>
                <Flex mt={5}>
                    <Grafico datas={{data, error, isLoading}}/>
                    <TabelaMensal datas={{data, error, isLoading}}/>
                </Flex>    
                      
                <Transacao datas={{data, error, isLoading}}/>
            </Container>
        </Flex>
    </Box>
  )
}

export default Dashboard
