import { ApolloClient, InMemoryCache, makeVar, gql } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
export const client = new ApolloClient({
  uri: "http://luvbeenhere.com:54000/graphql",
  cache: new InMemoryCache(),
});

