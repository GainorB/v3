import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
// import 'nprogress/nprogress.css';
import '../../assets/styles/nprogress.css';

class ProgressRoute extends Component {
  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    return <Route {...this.props} />;
  }
}

export default ProgressRoute;
