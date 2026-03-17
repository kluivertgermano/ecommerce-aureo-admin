import {  CloseButton, Drawer, Flex, Portal } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";

function MenuMobile({scrollToSection, refs} : any) {
  return (
    <Drawer.Root placement={"start"}>
            <Drawer.Trigger hideFrom={"sm"} asChild >
              <GiHamburgerMenu color='white' size={40} />
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content
                >
                  <Drawer.Body>

                    <Flex mt={10} height={120} fontSize={17} justifyContent={"space-between"} flexDirection={"column"}>
                        <a onClick={() => scrollToSection(refs[0])}>Home</a>
                        <a onClick={() => scrollToSection(refs[1])}>Serviços</a>
                        <a onClick={() => scrollToSection(refs[2])}>Parceiros</a>
                        <a onClick={() => scrollToSection(refs[3])}>Sobre nós</a>
                    </Flex>

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

export default MenuMobile