import { GraphQLClient } from 'graphql-request';

const Client = new GraphQLClient('http://localhost:4500/graphql', {
  headers: {},
});

export default Client;
