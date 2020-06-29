/**
 * @function ProductCondition
 */

import * as React from 'react'

import style from './condition.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  text: string
  tag?: string
  classes?: string
  styles?: object
}

const ProductCondition: React.FunctionComponent<Props> = (props: Props) => {
  const { text, tag = 'span', classes = '', styles = {} } = props

  return React.createElement(
    tag,
    {
      className: `${style.bcProductCondition} ${classes}`,
      style: styles,
    },
    text
  )
}

export { ProductCondition }
