import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let url = 'https://rwjssignbook/herohuapp.com/v1/graphql';
let apolloClient;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({ url }),
        cache: new InMemoryCache(),
    });
}