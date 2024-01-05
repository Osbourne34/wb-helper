import { ReactNode } from 'react'
import styled from 'styled-components'

interface FlexProps {
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  flexWrap?: string
  gap?: string
  children?: ReactNode
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => props.alignItems || ''};
  flex-direction: ${(props) => props.flexDirection || ''};
  flex-wrap: ${(props) => props.flexWrap || ''};
  gap: ${(props) => props.gap || ''};
`

export const Flex = ({ children, ...props }: FlexProps) => {
  return <FlexContainer {...props}>{children}</FlexContainer>
}
