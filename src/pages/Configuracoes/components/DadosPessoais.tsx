import {Box, Text} from '@chakra-ui/react'
import { useStoreEntidadeAllData } from '../../../stores'

function DadosPessoais() {

  const {entidadeData} = useStoreEntidadeAllData()


  return (

        <Box>
            <Text p={2}><b>Business parter ID</b> {entidadeData?.businessPartnerId}</Text>
            <Text p={2}><b>Referência multicaixa</b> {entidadeData?.referenciaEMIS || "Por gerar"}</Text>
            <Text p={2}><b>Saldo</b> {Intl.NumberFormat("PT-br").format(2455045.96)} AKZ</Text>
        </Box>
  )
}

export default DadosPessoais
