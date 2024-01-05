import styled from 'styled-components'
import { Paper } from '../ui/paper'
import { prioritiesData } from './data'

const Title = styled.h3`
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
`

const Priority = styled.div`
  padding: 10px 0;
  min-height: 60px;
  display: flex;
  gap: 20px;
  align-items: center;

  &:nth-child(even) {
    border: 1px solid var(--light-border);
    border-radius: 10px;
  }
`

const Id = styled.div`
  width: 50px;
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
`

const Text = styled.div`
  font-size: 14px;
`

export const Priorities = () => {
  return (
    <Paper>
      <Title>Приоритет категорий</Title>

      {prioritiesData.map((p) => (
        <Priority key={p.id}>
          <Id>{p.id}</Id>
          <Text>{p.title}</Text>
        </Priority>
      ))}
    </Paper>
  )
}
