import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import {setContext} from '@apollo/client/link/context';

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const authUserString = sessionStorage.getItem('authUser');
  const authUser = JSON.parse(authUserString!)
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authUser?.token ? `${authUser.token}` : "",
    }
  }
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
