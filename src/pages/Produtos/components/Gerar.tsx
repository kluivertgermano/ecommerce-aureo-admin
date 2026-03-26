"use client"

import { Alert, Box,  Button,  CloseButton, Drawer, Field, Flex,  Heading,  HStack,  IconButton, Image, Input, Portal, RadioGroup, Stack, Text, Textarea} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { COLORS } from "../../../helpers"
import { useFormik } from "formik"
import { BaseInfo, RequestAPI } from "../../../config"
import { FaPlus } from "react-icons/fa"
import { FileUploader } from 'react-drag-drop-files'
import { toaster, Toaster } from "../../../components/ui/toaster"
import { FaLocationArrow } from "react-icons/fa6"
import { useGetTokenLogin } from "../../../hook"

const fileTypes = ["CSV", "JSON", "XLS"];

const Editar = () => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)
  const [entidade, setEntidade] = useState({empresa:''})
  
  const formik = useFormik({
      initialValues: {
        codigoProduto: "",
        descricao: "",
        preco: "",
      },
      onSubmit: async values => {
        
        try {
          setLoad(true)

          const response = await RequestAPI.post(`produtos`, {
            ...values,
            empresaDona: entidade?.empresa
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

  useEffect(()=>{
      const result = useGetTokenLogin()
      setEntidade({empresa: result?.empresa})
  }, []) 

    
  return (
    <Drawer.Root size="md" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton p={3} ml={3} size="md" bg={COLORS.vermelho} rounded={5}>
            <FaPlus /> Novo Produto
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header bg={COLORS.amarelo} color={COLORS.preto} borderBottom={`5px solid ${COLORS.vermelho}`} >
              <Drawer.Title fontWeight={300}>Adicionar um produto</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body p={10}>
              <Box mt={5} fontSize={14} fontWeight={300}>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Stack gap="4" mt={10}>
                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Descrição do produto</Field.Label>
                        <Input type="text" name="descricao" onChange={formik.handleChange} value={formik.values.descricao}/>
                      </Field.Root>
                    </Flex>

                    <Flex>
                      <Field.Root width="100%">
                        <Field.Label>Codigo do produto</Field.Label>
                        <Input type="text" name="codigoProduto" onChange={formik.handleChange} value={formik.values.codigoProduto}/>
                      </Field.Root>

                      <Field.Root ml={4}width="100%">
                        <Field.Label>Preço</Field.Label>
                        <Input type="number" name="preco" onChange={formik.handleChange} value={formik.values.preco}/>
                      </Field.Root>
                    </Flex>
                  </Stack>
                <Flex mt={10} >
                  <Button bg={COLORS.amarelo} type="submit" loading={load} color={COLORS.preto} width={[150]} rounded={10}>Gravar</Button>
                </Flex>
                </form>
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


export default Editar