import { ReactNode } from 'react'
import { Header } from './header'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
