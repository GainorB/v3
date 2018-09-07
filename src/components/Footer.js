import React from 'react';
import { Foot } from './Styled';

const date = new Date();

const Footer = () => (
  <Foot>
    <p>&copy; {date.getFullYear()} Gainor Bostwick. All rights reserved.</p>
    <p className="footer__email">
      <a href="mailto:hi@gainorbostwick.com" target="_blank" rel="noopener noreferrer">
        hi@gainorbostwick.com
      </a>
    </p>
  </Foot>
);

export default Footer;
