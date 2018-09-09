import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Github from '../api/Github';
import GetInTouch from './GetInTouch';
import { InTouch, ListGroup, SideMenu, SideMenuTitle } from './Styled';

const logo = 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028357/portfolio/logo.jpg';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.avatar = React.createRef();
  }

  handleMouseEnter = () => {
    this.avatar.current.src =
      'https://media.licdn.com/dms/image/C4D03AQGIH0Xf91tqNQ/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=j11x2DK_YWTdUVf1EadKt5CS0dmqtewP3co3AWJ9CAA';
  };

  render() {
    return (
      <SideMenu>
        <div className="intro">
          <Link to="/">
            <img
              className="avatar"
              src={logo}
              ref={this.avatar}
              alt="Gainor Bostwick"
              onMouseEnter={this.handleMouseEnter}
            />
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
        {/* <div className="blog">
      <SideMenuTitle>From the blog</SideMenuTitle>
    </div> */}
        <div className="github">
          <SideMenuTitle>Github</SideMenuTitle>
          <Github />
        </div>
        <div className="resume">
          <SideMenuTitle>Resume</SideMenuTitle>
          <ListGroup>
            <a href="../../assets/GainorBostwickResume.pdf">
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
  }
}

export default Feed;
