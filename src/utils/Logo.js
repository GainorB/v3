import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/Styled';
import Config from './Config';

export const Logo = ({ size }) => (
  <Link to="/">
    <Avatar size={size}>
      <img src={Config.global.logo} alt="Gainor Bostwick" />
    </Avatar>
  </Link>
);

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};
