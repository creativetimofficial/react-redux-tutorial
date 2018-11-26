import React from 'react';
import ReactDOM from 'react-dom';
// new imports start
import { Provider } from "react-redux";
import configureStore from "store";
// new imports stop
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// changed the render
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// changed the render
serviceWorker.unregister();
