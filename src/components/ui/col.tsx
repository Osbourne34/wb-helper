import styled from 'styled-components'

const width = (width?: number) => {
  switch (width) {
    case 1:
      return '20%'
    case 2:
      return '40%'
    case 3:
      return '60%'
    case 4:
      return '80%'
    case 5:
      return '100%'
    default:
      return 'auto'
  }
}

export const Col = styled.div<{ span?: 1 | 2 | 3 | 4 | 5 }>`
  width: ${(props) => width(props.span)};
`
