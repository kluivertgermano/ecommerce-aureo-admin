import { Box, Center, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'
import SLIDER from '../../../assets/images/paineis/BANNER_OFICIAL 2.jpg'
import { BarSegment, useChart } from "@chakra-ui/charts"
import { COLORS } from '../../../helpers'
import type { ResponseSWR } from '../../../types/responseAPI'
import { Alerta } from '../../../components/status'

function Slider({datas:{error, data, isLoading}}: ResponseSWR) {

    const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Botija Levita", value: 450000, color: "green.solid" },
      { name: "Gás natural", value: 150000, color: "yellow.solid" },
      { name: "Residos", value: 300000, color: "orange.solid" },
      { name: "Outros", value: 175000, color: "purple.solid" },
    ],
  })
  
  return (
    <Flex my={10} width={"100%"}>
        <Box width={"60%"} height={["auto",300]} shadow={"sm"} rounded={10}>
            <Image src={SLIDER} width={"full"} height={["auto",300]} objectFit={"cover"} />
        </Box>
        {
            error ? 
                <Center mt={10}>
                    <Alerta title='Erro de comunicação' description='Não conseguimos carregar suas informações, por favor recarregue a pagina!' status='error'/>
                </Center>
                : isLoading ? 
                <>
                <Skeleton mt={5} height={30}/> 
                <Skeleton mt={5} height={30}/> 
                <Skeleton mt={5} height={30}/> 
                </>
                :
                <Box width={"40%"} ml={10} bg={COLORS.branco} p={5} rounded={10} shadow={"sm"}>
                <Flex direction={"column"}>
                    <Box mb={0}>
                        <Text mb={15} color={COLORS.cinza}>Vendas do mês actual</Text>
                    </Box>
                    <Box justifySelf={"self-end"}>
                        <Heading size={"4xl"}>{Intl.NumberFormat("PT-br").format(data?.mensagem.facturas_pagas_do_mes)} AKZ</Heading>
                        <BarSegment.Root chart={chart} barSize="3">
                            <BarSegment.Content>
                                <BarSegment.Bar gap="0.5" />
                            </BarSegment.Content>
                            <BarSegment.Legend gap="2" textStyle="xs" showPercent />
                        </BarSegment.Root>
                    </Box>
                </Flex>
                </Box>
        }
    </Flex>
  )
}

export default Slider