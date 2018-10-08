import React from 'react';
import MyBio from '../api/Bio';
import Github from '../api/Github';
import GetInTouch from './GetInTouch';
import { ContactListItem, UnorderedList, SideMenu, SideMenuSectionTitle } from './Styled';
import { Logo } from '../utils/Logo';

const Feed = () => (
  <SideMenu>
    <div className="intro">
      <Logo size="200px" />
      <p className="name">Gainor Bostwick</p>
      <p className="title">Full Stack Developer</p>
      <MyBio />
    </div>
    <div className="toolSet">
      <SideMenuSectionTitle>Stack</SideMenuSectionTitle>
      <UnorderedList>
        <li>React.js</li>
        <li>Apollo</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
      </UnorderedList>
    </div>
    <div className="focusedOn">
      <SideMenuSectionTitle>Focused On</SideMenuSectionTitle>
      <UnorderedList>
        <li>React.js</li>
        <li>GraphQL</li>
        <li>TypeScript</li>
        <li>Apollo</li>
      </UnorderedList>
    </div>
    <div className="github">
      <Github />
    </div>
    <div className="resume">
      <SideMenuSectionTitle>My Resume</SideMenuSectionTitle>
      <UnorderedList>
        <a
          href="https://drive.google.com/file/d/1SlXfoCp6r9FLhnv6xEieI5C768Fqsr_Q/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactListItem resume>
            <i className="fas fa-briefcase" />
          </ContactListItem>
        </a>
      </UnorderedList>
    </div>
    <div className="inTouch">
      <SideMenuSectionTitle>Get in touch</SideMenuSectionTitle>
      <GetInTouch />
    </div>
  </SideMenu>
);

export default Feed;
