import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import components from '../src/mdx/components'
import theme from '../src/theming/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
