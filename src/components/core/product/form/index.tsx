/**
 * @function ProductForm
 */

import React, { useState } from 'react'

import { ProductFormSubmit } from './submit'

interface Props extends React.HTMLProps<HTMLElement> {
  product: object
  action: string
  children: any

  onChange?: (value: object) => void
  onSubmit?: (value: object) => boolean
  method?: string
  classes?: string
  styles?: object
}

const ProductForm: React.FunctionComponent<Props> = ({
  product,
  action,
  method = 'POST',
  classes = '',
  styles = {},
  children = [],
  onChange = () => {},
  onSubmit = (): boolean => true,
}: Props) => {
  const [formData, setFormData] = useState({})
  const onFormChange = (values: object): void => {
    const data = { ...formData, ...values }
    setFormData(data)
    onChange(data)
  }

  const onFormInit = (defaults: object): void => {
    setFormData(defaults)
  }

  const submit = (e: any): boolean => {
    const valid = onSubmit(formData)

    if (!valid && e) {
      e.preventDefault()
    }

    return valid
  }

  return (
    <form
      action={action}
      method={method}
      encType="multipart/form-data"
      className={`bc-product-form ${classes}`}
      onSubmit={submit}
      style={styles}
    >
      {
        React.Children.map(children, child =>
          child ? React.cloneElement(child, { product, formData, onFormChange, onFormInit } as any) : null
        ) as any
      }
    </form>
  )
}

export { ProductForm, ProductFormSubmit }
