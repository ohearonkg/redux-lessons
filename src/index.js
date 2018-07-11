import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import root from './reducers/index';
import {devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';
import App from './App';

const store = createStore(root, devToolsEnhancer() );

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App');
    ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>, 
      document.getElementById('root')
    );
  });
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);
