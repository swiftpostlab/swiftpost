import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import BaseLayout, { BaseLayoutMeta } from './BaseLayout'

const PHOTOS_PATH = '/pictures/'
const DEFAULT_PHOTOS_EXTENSION = 'jpeg'

const getPhoto = (fileName: string): string => (
  PHOTOS_PATH + (fileName.includes('.') ? fileName : fileName + '.' + DEFAULT_PHOTOS_EXTENSION)
)

export interface GalleryLayoutMeta extends BaseLayoutMeta {
  subtitle?: string,
  photos: {
    title?: string,
    caption?: string,
    fileName: string,
  }[]
}

interface Props {
  meta: GalleryLayoutMeta
}

const GalleryLayout: React.FC<Props> = ({ meta }) => (
  <BaseLayout meta={meta}>
    <Stack paddingY={2} paddingX="0.5rem">
      <Typography variant='h1' textAlign="left">
        <Link
          href={'/'}
          rel="noopener noreferrer"
        >
          <ArrowBackIosNewIcon/>
        </Link>
        {meta.title}
      </Typography>
      <Typography variant='subtitle1' textAlign="left">
        {meta.subtitle}
      </Typography>
    </Stack>
    <Stack spacing='2rem' paddingX="0.5rem">
      {meta.photos.map(({ title, caption, fileName }, index) => (
        <Box key={`${fileName}-${index}`}>
          <img 
            src={getPhoto(fileName)} 
            alt={title}
            loading="lazy"
            width="100%"
          />
          {title && <Typography variant='h4' textAlign="left">
            {title}
          </Typography>}
          {caption &&
          <Typography variant='subtitle2' textAlign="left">
            {caption}
          </Typography>
          }
        </Box>
      ))}
    </Stack>
  </BaseLayout>
)

export default GalleryLayout