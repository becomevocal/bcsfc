import React from 'react'

import { ProductPrice } from '../../product/price'

interface Props extends React.HTMLProps<HTMLElement> {
  cart: object
  styles?: any
}

const Subtotal: React.FunctionComponent<Props> = ({ cart, styles = {} }) => (
  <div className={styles.cartSubtotal}>
    Subtotal:
    <ProductPrice
      price={cart.cartAmount}
      classes={styles.cartSubtotalText}
      salePrice={0}
      hasSalePrice={false}
      currencySettings={{ currency: cart.currency.code }}
    />
  </div>
)

export { Subtotal }
