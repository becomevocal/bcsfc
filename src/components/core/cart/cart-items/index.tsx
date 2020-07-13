import React from 'react'

import { CartType } from '../types'
import { Item } from './item'

interface Props extends React.HTMLProps<HTMLElement> {
  cart: CartType
  onUpdate: (method: string, id: string, payload: object) => void
  styles?: any
  ItemComponent?: any
}

const CartItems: React.FunctionComponent<Props> = ({
  cart,
  styles = {},
  onUpdate,
  ItemComponent = Item,
}) => {
  const { lineItems } = cart
  const allItems = [
    ...lineItems.physicalItems,
    ...lineItems.digitalItems,
    ...lineItems.customItems,
    ...lineItems.giftCertificates,
  ]
  return (
    <div className={styles.cartItems}>
      {allItems.map(item => (
        <ItemComponent key={item.id} item={item} cart={cart} styles={styles} onUpdate={onUpdate} />
      ))}
    </div>
  )
}

export { CartItems }
