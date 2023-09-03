import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import SessionProvider from '../src/auth/components/SessionProvider'
import components from '../src/mdx/components'
import theme from '../src/theming/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
