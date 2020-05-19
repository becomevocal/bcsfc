/**
 * @function ProductImage
 */

import './style.pcss'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  src: string
  altText?: string
  wrapperClasses?: string
  classes?: string
  styles?: object
}

const ProductImage: React.FunctionComponent<Props> = (props: Props) => {
  const { src, altText = '', wrapperClasses = '', classes = '', styles = {} } = props

  return (
    <figure
      aria-labelledby={altText}
      className={`bc-product-image-wrapper ${wrapperClasses}`}
      style={styles}
    >
      <img src={src} alt={altText} className={`bc-product-image ${classes}`} />
      <figcaption>{altText}</figcaption>
    </figure>
  )
}

export { ProductImage }
