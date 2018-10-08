import React from 'react';
import { SocialIconsWrapper, SocialIcon } from '../components/Styled';

export default () => (
  <SocialIconsWrapper>
    <SocialIcon resume>
      <a
        href="https://drive.google.com/file/d/1SlXfoCp6r9FLhnv6xEieI5C768Fqsr_Q/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-briefcase" />
      </a>
    </SocialIcon>
    <SocialIcon github>
      <a href="https://github.com/GainorB/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" />
      </a>
    </SocialIcon>
    <SocialIcon email>
      <a href="mailto:gainorbostwick@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-at" />
      </a>
    </SocialIcon>
    <SocialIcon linkedin>
      <a href="https://www.linkedin.com/in/gainorbostwick/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in" />
      </a>
    </SocialIcon>
    <SocialIcon twitter>
      <a href="https://twitter.com/GainorBostwick" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
      </a>
    </SocialIcon>
  </SocialIconsWrapper>
);
