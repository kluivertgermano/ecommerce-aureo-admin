import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import type { Pag } from '../../types/components'

function Paginations({getNewDatas, data} : Pag) {

  return (
    <Pagination.Root onPageChange={getNewDatas} count={data?.registros?.total} pageSize={data?.registros?.limite} defaultPage={data?.registros?.pagina_actual}>
        <ButtonGroup variant="outline" size="sm">
            <Pagination.PrevTrigger asChild>
            <IconButton>
                <LuChevronLeft />
            </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
            render={(page) => (
                <IconButton variant={{ base: "outline", _selected: "solid" }}>
                {page.value}
                </IconButton>
            )}
            />

            <Pagination.NextTrigger asChild>
            <IconButton>
                <LuChevronRight />
            </IconButton>
            </Pagination.NextTrigger>
        </ButtonGroup>
    </Pagination.Root>
  )
}

export default Paginations