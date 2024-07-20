import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import SearchUi from './SearchUi';
import './index.css';
import App from './App';
import Product from './Product';
import './i18n';

import reportWebVitals from './reportWebVitals';
import Checkout from './checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
        <Switch>
          <Route path="/" element={<App/>} />
          <Route path="/explore" element={<SearchUi/>} />
          <Route path="/explore/product" element={<Product/>} />
          <Route path="/explore/product/checkout" element={<Checkout />} />
        </Switch>
      </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
