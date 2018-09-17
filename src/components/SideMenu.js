import React from 'react';
import { Link } from 'react-router-dom';
import Github from '../api/Github';
import GetInTouch from './GetInTouch';
import { InTouch, ListGroup, SideMenu, SideMenuTitle } from './Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

const Feed = () => (
  <SideMenu>
    <div className="intro">
      <Link to="/">
        <img className="avatar" src={logo} alt="Gainor Bostwick" />
      </Link>
      <p className="name">Gainor Bostwick</p>
      <p className="title">Full Stack Web Developer</p>
    </div>
    <div className="toolSet">
      <SideMenuTitle>Stack</SideMenuTitle>
      <ListGroup>
        <li>React</li>
        <li>Apollo</li>
        <li>Express</li>
        <li>Node</li>
        <li>GraphQL</li>
        <li>Postgres</li>
      </ListGroup>
    </div>
    <div className="focusedOn">
      <SideMenuTitle>Focused On</SideMenuTitle>
      <ListGroup>
        <li>React</li>
        <li>GraphQL</li>
        <li>Typescript</li>
        <li>Apollo Client</li>
      </ListGroup>
    </div>
    <div className="github">
      <SideMenuTitle>Github information</SideMenuTitle>
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
