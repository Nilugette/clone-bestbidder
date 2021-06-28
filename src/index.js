import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store.js'


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
,
  document.getElementById('root')
);



