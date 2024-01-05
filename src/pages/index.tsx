import { Layout } from '@/layout/layout'
import { useAppDispatch } from '@/store/hooks'
import { ReactElement, useEffect } from 'react'
import Cookies from 'js-cookie'
import { setAuth } from '@/store/slices/auth'
import { Container } from '@/components/ui/container'

import { Stack } from '@/components/ui/stack'

import { Flex } from '@/components/ui/flex'
import { Col } from '@/components/ui/col'
import { Priorities } from '@/components/priorities/priorities'
import { Regions } from '@/components/regions/regions'
import { Adverts } from '@/components/adverts/adverts'
import styled from 'styled-components'
import { Search } from '@/components/search/search'

const Main = styled.main`
  padding: 20px 0 40px;
`

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = Cookies.get('token')
    dispatch(setAuth(Boolean(token)))
  }, [dispatch])

  return (
    <Main>
      <Container>
        <Stack gap="30px">
          <Search />
          <Flex gap="20px">
            <Col span={3}>
              <Stack>
                <Regions />

                <div>
                  Est ipsum gravida sit non. Mi ac habitasse proin sollicitudin
                  malesuada blandit. Arcu turpis cursus imperdiet diam tincidunt
                  augue ut. Metus proin vel consectetur ipsum quis amet faucibus
                  mus. Placerat cras ac amet dictum. Massa sed cursus dapibus
                  morbi turpis velit id mauris at.
                </div>

                <Adverts />
              </Stack>
            </Col>
            <Col span={2}>
              <Priorities />
            </Col>
          </Flex>
        </Stack>
      </Container>
    </Main>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
