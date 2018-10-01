import React from 'react';
import { Link } from 'react-router-dom';
import MyBio from '../api/Bio';
import Github from '../api/Github';
import GetInTouch from './GetInTouch';
import { InTouch, ListGroup, SideMenu, SideMenuTitle, Avatar } from './Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

const Feed = () => (
  <SideMenu>
    <div className="intro">
      <Link to="/">
        <Avatar>
          <img src={logo} alt="Gainor Bostwick" />
        </Avatar>
      </Link>
      <p className="name">Gainor Bostwick</p>
      <p className="title">Full Stack Developer</p>
      <MyBio />
    </div>
    <div className="toolSet">
      <SideMenuTitle>Stack</SideMenuTitle>
      <ListGroup>
        <li>React.js</li>
        <li>Apollo</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>PostgreSQL</li>
      </ListGroup>
    </div>
    <div className="focusedOn">
      <SideMenuTitle>Focused On</SideMenuTitle>
      <ListGroup>
        <li>React.js</li>
        <li>GraphQL</li>
        <li>TypeScript</li>
        <li>Apollo</li>
      </ListGroup>
    </div>
    <div className="github">
      <SideMenuTitle>Github Snapshot</SideMenuTitle>
      <Github />
    </div>
    <div className="resume">
      <SideMenuTitle>My Resume</SideMenuTitle>
      <ListGroup>
        <a
          href="https://drive.google.com/file/d/1SlXfoCp6r9FLhnv6xEieI5C768Fqsr_Q/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InTouch resume>
            <i className="fas fa-id-card-alt" />
          </InTouch>
        </a>
      </ListGroup>
    </div>
    <div className="inTouch">
      <SideMenuTitle>Get in touch</SideMenuTitle>
      <GetInTouch />
    </div>
  </SideMenu>
);

export default Feed;
