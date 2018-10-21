import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { GoHome } from '../components/Styled';

const ReturnHome = props => (
  <GoHome>
    <button onClick={() => props.history.push('/')}>
      <i className="fas fa-home" />
    </button>
  </GoHome>
);

ReturnHome.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ReturnHome);
