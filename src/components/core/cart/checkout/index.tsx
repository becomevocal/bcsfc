import React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  children: object | string
  onClick?: (value: object) => void
  styles?: any
}

const Checkout: React.FunctionComponent<Props> = ({
  children = ['Checkout'], // TODO: Update once i18n is available
  onClick = () => {},
  styles = {},
}) => (
  <button className={styles.cartCheckout} onClick={onClick} type="submit">
    {children}
  </button>
)

export { Checkout }
