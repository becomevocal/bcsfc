/**
 * @function ProductCard
 */

import * as React from 'react'

import style from './product-grid.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  cardStyles: object
}

const ProductGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { cardStyles = {} } = props

  /**
   *
   */
  return (
    <div className={style.bcProductGridWrapper} style={cardStyles}>
      {props.children}
    </div>
  )
}

export { ProductGrid }
