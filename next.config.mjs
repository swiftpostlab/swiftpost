import mdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // For using `MDXProvider`.
    providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
