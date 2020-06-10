/**
 * @class ProductSpecs
 */

import mapValues from 'lodash/mapValues'
import * as React from 'react'

import style from './specs.module.css'

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
  tag?: string
  textObject: Measurements
  customFields?: string[]
  classes?: string
  styles?: object
}

const ProductSpecs: React.FunctionComponent<Props> = (props: Props) => {
  const { tag = 'ul', textObject, customFields = [], classes = '', styles = {} } = props
  const mapFields = mapValues(customFields, (values: CustomFields) => [values.name, values.value])

  const specsData: object = {
    weight: textObject.weight,
    width: textObject.width,
    depth: textObject.depth,
    height: textObject.height,
    custom: { ...mapFields },
  }

  const specsObj: object[] = []

  const newElement = (label: string, value: string): object => {
    return (
      <li className={style.bcProductSpec}>
        <span className={style.bcProductSpecLabel}>{label}: </span>
        <span className={style.bcProductSpecValue}>{value}</span>
      </li>
    )
  }

  Object.entries(specsData).forEach(([key, value]) => {
    if (!value || value.length === 0) {
      return
    }

    if (key === 'custom') {
      Object.values(value).forEach((customValue: string) => {
        specsObj.push(newElement(customValue[0], customValue[1]))
      })
      return
    }

    specsObj.push(newElement(key, value))
  })

  return React.createElement(
    tag,
    {
      className: `${style.bcProductSpec} ${classes}`,
      style: styles,
    },
    ...specsObj
  )
}

export { ProductSpecs }
