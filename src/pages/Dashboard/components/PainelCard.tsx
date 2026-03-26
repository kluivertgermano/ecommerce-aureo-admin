import { Box, Center, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'
import { COLORS } from '../../../helpers'
import { RiMoneyDollarCircleLine, RiUser2Fill } from 'react-icons/ri'
import { GiCancel, GiFishScales, GiLoad } from 'react-icons/gi'
import { ImCalculator } from 'react-icons/im'
import { MdProductionQuantityLimits } from 'react-icons/md'
import type { ResponseSWR } from '../../../types/responseAPI'
import { Alerta } from '../../../components/status'
import { PiInvoice, PiInvoiceFill } from 'react-icons/pi'
import { TbInvoice } from 'react-icons/tb'
import { GrRefresh, GrUpdate } from 'react-icons/gr'

function Slider({datas:{error, data, isLoading}}: ResponseSWR) {

  
  return (
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
        <Flex my={10} width={"100%"}>
            <Box width={"60%"}  bg={COLORS.bg.branco} p={5} borderLeft={"5px solid"} color={"purple.600"} shadow={"sm"} rounded={10}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Text fontSize={14} color={COLORS.cinza}>Total clientes</Text>
                        <Heading fontWeight={900} size={"4xl"}>{data?.mensagem?.cards?.numero_clientes}</Heading>
                    </Box>
                    <RiUser2Fill size={60} />
                </Flex>
                <Text color={COLORS.cinza} fontSize={10}>2.6% desde o primeiro mês</Text>
            </Box>
            <Box ml={5} width={"60%"}  bg={COLORS.bg.branco} p={5} borderLeft={"5px solid"} color={"green.600"} shadow={"sm"} rounded={10}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Text fontSize={14} color={COLORS.cinza}>Pedidos pendentes</Text>
                        <Heading fontWeight={900} size={"4xl"}>{data?.mensagem?.cards?.numero_pedidos_pendentes}</Heading>
                    </Box>
                    <GrUpdate  size={60} />
                </Flex>
                <Text color={COLORS.cinza} fontSize={10}>2.6% desde o primeiro mês</Text>
            </Box>
            <Box ml={5} width={"60%"}  bg={COLORS.bg.branco} p={5} borderLeft={"5px solid"} color={"blue.600"} shadow={"sm"} rounded={10}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Text fontSize={14} color={COLORS.cinza}>Facturas pagas</Text>
                        <Heading fontWeight={900} size={"4xl"}>{data?.mensagem?.cards?.facturas_pagas}</Heading>
                    </Box>
                    <TbInvoice size={60} />
                </Flex>
                <Text color={COLORS.cinza} fontSize={10}>2.6% desde o primeiro mês</Text>
            </Box>
            <Box ml={5} width={"60%"}  bg={COLORS.bg.branco} p={5} borderLeft={"5px solid"} color={"yellow.600"} shadow={"sm"} rounded={10}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Text fontSize={14} color={COLORS.cinza}>Produtos</Text>
                        <Heading fontWeight={900} size={"4xl"}>{data?.mensagem?.cards?.numero_produtos}</Heading>
                    </Box>
                    <MdProductionQuantityLimits size={60} />
                </Flex>
                <Text color={COLORS.cinza} fontSize={10}>2.6% desde o primeiro mês</Text>
            </Box>
        </Flex>
  )
}

export default Slider