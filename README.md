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

```bash
npm install --save bigcommerce-react-theme-components
```

```bash
yarn add bigcommerce-react-theme-components
```

## Usage

```tsx
import * as React from 'react'

import ProductTitle from 'bigcommerce-react-theme-components'

class Example extends React.Component {
  render () {
    return (
        <ProductTitle
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

## License

MIT © [BigCommerce](https://github.com/bigcommerce)
