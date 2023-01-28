
import { GetStaticProps } from 'next'
import React from 'react'
import siteConfig from '../config/main.json'
import HomeLayout, { HomeLayoutMeta } from '../src/layouts/HomeLayout'


interface Props {
  meta: HomeLayoutMeta
}

const Index: React.FC<Props> = ({ meta }) => (
  <HomeLayout meta={meta}>
    <a
      href="https://github.com/fcole90/fast-forward"
      target="_blank"
      rel="noopener noreferrer"
    >
      Fast Forward
    </a>
  </HomeLayout>
)
export default Index


export const getStaticProps: GetStaticProps<Props> = async () => {
  const index = siteConfig.routes.index
  const indexMeta: Props['meta'] = index.content.layoutMeta
  
  return {
    props: {
      meta: indexMeta,
    },
  }
}
