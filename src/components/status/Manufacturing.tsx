import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'

function Manufacturing() {
  return (
    <Flex direction="column" justifyContent="space-between" maxHeight="100vh">
        <Container px={[20,200,400]} height="90vh" display="flex" flexDirection="column" justifyContent="center">

            <Flex textAlign={"center"} justifyContent={"center"}>            
                <MdOutlinePrecisionManufacturing size={500} color='red' />
            </Flex>
            
            <Text mb={10} textAlign={"center"}>Caro cliente, esta pagina está em manuntenção!</Text>
            
        </Container>
    </Flex>
  )
}

export default Manufacturing