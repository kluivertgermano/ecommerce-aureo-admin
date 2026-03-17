import { Box, Center, Flex, Heading, HStack, Skeleton, Text } from '@chakra-ui/react'
import { COLORS } from '../../../helpers'
import type { ResponseSWR } from '../../../types/responseAPI'
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsFileExcel, BsFileEarmarkBarGraph, BsFileMedical } from "react-icons/bs";
import { PiDotFill } from "react-icons/pi";
import { Alerta } from '../../../components/status'

function Cards({datas:{error, data, isLoading}}: ResponseSWR) {
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
            <HStack mt={10}>
                <Box bgGradient="to-r" gradientFrom="yellow.500" gradientTo="yellow.500" color={COLORS.branco} shadow="md" rounded={10} p={5} width={["25%"]}>
                    <Text>Transações do dia</Text>
                    <Flex alignItems="center" justifyContent="space-between">
                      <MdOutlineAttachMoney size={80} color={COLORS.branco} />
                      <Box>
                        <Heading display="flex" alignItems="center" fontSize={[14]} color={COLORS.preto} mt={3}>{data.mensagem.resumo.pagamentos_diario.movimentos || 0} <PiDotFill size={20}/> {new Date(data.mensagem.resumo.pagamentos_diario.data_hoje).toLocaleDateString()}</Heading>
                        <Heading fontSize={[40,30]} mt={1} mb={5}>AO {Intl.NumberFormat("PT-br").format(data.mensagem.resumo.pagamentos_diario.montante_diario)}</Heading>
                      </Box>
                    </Flex>
                </Box>
                <Box bgGradient="to-r" gradientFrom="yellow.500" gradientTo="red.500" color={COLORS.branco} shadow="md" rounded={10} p={5} width={["25%"]}>
                    <Text>Referências geradas</Text>
                    <Flex alignItems="center" justifyContent="space-between">
                      <BsFileMedical size={60} color={COLORS.branco} />
                      <Box>
                        <Heading fontSize={[13]} mt={3}>&nbsp;</Heading>
                        <Heading fontSize={[40,30]} mt={1} mb={5}>{data.mensagem.resumo.referencias_geradas}</Heading>
                      </Box>
                    </Flex>
                </Box>
                <Box bgGradient="to-r" gradientFrom="red.500" gradientTo="black" color={COLORS.branco} shadow="md" rounded={10} p={5} width={["25%"]}>
                    <Text>Referências inactivas</Text>
                    <Flex alignItems="center" justifyContent="space-between">
                      <BsFileExcel size={60} color={COLORS.branco} />
                      <Box>
                        <Heading fontSize={[13]} mt={3}>&nbsp;</Heading>
                        <Heading fontSize={[40,30]} mt={1} mb={5}>{data.mensagem.resumo.referencias_inactivas}</Heading>
                      </Box>
                    </Flex>
                </Box>
                <Box bgGradient="to-r" gradientFrom="black" gradientTo="gray" color={COLORS.branco} shadow="md" rounded={10} p={5} width={["25%"]}>
                    <Text>Periodo activo</Text>
                    <Flex alignItems="center" justifyContent="space-between">
                      <BsFileEarmarkBarGraph size={60} color={COLORS.branco} />
                      <Box>
                        <Heading fontSize={[14]} color={COLORS.branco} mt={3}>{data.mensagem.resumo.periodo_activo.periodo}</Heading>
                        <Heading fontSize={[40,30]} fontWeight={700} mb={5}>AO {Intl.NumberFormat("PT-br").format(data.mensagem.resumo.periodo_activo.montante)}</Heading>
                      </Box>
                    </Flex>
                </Box>
            </HStack>
  )
}

export default Cards