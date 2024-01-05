import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

import { Container } from '@/components/ui/container'
import { Flex } from '@/components/ui/flex'
import { useAppSelector } from '@/store/hooks'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'

const HeaderInner = styled.div`
  height: 100px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`

const StyledLink = styled(Link)`
  font-size: 14px;
  color: var(--text-color);
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)

  return (
    <header>
      <Container>
        <HeaderInner>
          <Flex alignItems="center" gap={'30px'}>
            <Link href="/">
              <Image width={244} height={28} src="/logo.svg" alt="logo" />
            </Link>
            {isAuth && (
              <Nav>
                <StyledLink href="/">Продавцы</StyledLink>
                <StyledLink href="/">Мои кампании</StyledLink>
                <StyledLink href="/">Актуальные ставки</StyledLink>
                <StyledLink href="/">Возможности</StyledLink>
              </Nav>
            )}
          </Flex>
          {isAuth && (
            <Flex alignItems="center" gap={'30px'}>
              <StyledLink href="/">Поддержка</StyledLink>
              <StyledLink href="/">Тарифы</StyledLink>{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05027 4.05025C8.36302 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9498 4.05025C18.2625 5.36301 19 7.14349 19 9C19 12.3527 19.7171 14.4346 20.3779 15.6461C20.7097 16.2544 21.0328 16.6535 21.2572 16.8904C21.3697 17.0091 21.4581 17.0878 21.5113 17.1322C21.5379 17.1544 21.5558 17.168 21.5635 17.1737C21.5647 17.1746 21.5656 17.1753 21.5663 17.1758C21.9248 17.4221 22.0835 17.8725 21.9571 18.2898C21.8294 18.7115 21.4407 19 21 19H3.00002C2.55935 19 2.17062 18.7115 2.04292 18.2898C1.91658 17.8725 2.07522 17.4221 2.43371 17.1758C2.43441 17.1753 2.43536 17.1746 2.43656 17.1737C2.44426 17.168 2.46212 17.1544 2.48874 17.1322C2.54195 17.0878 2.63034 17.0091 2.74281 16.8904C2.96724 16.6535 3.29033 16.2544 3.62212 15.6461C4.28295 14.4346 5.00002 12.3527 5.00002 9C5.00002 7.14348 5.73751 5.36301 7.05027 4.05025ZM2.44381 17.169C2.44389 17.1689 2.44397 17.1688 2.44405 17.1688C2.44405 17.1688 2.44404 17.1688 2.44404 17.1688L2.44381 17.169ZM5.14934 17H18.8507C18.7746 16.8753 18.6982 16.7434 18.6221 16.6039C17.7829 15.0654 17 12.6473 17 9C17 7.67392 16.4732 6.40215 15.5356 5.46447C14.5979 4.52678 13.3261 4 12 4C10.6739 4 9.40216 4.52678 8.46448 5.46447C7.5268 6.40215 7.00002 7.67392 7.00002 9C7.00002 12.6473 6.21708 15.0654 5.37791 16.6039C5.30181 16.7434 5.22543 16.8753 5.14934 17Z"
                  fill="#777777"
                />
                <path
                  d="M21 4C21 5.65685 19.6569 7 18 7C16.3431 7 15 5.65685 15 4C15 2.34315 16.3431 1 18 1C19.6569 1 21 2.34315 21 4Z"
                  fill="#D84444"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 4C22 6.20914 20.2091 8 18 8C15.7909 8 14 6.20914 14 4C14 1.79086 15.7909 0 18 0C20.2091 0 22 1.79086 22 4ZM18 7C19.6569 7 21 5.65685 21 4C21 2.34315 19.6569 1 18 1C16.3431 1 15 2.34315 15 4C15 5.65685 16.3431 7 18 7Z"
                  fill="#D84444"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.76823 21.135C10.246 20.8579 10.8579 21.0205 11.135 21.4982C11.2229 21.6498 11.3491 21.7756 11.5009 21.863C11.6527 21.9504 11.8248 21.9965 12 21.9965C12.1752 21.9965 12.3473 21.9504 12.4991 21.863C12.6509 21.7756 12.7771 21.6498 12.865 21.4982C13.1421 21.0205 13.754 20.8579 14.2318 21.135C14.7095 21.4121 14.8721 22.0241 14.595 22.5018C14.3313 22.9564 13.9528 23.3338 13.4973 23.5961C13.0419 23.8584 12.5256 23.9965 12 23.9965C11.4744 23.9965 10.9581 23.8584 10.5027 23.5961C10.0472 23.3338 9.66872 22.9564 9.405 22.5018C9.12788 22.0241 9.2905 21.4121 9.76823 21.135Z"
                  fill="#777777"
                />
              </svg>
              <Flex alignItems="center">
                <Avatar src="/avatar.png" alt="avatar" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 10L12 14L16 10"
                    stroke="#777777"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Flex>
            </Flex>
          )}
        </HeaderInner>
      </Container>
    </header>
  )
}
