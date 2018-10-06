import React from 'react';
import { SocialIcons } from '../components/Styled';

export default () => (
  <SocialIcons>
    <span className="resume">
      <a
        href="https://drive.google.com/file/d/1SlXfoCp6r9FLhnv6xEieI5C768Fqsr_Q/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-briefcase" />
      </a>
    </span>
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
  </SocialIcons>
);
