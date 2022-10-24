import { useContext } from "react";
import Link from "next/link";

import ShoppingCartContext from "./context/cartContext";

function Navbar() {
    const { items } = useContext(ShoppingCartContext);
    const totalItemsAmount = Object.values(items).reduce((x, y) => x + y, 0);

    return (
        <div className="font-bold underline">
            <Link href={"/cart"} passHref>
                <a>{totalItemsAmount} items in cart</a>
            </Link>
        </div>
    )

}

export default Navbar;