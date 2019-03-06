import { v1 } from 'uuid';
import Config from './Config';

export const key = () => v1();
export const removeWhiteSpace = str => str.replace(/\s/g, '_');
export const removeUnderline = str => str.replace(/_/g, ' ');
export const mediaLinks = [
  {
    icon: 'fas fa-user-tie',
    link: Config.global.resumeLink,
    network: 'resume',
    showOnSideMenu: false,
    color: '#fcc846',
  },
  {
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/GainorBostwick',
    network: 'twitter',
    showOnSideMenu: true,
    color: '#1e95dc',
  },
  {
    icon: 'fab fa-linkedin-in',
    link: 'https://www.linkedin.com/in/gainorbostwick/',
    network: 'linkedin',
    showOnSideMenu: true,
    color: '#0577b2',
  },
  // {
  //   icon: 'fab fa-instagram',
  //   link: 'https://www.instagram.com/gainorbos/',
  //   network: 'instagram',
  //   showOnSideMenu: true,
  //   color: '#B13DAC',
  // },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/GainorB',
    network: 'github',
    showOnSideMenu: true,
    color: '#24292E',
  },
  // {
  //   icon: 'fab fa-stack-overflow',
  //   link: 'https://stackoverflow.com/users/7965894/gainorb',
  //   network: 'stack',
  //   showOnSideMenu: true,
  //   color: '#F38134',
  // },
  {
    icon: 'fas fa-envelope',
    link: 'mailto:gainorbostwick@gmail.com',
    network: 'email',
    showOnSideMenu: true,
    color: '#ba4444',
  },
];
