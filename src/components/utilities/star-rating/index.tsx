/**
 * @function StarRating
 */

import * as React from 'react'

import style from './star-rating.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  ratingSum: number
  prefix?: string
  classes?: string
}

const StarRating: React.FunctionComponent<Props> = (props: Props) => {
  const { ratingSum, prefix = '', classes = '' } = props
  const ratePercentage = (ratingSum / 5) * 100
  const setRatingPercentage = { width: `${ratePercentage}%` }

  return (
    <div className={`${style.bcProductReview__RatingWrapper} ${classes}`}>
      {prefix.length > 0
        ? React.createElement('span', { className: style.bcProductReview__Prefix }, prefix)
        : ''}
      <div className={style.bcProductReview__Rating}>
        <div className={style.bcProductReview__RatingTop} style={setRatingPercentage}>
          {[...Array(5)].map(() => (
            <span>★</span>
          ))}
        </div>
        <div className={style.bcProductReview__RatingBottom}>
          {[...Array(5)].map(() => (
            <span>★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { StarRating }
