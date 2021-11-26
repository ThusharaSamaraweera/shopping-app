import React from 'react';
import './App.scss';
import ClientApp from "./ClientApp";
import configureStore from './state/store';
import {Provider} from 'react-redux'

const App: React.FC = () => {
  const store = configureStore();

  return (
    <div className="App">
      <Provider store={store}>
        <ClientApp/>
      </Provider>
    </div>
  );
}
export default App;
