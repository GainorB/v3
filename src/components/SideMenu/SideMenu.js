import React from 'react';
import { Link } from 'react-router-dom';
import MyBio from '../../api/Bio';
import Github from '../../api/Github';
import GetInTouch from '../GetInTouch/GetInTouch';
import { ContactListItem, UnorderedList, SideMenu, SideMenuSectionTitle } from '../Styled';
import { Logo } from '../../utils/Logo';
import { key } from '../../utils';
import Config from '../../utils/Config';

const techStack = ['React.js', 'Apollo', 'Express.js', 'Node.js', 'GraphQL', 'PostgreSQL'];

const Feed = () => (
  <SideMenu>
    <div className="intro">
      <Logo size="200px" />
      <p className="name">{Config.global.name}</p>
      <p className="title">{Config.global.title}</p>
      <MyBio />
    </div>
    <div className="toolSet">
      <SideMenuSectionTitle>Stack</SideMenuSectionTitle>
      <UnorderedList>
        {techStack.map(t => (
          <li key={key()}>
            <Link to={`/projects?tech=${t.toLowerCase()}`}>{t}</Link>
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
        <a href={Config.global.resumeLink} target="_blank" rel="noopener noreferrer">
          <ContactListItem network="resume" color="#fcc846">
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
