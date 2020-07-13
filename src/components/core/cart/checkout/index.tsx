import React from 'react'

interface Props extends React.HTMLProps<HTMLElement> {
  children: object | string
  onCheckout?: (value: object) => void
  styles?: any
}

const Checkout: React.FunctionComponent<Props> = ({
  children = ['Checkout'], // TODO: Update once i18n is available
  onCheckout = () => {},
  styles = {},
}) => (
  <button className={styles.cartCheckout} onCheckout={onCheckout} type="submit">
    {children}
  </button>
)

export { Checkout }
