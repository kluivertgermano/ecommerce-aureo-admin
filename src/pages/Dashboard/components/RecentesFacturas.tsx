import { Box, Button, Link, Flex, Heading, IconButton, Image, Text, Timeline } from '@chakra-ui/react'
import React, { useState } from 'react'
import { COLORS } from '../../../helpers'
import { MdDownloading} from 'react-icons/md'
import { TbCreditCardPay, TbFileDownload } from 'react-icons/tb'
import { Chart, useChart } from "@chakra-ui/charts"
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts"
import { LuCheck, LuPackage, LuShip } from 'react-icons/lu'
import type { ResponseSWR } from '../../../types/responseAPI'
import { BaseInfo, RequestAPI } from '../../../config'
import { Toaster, toaster } from '../../../components/ui/toaster'
import { DialogConfirm } from '../../../components/includes'

function FacturasRecentes({datas:{error, data, isLoading}}: ResponseSWR) {

    const [load, setLoad] = useState(false)

    const factura = {
        ...data?.mensagem?.facturas_actividades?.ultima_factura_emitida
    }

    const facturaTotal = {
        ...data?.mensagem?.facturas_actividades?.total_valores_de_facturas
    }

    const contas = {
        total: factura?.valorTotalFactura,
        iva: (factura?.valorTotalFactura * 14) / 100,
        desconto : (factura?.valorTotalFactura * 23) / 100,
        subtotal: factura?.valorTotalFactura - (factura?.valorTotalFactura * 23) / 100

    }

    const chart = useChart({
        data: [
        { name: "Outubro", value: 300, color: "blue.solid" },
        { name: "Setembro", value: 200, color: "orange.solid" },
        { name: "Agosto", value: 100, color: "pink.solid" },
        { name: "Julho", value: 1200, color: "green.solid" },
        ],
    })

    const pay = async () => {
        setLoad(true)
        try {
          
          const response = await RequestAPI.post(`facturas/pagar/`,{...factura})

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
        } catch (error:any) {
          
            toaster.create({
              title: error?.response.data.status.toUpperCase(),
              description: error?.response.data.mensagem,
              type: "error",
            })

          setLoad(false)
        }
    }
  
  return (
    <Flex my={10} width={"100%"}>
        <Box bg={COLORS.bg.branco} p={5} shadow={"sm"} rounded={10} flex={1}>
            {factura?.valorTotalFactura ? <>
                <Heading mb={5} size={"md"}>Detalhes da factura</Heading>
                <Box bg={"gray.900"} p={5} rounded={10} color={"white"}>
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <Heading>{factura?.numeroFactura}</Heading>
                        <Text p={1} fontSize={10} bg={COLORS.vermelho} rounded={5}>Devido em 8 dias</Text>
                    </Flex>
                    <Flex mt={10} justifyContent={"space-between"} alignItems={"center"}>
                        <Box>
                            <Text fontSize={10} color={"gray.400"}>Emitido em</Text>
                            <Text fontSize={12}>{new Date(factura?.dataEmissao).toLocaleDateString()}</Text>
                        </Box>
                        <Box>
                            <Text fontSize={10} color={"gray.400"}>Vencimento</Text>
                            <Text fontSize={12}>{new Date(factura?.dataVencimento).toLocaleDateString()}</Text>
                        </Box>
                        <Box>
                            <Text fontSize={10} color={"gray.400"}>Recorrente</Text>
                            <Text fontSize={12}>Mensal</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box bg={"gray.100"} p={5} rounded={10} my={5}>
                    <Flex justifyContent={"space-between"} alignItems={"center"} my={5} color={"gray.700"} fontSize={13}>
                        <Text>Montante</Text>
                        <Text>AKZ {Intl.NumberFormat("PT-br").format(contas.total)}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} alignItems={"center"} my={5} color={"gray.700"} fontSize={13}>
                        <Text>IVA (14%)</Text>
                        <Text>AKZ {Intl.NumberFormat("PT-br").format(contas.iva)}</Text>
                    </Flex>
                    <Flex justifyContent={"space-between"} alignItems={"center"} my={5} color={"gray.700"} fontSize={13}>
                        <Text>Desconto (23%)</Text>
                        <Text>AKZ {Intl.NumberFormat("PT-br").format(contas.desconto)}</Text>
                    </Flex>
                    <hr />
                    <Flex fontWeight={700} justifyContent={"space-between"} alignItems={"center"} my={5}>
                        <Text>Total (AOA)</Text>
                        <Text>AKZ {Intl.NumberFormat("PT-br").format(contas.subtotal)}</Text>
                    </Flex>
                </Box> 
                <Flex justifyContent={"space-between"} alignItems={"center"} my={5}>
                    <DialogConfirm element={
                        <IconButton loading={load} size="md" p={5} bg={COLORS.amarelo} color={COLORS.preto}>
                            <TbCreditCardPay  /> Pagar
                        </IconButton>
                    } 
                    title="Pagamento de factura" description="Está preste a pagar uma factura. Podemos continuar?" func={pay}
                    />
                    <Link href={`${BaseInfo.baseURL}reports/${factura.arquivoFactura}`} download={true}>
                        <IconButton ml={5} size="md" p={5} bg={COLORS.preto} color={"white"}>                       
                            <TbFileDownload   /> Download PDF
                        </IconButton>
                    </Link>
                    <Toaster />
                </Flex> 
            </> :
                <Heading mb={5} size={"md"}>Sem factura recentes</Heading>
            }    
        </Box>
        <Box ml={5} bg={COLORS.bg.branco} p={5} shadow={"sm"} rounded={10} flex={1}>
            {facturaTotal?.total_facturas_emitidas ? <>
                <Heading  mb={5} size={"md"}>Estatisticas de pagamento</Heading>
                <Box p={5} rounded={10}>
                    <Chart.Root boxSize="200px" chart={chart} mx="auto">
                        <PieChart>
                            <Tooltip
                            cursor={false}
                            animationDuration={100}
                            content={<Chart.Tooltip hideLabel />}
                            />
                            <Pie
                            innerRadius={70}
                            outerRadius={100}
                            isAnimationActive={false}
                            data={chart.data}
                            dataKey={chart.key("value")}
                            nameKey="name"
                            >
                            <Label
                                content={({ viewBox }) => (
                                <Chart.RadialText
                                    viewBox={viewBox}
                                    title={chart.getTotal("value").toLocaleString()}
                                    description="Total"
                                />
                                )}
                            />
                            {chart.data.map((item) => (
                                <Cell key={item.color} fill={chart.color(item.color)} />
                            ))}
                            </Pie>
                        </PieChart>
                    </Chart.Root>
                </Box>
                <Flex fontSize={12} borderColor={"gray.200"} borderWidth={"1px"} borderStyle={"solid"} p={5} justifyContent={"space-between"} rounded={10} alignItems={"center"} my={5} textAlign={"center"}>
                    <Box color={"gray.500"} p={5} flex={1}>
                        <Text>Emitidas</Text>
                        <Heading size={"sm"}>{Intl.NumberFormat("PT-br").format(facturaTotal?.total_facturas_emitidas)}</Heading>
                    </Box>
                    <Box color={"gray.500"} borderColor={"gray.200"} p={5} borderLeftWidth={"1px"} borderStyle={"solid"} flex={1}>
                        <Text>Pagas</Text>
                        <Heading size={"sm"}>{Intl.NumberFormat("PT-br").format(facturaTotal?.total_facturas_pagas)}</Heading>
                    </Box>
                    <Box color={"gray.500"} borderColor={"gray.200"} p={5} borderLeftWidth={"1px"} borderStyle={"solid"} flex={1}>
                        <Text>Vencidas</Text>
                        <Heading size={"sm"}>{Intl.NumberFormat("PT-br").format(facturaTotal?.total_facturas_canceladas)}</Heading>
                    </Box>
                    <Box color={"gray.500"} borderColor={"gray.200"} p={5} borderLeftWidth={"1px"} borderStyle={"solid"} flex={1}>
                        <Text>Canceladas</Text>
                        <Heading size={"sm"}>{Intl.NumberFormat("PT-br").format(facturaTotal?.total_facturas_vencidas)}</Heading>
                    </Box>
                </Flex>                
                <Flex justifyContent={"space-between"} alignItems={"center"} my={5}>
                    <Text color={"gray.500"} fontSize={13}>Atualizado da última transação, {new Date().toLocaleDateString()}</Text>
                    <IconButton ml={5} size="md" p={2} bg={"gray.100"} color={"gray.700"} variant={"outline"}>
                        <MdDownloading   />
                    </IconButton>
                </Flex>  
            </> :
                <Heading mb={5} size={"md"}>Sem dados recentes</Heading>
            }       
        </Box>
        <Box ml={5} bg={COLORS.bg.branco} p={5} shadow={"sm"} rounded={10} flex={1}>
            {factura?.valorTotalFactura ? <>
                <Heading  mb={5} size={"md"}>Actividades Recentes</Heading>
                <Box fontSize={12} p={5} my={5} >
                    <Timeline.Root maxW="400px">
                        <Timeline.Item>
                            <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <LuShip />
                            </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content>
                            <Timeline.Title>Produto Enviado</Timeline.Title>
                            <Timeline.Description>13 Maio 2025</Timeline.Description>
                            <Text textStyle="sm">
                                Enviamos seu produto via <strong>SONIL</strong> e ele deve
                                chegar em 3 a 5 dias úteis.
                            </Text>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <LuCheck />
                            </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content>
                            <Timeline.Title textStyle="sm">Pedido Confirmado</Timeline.Title>
                            <Timeline.Description>18 Maio 2025</Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <LuPackage />
                            </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content>
                            <Timeline.Title textStyle="sm">Pedido Entregue</Timeline.Title>
                            <Timeline.Description>20 Maio 2025, 10:30am</Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                                <LuCheck />
                            </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content>
                            <Timeline.Title textStyle="sm">Pedido Confirmado</Timeline.Title>
                            <Timeline.Description>21 Maio 2025</Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>
                    </Timeline.Root>
                </Box>                
                <Box textAlign={"center"} fontSize={14} justifyContent={"space-between"} alignItems={"center"} my={5}>
                    <Link to={"/"}>Ver todas</Link>
                </Box>
            </> :
                <Heading mb={5} size={"md"}>Sem actividades recentes</Heading>
            }     
        </Box>
    </Flex>
  )
}

export default FacturasRecentes