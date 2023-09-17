import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import SessionProvider from '../src/auth/components/SessionProvider'
import components from '../src/mdx/components'
import theme from '../src/theming/theme'
import UserProjectProvider from '../src/userProject/components/UserProjectProvider'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <UserProjectProvider>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </UserProjectProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}
