import { Button, CloseButton, Dialog, Flex, Portal } from "@chakra-ui/react"
import { TbLogout } from "react-icons/tb";
import { COLORS } from "../../helpers";

export default function DialogConfirm({title, description, func}:any) {
  
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Flex _hover={{bg:"yellow.300", color:"gray.500"}} rounded={10} p={2} cursor={"pointer"} fontWeight={900}><TbLogout color={COLORS.vermelho} size={20}/></Flex>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                {description}
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Button onClick={func}>Sair</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
