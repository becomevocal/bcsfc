import * as React from 'react'

import { ProductReview } from '../../core/product/review'
import style from './reviews.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  reviews: object
  tag?: string
  classes?: string
  tagID?: string
  styles?: object
  dataAttributes?: object
}

const ReviewList = (reviews: object): object => {
  const reviewList: object[] = []

  Object.values(reviews).forEach(review => {
    reviewList.push(<ProductReview review={review} />)
  })

  return reviewList
}

const ProductReviews: React.FunctionComponent<Props> = (props: Props) => {
  const { reviews, tag = 'div', classes = '', tagID = '', styles = {}, dataAttributes = {} } = props

  return React.createElement(
    tag,
    {
      id: tagID,
      className: `${style.bcProductReviews} ${classes}`,
      style: styles,
      ...dataAttributes,
    },
    props.children ? props.children : ReviewList(reviews)
  )
}

export { ProductReviews }
