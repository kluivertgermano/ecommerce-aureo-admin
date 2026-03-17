import { Alert } from "@chakra-ui/react"
import type { Alerta } from "../../types/components"

function Alerta({title, description, status}: Alerta) {


  return (
    <Alert.Root status={status}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>
          {description}
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}

export default Alerta