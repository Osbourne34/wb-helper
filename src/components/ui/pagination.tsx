import styled from 'styled-components'
import { Flex } from './flex'

const paginationPages = [0, 1, 2, 3, 4]

const PaginationButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  padding: 20px 24px;
  border: ${(props) =>
    props.active ? '1px solid var(--light-border)' : '1px solid var(--border)'};
  border-radius: 10px;

  font-size: 14px;

  cursor: pointer;
`

interface PaginationProps {
  page: number
  setPage: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
  const { page, setPage } = props

  const handleChangePage = (page: number) => {
    setPage(page)
  }

  return (
    <Flex gap="20px" justifyContent="center">
      {paginationPages.map((num) => (
        <PaginationButton
          active={num + 1 === page}
          onClick={() => handleChangePage(num + 1)}
          key={num}
        >
          {num + 1}
        </PaginationButton>
      ))}
    </Flex>
  )
}
