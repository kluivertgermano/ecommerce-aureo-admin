import { Avatar, AvatarGroup, Flex, HStack, Icon, Image, Switch, Text } from '@chakra-ui/react'
import LOGOSONANGOL from "../../assets/images/logos/LGOAURA.png"
import USERIMG from "../../assets/images/paineis/user.png"
import {COLORS} from '../../helpers'
import { MdNotifications, MdOutlineAttachMoney } from 'react-icons/md'
import { PiGlobeBold } from 'react-icons/pi'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect } from 'react'
import { useGetTokenLogin, useLogout } from '../../hook'
import { useNavigate } from 'react-router'
import { toaster, Toaster } from "../../components/ui/toaster"
import { BaseInfo, RequestAPI } from "../../config"
import { useStoreEntidadeAllData } from '../../stores'


function Header() {

    const navigate = useNavigate()
    const {setEntidadeData, entidadeData} = useStoreEntidadeAllData()

    const validarSessao =  async (hash:string, cliente:string) => {
        try {
                const response = await RequestAPI.get(`empresas/hash/${hash}`)

                if(response.data.status == BaseInfo.statusAPI.sucesso){
                    setEntidadeData(response.data.mensagem)
                } 
                    
                if(response.data.status == BaseInfo.statusAPI.erro){
                    toaster.create({
                        title: response.data.status.toUpperCase(),
                        description: response.data.mensagem,
                        type: "error",
                    })

                    
                    useLogout(cliente);
                }
        
            } catch (error:any) {
                toaster.create({
                    title: error?.response.data.status.toUpperCase(),
                    description: error?.response.data.mensagem,
                    type: "error",
                })

                useLogout(cliente);
            }

    }

    useEffect(()=>{
        const result = useGetTokenLogin()
        if(!result?.hash) {
            navigate("/")
            return () => {}
        }

        validarSessao(result?.hash, result?.cliente)
    }, []) 


  return (
    <HStack bg={COLORS.bg.branco} justifyContent="space-between" borderBottom={`1px solid ${COLORS.bg.cinzaBorda}`}>
        
        <Image p={2} src={LOGOSONANGOL} width={[10,200]}/>

        <Flex width={["auto",300]} justifyContent="space-evenly" alignItems="center">
            <Text color={"green.700"} fontWeight={500} fontSize={14} mx={2} display={"flex"} alignItems={"center"}><MdOutlineAttachMoney color='black' size={20} /> {Intl.NumberFormat("PT-br").format(2455045.96)}</Text>
            <AvatarGroup>
                <Avatar.Root>
                    <Avatar.Fallback />
                    <Avatar.Image src={USERIMG} />
                </Avatar.Root>
            </AvatarGroup>

            <Icon size={"lg"}>
                <MdNotifications/>
            </Icon>

            <Icon size={"lg"}>
                <PiGlobeBold/>
            </Icon>

            {/* <Switch.Root colorPalette="blue" size="lg">
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                    <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                    <Icon as={FaSun} color="yellow.400" />
                    </Switch.Indicator>
                </Switch.Control>
            </Switch.Root> */}
        </Flex>
        <Toaster/> 
    </HStack>
  )
}

export default Header
