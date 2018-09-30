import React from 'react';
import { Foot, FooterIcons, FooterFinePrint } from './Styled';

const date = new Date();

const Footer = () => (
  <Foot>
    <p>&copy; {date.getFullYear()} Gainor Bostwick. All rights reserved.</p>

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
        <a href="https://github.com/GainorB/v3" target="_blank" rel="noopener noreferrer">
          under the hood
        </a>
        .
      </p>
    </FooterFinePrint>
    <FooterIcons>
      <span className="github">
        <a href="https://github.com/GainorB/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
        </a>
      </span>
      <span className="email">
        <a href="mailto:gainorbostwick@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-at" />
        </a>
      </span>
      <span className="linkedin">
        <a href="https://www.linkedin.com/in/gainorbostwick/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" />
        </a>
      </span>
      <span className="twitter">
        <a href="https://twitter.com/GainorBostwick" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" />
        </a>
      </span>
    </FooterIcons>
  </Foot>
);

export default Footer;
