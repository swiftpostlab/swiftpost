
import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import siteConfig from '../config/main.json'
import HomeLayout, { HomeLayoutMeta } from '../src/layouts/HomeLayout'


interface Props {
  meta: HomeLayoutMeta
  source: Awaited<ReturnType<typeof serialize>>
}

const Index: React.FC<Props> = ({ meta, source }) => (
  <HomeLayout meta={meta}>
    <MDXRemote {...source} />
  </HomeLayout>
)
export default Index


export const getStaticProps: GetStaticProps<Props> = async () => {
  const index = siteConfig.routes.index
  const indexMeta: Props['meta'] = index.content.layoutMeta
  const mdxSource = await serialize(index.content.children)

  return {
    props: {
      meta: indexMeta,
      source: mdxSource,
    },
  }
}
