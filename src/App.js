import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// COMPONENTS
import Home from './components/Home';

const App = ({ location }) => (
  <div>
    <h1>Hello Gainor!</h1>
    <Route location={location} path="/" exact component={Home} />
  </div>
);

App.propTypes = {
  location: PropTypes.object.isRequired,
};

export default App;
