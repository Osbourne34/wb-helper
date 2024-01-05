import { useGetRegionsQuery } from '@/store/api/region'
import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../ui/flex'
import { useAppDispatch } from '@/store/hooks'
import { setFilter } from '@/store/slices/filter'

const RegionItem = styled.button<{ active?: boolean }>`
  flex-grow: 1;
  background-color: ${(props) =>
    props.active ? 'var(--white)' : 'transparent'};
  border: ${(props) =>
    props.active ? '1px solid var(--light-border)' : '1px solid var(--border)'};
  border-radius: 4px;

  padding: 8px;

  cursor: pointer;
`

export const Regions = () => {
  const dispatch = useAppDispatch()
  const { data: regions } = useGetRegionsQuery()

  const [activeRegion, setActiveRegion] = useState<null | number>(null)

  const handleSetActive = (id: number) => {
    setActiveRegion(id)
    dispatch(
      setFilter({
        region_id: id,
      })
    )
  }

  return (
    <Flex gap="10px">
      {regions?.map(({ id, name }) => (
        <RegionItem
          onClick={() => handleSetActive(id)}
          active={activeRegion === id}
          key={id}
        >
          {name}
        </RegionItem>
      ))}
    </Flex>
  )
}
