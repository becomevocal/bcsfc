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
  currencySettings: object
}

interface StoreSettings {
  currency?: string
}

const CurrencyFormatter = (settings: StoreSettings, rawPrice: number): string => {
  const { currency } = settings

  const languageCode =
    typeof window !== 'undefined' ? window.navigator.language || 'en-US' : 'en-US'

  return new Intl.NumberFormat(languageCode, {
    style: 'currency',
    currency: currency || 'USD',
  }).format(rawPrice)
}

const Price: React.FunctionComponent<Props> = (props: Props) => {
  const {
    tag,
    price,
    salePrice,
    classes,
    styles,
    tagID,
    dataAttributes,
    hasSalePrice,
    currencySettings,
  } = props

  const classesArray: string[] = [classes]

  const SalePrice = React.createElement(
    'span',
    { className: 'bc-sale-price' },
    CurrencyFormatter(currencySettings, salePrice)
  )

  const OriginalPrice = React.createElement(
    'span',
    { className: 'bc-current-price' },
    CurrencyFormatter(currencySettings, price)
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

export { Price, CurrencyFormatter }
