import { FunctionalComponent } from "preact";
import { getProductModifiers } from "../api/service";
import * as Form from "../../../src/components/core/product/form";
import * as Modifiers from "../../../src/components/core/product/modifiers";
import { useEffect, useState } from "preact/hooks";

const CustomFormComponent = ({ formData }) => (
    <div>
        <h3>Product Form Data (this is a custom component)</h3>
        <span>{JSON.stringify(formData)}</span>
    </div>
);

const FormExample: FunctionalComponent = ({ product }) => {
    if (!product || !product.id) {
        return null;
    }

    const [modifiers, setModifiers] = useState([]);

    useEffect(() => {
        getProductModifiers(product).then((res: object): object =>
            setModifiers(res)
        );
    }, []);

    const onChange = values => {
        console.log(`On change: ${JSON.stringify(values)}`);
    };

    const onSubmit = values => {
      console.log(`On submit: ${JSON.stringify(values)}`);
      if (values[181].label === "Vegan") {
        alert("Cannot submit if you're vegan");
        return false;
      }

      return true;
    };

    return (
        <Form.ProductForm
            action="https://localhost:8080/"
            method="POST"
            product={product}
            classes="bc-example-form"
            onChange={onChange}
            onSubmit={onSubmit}
            styles={{}}
        >
            <Modifiers.ProductModifiers modifiers={modifiers} />
            <Form.ProductFormSubmit>Buy Now</Form.ProductFormSubmit>
            <CustomFormComponent />
        </Form.ProductForm>
    );
};

export default FormExample;
