import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (process.env.NODE_ENV === 'development') {
  window.console.log('Environment =>', process.env.NODE_ENV);
}

ReactDOM.render(<App />, document.getElementById('app'));
