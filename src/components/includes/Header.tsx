import { Image, List, Flex, Box, Text, HStack, Input, Button, Heading, Float, Span} from '@chakra-ui/react'
import LOGOCAT from '../../assets/images/logos/Captura de ecrã de 2026-03-15 04-37-37.png'
import { MenuMobile } from '../../components/includes'
import { COLORS } from '../../helpers'
import { LiaUserSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router';

function Header({scrollToSection, refs} : any) {

  return (
    /*<Flex position={"relative"} zIndex={2} width="100%" justifyContent={"space-between"} alignItems={"center"}>
            <Box position={"relative"} hideBelow={"sm"}><Image position={"relative"} width={[70]} src={LOGOCAT} alt="LOGO CMC"/></Box>
            <List.Root position={"relative"} hideBelow={"sm"} fontSize={18} rounded={50} verticalAlign={"middle"} p={[3]} bg={"rgba(255, 255, 255, 1)"} width={[356,400,600]} unstyled variant={"plain"} align={"center"} display={"flex"} justifyContent={"space-evenly"}>
              <List.Item cursor="pointer"><a onClick={() => scrollToSection(refs[0])}>Home</a></List.Item>
              <List.Item cursor="pointer"><a onClick={() => scrollToSection(refs[1])}>Serviços</a></List.Item>
              <List.Item cursor="pointer"><a onClick={() => scrollToSection(refs[2])}>Parceiros</a></List.Item>
              <List.Item cursor="pointer"><a onClick={() => scrollToSection(refs[3])}>Sobre nós</a></List.Item>
            </List.Root>
            <MenuMobile scrollToSection={scrollToSection} refs={refs} />
    </Flex>*/
    <>
      <Flex hideBelow={"lg"} bg={COLORS.amarelo} justifyContent={"space-between"} color={COLORS.preto} px={[20,40]} py={3}>
        <Text>Bem-vindo à nossa loja Aureo!</Text>
        <List.Root unstyled variant={"plain"} align={"center"} display={"flex"} justifyContent={"space-evenly"}>
            <List.Item as={Link} to="/sobre">Sobre</List.Item>
            <List.Item as={Link} to="/contacto" ml={5}>Contato</List.Item>
            {/*<List.Item as={Link} to="/faq" ml={5}>FAQs</List.Item> */}        
        </List.Root>
      </Flex>
      <Flex bg={COLORS.azul} direction={["column","row"]} alignItems={["center","flex-start"]} justifyContent={"space-between"} color={COLORS.amarelo} px={[20,40]} py={5}>
        <Image width={[200, 200]} mr={[0,5]} mb={[5,0]} src={LOGOCAT} />
        <Flex width={[350,900]}>
          <Input p={5} border={`3px solid ${COLORS.bg.pretoBaco}`} bg={COLORS.branco} rounded={0} m={0} type='search' placeholder='Pesquise o produto' />
          <Button p={5} border={`3px solid ${COLORS.bg.pretoBaco}`} bg={COLORS.bg.pretoBaco} rounded={0}>PESQUISAR</Button>
        </Flex>
        <Box textAlign={["center","left"]} my={[5,0]}>
          <Text>LIGA PARA NÓS</Text>
          <Heading>+244 934 489 103</Heading>
        </Box>
        <Flex justifyContent={"space-between"}>
          <Span to="/conta-painel" as={Link}><LiaUserSolid size={40} /></Span>
          <Box to="/carrinho" as={Link} ml={5} position="relative">
            <Float bg={COLORS.amarelo} color={COLORS.preto} rounded={100} width={6} height={6}>
              3
            </Float>
            <HiOutlineShoppingBag size={40} />
           </Box>
        </Flex>
      </Flex> 
      <Flex flex={1} textAlign={["center","left"]} bg={COLORS.branco} color={COLORS.preto} px={[10,40]} py={5}>
        <List.Root fontSize={[14,"auto"]} unstyled variant={"plain"} alignItems={["center","flex-start"]} display={"flex"} justifyContent={"space-between"}>
            <List.Item to="/" as={Link}>HOME</List.Item>
            <List.Item to="/loja" as={Link} ml={5}>LOJA</List.Item>
            <List.Item to="/carrinho" as={Link} ml={5}>CARRINHO</List.Item>
            <List.Item to="/login" as={Link} ml={5}>CONTA</List.Item>            
        </List.Root>
      </Flex>
    </>
  )
}

export default Header
