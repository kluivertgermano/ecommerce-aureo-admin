"use client"

import { Alert, Box,  Button,  CloseButton, Drawer, Field, Flex,  Heading,  HStack,  IconButton, Input, Portal, RadioGroup, Stack, Text} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { COLORS } from "../../../helpers"
import { useFormik } from "formik"
import { BaseInfo, RequestAPI } from "../../../config"
import { FaPlus } from "react-icons/fa"
import { FileUploader } from 'react-drag-drop-files'
import { toaster, Toaster } from "../../../components/ui/toaster"

const fileTypes = ["CSV", "JSON", "XLS"];

const Editar = () => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)
  
  const refGenerate = useRef<any>(null);

  
  const formik = useFormik({
      initialValues: {
        tipo_de_registro: '1',
        indicador_de_produtos: '4',
        indicador_produto_id: '21',
        data_limite_pagamento: '',
        hora_limite_pagamento: '',
        montante_fixo: '',
        codigo_de_processamento: '80',
        montante_limitado_para_pagamento_longo: '0',
        nib: '',
        num_referencia: ''
      },
      onSubmit: async (values: any) => {
        
        try {
          setLoad(true)

          if(values.nib.length < 21){
              delete values?.nib
          }

          const response = await RequestAPI.post(`referencias`,{
            entidade_cliente: BaseInfo.entidade,
            ...values,
            hora_limite_pagamento: values.hora_limite_pagamento.substring(0,5),
          })

          if(response.data.status == BaseInfo.statusAPI.sucesso){
            toaster.create({
              title: response.data.status.toUpperCase(),
              description: response.data.mensagem,
              type: "success",
            })

            formik.resetForm();
            refGenerate.current.value = ''
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
      
    },
  });

    const sortearReferencias = async () =>{
      const ref = String(Math.random() * 1000)
      .replace('.','').substring(0,9)

      refGenerate.current.value = ref
      formik.initialValues.num_referencia = ref
      formik.values.num_referencia = ref
    }

    const handleChange = async (file: any) => {

    const promise = new Promise<void>((resolve) => {
          setTimeout(() => {resolve();console.log(file)}, 5000)
        })

    toaster.promise(promise, {
      success: {
        title: "Sucesso no carregamento",
        description: "Seu arquivo foi carregado com sucesso",
      },
      error: {
        title: "Falha no carregamento",
        description: "Aconteceu algo no carregamento do arquivo",
      },
      loading: { title: "carregando...", description: "Por favor aguarde" },
    })
  };
    
  return (
    <Drawer.Root size="lg" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} ml={3} size="md" bg={COLORS.vermelho} rounded={5}>
            Novo Pedido
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Solicitar uma nova cotação</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4">

                    <Stack gap="4" mt={5}>
                      <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Data da necessidade</Field.Label>
                          <Input type="date" required name="data_limite_pagamento" onChange={formik.handleChange} value={formik.values.data_limite_pagamento}/>
                        </Field.Root>
                      </Flex>
  
                      <Flex>
                        <Field.Root width="100%">
                          <Field.Label>Quantidade</Field.Label>
                          <Input type="number" name="nib"  onChange={formik.handleChange} value={formik.values.nib}/>
                        </Field.Root>
  
                        <Field.Root ml={4}width="100%">
                          <Field.Label>Moeda</Field.Label>
                          <Input type="text" name="montante_fixo" onChange={formik.handleChange} value={formik.values.montante_fixo}/>
                        </Field.Root>
                      </Flex>
                    </Stack>
                  </Stack>
                <Flex mt={5}>
                  <Button bg={COLORS.vermelho} loading={load} type="submit" color={COLORS.branco} width={[150]} rounded={10}>Solicitar</Button>
                </Flex>
                </form>
              </Box>

              <Toaster/>
              

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


export default Editar