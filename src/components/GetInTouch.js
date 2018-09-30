import React from 'react';
import { InTouch, ListGroup } from './Styled';

const GetInTouch = () => (
  <ListGroup>
    <a href="https://twitter.com/GainorBostwick" target="_blank" rel="noopener noreferrer">
      <InTouch twitter>
        <i className="fab fa-twitter" />
      </InTouch>
    </a>
    <a href="https://www.linkedin.com/in/gainorbostwick/" target="_blank" rel="noopener noreferrer">
      <InTouch linkedin>
        <i className="fab fa-linkedin-in" />
      </InTouch>
    </a>
    <a href="https://www.instagram.com/gainorbos/" target="_blank" rel="noopener noreferrer">
      <InTouch instagram>
        <i className="fab fa-instagram" />
      </InTouch>
    </a>
    <a href="https://github.com/GainorB" target="_blank" rel="noopener noreferrer">
      <InTouch github>
        <i className="fab fa-github" />
      </InTouch>
    </a>
    <a href="https://stackoverflow.com/users/7965894/gainorb" target="_blank" rel="noopener noreferrer">
      <InTouch stack>
        <i className="fab fa-stack-overflow" />
      </InTouch>
    </a>
    <a href="mailto:gainorbostwick@gmail.com" target="_blank" rel="noopener noreferrer">
      <InTouch email>
        <i className="fas fa-at" />
      </InTouch>
    </a>
  </ListGroup>
);

export default GetInTouch;
