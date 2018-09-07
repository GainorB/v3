import React from 'react';
import Github from '../api/Github';
import GetInTouch from './GetInTouch';
import { InTouch, ListGroup, SideMenu, SideMenuHeader } from './Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

const Feed = () => (
  <SideMenu>
    <div className="intro">
      <img className="avatar" src={logo} alt="Gainor Bostwick" />
      <p className="name">Gainor Bostwick</p>
      <p className="title">Full Stack Web Developer</p>
    </div>
    <div className="toolSet">
      <SideMenuHeader>Toolset</SideMenuHeader>
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
      <SideMenuHeader>Focused On</SideMenuHeader>
      <ListGroup>
        <li>React</li>
        <li>GraphQL</li>
        <li>Typescript</li>
        <li>Apollo Client</li>
      </ListGroup>
    </div>
    {/* <div className="blog">
      <SideMenuHeader>From the blog</SideMenuHeader>
    </div> */}
    <div className="github">
      <SideMenuHeader>Github</SideMenuHeader>
      <Github />
    </div>
    <div className="resume">
      <SideMenuHeader>Resume</SideMenuHeader>
      <ListGroup>
        <a href="../../assets/GainorBostwickResume.pdf">
          <InTouch resume>
            <i className="fas fa-id-card-alt" />
          </InTouch>
        </a>
      </ListGroup>
    </div>
    <div className="inTouch">
      <SideMenuHeader>Where I hang out</SideMenuHeader>
      <GetInTouch />
    </div>
  </SideMenu>
);

export default Feed;
