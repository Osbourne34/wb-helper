import styled from 'styled-components'

export const Button = styled.button<{ fullwidth?: boolean }>`
  background-color: ${(props) =>
    props.disabled ? 'var(--gray)' : 'var(--yellow)'};
  border: none;

  padding: 18px 10px;
  border-radius: 4px;

  cursor: pointer;

  width: ${(props) => (props.fullwidth ? '100%' : '')};
`
