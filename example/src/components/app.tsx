import {FunctionalComponent} from "preact";
import * as style from "./style.css";
import {getBrandName, getProduct, getProductImages, getCustomFields, getStorefront} from "../api/service";
import { BCStorefront } from "../api/storefront";
import Header from "./header";
import * as Product from '../../../src/components/core/product'
import * as Widgets from '../../../src/components/ui'
import {useEffect, useState} from "preact/hooks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

const App: FunctionalComponent = () => {

  const [hasError, setErrors] = useState(false);
  const [product, setProducts] = useState({});
  const [brand, setBrands] = useState({});
  const [image, setImages] = useState({});
  const [specs, setSpecs] = useState({});
  const [store_config, setConfig] = useState({});
  const data = {id: 431};
  const brandData = {id: 39};
  const imageQuery = 431;

  useEffect(() => {
    getStorefront()
      .then((res): object => setConfig(BCStorefront(res)))
      .catch(err => console.error(err))

    getProduct(data)
      .then((res): object => setProducts(res))
      .catch(err => {
        setErrors(err)
        console.error(hasError)
      })

    getBrandName(brandData)// TODO: @vinny Need to pass in product.brand_id here.
      .then((res): object => setBrands(res))
      .catch(err => {
        setErrors(err)
        console.error(hasError)
      })

    getProductImages(imageQuery)
      .then((res: object) :object => setImages(res))
      .catch(err => {
        setErrors(err)
        console.log(hasError)
      })


    getCustomFields(data)
      .then((res): object => setSpecs(res))
      .catch(err => {
        setErrors(err)
        console.log(hasError)
      })
  }, [])

  return (
    <div id="app" class={style.body}>
      <Header/>

      <div className={style.bcComponent}>
        <h3>Product Title Component</h3>
        <Product.ProductTitle
          tag="h1"
          classes="bc-example-product-title"
          styles={{}}
          componentID="123-title"
          text={product.name}
          dataAttributes={{['data-title']: `${product.name}`, ['aria-label']: `${product.type}`}}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Price Component</h3>
        <Product.Price
          tag="div"
          tagID={product.id}
          classes="bc-example-price"
          styles={{}}
          dataAttributes={{}}
          currencySettings={store_config}
          price={product.price}
          salePrice={product.sale_price}
          hasSalePrice={true}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Condition Component</h3>
        <Product.ProductCondition
          tag="span"
          text="Used"
          classes="bc-example-product-condition"
          styles={{'background-color': 'silver', 'color': 'white', 'padding': '4px 8px'}}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product SKU Component</h3>
        <Product.ProductSKU
          tag="span"
          classes="bc-example-sku"
          styles={{'background': 'teal', 'color': 'white', 'padding': '4px 8px'}}
          text={product.sku}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Brand Component</h3>
        <Product.Brand
          tag="span"
          classes="bc-example-brand"
          styles={{'font-weight': '700', 'color': '#555'}}
          text={brand.name}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Description Component</h3>
        <Product.Description
          tag="div"
          classes="bc-example-brand"
          styles={{'font-size': '14px', 'line-height': '18px'}}
          text={product.description}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Image Component</h3>
        <Product.ProductImage
          src={image.url_standard}
          altText={image.meta}
          wrapperClasses="bc-image-wrapper-example"
          classes="bc-image-example"
          styles={{'backgorund': '#efefef', 'border': '2px solid lightgrey'}}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Specs Component</h3>
        <Product.ProductSpecs
          tag="ul"
          classes="bc-example-specs"
          styles={{'font-size': '18px', 'line-height': '22px'}}
          textObject={product}
          customFields={specs}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Inventory Level Component</h3>
        <Product.ProductInventory
          tag="div"
          classes="bc-example-inventory-level"
          styles={{}}
          showInventoryLevel={true}
          inventoryLevel="8"
          showWarning={true}
          inventoryWarningLevel={product.inventory_warning_level}
          warningMessage={`${product.inventory_warning_level} remaining in stock. More stock due in 2 weeks.`}
          inventoryTracking={product.inventory_tracking}
        />
      </div>

      <h1>UI/Widget Components</h1>

      <div className={style.bcComponent}>
        <h3>Product Card Component</h3>
        <Widgets.ProductCard
          product={product}
          image={image}
          brand={brand}
          cardClasses="bc-product-card--example"
          cardStyles={{"max-width": "33.3333%"}}
        />
      </div>
    </div>
  );
};

export default App;
