/**
 * @function Brand
 */

import * as React from 'react'

import style from './brand.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  text: string
  tag?: string
  classes?: string
  styles?: object
}

const Brand: React.FunctionComponent<Props> = (props: Props) => {
  const { text, tag = 'span', classes = '', styles = {} } = props

  return React.createElement(
    tag,
    {
      className: `${style.bcProductBrand} ${classes}`,
      style: styles,
    },
    text
  )
}

export { Brand }
