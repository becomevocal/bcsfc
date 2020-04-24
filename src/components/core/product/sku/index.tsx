/**
 * @class ProductTitle
 */

import './style.pcss'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  text: string
  classes: string
  styles: object
}

const ProductSKU: React.FunctionComponent<Props> = (props: Props) => {
  const { text, classes, styles } = props

  return React.createElement(
    'span',
    {
      className: `bc-product-sku ${classes}`,
      style: styles,
    },
    text
  )
}

export { ProductSKU }
