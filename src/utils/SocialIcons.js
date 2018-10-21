import React from 'react';
import { SocialIconsWrapper, SocialIcon } from '../components/Styled';
import { key, mediaLinks } from '.';

export default () => (
  <SocialIconsWrapper>
    {mediaLinks.map(s => (
      <SocialIcon key={key()} network={s.network} color={s.color}>
        <a href={s.link} target="_blank" rel="noopener noreferrer">
          <i className={s.icon} />
        </a>
      </SocialIcon>
    ))}
  </SocialIconsWrapper>
);
