import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './mobile/components/App';
import './index.css';

import store from './redux/store';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

export const baseURL = 'http://192.168.0.81:3001';
export const client = new ApolloClient({
  uri: `${baseURL}/graphql`,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);