import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from '../components/Styled';

const ReturnHome = () => (
  <Link to="/">
    <GoHome>
      <i className="fas fa-home" />
    </GoHome>
  </Link>
);

export default ReturnHome;
