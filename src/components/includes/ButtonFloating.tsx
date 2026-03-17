import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { HiArrowSmUp } from 'react-icons/hi'

function ButtonFloating({scrollToSection, refs}: any) {
  return (
    <IconButton onClick={() => scrollToSection(refs)} _hover={{backgroundColor:"#A94000"}} size={["md","lg","xl"]} zIndex={1}  top={"90%"} right={"50%"} position={"fixed"} aria-label="Call support" rounded="full">
      <HiArrowSmUp />
    </IconButton>
  )
}

export default ButtonFloating