import React from 'react';
import { Link } from 'react-router-dom';
import { Foot, FooterFinePrint } from '../Styled';

const date = new Date();

const Footer = () => (
  <Foot>
    <p>
      &copy; {date.getFullYear()} Gainor Bostwick.{' '}
      <span className="footer__changelog">
        <Link to="/changelog">— Changelog</Link>
      </span>
    </p>

    <FooterFinePrint>
      <p>This app is licensed under the MIT License.</p>
      <p>
        Powered by{' '}
        <a href="https://github.com/GainorB/create-gainor-app" target="_blank" rel="noopener noreferrer">
          create-gainor-app
        </a>{' '}
        and deployed on{' '}
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
        .
      </p>
      <p>
        Take a peak{' '}
        <a href="https://github.com/GainorB/gainorio" target="_blank" rel="noopener noreferrer">
          under the hood
        </a>
        .
      </p>
    </FooterFinePrint>
  </Foot>
);

export default Footer;
