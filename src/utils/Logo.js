import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

export const Logo = () => (
  <Link to="/">
    <Avatar>
      <img src={logo} alt="Gainor Bostwick" />
    </Avatar>
  </Link>
);
