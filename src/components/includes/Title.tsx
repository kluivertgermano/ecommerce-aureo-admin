import {Box, Flex, Heading, Text } from '@chakra-ui/react'
import {COLORS} from '../../helpers'
import type {TitlePage} from '../../types/components'

function Title({title, description}:TitlePage) {

  return (

        <Box alignItems="center">
            <Heading size="4xl">{title}</Heading>
            <Text width={[400]} color={COLORS.cinza}>{description}</Text>
        </Box>

  )
}

export default Title
