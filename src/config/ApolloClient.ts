import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://naubaun.herokuapp.com/graphql",
  uri: "http://api.biznian.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
