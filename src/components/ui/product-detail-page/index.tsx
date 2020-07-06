/**
 * @function ProductDetailPage
 */

import * as React from 'react'

import {
  Brand,
  Description,
  ProductCondition,
  ProductImage,
  ProductPrice,
  ProductSKU,
  ProductSpecs,
  ProductTitle,
} from '../../core/product'
import * as Form from '../../core/product/form'
import { ProductReviews } from '../../ui/product-reviews'
import { StarRating } from '../../utilities/star-rating'
import style from './product-detail-page.module.css'

interface ProductObject {
  name: string
  description: string
  condition: string
  price: number
  sale_price: number
  sku: string
  weight: number
  width: number
  height: number
  depth: number
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
  reviews?: object
  specs?: string[]
  currencySettings?: object
  PDPClasses?: string
  PDPStyles?: object
}

const ProductDetailPage: React.FunctionComponent<Props> = (props: Props) => {
  const {
    product,
    image,
    brand,
    currencySettings = {},
    specs = [],
    reviews = {},
    PDPClasses = '',
    PDPStyles = {},
  } = props

  const hasSale = product.sale_price !== 0

  const children = props.children ? (
    props.children
  ) : (
    <>
      <ProductImage
        src={image.url_standard}
        altText={image.meta}
        wrapperClasses={style.bcProductDetailPage_image}
      />
      <div className={style.bcProductDetailPage_content}>
        <ProductTitle text={product.name} tag="h1" classes={style.bcProductDetailPage__title} />
        <ProductCondition text={product.condition} classes={style.bcProductDetailPage__condition} />
        <Brand text={`Brand: ${brand.name}`} classes={style.bcProductDetailPage__brand} />
        <ProductPrice
          tag="div"
          price={product.price}
          salePrice={product.sale_price}
          hasSalePrice={hasSale}
          currencySettings={currencySettings}
          classes={style.bcProductDetailPage__price}
        />
        <StarRating
          className={style.bcProductDetailPage__reviewTotal}
          ratingSum={product.reviews_rating_sum / product.reviews_count}
          prefix={`${product.reviews_count} Reviews: `}
        />
        <ProductSKU text={`SKU: ${product.sku}`} classes={style.bcProductDetailPage__sku} />
        <Form.ProductForm product={product} action="https://#">
          <Form.ProductFormSubmit>Buy Now</Form.ProductFormSubmit>
        </Form.ProductForm>
      </div>
      <div className={style.bcProductDetailPage__details}>
        <Description text={product.description} />
        <ProductSpecs textObject={product} customFields={specs} />
        <div className={style.bcProductDetailPage__reviews}>
          <h3 className="h3">{product.reviews_count} Reviews</h3>
          <ProductReviews reviews={reviews} />
        </div>
      </div>
    </>
  )

  /**
   * The product card children component can be overwritten by adding your own children where ever you implement
   * this component.
   */
  return (
    <div className={`${style.bcProductDetailPage} ${PDPClasses}`} style={PDPStyles}>
      {children}
    </div>
  )
}

export { ProductDetailPage }
