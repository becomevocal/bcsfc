/**
 * @function ProductCondition
 */

import './style.pcss'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  tag?: string
  text?: string
  classes?: string
  styles?: object
}

const ProductCondition: React.FunctionComponent<Props> = (props: Props) => {
  const { tag = 'span', text = '', classes = '', styles = {} } = props

  return React.createElement(
    tag,
    {
      className: `bc-product-condition ${classes}`,
      style: styles,
    },
    text
  )
}

export { ProductCondition }
