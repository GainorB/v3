import React from 'react';
import { ContactListItem, UnorderedList } from './Styled';

const GetInTouch = () => (
  <UnorderedList>
    <a href="https://twitter.com/GainorBostwick" target="_blank" rel="noopener noreferrer">
      <ContactListItem twitter>
        <i className="fab fa-twitter" />
      </ContactListItem>
    </a>
    <a href="https://www.linkedin.com/in/gainorbostwick/" target="_blank" rel="noopener noreferrer">
      <ContactListItem linkedin>
        <i className="fab fa-linkedin-in" />
      </ContactListItem>
    </a>
    <a href="https://www.instagram.com/gainorbos/" target="_blank" rel="noopener noreferrer">
      <ContactListItem instagram>
        <i className="fab fa-instagram" />
      </ContactListItem>
    </a>
    <a href="https://github.com/GainorB" target="_blank" rel="noopener noreferrer">
      <ContactListItem github>
        <i className="fab fa-github" />
      </ContactListItem>
    </a>
    <a href="https://stackoverflow.com/users/7965894/gainorb" target="_blank" rel="noopener noreferrer">
      <ContactListItem stack>
        <i className="fab fa-stack-overflow" />
      </ContactListItem>
    </a>
    <a href="mailto:gainorbostwick@gmail.com" target="_blank" rel="noopener noreferrer">
      <ContactListItem email>
        <i className="fas fa-at" />
      </ContactListItem>
    </a>
  </UnorderedList>
);

export default GetInTouch;
