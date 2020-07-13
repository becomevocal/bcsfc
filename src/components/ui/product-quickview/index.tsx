/**
 * @function ProductQuickView
 */

import * as React from 'react'

import {
  Brand,
  Description,
  ProductCondition,
  ProductImage,
  ProductPrice,
  ProductSKU,
  ProductTitle,
} from '../../core/product'
import * as Form from '../../core/product/form'
import { StarRating } from '../../utilities/star-rating'
import style from './product-detail-page.module.css'

interface ProductObject {
  name: string
  description: string
  condition: string
  price: number
  sale_price: number
  sku: string
  reviews_count: number
  reviews_rating_sum: number
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
  currencySettings?: object
  PDPClasses?: string
  PDPStyles?: object
}

const ProductQuickView: React.FunctionComponent<Props> = (props: Props) => {
  const { product, image, brand, currencySettings = {}, PDPClasses = '', PDPStyles = {} } = props

  const hasSale = product.sale_price !== 0

  const children = props.children ? (
    props.children
  ) : (
    <>
      <ProductImage
        src={image.url_standard}
        altText={image.meta}
        wrapperClasses={style.bcProductQuickView_image}
      />
      <div className={style.bcProductQuickView_content}>
        <ProductTitle text={product.name} tag="h1" classes={style.bcProductQuickView__title} />
        <ProductCondition text={product.condition} classes={style.bcProductQuickView__condition} />
        <Brand text={`Brand: ${brand.name}`} classes={style.bcProductQuickView__brand} />
        <ProductPrice
          tag="div"
          price={product.price}
          salePrice={product.sale_price}
          hasSalePrice={hasSale}
          currencySettings={currencySettings}
          classes={style.bcProductQuickView__price}
        />
        <StarRating
          className={style.bcProductQuickView__reviewTotal}
          ratingSum={product.reviews_rating_sum / product.reviews_count}
          prefix={`${product.reviews_count} Reviews: `}
        />
        <ProductSKU text={`SKU: ${product.sku}`} classes={style.bcProductQuickView__sku} />
        <Form.ProductForm product={product} action="https://#">
          <Form.ProductFormSubmit>Buy Now</Form.ProductFormSubmit>
        </Form.ProductForm>
        <Description text={product.description} />
      </div>
    </>
  )

  /**
   * The product card children component can be overwritten by adding your own children where ever you implement
   * this component.
   */
  return (
    <div className={`${style.bcProductQuickView} ${PDPClasses}`} style={PDPStyles}>
      {children}
    </div>
  )
}

export { ProductQuickView }
