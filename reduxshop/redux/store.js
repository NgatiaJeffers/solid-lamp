import { useMemo } from "react";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

// variable for keeping the redux store
let store;

// Initializing our redux store
const initialState = {};

// Creating out reducer
const reducer = (state = initialState, action) => {
    const itemID = action.id;

    switch (action.type) {
        case "INCREMENT":
            const newItemAmount = itemID in state ? state[itemID] + 1 : 1;
            return { ...state, [itemID]: newItemAmount, };
        case "DECREMENT":
            if (state?.[itemID] > 0) {
                return { ...state, [itemID]: state[itemID] - 1, };
            }
            return state;
        default:
            return state;
    }
}

// Fully initializing our store a helper function
function initStore(preloadedState = initialState) {
    return configureStore({reducer: reducer},
        preloadedState,
        // composeWithDevTools(applyMiddleware())
    )
}

// Second function to properly intialize the store
export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        store = undefined;
    }

    // Return "_store" when intializing Redux on the server-side
    if (typeof window === "undefined") return store;
    if (!store) store = _store;

    return _store;
}

// A hook wrapped using "useMemo" which will cache complex initial state,
// avoiding the system re-parsing it every "useStore" function call.
export function useStore(initialState) {
    return useMemo(
        () => initializeStore(initialState), [initialState]
    );
}
