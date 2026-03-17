import { Text, Box, Flex, Span, For, Stack, VStack } from '@chakra-ui/react'

import { Header, SideBar, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { AiOutlineDashboard } from "react-icons/ai";
import { Link, NavLink } from 'react-router'
import { LuBox } from 'react-icons/lu';

function Suporte() {
  return (
    <div>
    
      <Header/>
      <Title title='PAINEL' />
      <Flex  mt={[5,20]} px={[5,40]} justifyContent={"space-between"} direction={["column","row"]}>

          <Box width={["full",300,500]} mb={[5,0]} p={0}>
            <SideBar />
          </Box>
          <Box flex={1} ml={[0,10]} p={[0,0]} color={COLORS.cinza}>
            <Text mb={5}>Olá Kluivert Germano (não é Kluivert Germano? <Link to={"/login"}><Span color={"blue.500"}> Sair </Span></Link>)</Text>
            <Text mt={5}>No painel de controle da sua conta, você pode visualizar seus pedidos recentes, gerenciar seus endereços de entrega e cobrança, além de editar sua senha e os dados da sua conta.</Text>
          </Box>
      </Flex>
      <Footer />
    </div>
  )
}


export default Suporte
