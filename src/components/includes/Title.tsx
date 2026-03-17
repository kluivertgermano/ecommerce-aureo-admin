import {Flex, Heading, Text } from '@chakra-ui/react'
import {COLORS} from '../../helpers'
import type {TitlePage} from '../../types/components'

function Title({title}:TitlePage) {

  return (

    <Flex border={`1px solid ${COLORS.bg.cinzaBorda}`} px={[5,40]} py={[0,5]} bg={COLORS.bg.cinzaPage}>
            <Heading textTransform={"uppercase"} fontWeight={500}>{title}</Heading>
    </Flex>

  )
}

export default Title
