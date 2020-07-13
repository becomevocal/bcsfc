import * as React from 'react'

import { StarRating } from '../../../utilities/star-rating'
import style from './review.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  review: ReviewData
  tag?: string
  classes?: string
  tagID?: string
  styles?: object
  dataAttributes?: object
}

interface ReviewData {
  date_created: string
  date_modified: string
  date_reviewed: string
  email: string
  id: number
  name: string
  rating: number
  status: string
  text: string
  title: string
}

const ProductReview: React.FunctionComponent<Props> = (props: Props) => {
  const { review, tag = 'div', classes = '', tagID = '', styles = {}, dataAttributes = {} } = props

  const reviewContent = props.children
    ? props.children
    : [
        <h4 className={style.bcProductReview__Title}>{review.title}</h4>,
        <StarRating ratingSum={review.rating} classes={style.bcProductReview__RatingStars} />,
        <p className={style.bcProductReview__Meta}>
          Posted by {review.name} on {`${new Date(review.date_created).toLocaleDateString()}`}
        </p>,
        <p className={style.bcProductReview__Text}>{review.text}</p>,
      ]

  return React.createElement(
    tag,
    {
      id: tagID,
      className: `${style.bcProductReview} ${classes}`,
      style: styles,
      ...dataAttributes,
    },
    reviewContent
  )
}

export { ProductReview }
