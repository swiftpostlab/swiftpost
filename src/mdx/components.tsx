import Typography from "@mui/material/Typography"
import type { MDXComponents } from "mdx/types"
import type { ComponentProps } from "react"
import React from "react"

type MarkdownComponents = MDXComponents
type TypographyNoVariantProps = Omit<ComponentProps<typeof Typography>, 'variant'>

const getTextualComponent = <MDXProps extends JSX.IntrinsicElements[keyof JSX.IntrinsicElements],>(variant: ComponentProps<typeof Typography>['variant']) => {
  const Text: React.FC<MDXProps> = ({ children, ...props }) => (
    <Typography variant={variant}>{children}</Typography>
  )
  return Text
}


const components: MarkdownComponents = {
  img: (props: JSX.IntrinsicElements['img']) => <img {...props} alt={props.alt}>{props.children}</img>,
  h1: getTextualComponent<JSX.IntrinsicElements['h1']>('h1'),
  h2: getTextualComponent<JSX.IntrinsicElements['h2']>('h2'),
  h3: getTextualComponent<JSX.IntrinsicElements['h3']>('h3'),
  h4: getTextualComponent<JSX.IntrinsicElements['h4']>('h4'),
  h5: getTextualComponent<JSX.IntrinsicElements['h5']>('h5'),
  h6: getTextualComponent<JSX.IntrinsicElements['h6']>('h6'),
  p: getTextualComponent<JSX.IntrinsicElements['p']>('body1'),
}

export default components