import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-127150520-1');

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { search, pathname, hash } = window.location;
    const page = search !== '' ? `${pathname}${hash}/${search}` : `${pathname}${hash}`;
    ReactGA.set({ page });
    ReactGA.pageview(page);
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
