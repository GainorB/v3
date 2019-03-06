import { v1 } from 'uuid';
import Config from './Config';

const { Twitter, LinkedIn, Github, Instagram, StackOverflow } = Config.global.socialMediaLinks;

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
    link: Twitter,
    network: 'twitter',
    showOnSideMenu: true,
    color: '#1e95dc',
  },
  {
    icon: 'fab fa-linkedin-in',
    link: LinkedIn,
    network: 'linkedin',
    showOnSideMenu: true,
    color: '#0577b2',
  },
  // {
  //   icon: 'fab fa-instagram',
  //   link: Instagram,
  //   network: 'instagram',
  //   showOnSideMenu: true,
  //   color: '#B13DAC',
  // },
  {
    icon: 'fab fa-github',
    link: Github,
    network: 'github',
    showOnSideMenu: true,
    color: '#24292E',
  },
  // {
  //   icon: 'fab fa-stack-overflow',
  //   link: StackOverflow,
  //   network: 'stack',
  //   showOnSideMenu: true,
  //   color: '#F38134',
  // },
  {
    icon: 'fas fa-envelope',
    link: `mailto:${Config.global.email}`,
    network: 'email',
    showOnSideMenu: true,
    color: '#ba4444',
  },
];
