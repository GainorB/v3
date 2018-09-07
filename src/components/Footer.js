import React from 'react';
import { Foot } from './Styled';

const date = new Date();

const Footer = () => (
  <Foot>
    <p>&copy; {date.getFullYear()} Gainor Bostwick. All rights reserved.</p>
    <p className="footer__email">hi@gainorbostwick.com</p>
  </Foot>
);

export default Footer;
