"use client"

import { Box,  Button,  Center,  CloseButton, Drawer, Field, Flex, Heading, HStack, IconButton, Image, Input, Link, Portal, RadioGroup, Skeleton, Stack, Table, Tag} from "@chakra-ui/react"
import { useState } from "react"
import { COLORS } from "../../../helpers"
import MULTICAIXA_EXPRESS from '../../../assets/images/Icones/EXPRESS.png'
import MULTICAIXA from '../../../assets/images/Icones/MULTICAIXA.png'
import INTERNET_BANK from '../../../assets/images/Icones/BANK.png'
import { useFormik } from 'formik';
import { FaFileAlt } from "react-icons/fa"
import type { Relatorios } from "../../../types/components"
import { FaDownload } from "react-icons/fa6"
import { BaseInfo, RequestAPI } from "../../../config"
import { Alerta } from "../../../components/status"
import { toaster } from "../../../components/ui/toaster"

const RelatoriosTransacional = ({data, error, isLoading}:Relatorios) => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)

  const formik = useFormik({
    initialValues: {
      periodo: '',
      montante: '',
      data_final: new Date().toJSON().substring(0,10),
      data_inicio: new Date().toJSON().substring(0,10)
    },
    onSubmit: async values => {
      setLoad(true)
      try{
      const response = await RequestAPI.post("relatorios",{
        entidade: BaseInfo.entidade,
        tipo: "Periodos",
        campos: values
      })

        if(response.data.status == BaseInfo.statusAPI.sucesso){
          toaster.create({
            title: response.data.status.toUpperCase(),
            description: response.data.mensagem,
            type: "success",
          })
        }

        if(response.data.status == BaseInfo.statusAPI.erro){
          toaster.create({
            title: response.data.status.toUpperCase(),
            description: response.data.mensagem,
            type: "error",
          })
        }
      setLoad(false)
      
      }catch(error: any){
        toaster.create({
          title: error?.response.data.status.toUpperCase(),
          description: error?.response.data.mensagem,
          type: "error",
        })
        setLoad(false)
      }
      
    },
  });

  return (
    <Drawer.Root size="xl" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} ml={3} size="md" bg={COLORS.vermelho} rounded={5}>
            <FaFileAlt /> Relatórios
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.preto} color={COLORS.bg.branco} borderBottom={`2px solid ${COLORS.amarelo}`} >
              <Drawer.Title fontWeight={300}>Gerar relatórios de periodos contabilistico</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Flex justifyContent="space-between">
                <Box fontSize={16} width={["lg"]} fontWeight={300}>
                  <form onSubmit={formik.handleSubmit} method="POST">
                    <Stack gap="4">
                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Montante</Field.Label>
                        <Input name="montante" type="text" onChange={formik.handleChange} value={formik.values.montante} />
                      </Field.Root>
                      
                      <Field.Root ml={4} width="100%">
                        <Field.Label>Periodo</Field.Label>
                        <Input name="periodo" type="text" onChange={formik.handleChange} value={formik.values.periodo} />
                      </Field.Root>
                    </Flex>
                      <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Inicio</Field.Label>
                          <Input required name="data_inicio" type="date" onChange={formik.handleChange} value={formik.values.data_inicio} />
                        </Field.Root>

                        <Field.Root ml={4}width="100%">
                          <Field.Label>Final</Field.Label>
                          <Input required name="data_final" type="date" onChange={formik.handleChange} value={formik.values.data_final} />
                        </Field.Root>
                      </Flex>

                      <Field.Root mt={3}>
                        <Field.Label>Terminal</Field.Label>
                        <RadioGroup.Root defaultValue="" name="terminal" onChange={formik.handleChange} value={formik.values.terminal}>
                        
                      </RadioGroup.Root>
                      </Field.Root>

                    </Stack>
                  <Flex mt={10}>
                    <Button bg={COLORS.amarelo} loading={load}  type="submit" color={COLORS.preto} width={[150]} rounded={10}>Gerar</Button>
                  </Flex>
                  </form>
                </Box>
                {error ? 
                  <Center ml={3}>
                      <Alerta title='Erro de comunicação' description='Não conseguimos carregar suas informações, por favor recarregue a pagina!' status='error'/>
                  </Center>
                : isLoading ? 
                
                      <>
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                        <Skeleton mt={5} height={30}/> 
                      </>
                  :
                  <Flex alignItems="start" justifyContent="center" ml={5}>                                
                        <Table.Root variant="outline" rounded={10}>
                            <Table.Header>
                                <Table.Row bg={COLORS.amarelo}>
                                <Table.ColumnHeader>Arquivo</Table.ColumnHeader>
                                <Table.ColumnHeader>Data</Table.ColumnHeader>
                                <Table.ColumnHeader>Download</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
        
                                <Table.Body>
                                    {data?.mensagem?.map((item:any) => (
                                    <Table.Row fontSize={12} key={item.id_relatorio}>
                                        <Table.Cell>{item.file_gerado}</Table.Cell>
                                        <Table.Cell>
                                            {new Date(item.gerado_quando).toLocaleDateString()}
                                        </Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Link cursor="pointer" href={`${BaseInfo.baseURL}reports/${item.file_gerado}`} download={true} p={1} bg={COLORS.cinza} rounded={5}>
                                                <FaDownload color={COLORS.branco} />
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                    ))}
                                </Table.Body>
                        </Table.Root>
                  </Flex>
                }
              </Flex>

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


export default RelatoriosTransacional