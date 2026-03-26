import { Box, Flex,Text } from '@chakra-ui/react'
import {COLORS} from '../../helpers'
import { FaCog, FaHandsHelping, FaTachometerAlt, FaUsersCog } from 'react-icons/fa'
import { GrTransaction } from 'react-icons/gr'
import { ImPriceTags } from "react-icons/im";
import { NavLink } from 'react-router'
import { PiPackageFill, PiUserSwitchBold } from 'react-icons/pi'
import { FaBusinessTime, FaFileInvoiceDollar } from 'react-icons/fa6'
import { GiSandsOfTime } from "react-icons/gi";
import { MdHelp, MdLocalShipping, MdOutlineSecurity, MdOutlineSystemUpdateAlt } from 'react-icons/md';
import DialogConfirm from './DialogConfirm';
import {useLogout} from '../../hook';
import { AiFillApi } from "react-icons/ai"; 
import { LiaUserSecretSolid } from "react-icons/lia";
import { HiServerStack } from "react-icons/hi2";
import { LuLogs } from 'react-icons/lu';

function SideBar() {
const logout = () => {  
     useLogout("1");
  }


  return (
    <Flex flex={1} minHeight={"100vh"} borderLeft={`5px solid ${COLORS.amarelo}`} borderRight={`1px solid ${COLORS.bg.cinzaBorda}`} bg={COLORS.azul}>
        {/* <Text color={COLORS.branco} mt={10}>Portal</Text> */}
        <Box px={3} borderRightWidth={1} borderStyle={"solid"} borderColor={COLORS.amarelo}>
          <Flex mt={5} justifyContent={"start"} direction={"column"}>
              <NavLink style={{marginBottom:8}} to="/configuracoes">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2}><FaCog color={isActive ? COLORS.amarelo : "null"} size={24}/></Flex>}</NavLink>
              <NavLink style={{marginBottom:8}} to="/ajuda">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2}><MdHelp color={isActive ? COLORS.amarelo : "null"} size={24}/></Flex>}</NavLink>
              <DialogConfirm title="Sessão de usuario" description="Tem a certeza que deseja terminar a sessão?" func={logout} />
          </Flex>
        </Box>
        <Flex px={3} direction={"column"} justifyContent={"space-between"}>
          <Box flex={1} mt={5} color={"gray"} fontSize={14}  display="flex" flexDirection="column">
              <NavLink to="/dashboard">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2}><FaTachometerAlt color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp; Dashboard</Flex>}</NavLink>
              <Text color={COLORS.branco} textTransform={"uppercase"} fontWeight={700} mt={5}>Gestão</Text>
              <NavLink to="/clientes">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><PiUserSwitchBold color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Clientes</Flex>}</NavLink>
              <NavLink to="/usuarios">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><FaUsersCog color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Usuarios</Flex>}</NavLink>
              <NavLink to="/acessos">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.preto} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><LiaUserSecretSolid color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Permissões</Flex>}</NavLink>
              <Text color={COLORS.branco} textTransform={"uppercase"} fontWeight={700} mt={5}>Serviço</Text>
              <NavLink to="/produtos">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><PiPackageFill color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Produtos</Flex>}</NavLink>
              <NavLink to="/pedidos">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><ImPriceTags color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Pedidos</Flex>}</NavLink>
              {/*<<NavLink to="/analise">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.azul : COLORS.branco} rounded={10} p={2} mt={2}><GiSandsOfTime color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Análise e Aprovação</Flex>}</NavLink>
              <NavLink to="/entrega">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.azul : COLORS.branco} rounded={10} p={2} mt={2}><MdLocalShipping  color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Expedição e Entrega</Flex>}</NavLink>
              Text color={COLORS.branco} textTransform={"uppercase"} fontWeight={700} mt={5}>Verificação</Text>
              <NavLink to="/suporte">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.azul : COLORS.branco} rounded={10} p={2} mt={2}><FaHandsHelping color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Suporte e Pós-Venda</Flex>}</NavLink>
              <NavLink to="/relatorios">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.azul : COLORS.branco} rounded={10} p={2} mt={2}><FaBusinessTime color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Relatórios e Business Intelligence</Flex>}</NavLink>
              */}
              <Text color={COLORS.branco} textTransform={"uppercase"} fontWeight={700} mt={5}>Contabilidade</Text>
              <NavLink to="/facturas">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><FaFileInvoiceDollar color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Faturação</Flex>}</NavLink>
              <NavLink to="/movimentos">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}} alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><GrTransaction color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Transações</Flex>}</NavLink>
              <Text color={COLORS.branco} textTransform={"uppercase"} fontWeight={700} mt={5}>Derivados</Text>
              <NavLink to="/integracoes">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><MdOutlineSystemUpdateAlt color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Integrações</Flex>}</NavLink>
              <NavLink to="/sessoes">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><MdOutlineSecurity color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Sessões</Flex>}</NavLink>
              <NavLink to="/api">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><AiFillApi color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  API</Flex>}</NavLink>
              {/*<NavLink to="/microservicos">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.azul : COLORS.branco} rounded={10} p={2} mt={2}><HiServerStack color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Microserviços</Flex>}</NavLink>
              */}
              <NavLink to="/actividades">{({isActive}) => <Flex _hover={{bg:COLORS.amarelo, color:"gray.700"}}  alignItems="center" bg={isActive ? COLORS.preto : COLORS.azul} color={isActive ? COLORS.amarelo : COLORS.branco} rounded={10} p={2} mt={2}><LuLogs color={isActive ? COLORS.amarelo : "null"} size={24}/>&nbsp;  Actividades</Flex>}</NavLink>
          </Box>          
        </Flex>

        {/*<Link color={COLORS.branco} position="absolute" left={[0]}><FaCog size={30}/> Definições</Link>*/}
    </Flex>
  )
}

export default SideBar
