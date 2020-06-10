/**
 * @function ExampleComponent
 *
 * @props tag: string - HTML tag to use as the wrapper element.
 * @props text: string - Content to use as the child element of the wrapper element.
 * @props classes: string - A string of classes to apply to the wrapper element.
 * @props styles: object - A string of classes to apply to the wrapper element.
 *
 * @description Use this component as an example to create new components. You can import styles via
 *              CSS-Modules (supports: pcss, css, scss). Define your prop types via the typescript interface.
 *              Create a stateless FunctionComponent and return your JSX.
 */

import './style.css'

import * as React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  tag: string
  text: string
  classes: string
  styles: object
}

const ExampleComponent: React.FunctionComponent<Props> = (props: Props) => {
  const { tag, text, classes, styles } = props

  return React.createElement(tag, { className: classes, style: styles }, text)
}

export { ExampleComponent }
