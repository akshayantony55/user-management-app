import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const render = (App) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render(App)
reportWebVitals();
