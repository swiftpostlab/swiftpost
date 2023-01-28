import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export const remarkPlugins = [
  remarkGfm,
]

export const rehypePlugins = []
 

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    // For using `MDXProvider`.
    providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
