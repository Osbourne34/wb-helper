import { useAppDispatch } from '@/store/hooks'
import { setFilter } from '@/store/slices/filter'
import { useState } from 'react'
import { Paper } from '../ui/paper'
import { Stack } from '../ui/stack'
import { Title } from '../ui/title'
import { Flex } from '../ui/flex'
import { Col } from '../ui/col'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const Search = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    dispatch(
      setFilter({
        input: search,
      })
    )
  }

  return (
    <Paper>
      <Stack gap="10px">
        <Title>Актуальные ставки</Title>

        <Flex gap="20px">
          <Col span={4}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск"
            />
          </Col>
          <Col span={1}>
            <Button
              disabled={search.length === 0}
              onClick={handleSearch}
              fullwidth={true}
            >
              Найти
            </Button>
          </Col>
        </Flex>
      </Stack>
    </Paper>
  )
}
