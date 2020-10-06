import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import AppStore from './app-store';

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>, document.getElementById('root'));
