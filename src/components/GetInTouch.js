import React from 'react';
import { ContactListItem, UnorderedList } from './Styled';
import { key } from '../utils';

const mediaLinks = [
  { icon: 'fab fa-twitter', link: 'https://twitter.com/GainorBostwick', network: 'twitter' },
  { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/gainorbostwick/', network: 'linkedin' },
  // { icon: 'fab fa-instagram', link: 'https://www.instagram.com/gainorbos/', network: 'instagram' },
  { icon: 'fab fa-github', link: 'https://github.com/GainorB', network: 'github' },
  // { icon: 'fab fa-stack-overflow', link: 'https://stackoverflow.com/users/7965894/gainorb', network: 'stack' },
  { icon: 'fas fa-envelope', link: 'mailto:gainorbostwick@gmail.com', network: 'email' },
];

const GetInTouch = () => (
  <UnorderedList>
    {mediaLinks.map(n => (
      <a key={key()} href={n.link} target="_blank" rel="noopener noreferrer">
        <ContactListItem network={n.network}>
          <i className={n.icon} />
        </ContactListItem>
      </a>
    ))}
  </UnorderedList>
);

export default GetInTouch;
