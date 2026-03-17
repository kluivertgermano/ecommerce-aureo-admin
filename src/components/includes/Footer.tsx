import { Image,  Heading, Text, Box, Flex, Input, Button } from '@chakra-ui/react'
import LOGOCAT2 from '../../assets/images/logos/CMCL.svg'
import PT from '../../assets/images/Icones/PT.jpg'
import EN from '../../assets/images/Icones/EN.jpg'
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { MdWhatsapp } from 'react-icons/md'
import { COLORS } from '../../helpers'

function Footer() {

  const data = [
    {
      titulo: "Informações de Contato",
      itens:[
        {
          titulo: "Endereço",
          elements:["123 Nome da rua, Cidade, Austrália"]
        },
        {
          titulo: "Telefone",
          elements:["Ligação gratuita (123) 472-796","Móvel : +91-9910XXX"]
        },
        {
          titulo: "E-mail",
          elements:["mail@example.com"]
        }
        ,
        {
          titulo: "DIAS DE TRABALHO",
          elements:["SEG - SEX / 9:30 AM - 6:30 PM"]
        }
      ]
    },
    {
      titulo: "Categorias",
      itens:["Jeans","T-shirts","Esportes","Camisas & Tops","Tamancos & Mulas","Óculos de sol"," Sacos & Carteiras","Tênis & Atlético","Electronis","mobília"]
    },
    {
      titulo: "Tags Populares",
      itens:["Panos","Electronis","mobília","Esportes"," Homens Usam","Mulheres Vestem","Laptops","Camisas formais","Fones de ouvido"]
    },
    {
      titulo: "Mantenha-se informado",
      itens:[]
    }
  ]
  return (
    
      <Box bg={COLORS.azul}  mt={7} py={10} px={[5,20]} color={"white"} borderTop={`1px solid ${COLORS.bg.cinzaBorda}`}>
          <Flex textAlign={["center","left"]} direction={["column","row"]} color={COLORS.preto} justifyContent={"space-between"}>

            {data.map((item, index)  => 
              <Box width={["auto","25%"]}>
                <Heading my={[7,0]} color={COLORS.amarelo} size={["2xl","lg"]} fontWeight={500} textTransform={"uppercase"}>{item.titulo}</Heading>
                {
                  index === 0 &&
                  item.itens.map(it => 
                    <>
                      <Heading mt={5} color={COLORS.amarelo} fontWeight={500} size={"md"} textTransform={"uppercase"}>{it?.titulo}</Heading>
                      {it.elements.map(ix => <Text fontSize={14} color={COLORS.branco}>{ix}</Text>)}
                    </>
                  )
                }
                {
                  index === 1 &&
                  item.itens.map(it => 
                    <Text mt={1} fontSize={14} color={COLORS.branco}>{it}</Text>
                  )
                }
                 <Flex wrap={["wrap"]}>
                  {
                    index === 2 &&
                    item.itens.map(it => 
                    
                        <Text border={"1px solid white"} p={2} m={1} fontSize={14} color={COLORS.branco}>{it}</Text>
                      
                    )
                  }
                </Flex>
                {
                  index === 3 &&
                  <Box>
                    <Input type='email' placeholder='Insira seu E-mail' />
                    <Button mt={3} colorPalette={"black"} width={"full"}>INSCREVER-SE</Button>
                    <Text fontSize={13} mt={5} color={COLORS.branco}>
                      Subscreva a nossa newsletter para receber ofertas antecipadas de desconto, 
                      atualizações e novas informações sobre produtos.
                    </Text>
                  </Box>
                }
              </Box>
            )}

          </Flex>
      </Box>
  )
}

export default Footer
