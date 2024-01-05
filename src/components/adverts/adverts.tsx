import { useGetAdvertsQuery } from '@/store/api/adverts'
import { useAppSelector } from '@/store/hooks'
import styled from 'styled-components'
import { Pagination } from '../ui/pagination'
import { useState } from 'react'

const StyledTable = styled.table`
  border-collapse: collapse;

  thead tr {
    background-color: white;
  }

  thead th {
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
  }

  thead th:first-child {
    border-radius: 10px 0 0 10px;
  }

  thead th:last-child {
    border-radius: 0 10px 10px 0;
  }

  tbody tr:nth-child(even) {
    background-color: white;
  }

  tbody td {
    padding: 10px;
    font-size: 14px;
  }

  tbody td:first-child {
    border-radius: 10px 0 0 10px;
  }

  tbody td:last-child {
    border-radius: 0 10px 10px 0;
  }
`

const Img = styled.img`
  width: 50px;
  height: 60px;
`

const Price = styled.div`
  background-color: var(--light-yellow);
  width: 192px;
  padding: 10px 10px;
  border-radius: 10px;
`

export const Adverts = () => {
  const { input, region_id } = useAppSelector((state) => state.filter)
  const [page, setPage] = useState(1)

  const {
    data: adverts,
    isFetching,
    isSuccess,
    error,
    isError,
  } = useGetAdvertsQuery(
    {
      input: input,
      region_id: region_id,
      page: page,
      type: 6,
    },
    {
      skip: !input.length,
    }
  )

  return (
    <>
      {isFetching && <p>Загрузка...</p>}

      {isError && (
        <p>
          {
            //@ts-ignore
            error.data.error
          }
        </p>
      )}
      {!isError && !isFetching && isSuccess && (
        <>
          <StyledTable>
            <thead>
              <tr>
                <th>Место</th>
                <th>Фото</th>
                <th>Артикул</th>
                <th>Позиция</th>
                <th>Ставка</th>
                <th>Категория</th>
                <th>Доставка</th>
              </tr>
            </thead>
            <tbody>
              {adverts?.bets.map((bet) => (
                <tr key={bet.advert_id}>
                  <td align="center">{bet.position_on_page}</td>
                  <td>
                    <Img src={bet.image} alt="no image" />
                  </td>
                  <td align="center">{bet.article}</td>
                  <td align="center">{bet.position}</td>
                  <td align="center">
                    <Price>{bet.cpm} ₽</Price>
                  </td>
                  <td align="center">{bet.subject.name}</td>
                  <td align="center">{bet.delivery_time} ч</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>

          <Pagination page={page} setPage={setPage} />
        </>
      )}
    </>
  )
}
