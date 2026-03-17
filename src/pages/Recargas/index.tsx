import { Box,  Flex,  Grid, GridItem, Heading, Image, Span, Text } from '@chakra-ui/react'
import MULTITEL from "../../assets/images/logos/MULTITEL.png"
import {COLORS, FONT} from '../../helpers'
import { Link, useNavigate } from 'react-router'
import { Detalhes } from './components'

function Recargas() {

  const navigate = useNavigate()
  const planos = Array(19).fill(
    {
      nome_plano:"Plano Start",
      megas: Math.ceil((Math.random() * 100) + 10)+" MB",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quam.",
      tragego:{
          download: "6MB",
          upload: "1MB",
      },
      montante: "AKZ 10.000,00"
    }
  )

  return (
    <Box height="100vh" bg={COLORS.bg.cinzaPage} p={5} display="flex" flexDirection="column" alignItems="center">
      <Flex p={10} justifyContent="space-between" alignItems="center" width="full">
        <Image textAlign="center" width={[200]} src={MULTITEL} />
        <Flex width={["xl"]} justifyContent="space-between" alignItems="center">
          <Link to={"/"}>Quem somos</Link>
          <Link to={"/"}>Produtos e Serviços</Link>
          <Link to={"/"}>Serviços ao Cliente</Link>
          <Link to={"/"}>Contatos</Link>
        </Flex>
      </Flex>
      <Heading textAlign="center" fontWeight={200} fontSize={40} p={5} color={COLORS.azul}>Obter <Span fontWeight={800}>Planos</Span></Heading>
        <Grid templateColumns="repeat(8, 1fr)" gapX="1"  width={[400, 1200, 1800]}  height={[400,700]} p={5} rounded={20} shadow="xl" bg={COLORS.bg.branco}>
            {
              planos.map((el) =>
              <GridItem mt={2} p={3} height={170} width={[200]} shadow="lg" color={COLORS.branco} bg={COLORS.azul} rounded={20}>
                <Text>{el.nome_plano}</Text>
                <Heading size="3xl" fontWeight={600}>{el.megas}</Heading>
                <Text fontSize={11}>{el.desc}</Text>
                <Detalhes data={el}/>
              </GridItem>)
            }          
        </Grid>
    </Box>
  )
}

export default Recargas