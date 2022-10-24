import { useContext } from "react";

import ShoppingCartConext from "../components/context/cartContext";
import data from "../data/items";

// Getting the whole product from out store
function getFullItem(id) {
    const idx = data.findIndex((item) => item.id === id);
    return data[idx];
}

function Cart() {
    const { items } = useContext(ShoppingCartConext);

    // Get total amount of products in the cart
    const total = Object.keys(items)
        .map((id) => getFullItem(id).price * items[id])
        .reduce((x, y) => x + y, 0);

    // Create an array of 'amonts' adding the products we've added to the cart
    // Plus the amount for every single product
    const amounts = Object.keys(items).map((id) => {
        const item = getFullItem(id);
        return { item, amount: items[id] };
    });

    return (
        <div>
            <h1 className="text-xl font-bold"> Total: ${total}</h1>
            <div>
                {amounts.map(({ item, amount }) => {
                    <div key={item.id}>
                        x{amount} {item.name} (${amount * item.price})
                    </div>
                })}
            </div>
        </div>
        
    )

}

export default Cart;