import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from '../components/Styled';

const ReturnHome = () => (
  <GoHome>
    <Link to="/">
      <i className="fas fa-home" />
    </Link>
  </GoHome>
);

export default ReturnHome;
