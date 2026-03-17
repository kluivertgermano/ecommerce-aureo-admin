import { Heading, Text, Box } from '@chakra-ui/react'

import HEADERCAT from '../../assets/images/paineis/PAINEL.svg'
import { Header } from '../../components/includes'

function HeaderAlt({titulo, subtitulo}: any) {
  return (
    <div>
    
      <Box zIndex={2} position={"relative"} backgroundImage={`url(${HEADERCAT})`} bgPos={"center"} backgroundRepeat={"no-repeat"} backgroundSize={["cover"]} fontSize={18} height={[130,200,400]} px={[10,40]} py={[10,20]}>
          <Header />
          <Box zIndex={2} position={"relative"} mt={20} hideBelow={"sm"} textAlign={"center"}>
            <Heading mb={4} size={["4xl","6xl"]} color={"white"} >
              {titulo}
            </Heading>
            <Text mb={10} fontSize={[16,20]} color={"white"}>{subtitulo}</Text>
          </Box>
          <Box position={"absolute"} zIndex={0} height={[130,200,400]}  width={"full"} top={[0]} left={0}  bgImage={"linear-gradient(270.32deg, rgba(0, 0, 0, 0) 0.28%, #000000 99.99%)"} color={"white"}></Box>
      </Box>
    </div>
  )
}

export default HeaderAlt
