import { serialize as mdxSerialize } from 'next-mdx-remote/serialize'
import { rehypePlugins, remarkPlugins } from '../../next.config.mjs'

export const serialize = async (source: string) => (
  await mdxSerialize(
    source,
    {
      mdxOptions: {
        remarkPlugins,
        rehypePlugins,
        format: 'mdx',
      },
    }
  )
)