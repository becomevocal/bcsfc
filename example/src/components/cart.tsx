import { FunctionalComponent, h } from "preact";
import { getProduct, getCart } from "../api/service";
import { useEffect, useState } from "preact/hooks";
import * as Cart from "../../../src/components/core/cart";
import * as style from "./style.css";
import * as cartStyles from "./cart.css";

const CartExample: FunctionalComponent = () => {
    const [cart, setCart] = useState({});

    const sendCart = payload =>
        getCart("POST", payload)
            .then((res): object => setCart(res))
            .catch(err => console.error(err));

    useEffect(() => {
        const payload = {
            lineItems: [
                {
                    quantity: 5,
                    productId: 107,
                    variantId: 73
                },
                {
                    productId: 181,
                    quantity: 2
                }
            ]
        };

        sendCart(payload);
    }, []);

    const onUpdate = (method, itemId, newItem) => {
        const allItems = [
            ...cart.lineItems.physicalItems,
            ...cart.lineItems.digitalItems
        ];
        const lineItems =
            newItem.quantity > 0
                ? allItems.map(({ id, productId, variantId, quantity }) =>
                      itemId === id
                          ? newItem
                          : { productId, variantId, quantity }
                  )
                : allItems.filter(({ id }) => itemId !== id);

        sendCart({ lineItems });
    };

    return (
        <div className={style.bcComponent}>
            <h3>Cart</h3>
            <Cart.Provider
                onUpdate={onUpdate}
                cart={cart}
                styles={cartStyles}
            />
        </div>
    );
};

export default CartExample;
