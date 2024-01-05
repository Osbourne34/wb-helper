import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '@/store/store'

import GlobalStyle from '@/styles/global'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default App
