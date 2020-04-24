import {FunctionalComponent} from "preact";
import * as style from "./style.css";
import {getBrandName, getProduct} from "../api/service";
import Header from "./header";
import {ProductTitle} from '../../../src/components/core/product/title';
import {Price} from "../../../src/components/core/product/price";
import {ProductCondition} from "../../../src/components/core/product/condition";
import {ProductSKU} from "../../../src/components/core/product/sku";
import {Brand} from "../../../src/components/core/product/brand";
import {Description} from "../../../src/components/core/product/description";
import {useEffect, useState} from "preact/hooks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

// TODO: @vinny add some default props to this component to reduce the number of props being passed down.

const App: FunctionalComponent = () => {

  const [hasError, setErrors] = useState(false);
  const [product, setProducts] = useState({});
  const [brand, setBrands] = useState({});
  const data = {id: 431};
  const brandData = {id: 39};

  useEffect(() => {
    getProduct(data)
      .then((res): object => setProducts(res))
      .catch(err => {
        setErrors(err)
        console.log(hasError)
      })

    getBrandName(brandData)// TODO: @vinny Need to pass in product.brand_id here.
      .then((res): object => setBrands(res))
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
        <ProductTitle
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
        <Price
          tag="div"
          tagID={product.id}
          classes="bc-example-price"
          styles={{}}
          dataAttributes={{}}
          price={product.price}
          salePrice={product.sale_price}
          hasSalePrice={true}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Condition Component</h3>
        <ProductCondition
          tag="span"
          text="Used"
          classes="bc-example-product-condition"
          styles={{'background-color': 'silver', 'color': 'white', 'padding': '4px 8px'}}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product SKU Component</h3>
        <ProductSKU
          tag="span"
          classes="bc-example-sku"
          styles={{'background': 'teal', 'color': 'white', 'padding': '4px 8px'}}
          text={product.sku}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Brand Component</h3>
        <Brand
          tag="span"
          classes="bc-example-brand"
          styles={{'font-weight': '700', 'color': '#555'}}
          text={brand.name}
        />
      </div>

      <div className={style.bcComponent}>
        <h3>Product Description Component</h3>
        <Description
          tag="div"
          classes="bc-example-brand"
          styles={{'font-size': '14px', 'line-height': '18px'}}
          text={product.description}
        />
      </div>
    </div>
  );
};

export default App;
