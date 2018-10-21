import React from 'react';
import { Link } from 'react-router-dom';
import MyBio from '../api/Bio';
import Github from '../api/Github';
import GetInTouch from './GetInTouch';
import { ContactListItem, UnorderedList, SideMenu, SideMenuSectionTitle } from './Styled';
import { Logo } from '../utils/Logo';
import { key } from '../utils';

const techStack = ['react.js', 'apollo', 'express.js', 'node.js', 'graphql', 'postgresql'];

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
        {techStack.map(t => (
          <li className="techStack" key={key()}>
            <Link to={`/projects?tech=${t}`}>{t}</Link>
          </li>
        ))}
      </UnorderedList>
    </div>
    {/* <div className="focusedOn">
      <SideMenuSectionTitle>Focused On</SideMenuSectionTitle>
      <UnorderedList>
        <li>React.js</li>
        <li>GraphQL</li>
        <li>TypeScript</li>
        <li>Apollo</li>
      </UnorderedList>
    </div> */}
    <div className="github">
      <Github />
    </div>
    <div className="resume">
      <SideMenuSectionTitle>My Resume</SideMenuSectionTitle>
      <UnorderedList>
        <a
          href="https://github.com/GainorB/v3/blob/master/static/GainorBostwickResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactListItem network="resume">
            <i className="fas fa-user-tie" />
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
