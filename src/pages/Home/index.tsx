import type { IconButtonProps } from "@chakra-ui/react"
import { Button, Image, Heading, Text, Box, Flex, Carousel, IconButton, Container, Separator, Center, AspectRatio, Grid, GridItem } from '@chakra-ui/react'

import { ButtonFloating, Header } from '../../components/includes'
import Footer from '../../components/includes/Footer'
import { forwardRef, useRef } from 'react'
import { FaHeadphonesAlt, FaShippingFast } from 'react-icons/fa'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuArrowLeft, LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { COLORS } from '../../helpers'

import CARROUSEL from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdPayment } from 'react-icons/md'
import { Link } from "react-router"


function index() {

    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

  const inicioRef = useRef(null);
  const sobreRef = useRef(null);
  const servicosRef = useRef(null);
  const parceirosRef = useRef(null);


  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header/>
      <Carousel.Root
        slideCount={items.length}
        maxW="full"
        mx="auto"
        gap="4"
        position="relative"
        colorPalette="white"
      >
      <Carousel.Control gap="4" width="full" position="relative">
        <Carousel.PrevTrigger asChild>
          <ActionButton insetStart="4">
            <LuArrowLeft />
          </ActionButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {itemss.map((src, index) => (
            <Carousel.Item key={index} index={index}>
              <AspectRatio ratio={16 / 9} maxH="72vh" w="full">
                <Image
                  src={src}
                  alt={`Product ${index + 1}`}
                  objectFit="contain"
                />
              </AspectRatio>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <ActionButton insetEnd="4">
            <LuArrowRight />
          </ActionButton>
        </Carousel.NextTrigger>

        <Box position="absolute" bottom="6" width="full">
          <Carousel.Indicators
            transition="width 0.2s ease-in-out"
            transformOrigin="center"
            opacity="0.5"
            boxSize="2"
            _current={{ width: "10", bg: "colorPalette.subtle", opacity: 1 }}
          />
        </Box>
      </Carousel.Control>
      </Carousel.Root>

      <Box mt={10} px={[5,40]} display={"flex"} flexDirection={["column","row"]}>
        <Flex textAlign={["center","left"]} direction={["column","row"]} flex={1} border={`1px solid ${COLORS.bg.cinzaBorda}`} alignItems={"center"} justifyContent={"space-between"} p={7}>
          <FaShippingFast size={40} />
          <Box ml={5}>
            <Heading mb={-1}>GARANTIA DE VOLTA DO DINHEIRO</Heading>
            <Text fontSize={12} color={COLORS.cinza}>Garantia de devolução do dinheiro de 100%</Text>
          </Box>
        </Flex>
        <Flex textAlign={["center","left"]} direction={["column","row"]} flex={1} ml={[0,5]} mt={[5,0]} border={`1px solid ${COLORS.bg.cinzaBorda}`} alignItems={"center"} justifyContent={"space-between"} p={7}>
          <RiMoneyDollarCircleLine size={40} />
          <Box ml={5}>
            <Heading mb={-1}>GARANTIA DE VOLTA DO DINHEIRO</Heading>
            <Text fontSize={12} color={COLORS.cinza}>Garantia de devolução do dinheiro de 100%</Text>
          </Box>
        </Flex>
        <Flex textAlign={["center","left"]} direction={["column","row"]} flex={1} ml={[0,5]} mt={[5,0]} border={`1px solid ${COLORS.bg.cinzaBorda}`} alignItems={"center"} justifyContent={"space-between"} p={7}>
          <FaHeadphonesAlt size={40} />
          <Box ml={5}>
            <Heading mb={-1}>SUPORTE ONLINE 24/7</Heading>
            <Text fontSize={12} color={COLORS.cinza}>Suporte incrível para dias 24/7</Text>
          </Box>
        </Flex>
      </Box>

      <Box mt={20} px={[5,40]}>
        <Flex align="center" gap={[1,3]}>
          <Separator flex="1" />
            <Heading>PRODUTOS EM DESTAQUE</Heading>
          <Separator flex="1" />
        </Flex>

        <Grid templateColumns={["repeat(2, 1fr)","repeat(5, 1fr)"]} gapX="5" py={7} >
            {
              products.map(product => 
                
              <GridItem mb={2}>
                <Image src={`${product.img}`} mb={5} cursor={"pointer"} />
                <Text fontSize={12} color={COLORS.cinza}>{product.categoria}</Text>
                <Heading as={Link} to="/loja/:produto" cursor={"pointer"} color={COLORS.azul} size={["sm","md"]}>{product.descricao}</Heading>
                <Text color={COLORS.amarelo} fontSize={14} fontWeight={600}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)}</Text>
              </GridItem>
          )}
        </Grid>
      </Box>

      <Box mt={20} px={[5,40]}>
        <Flex align="center" gap={[1,3]}>
          <Separator flex="1" />
            <Heading>NOVAS CHEGADAS</Heading>
          <Separator flex="1" />
        </Flex>
        
        <Grid templateColumns={["repeat(2, 1fr)","repeat(5, 1fr)"]} gapX="5" py={7} >
            {
              newProducts.map(product => 
                
              <GridItem mb={2} >
                <Image src={`${product.img}`} mb={5} cursor={"pointer"} />
                <Text fontSize={12} color={COLORS.cinza}>{product.categoria}</Text>
                <Heading as={Link} to="/loja/:produto" cursor={"pointer"} color={COLORS.azul} size={["sm","md"]}>{product.descricao}</Heading>
                <Text color={COLORS.amarelo} fontSize={14} fontWeight={600}>AKZ {Intl.NumberFormat("PT-br").format(product.preco)}</Text>
              </GridItem>
          )}
        </Grid>
      </Box>

      <Box mt={20} px={[5,40]}>
        <Flex align="center" gap={[1,3]}>
          <Separator flex="1" />
            <Heading>PPROCURAR CATEGORIAS</Heading>
          <Separator flex="1" />
        </Flex>

        <CARROUSEL responsive={responsive} 
            swipeable={false}
            draggable={false}
            // showDots={true}
            // partialVisible={true}
            // slidesToSlide={4}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 900ms ease-in-out"
            transitionDuration={1000}
            containerClass="react-multi-carousel-list"
            removeArrowOnDeviceType={["tablet", "mobile",]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            centerMode={true}>
            {
              categorias.map(product => 
                <Box width={"93%"} mt={10}>
                  <Image src={`${product.img}`} mb={5} />
                  <Heading color={COLORS.azul} textAlign={"center"} size={"lg"}>{product.descricao}</Heading>
                  <Text textAlign={"center"} fontSize={12} color={COLORS.cinza}>{product.categoria}</Text>
                </Box>
              )
            }
          </CARROUSEL>
      </Box>

      <Box mt={10} p={10} px={[5,40]} bg={COLORS.bg.cinzaPage} display={"flex"} flexDirection={["column","row"]}>
        <Flex bg={COLORS.branco} textAlign={["center","left"]} direction={["column","row"]} flex={1} border={`1px solid ${COLORS.bg.cinzaBorda}`} alignItems={"center"} justifyContent={"space-between"} p={10}>
          <FaShippingFast size={40} />
          <Box ml={5}>
            <Heading mb={-1}>ENTREGA GRATUITA</Heading>
            <Text fontSize={12} color={COLORS.cinza}>Entrega gratuita acima de 5000</Text>
          </Box>
        </Flex>
        <Flex bg={COLORS.branco} textAlign={["center","left"]} direction={["column","row"]} flex={1} ml={[0,5]} mt={[5,0]} border={`1px solid ${COLORS.bg.cinzaBorda}`} alignItems={"center"} justifyContent={"space-between"} p={10}>
          <MdPayment size={40} />
          <Box ml={5}>
            <Heading mb={-1}>PAGAMENTOS SEGURO</Heading>
            <Text fontSize={12} color={COLORS.cinza}>Nós possuímos SSL / Secure сertificate</Text>
          </Box>
        </Flex>
        <Flex bg={COLORS.branco} textAlign={["center","left"]} direction={["column","row"]} flex={1} ml={[0,5]} mt={[5,0]} border={`1px solid ${COLORS.bg.cinzaBorda}`} alignItems={"center"} justifyContent={"space-between"} p={10}>
          <FaHeadphonesAlt size={40} />
          <Box ml={5}>
            <Heading mb={-1}>SUPORTE ONLINE 24/7</Heading>
            <Text fontSize={12} color={COLORS.cinza}>Suporte incrível para dias 24/7</Text>
          </Box>
        </Flex>
      </Box>

      <Box borderTop={`1px solid ${COLORS.bg.cinzaBorda}`} px={[5,40]} py={10}>
          <Flex justifyContent={"space-between"} wrap={["wrap","nowrap"]}>
            {destaques.map( destaque => 
              <Box>
                <Heading textTransform={"uppercase"} py={5} fontWeight={500}>{destaque.titulo}</Heading>
                {destaque.produtos.map( produto =>
                  <>
                    <Separator/>
                    <Flex py={3}>
                      <Image width={[70]} src={produto.img} />
                      <Box px={3}>
                        <Text color={COLORS.azul} fontWeight={500}>{produto.descricao}</Text>
                        <Text color={COLORS.amarelo} fontSize={[14,12]} fontWeight={500}>{Intl.NumberFormat("PT").format(produto.preco)}</Text>
                      </Box>
                    </Flex>
                  </>
                )}
              </Box>
            )}
          </Flex>
      </Box>

      <Footer />
    </div>
  )
}

const products = [
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/01.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/02.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/03.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/04.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/05.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/06.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/07.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/08.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/09.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/10.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  }
]

const newProducts = [
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/11.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/12.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/13.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/14.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/15.png",
    categoria: "Topwear",
    descricao:"Camisa branca do polo",
    preco: 17480.17
  }
]

const categorias = [
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/01.png",
    categoria: "10 Produtos",
    descricao:"MODA"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/02.png",
    categoria: "8 Produtos",
    descricao:"RELÓGIOS"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/03.png",
    categoria: "14 Produtos",
    descricao:"SAPATOS"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/04.png",
    categoria: "6 Produtos",
    descricao:"SACOS",
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/05.png",
    categoria: "6 Produtos",
    descricao:"ELETRONICOS"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/06.png",
    categoria: "16 Produtos",
    descricao:"JÓIAS"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/07.png",
    categoria: "28 Produtos",
    descricao:"ESPORTS"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/08.png",
    categoria: "15 Produtos",
    descricao:"VEGETAL"
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/09.png",
    categoria: "24 Produtos",
    descricao:"MÉDICO",
  },
  {
    img: "https://codervent.com/shopingo/demo/shopingo_V2/assets/images/categories/10.png",
    categoria: "18 Produtos",
    descricao:"ÓCULOS DE SOL"
  }
]

const items = [
  {
    label: "Mountain Landscape",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Forest Path",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Ocean Waves",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Desert Dunes",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80",
  },
  {
    label: "Sunset Lake",
    url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070",
  },
]

const destaques = [
  {
    titulo:"Produtos mais vendidos",
    produtos: [
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/01.png",
        descricao:"Homens Camisas Casuais",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/02.png",
        descricao:"Calça de casaco formal",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/03.png",
        descricao:"Mulheres Blue Jeans",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/04.png",
        descricao:"Terno de trilha amarela",
        preco:5000
      }
    ]
  },
  {
    titulo:"Produtos em Destaque",
    produtos: [
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/05.png",
        descricao:"Homens Camisas Casuais",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/06.png",
        descricao:"Calça de casaco formal",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/07.png",
        descricao:"Mulheres Blue Jeans",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/08.png",
        descricao:"Terno de trilha amarela",
        preco:5000
      }
    ]
  },
  {
    titulo:"recém-chegados",
    produtos: [
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/09.png",
        descricao:"Homens Camisas Casuais",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/10.png",
        descricao:"Calça de casaco formal",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/11.png",
        descricao:"Mulheres Blue Jeans",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/12.png",
        descricao:"Terno de trilha amarela",
        preco:5000
      }
    ]
  },
  {
    titulo:"Produtos mais bem avaliados",
    produtos: [
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/13.png",
        descricao:"Homens Camisas Casuais",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/14.png",
        descricao:"Calça de casaco formal",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/15.png",
        descricao:"Mulheres Blue Jeans",
        preco:5000
      },
      {
        img:"https://codervent.com/shopingo/demo/shopingo_V2/assets/images/products/16.png",
        descricao:"Terno de trilha amarela",
        preco:5000
      }
    ]
  }
]

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        ref={ref}
        size="xs"
        variant="outline"
        rounded="full"
        position="absolute"
        zIndex="1"
        bg="bg"
      />
    )
  },
)

const itemss = [
  "https://images.unsplash.com/photo-1656433031375-5042f5afe894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371",
  "https://images.unsplash.com/photo-1587466412525-87497b34fc88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2673",
  "https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2831",
  "https://images.unsplash.com/photo-1661030420948-862787de0056?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370",
  "https://images.unsplash.com/photo-1703505841379-2f863b201212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371",
  "https://images.unsplash.com/photo-1607776905497-b4f788205f6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370",
]

export default index
