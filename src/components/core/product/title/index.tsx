/**
 * @class ProductTitle
 */

import * as React from 'react'

import style from './title.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  text: string
  tag?: string
  classes?: string
  tagID?: string
  styles?: object
  dataAttributes?: object
}

const ProductTitle: React.FunctionComponent<Props> = (props: Props) => {
  const { tag = 'h2', text, classes = '', tagID = '', styles = {}, dataAttributes = {} } = props

  return React.createElement(
    tag,
    {
      id: tagID,
      className: `${style.bcProductTitle} ${classes}`,
      style: styles,
      ...dataAttributes,
    },
    text
  )
}

export { ProductTitle }
