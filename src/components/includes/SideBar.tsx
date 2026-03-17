import { Box, Flex,For,Stack,Text, VStack } from '@chakra-ui/react'
import {COLORS} from '../../helpers'
import { NavLink } from 'react-router'
import { AiOutlineDashboard } from 'react-icons/ai'
import { LuBox, LuMapPinHouse } from 'react-icons/lu'
import { FaOpencart, FaRegCreditCard, FaRegUser } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { TbLockPassword } from "react-icons/tb";

function SideBar() {

  return (
    <Stack gap="4" p={0} >
      <For
        each={listMenu}
        fallback={
          <VStack textAlign="center" fontWeight="medium">
            <LuBox />
            Sem itens para mostrar
          </VStack>
        }
      >
        {(item, index) => (
          <NavLink to={item.link}>
            {({isActive}) => 
            <Flex my={-2} px={3} borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`} color={isActive ? COLORS.branco : null } bg={isActive ? COLORS.bg.pretoBaco : null } fontWeight={500} _hover={{color:COLORS.amarelo}} py={3} justifyContent={"space-between"} alignItems={"center"}>
              <Text>{item.texto}</Text>
              {item.icone}
            </Flex>}
          </NavLink>
        )}
      </For>
    </Stack>
  )
}

const listMenu = [
  {
    texto:"Painel",
    link:"/conta-painel",
    icone: <AiOutlineDashboard size={24} />
  },
  {
    texto:"Pedidos",
    link:"/conta-pedidos",
    icone: <FaOpencart size={24} />
  },
  {
    texto:"Endereços",
    link:"/conta-enderecos",
    icone: <LuMapPinHouse size={24} />
  },
  {
    texto:"Metodo de pagamento",
    link:"/conta-metodos-pagamento",
    icone: <FaRegCreditCard size={24} />
  },
  {
    texto:"Detalhes da conta",
    link:"/conta-detalhes",
    icone: <FaRegUser size={24} />
  },
  {
    texto:"Mudar a senha",
    link:"/conta-senha",
    icone: <TbLockPassword size={24} />
  },
  {
    texto:"Sair",
    link:"/login",
    icone: <BiLogOut size={24} />
  }
]

export default SideBar
