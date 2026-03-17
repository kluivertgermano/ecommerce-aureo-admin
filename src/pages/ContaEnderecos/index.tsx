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
          <Box flex={1} ml={[0,10]} p={[0,0]} color={COLORS.cinza} fontWeight={400}>
            <Text color={COLORS.bg.pretoBaco}>Os seguintes endereços serão usados ​​na página de check-uot por padrão.</Text>
            <Flex mt={5} justifyContent={"space-between"}>
              <Box>
                <Heading mb={5} color={COLORS.bg.pretoBaco}>Endereços de cobrança</Heading>
                  <Text>Madison Riiz</Text>
                  <Text>123 Happy Street</Text>
                  <Text>Cidade do Cabo</Text>
                  <Text>Cabo Ocidental</Text>
                  <Text>8001</Text>
                  <Text>África do Sul</Text>
              </Box>
              <Box>
                <Heading mb={5} color={COLORS.bg.pretoBaco}>Endereços de envio</Heading>
                  <Text>Madison Riiz</Text>
                  <Text>123 Happy Street</Text>
                  <Text>Cidade do Cabo</Text>
                  <Text>Cabo Ocidental</Text>
                  <Text>8001</Text>
                  <Text>África do Sul</Text>
              </Box>
            </Flex>
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
