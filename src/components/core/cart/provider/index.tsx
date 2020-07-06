/**
 * @function CartProvider
 */

import React from 'react'

import { CartItems } from '../cart-items'
import { Checkout } from '../checkout'
import { Subtotal } from '../subtotal'

interface Props extends React.HTMLProps<HTMLElement> {
  cart: object
  children: any
  styles?: object
  onUpdate: (method: string, id: string, payload: object) => void
  onCheckout?: (value: object) => boolean
}

const Provider: React.FunctionComponent<Props> = ({
  cart,
  styles = {},
  children = [<CartItems />, <Subtotal />, <Checkout />],
  onUpdate = () => {},
  onCheckout = (): boolean => true,
}: Props) => {
  return cart && cart.id ? (
    <div className={styles.cartProvider}>
      {
        React.Children.map(children, child =>
          child ? React.cloneElement(child, { cart, styles, onUpdate, onCheckout } as any) : null
        ) as any
      }
    </div>
  ) : null
}

export { Provider }
