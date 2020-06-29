import React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  children: object | string
  onClick?: (value: object) => void
}

const ProductFormSubmit: React.FunctionComponent<Props> = ({
  children = ['Buy Now'], // TODO: Update once i18n is available
  onClick = () => {},
}) => (
  <button onClick={onClick} type="submit">
    {children}
  </button>
)

export { ProductFormSubmit }
