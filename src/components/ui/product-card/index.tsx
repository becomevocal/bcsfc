/**
 * @function ProductCard
 */

import * as React from 'react'

import {
  Brand,
  ProductCondition,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from '../../core/product'
import style from './product-card.module.css'

interface ProductObject {
  name: string
  condition: string
  price: number
  sale_price: number
}

interface ImageObject {
  url_standard: string
  meta: string
}

interface BrandObject {
  name: string
}

interface Props extends React.HTMLProps<HTMLElement> {
  product: ProductObject
  image: ImageObject
  brand: BrandObject
  currencySettings: object
  cardClasses?: string
  cardStyles?: object
}

const ProductCard: React.FunctionComponent<Props> = (props: Props) => {
  const { product, image, brand, currencySettings, cardClasses = '', cardStyles = {} } = props
  const hasSale = product.sale_price !== 0
  const children = props.children ? (
    props.children
  ) : (
    <>
      <ProductImage src={image.url_standard} altText={image.meta} />
      <ProductTitle text={product.name} tag="h3" />
      <ProductCondition text={product.condition} />
      <Brand text={brand.name} />
      <ProductPrice
        price={product.price}
        salePrice={product.sale_price}
        hasSalePrice={hasSale}
        currencySettings={currencySettings}
      />
    </>
  )

  /**
   * The product card children component can be overwritten by adding your own children where ever you implement
   * this component.
   */
  return (
    <div className={`${style.bcProductCard} ${cardClasses}`} style={cardStyles}>
      {children}
    </div>
  )
}

export { ProductCard }
