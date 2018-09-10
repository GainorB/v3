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
      <SideMenuTitle>Toolset</SideMenuTitle>
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
      <SideMenuTitle>Github</SideMenuTitle>
      <Github />
    </div>
    <div className="resume">
      <SideMenuTitle>Resume</SideMenuTitle>
      <ListGroup>
        <a href="https://drive.google.com/open?id=1c2p8SR4XLP6XvzRqiJJ4O5B3_04pA2S8">
          <InTouch resume>
            <i className="fas fa-id-card-alt" />
          </InTouch>
        </a>
      </ListGroup>
    </div>
    <div className="inTouch">
      <SideMenuTitle>Where I hang out</SideMenuTitle>
      <GetInTouch />
    </div>
  </SideMenu>
);

export default Feed;
