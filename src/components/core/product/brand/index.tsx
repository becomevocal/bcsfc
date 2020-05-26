/**
 * @function Brand
 */

import './style.pcss'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  tag: string
  text: string
  classes: string
  styles: object
}

const Brand: React.FunctionComponent<Props> = (props: Props) => {
  const { tag, text, classes, styles } = props

  return React.createElement(
    tag,
    {
      className: `bc-product-brand ${classes}`,
      style: styles,
    },
    text
  )
}

export { Brand }
