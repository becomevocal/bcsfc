/**
 * @function ProductPrice
 */

import * as React from 'react'

import style from './price.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  price: number
  salePrice: number
  currencySettings: object
  tag?: string
  classes?: string
  tagID?: string
  styles?: object
  dataAttributes?: object
  hasSalePrice?: boolean
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

const ProductPrice: React.FunctionComponent<Props> = (props: Props) => {
  const {
    price,
    salePrice,
    currencySettings,
    tag = 'span',
    classes = '',
    styles = {},
    tagID = '',
    dataAttributes = {},
    hasSalePrice = false,
  } = props

  const classesArray: string[] = [classes]

  let SalePrice = null

  if (salePrice !== 0) {
    SalePrice = React.createElement(
      'span',
      { className: style.bcSalePrice },
      CurrencyFormatter(currencySettings, salePrice)
    )
  }

  const OriginalPrice = React.createElement(
    'span',
    { className: style.bcCurrentPrice },
    CurrencyFormatter(currencySettings, price)
  )

  if (hasSalePrice) {
    classesArray.push(style.bcHasSalePrice)
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

export { ProductPrice, CurrencyFormatter }
