import { Text, Box, Flex, Span, For, Stack, VStack, Table, IconButton, Tag } from '@chakra-ui/react'

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
            <Table.ScrollArea>
              <Table.Root size="sm">
                <Table.Header>
                  <Table.Row bg={COLORS.bg.cinzaPage}>
                    <Table.ColumnHeader p={3}>Pedido</Table.ColumnHeader>
                    <Table.ColumnHeader p={3}>Data</Table.ColumnHeader>
                    <Table.ColumnHeader p={3}>Status</Table.ColumnHeader>
                    <Table.ColumnHeader p={3} textAlign="end">Price</Table.ColumnHeader>
                    <Table.ColumnHeader p={3}>Acções</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {items.map((item) => (
                    <Table.Row  key={item.id}>
                      <Table.Cell>#{item.id}</Table.Cell>
                      <Table.Cell>{item.date}</Table.Cell>
                      <Table.Cell>
                        <Tag.Root rounded={"full"} variant={"solid"} size="md" colorPalette={item.sts}>
                            <Tag.Label p={1}>{item.status}</Tag.Label>
                        </Tag.Root>
                      </Table.Cell>
                      <Table.Cell textAlign="end">{Intl.NumberFormat("PT-br").format(item.price)}</Table.Cell>
                      <Table.Cell>
                        <IconButton aria-label="Call support" size={"sm"} rounded="full" mb={[3,0]}  ml={[0,1]} bg={COLORS.azul} color={COLORS.branco} borderColor={COLORS.bg.cinzaPage}  variant={"outline"}>
                          <MdSearch/>
                        </IconButton>
                        <IconButton rounded="full" mb={[3,0]} size={"sm"} ml={[0,1]} bg={COLORS.vermelho} color={COLORS.branco} borderColor={COLORS.bg.cinzaPage} variant={"outline"}>
                          <MdCancel/>
                        </IconButton>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>
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
