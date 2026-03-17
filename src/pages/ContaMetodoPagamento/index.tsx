import { Text, Box, Flex, Span, For, Stack, VStack, Table, IconButton, Tag, Heading } from '@chakra-ui/react'

import { Header, SideBar, Title } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { COLORS } from '../../helpers'
import { AiOutlineDashboard } from "react-icons/ai";
import { Link, NavLink } from 'react-router'
import { LuBox } from 'react-icons/lu';
import { MdCancel, MdSearch } from 'react-icons/md';

function Suporte() {
  return (
    <div>
    
      <Header/>
      <Title title='PAINEL' />
      <Flex  mt={[5,20]} px={[5,40]} direction={["column","row"]}>

          <Box width={["full",300,500]} mb={[5,0]}  p={0}>
            <SideBar />
          </Box>
          <Box flex={1} ml={[0,10]} p={[0,0]} color={COLORS.cinza}>
            <Heading textAlign={"center"}>Em desenvolvimento</Heading>
          </Box>
      </Flex>
      <Footer />
    </div>
  )
}

const items = [
  { id: 1, name: "Laptop", status: "Pendente", sts: "blue", price: 999.99, date:new Date().toLocaleDateString() },
  { id: 2, name: "Coffee Maker", status: "Pendente", sts: "blue", price: 49.99, date:new Date().toLocaleDateString() },
  { id: 3, name: "Desk Chair", status: "Fracassado", sts: "red", price: 150.0, date:new Date().toLocaleDateString() },
  { id: 4, name: "Smartphone", status: "Concluido" , sts: "green", price: 799.99, date:new Date().toLocaleDateString() },
  { id: 5, name: "Headphones", status: "Fracassado" , sts: "red", price: 199.99, date:new Date().toLocaleDateString() },
]


export default Suporte
