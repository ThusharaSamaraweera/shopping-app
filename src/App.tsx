import React from 'react';
import './App.scss';
import ClientApp from "./ClientApp";
import configureStore from './state/store';
import {Provider} from 'react-redux'
import { ApolloProvider } from '@apollo/client';
import client from './apollo/apollo';

const App: React.FC = () => {
  const store = configureStore();

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ClientApp/>
        </Provider>
      </ApolloProvider>

    </div>
  );
}
export default App;
