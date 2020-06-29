/**
 * @function ProductImage
 */

import * as React from 'react'

import style from './image.module.css'

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
      className={`${style.bcProductImageWrapper} ${wrapperClasses}`}
      style={styles}
    >
      <img src={src} alt={altText} className={`${style.bcProductImage} ${classes}`} />
      <figcaption>{altText}</figcaption>
    </figure>
  )
}

export { ProductImage }
