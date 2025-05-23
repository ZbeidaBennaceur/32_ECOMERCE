import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './JS/store/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

