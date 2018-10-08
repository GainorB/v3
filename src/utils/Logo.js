import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

export const Logo = ({ size }) => (
  <Link to="/">
    <Avatar size={size}>
      <img src={logo} alt="Gainor Bostwick" />
    </Avatar>
  </Link>
);

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};
