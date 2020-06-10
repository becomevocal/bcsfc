/**
 * @function ProductSKU
 */

import * as React from 'react'

import style from './sku.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  text: string
  tag?: string
  classes?: string
  styles?: object
}

const ProductSKU: React.FunctionComponent<Props> = (props: Props) => {
  const { text, tag = 'span', classes = '', styles = {} } = props

  return React.createElement(
    tag,
    {
      className: `${style.bcProductSku} ${classes}`,
      style: styles,
    },
    text
  )
}

export { ProductSKU }
