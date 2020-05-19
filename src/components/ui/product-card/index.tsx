/**
 * @function ProductCard
 */

import './style.pcss'

import * as React from 'react'

import { Brand, ProductCondition, ProductImage, ProductTitle } from '../../core/product'

interface ProductObject {
  name: string
  condition: string
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
  cardClasses: string
  cardStyles: object
}

const ProductCard: React.FunctionComponent<Props> = (props: Props) => {
  const { product, image, brand, cardClasses, cardStyles } = props

  /**
   * The product card children component can be overwritten by adding your own children where ever you implement
   * this component.
   *
   * TODO: Move defaults to it's own method to clean up ternary.
   */
  return props.children ? (
    <div className={`bc-product-card ${cardClasses}`} style={cardStyles}>
      {props.children}
    </div>
  ) : (
    <div className={`bc-product-card ${cardClasses}`} style={cardStyles}>
      <ProductImage src={image.url_standard} altText={image.meta} />
      <ProductTitle text={product.name} tag="h3" />
      <ProductCondition text={product.condition} />
      <Brand text={brand.name} />
    </div>
  )
}

export { ProductCard }
