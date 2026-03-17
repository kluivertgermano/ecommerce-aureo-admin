import { Box, Center, Skeleton } from '@chakra-ui/react'
import Chart from 'react-apexcharts'
import {COLORS} from '../../../helpers'
import type { ResponseSWR } from '../../../types/responseAPI'
import { Alerta } from '../../../components/status'

function Grafico({datas:{error, data, isLoading}}: ResponseSWR) {


  return (
    error ? 
        <Center width={["50%"]}>
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
      <Box width={["80%"]} mt={5} bg={COLORS.bg.branco} p={2} rounded={10} shadow="lg">
        
        <Chart options={{
            chart: {
            id: "basic-bar",
            stacked: true,
            //background:bg
            },
            xaxis: {
            categories: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
            },
            fill: {
            colors: [COLORS.amarelo]
            },
            stroke:{
            curve: "smooth",
            width:2,
            lineCap: "butt",
            colors:[COLORS.vermelho]
            }
        }} series={[
            {
                name:"Montante",
                data: data?.mensagem?.resumo?.dados_mensais?.soma
            }
        ]
        } type="area"  width="100%" height={400}/>
        
    </Box>
  )
}

export default Grafico
