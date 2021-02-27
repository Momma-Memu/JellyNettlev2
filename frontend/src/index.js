import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


/*
Create a variable to access your store and expose it to the window.
It should not be exposed in production, be sure this is only set in development.
*/

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
