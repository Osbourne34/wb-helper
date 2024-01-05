import styled from 'styled-components'

export const Stack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '20px'};
`
