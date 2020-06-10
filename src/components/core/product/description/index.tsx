/**
 * @function Description
 */

import * as React from 'react'

import style from './description.module.css'

interface Props extends React.HTMLProps<HTMLElement> {
  text: string
  tag?: string
  classes?: string
  styles?: object
}

const Description: React.FunctionComponent<Props> = (props: Props) => {
  const { text, tag = 'div', classes = '', styles = {} } = props

  // eslint-disable-next-line react/no-danger-with-children
  return React.createElement(
    tag,
    {
      className: `${style.bcProductDescription} ${classes}`,
      style: styles,
      dangerouslySetInnerHTML: { __html: text },
    },
    ''
  )
}

export { Description }
