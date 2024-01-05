import styled from 'styled-components'

export const Title = styled.h2<{ center?: boolean }>`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  text-align: ${(props) => (props.center ? 'center' : '')};
`
