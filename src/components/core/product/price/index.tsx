/**
 * @function Price
 */

import './style.pcss'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  price: number
  salePrice: number
  tag: string
  classes: string
  tagID: string
  styles: object
  dataAttributes: object
  hasSalePrice: boolean
}

const Price: React.FunctionComponent<Props> = (props: Props) => {
  const { tag, price, salePrice, classes, styles, tagID, dataAttributes, hasSalePrice } = props
  const classesArray: string[] = [classes]

  const insertDecimal = (num: number): string => (num / 100).toFixed(2).toString()

  const SalePrice = React.createElement(
    'span',
    { className: 'bc-sale-price' },
    insertDecimal(salePrice)
  )

  const OriginalPrice = React.createElement(
    'span',
    { className: 'bc-current-price' },
    insertDecimal(price)
  )

  if (hasSalePrice) {
    classesArray.push('bc-has-sale-price')
  }

  return React.createElement(
    tag,
    {
      id: tagID,
      className: classesArray.join(' '),
      style: styles,
      ...dataAttributes,
    },
    [SalePrice, OriginalPrice]
  )
}

export { Price }
