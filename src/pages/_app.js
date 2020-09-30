import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppGlobalStyle from 'src/GlobalStyle/App'
import theme from 'src/theme'
import { wrapper } from 'src/store'

const App = props => {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <AppGlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)
