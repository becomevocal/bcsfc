interface CartItem {
  id: string
  extendedListPrice: number
  extendedSalePrice: number
  imageUrl: string
  name: string
  url: string
  brand: string
}

interface LineItems {
  physicalItems: CartItem[]
  customItems: CartItem[]
  digitalItems: CartItem[]
  giftCertificates: CartItem[]
}

interface CartType {
  id: string
  baseAmount: number
  cartAmount: number

  lineItems: LineItems
}
