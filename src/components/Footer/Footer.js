import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, FooterFinePrint } from '../Styled';

const date = new Date();

const TheFooter = () => (
  <Footer>
    <p>&copy; {date.getFullYear()} Gainor Bostwick. </p>
    <FooterFinePrint>
      {/* <p>This app is licensed under the MIT License.</p> */}
      <p>
        Take a peak{' '}
        <a href="https://github.com/GainorB/gainorio" target="_blank" rel="noopener noreferrer">
          under the hood
        </a>
        .
      </p>
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
        <span className="footer__changelog">
          <Link to="/changelog">Changelog</Link>
        </span>
      </p>
    </FooterFinePrint>
  </Footer>
);

export default TheFooter;
