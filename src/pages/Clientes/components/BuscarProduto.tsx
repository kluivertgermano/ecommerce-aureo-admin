"use client"

import { Box,  Button,  CloseButton, Drawer, Field, Flex, Heading, HStack, IconButton, Image, Input, Portal, RadioGroup, Stack, Text} from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import { LuSearch } from "react-icons/lu"
import MULTICAIXA_EXPRESS from '../../../assets/images/Icones/EXPRESS.png'
import MULTICAIXA from '../../../assets/images/Icones/MULTICAIXA.png'
import INTERNET_BANK from '../../../assets/images/Icones/BANK.png'
import { useFormik } from 'formik';
import { Toaster, toaster } from "../../../components/ui/toaster"
import IMGLEVITA from "../../../assets/images/produtos/levita.png"
import type { ResponseSWR } from "../../../types/responseAPI"
import useSWR from "swr"
import { RequestAPI } from "../../../config"
import { Paginations } from "../../../components/includes"

const PesquisarTransacional = ({setProduto}:any) => {
  const [open, setOpen] = useState(false)

  const [limite, setLimite] = useState(10)
  const [pagina, setPagina] = useState(1)
  const [mesclar, setMesclar] = useState("")

  const fetcher = async (url:string) =>{
  const {data} = await RequestAPI.get(url)

  return data
  }

  const getNewDatas = (status:any): void => {
        setPagina(status.page)
    }

  const { data, error, isLoading }: ResponseSWR = useSWR(`/produtos?pagina=${pagina}&limite=${limite}&${mesclar}`, fetcher)
  
  const { data:dados, error:erro, isLoading:carregar }: ResponseSWR = useSWR(`/produtos?limite=15`, fetcher)

    const formik = useFormik({
     initialValues: {
       descricao: '',
     },
     onSubmit: values => {
      

      try {
        let params = ""
        for (const index in values) {        
              params+=`${index}=${values[index]}&`
        }

        setMesclar(params);
        
        
      } catch (error) {
        toaster.create({
          title: "Erro".toUpperCase(),
          description: "Tivemos problema em entregar o resultado, tente de novo",
          type: "error",
        })
      }
     },
   });

  return (
    <Drawer.Root size="xl" open={open} placement={"start"} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} size="md" mr={1} bg={COLORS.amarelo} rounded={5}>
            <LuSearch />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Selecione seus produtos</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Box fontSize={16} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4">
                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Descrição do produto</Field.Label>
                        <Input name="descricao" type="text" onChange={formik.handleChange} value={formik.values.descricao} />
                      </Field.Root>
                    </Flex>
                  </Stack>
                <Flex mt={5}>
                  <Button bg={COLORS.amarelo} mb={10} type="submit" color={COLORS.preto} width={[150]} rounded={10}>Buscar</Button>
                </Flex>
                </form>

                <Flex mb={10} wrap={"wrap"} width={"100%"} flex={1} height={["auto",500]} overflowY={"scroll"} justifyContent={"initial"} alignItems={"stretch"}>
                
                    {!data?.mensagem && <Heading>{"Nenhum resultado encontrado"}</Heading>}
                    
                    {data?.mensagem.map((item: any) => (
                    
                      <Flex cursor={"pointer"} key={item.produtoId} onClick={() => setProduto(item)} width={["auto",230]} p={10} height={100} justifyContent="end" mr={5} _hover={{shadow:"lg"}} position={"relative"} mb={5} bg={COLORS.bg.branco} alignItems={"center"}  rounded={10} shadow="sm">
                        <Box>
                            <Heading size={"sm"}>{item?.descricao}</Heading>
                            <Text fontSize={12} color={"green.700"}>{Intl.NumberFormat("PT-br").format(item?.preco)} AKZ</Text>
                        </Box>
                        <Box ml={10} flex={1} justifySelf={"end"}>
                            <Image width={["auto",10]} src={IMGLEVITA} />
                        </Box>
                      </Flex>
                    
                    ))}
                </Flex>
                    <Paginations getNewDatas={getNewDatas} data={data} />
              </Box>

              <Toaster />

              <Box bg={COLORS.amarelo} w={"70%"} padding={2} roundedTop={20} position={"absolute"} left="15%" bottom={0}></Box>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}


export default PesquisarTransacional