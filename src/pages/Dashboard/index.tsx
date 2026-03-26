import { Box, Container, Flex} from '@chakra-ui/react'
import {COLORS} from '../../helpers'
import { Header, SideBar } from '../../components/includes'
import { PainelCard, RecentesFacturas, RecentesTransacoes, SliderCarrossel} from './components'
import { BaseInfo, RequestAPI } from '../../config'
import type { ResponseSWR } from '../../types/responseAPI'
import useSWR from 'swr'
import { useStoreEntidadeAllData } from '../../stores'

function Dashboard() {
    
     const {entidadeData} = useStoreEntidadeAllData()

    const fetcher = async (url:string) =>{
    const {data} = await RequestAPI.get(url)
        return data
    }
    
    const { data, error, isLoading } : ResponseSWR = useSWR(`/dashboard/entidade/${entidadeData?.empresaId}`, fetcher)

  return (
    <Box bg={COLORS.bg.cinzaPage} minHeight="100vh">

        <Header/>

        <Flex>
            <SideBar/>
            <Container mb={5} width={["100%"]}>

                {/* <Title title="Dashboard" description="Tenha uma visão simplificada do que acontece em suas finanças"/> */}
                <SliderCarrossel datas={{data, error, isLoading}}/>
                <PainelCard datas={{data, error, isLoading}} />
                <RecentesTransacoes datas={{data, error, isLoading}} />

                {/* <Cards datas={{data, error, isLoading}}/>
                <Flex mt={5}>
                    <Grafico datas={{data, error, isLoading}}/>
                    <TabelaMensal datas={{data, error, isLoading}}/>
                </Flex> 
                <Transacao datas={{data, error, isLoading}}/> */}
            </Container>
        </Flex>
    </Box>
  )
}

export default Dashboard
