import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import apiMiddleware from './middleware/api';
import tasksReducer from './reducers/tasksReducer';
import './index.css';
import App from './App';

const store = createStore(
  combineReducers({
    tasksReducer
  }),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      apiMiddleware
    )
  )
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App');
    ReactDOM.render(
      <Provider store={store}>
          <NextApp />
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
