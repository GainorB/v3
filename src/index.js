import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import '../assets/styles/style.css';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  window.console.log('Environment =>', process.env.NODE_ENV);
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Route component={App} />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('app')
);

(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
})();
