import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let url = 'https://rwjssignbook/herohuapp.com/v1/graphql';
let apolloClient;

// Creating an Apollo Client
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({ url }),
        cache: new InMemoryCache(),
    });
}

// Initialize Apollo Client
// Avoiding recreating a new Apollo client for each page.
export function initApollo(initialState = null) {
    const client = apolloClient || createApolloClient();

    if (initialState) {
        client.cache.restore({
            ...client.extract(),
            ...initialState
        });
    }

    if (typeof window === "undefined") {
        return client;
    }

    if (!apolloClient) {
        apolloClient = client;
    }

    return client;
}

export function useApollo(initialState) {
    return useMemo(() => initApollo(initialState), [initialState]);
}
