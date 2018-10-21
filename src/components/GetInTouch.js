import React from 'react';
import { ContactListItem, UnorderedList } from './Styled';
import { key, mediaLinks } from '../utils';

const GetInTouch = () => (
  <UnorderedList>
    {mediaLinks.filter(m => m.showOnSideMenu).map(n => (
      <a key={key()} href={n.link} target="_blank" rel="noopener noreferrer">
        <ContactListItem network={n.network} color={n.color}>
          <i className={n.icon} />
        </ContactListItem>
      </a>
    ))}
  </UnorderedList>
);

export default GetInTouch;
