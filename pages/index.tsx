
import React from 'react'
import HomeLayout, { HomeLayoutMeta } from '../src/layouts/HomeLayout'

export const meta: HomeLayoutMeta = {
  title: 'Fast Forward',
  links: [],
}

const Index: React.FC = () => (
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
