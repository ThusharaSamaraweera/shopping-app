import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://shopping-app-with-mern.herokuapp.com',
  cache: new InMemoryCache(),
});

export default client;
