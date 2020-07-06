import React from 'react'

import { ProductImage, ProductPrice, ProductTitle } from '../../product'
import { CartItem, CartType } from '../types'

interface Props extends React.HTMLProps<HTMLElement> {
  cart: CartType
  item: CartItem
  styles?: any
  onUpdate: (method: string, id: string, payload: object) => void
}

const Item: React.FunctionComponent<Props> = ({ item, cart, styles = {}, onUpdate }) => {
  const onChange = e => {
    const quantity = e.target.value * 1
    const newItem = {
      quantity,
      productId: item.productId,
      variantId: item.variantId,
    }
    const method = quantity === 0 ? 'delete' : 'put'
    onUpdate(method, item.id, newItem)
  }

  return (
    <div className={styles.cartItem}>
      <a href={item.url}>
        <ProductImage src={item.imageUrl} />
      </a>
      <a href={item.url}>
        <ProductTitle text={item.name} tag="h3" />
      </a>
      <input type="number" onChange={onChange} value={item.quantity} />
      <div className={styles.cartItemPrices}>
        <ProductPrice
          price={item.salePrice}
          salePrice={0}
          hasSalePrice={false}
          currencySettings={{ currency: cart.currency.code }}
        />{' '}
        each
        <div>
          <ProductPrice
            price={item.extendedSalePrice}
            classes={styles.cartItemTotal}
            salePrice={0}
            hasSalePrice={false}
            currencySettings={{ currency: cart.currency.code }}
          />
        </div>
        <div>
          <button type="type" onClick={onChange}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export { Item }
