/**
 * @class ProductSpecs
 */

import './style.pcss'

import mapValues from 'lodash/mapValues'
import * as React from 'react'

interface Measurements {
  weight: number
  width: number
  height: number
  depth: number
}

interface CustomFields {
  name: string
  value: string
}

interface Props extends React.HTMLProps<HTMLElement> {
  tag: string
  textObject: Measurements
  customFields: string[]
  classes: string
  styles: object
}

const ProductSpecs: React.FunctionComponent<Props> = (props: Props) => {
  const { tag = 'ul', textObject, customFields, classes, styles } = props
  const mapFields = mapValues(customFields, (values: CustomFields) => [values.name, values.value])

  const specsObject: object = {
    weight: textObject.weight,
    width: textObject.width,
    depth: textObject.depth,
    height: textObject.height,
    custom: { ...mapFields },
  }

  const specs: object[] = []

  const newElement = (label: string, value: string): object => {
    return (
      <li className="bc-product-spec">
        <span className="bc-product-spec__label">{label}: </span>
        <span className="bc-product-spec__value">{value}</span>
      </li>
    )
  }

  Object.entries(specsObject).forEach(([key, value]) => {
    if (!value || value.length === 0) {
      return
    }

    if (key === 'custom') {
      Object.values(value).forEach((customValue: string) => {
        specs.push(newElement(customValue[0], customValue[1]))
      })
      return
    }

    specs.push(newElement(key, value))
  })

  return React.createElement(
    tag,
    {
      className: `bc-product-specs ${classes}`,
      style: styles,
    },
    ...specs
  )
}

export { ProductSpecs }
