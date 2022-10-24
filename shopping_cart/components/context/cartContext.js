import { createContext } from "react";

const ShoppingCartConext = createContext({
    items: {},
    setItems: () => null,
});

export default ShoppingCartConext;