import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": "0j3O8G4L107Q7jB3vIpjdfaFfMAsn1Pq4vPqjCor0WQVDUuEn1CN7Jz3LF3NvJiT",
    },
  };
});

const httpLink = createHttpLink({
  uri: `https://poll-app-react.hasura.app/v1/graphql`,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
