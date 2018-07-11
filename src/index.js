import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import root from './reducers/index';
import {devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';
import App from './App';

const store = createStore(root, devToolsEnhancer() );

/**
 * Hot Module Replacement of Components
 * And Redux Reducers In Devlopment
 * In Developmentc
 */

if (module.hot) {
  
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}><NextApp /></Provider>, 
      document.getElementById('root')
    );
  });

  module.hot.accept('./reducers', () => {
    console.log('Hot reloading reducer');
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });

}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);
