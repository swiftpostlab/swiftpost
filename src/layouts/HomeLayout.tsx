import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import BaseLayout, { BaseLayoutMeta } from './BaseLayout'

export interface HomeLayoutMeta extends BaseLayoutMeta {
  links: {
    title: string,
    subtitle: string,
    href: string,
  }[]
}

interface Props {
  meta: HomeLayoutMeta
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = ({ meta, children }) => (
  <BaseLayout meta={meta}>
    <Stack paddingY={2}>
      <Typography variant='h1' textAlign="center">
        {meta.title}
      </Typography>
    </Stack>
    <Stack 
      flex={1}
    >
      {children}
    </Stack>
    <Stack spacing="1.5rem">
      {meta.links.map(({ title, subtitle, href }, index) => (
        <Link
          key={index}
          href={href}
        >
          <Stack>
            <Stack direction="row" alignItems="center">
              <Typography variant='h5'>
                {title}
              </Typography>
              <ArrowForwardIosNewIcon />
            </Stack>
            <Typography variant='subtitle2'>
              {subtitle}
            </Typography>
          </Stack>
        </Link>
      ))}
    </Stack>
    
  </BaseLayout>
)

export default HomeLayout