import { useDispatch, useSelector, shallowEqual } from "react-redux";

// Hook that will come in handy when we need to fetch all
// the products in our Redux store:
function useGlobalItems() {
    return useSelector((state) => state, shallowEqual);
}

const ProductCard = ({ id, name, price, picture }) => {
    const dispatch = useDispatch();
    const items = useGlobalItems();
    const productAmount = items?.[id] ?? 0;

    return (
        <div className="flex justify-between mt-4 w-2/4 m-auto">
            <button 
                className="pl-2 pr-2 bg-red-400 text-white rounded-md" 
                disabled={productAmount === 0}
                onClick={() => dispatch({ type: "DECREMENT",id })}>
                    -
            </button>
            <div>{productAmount}</div>
            <button 
                className="pl-2 pr-2 bg-green-400 text-white rounded-md" 
                disabled={productAmount === 0}
                onClick={() => dispatch({ type: "INCREMENT",id })}>
                    +
            </button>
        </div>
    )

}

export default ProductCard;