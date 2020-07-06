# bigcommerce-react-theme-components

> BigCommerce theme components built for Preact and React

[![NPM](https://img.shields.io/npm/v/bigcommerce-react-theme-components.svg)](https://www.npmjs.com/package/bigcommerce-react-theme-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

BigCommerce React Theme Components are a set of core building blocks used to create a UI for your headless BigCommerce app or theme.
Use some of the pre-made UI components found in the `ui/` directory or build your own using the components in the `core/` directory.

See: [BigCommerce Developer Docs](https://developer.bigcommerce.com/).

1. Create an API account from your store dashboard.
2. Connect your app or theme to the BigCommerce API using your credentials.
3. Send or retrieve data to/from your store and use it into your React app theme components.

## Install

For now, until we deploy a package to NPM, you'll want to use the `link` feature for npm.
1. Copy this repo into a directory of your choosing within your project.
2. in your `package.json`, add an entry under `dependencies` for `"storefront-ui-components": "link:../YOUR/PATH/TO/THE/REPO"`
  2.1 For example, since our `example` app is in the root dir, the link to the package in that `package.json` is `"link:.."`
3. run
```bash
yarn install
```
4. Now you can import components from the library using `import { Core, Widget } from 'storefront-ui-components'`

## Usage

```tsx
import * as React from 'react'

import { Core, Widget } from 'storefront-ui-components'

class Example extends React.Component {
  render () {
    return (
        <Core.ProductTitle
          tag="h1"
          componentClass="bc-example-product-title"
          componentID="123-title"
          text='Example Product'
          dataAttributes={{['data-title']: 'bc-title-component', ['aria-label']: 'Example Product'}}
        />
    )
  }
}
```

## Components
`?` Optional props for each Component
`**` Component accepts children element overrides

### Core Components

#### ProductTitle
**Props:**
```
tag?: string default: h2
text: string
classes?: string
tagID?: string
styles?: object
dataAttributes?: object
```

#### ProductDescription
**Props:**
```
tag?: string default: div
text: string
classes?: string
styles?: object
```

#### ProductImage
**Props:**
```
src: string
altText?: string
wrapperClasses?: string
classes?: string
styles?: object
```

#### ProductPrice
**Props:**
```
price: number
salePrice: number
currencySettings: object
tag?: string default: span
classes?: string
tagID?: string
styles?: object
dataAttributes?: object
hasSalePrice?: boolean default: false
```

#### ProductBrand
**Props:**
```
text: string
tag?: string default: span
classes?: string
styles?: object
```

#### ProductCondition
**Props:**
```
text: string
tag?: string default: span
classes?: string
styles?: object
```

#### ProductCondition
**Props:**
```
text: string
tag?: string default: span
classes?: string
styles?: object
```


#### ProductInventory
**Props:**
```
tag?: string default: span
classes?: string
styles?: object
showInventoryLevel?: boolean
inventoryLevel: number
showWarning?: boolean
inventoryWarningLevel: number
warningMessage?: string
```

#### ProductSKU
**Props:**
```
text: string
tag?: string default: span
classes?: string
styles?: object
```

#### ProductSpecs
**Props:**
```
tag?: string default: ul
textObject: object
customFields?: array
classes?: string
styles?: object
```

#### ProductReview
**Props:**
```
review: ReviewData
tag?: string
classes?: string
tagID?: string
styles?: object
dataAttributes?: object

interface ReviewData {
  date_created: string
  date_modified: string
  date_reviewed: string
  email: string
  id: number
  name: string
  rating: number
  status: string
  text: string
  title: string
}
```

### Widget/UI Components

#### ProductCard **
This can be overridden by adding your own JSX children.

**Props:**
```
product: object
image: object
brand: object
cardClasses?: string
cardStyles?: object
```

Default product card utilizes the following core components:
- ProductImage
- ProductTitle
- ProductCondition
- ProductPrice
- Brand

#### ProductReviews **
This can be overridden by adding your own JSX children.

**Props:**
```
reviews: object
tag?: string
classes?: string
tagID?: string
styles?: object
dataAttributes?: object
```

Default product reviews utilizes the following core components:
- ProductReview

#### ProductDetailPage **
This can be overridden by adding your own JSX children.

**Props:**
```
product: ProductObject
image: ImageObject
brand: BrandObject
reviews?: object
specs?: string[]
currencySettings?: object
PDPClasses?: string
PDPStyles?: object

interface ProductObject {
  name: string
  description: string
  condition: string
  price: number
  sale_price: number
  sku: string
  weight: number
  width: number
  height: number
  depth: number
  reviews_count: number
  reviews_rating_sum: number
}

interface ImageObject {
  url_standard: string
  meta: string
}

interface BrandObject {
  name: string
}
```

Default product reviews utilizes the following core/UI components:
- ProductImage
- ProductTitle
- ProductCondition
- ProductBrand
- ProductPrice
- StarRating
- ProductSKU
- ProductForm
- Description
- ProductSpecs
- ProductReviews

#### ProductQuickView **
This can be overridden by adding your own JSX children.

**Props:**
```
product: ProductObject
image: ImageObject
brand: BrandObject
currencySettings?: object
PDPClasses?: string
PDPStyles?: object

interface ProductObject {
  name: string
  description: string
  condition: string
  price: number
  sale_price: number
  sku: string
  reviews_count: number
  reviews_rating_sum: number
}

interface ImageObject {
  url_standard: string
  meta: string
}

interface BrandObject {
  name: string
}
```

Default product reviews utilizes the following core components:
- ProductImage
- ProductTitle
- ProductCondition
- ProductBrand
- ProductPrice
- StarRating
- ProductSKU
- ProductForm
- Description

## License

MIT © [BigCommerce](https://github.com/bigcommerce)
