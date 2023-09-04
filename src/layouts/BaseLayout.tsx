import { Stack } from '@mui/material'
import Head from 'next/head'
import React, { useContext } from 'react'
import { SessionContext } from '../auth/contexts/SessionContext'
import ActiveEditingLayout from './EditingLayout'

export interface BaseLayoutMeta {
  title: string
  subtitle?: string
}

interface Props {
  meta: BaseLayoutMeta,
  children?: React.ReactNode
}

const EmptyEditingLayout: typeof ActiveEditingLayout = ({ children }) => (<>{children}</>)

const BaseLayout: React.FC<Props> = ({ children }) => {
  const session = useContext(SessionContext)
  const EditingLayout = session.isActive() ? ActiveEditingLayout : EmptyEditingLayout

  return (
    <EditingLayout>
      <Head>
        <title>Fast Forward</title>
        <meta name="description" content="Generated with Fast Forward" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Stack minHeight="100vh">
          <Stack 
            width="100%" 
            height="100%" 
            maxWidth="1200px"
            marginX="0.5rem"
            flexGrow={1} 
            marginBottom="2.5rem"
            marginTop="1rem"
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                marginX: 'auto',
              },
            })}
          >
            {children}
          </Stack>
        </Stack>
      </main>
    </EditingLayout>
  )
}

export default BaseLayout