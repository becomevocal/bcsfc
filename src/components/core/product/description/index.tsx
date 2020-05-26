/**
 * @function Description
 */

import './style.pcss'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  tag: string
  classes: string
  styles: object
  text: string
}

const Description: React.FunctionComponent<Props> = (props: Props) => {
  const { tag, classes, styles, text } = props

  // eslint-disable-next-line react/no-danger-with-children
  return React.createElement(
    tag,
    {
      className: `bc-product-description ${classes}`,
      style: styles,
      dangerouslySetInnerHTML: { __html: text },
    },
    ''
  )
}

export { Description }
