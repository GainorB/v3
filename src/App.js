import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

// PAGES
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import Technical from './components/Technical';
import CaseStudy from './components/CaseStudy';
import ProjectsPerTech from './components/ProjectsPerTech';
import Changelog from './components/Changelog';

// UTILS
import SocialIcons from './utils/SocialIcons';
import NotFound from './utils/NotFound';
import { Logo } from './utils/Logo';

// CSS
import { PageWrapper, Nav, ResponsiveNav, NavItem, ResponsiveNavItem, ResponsiveNavSocial } from './components/Styled';
import '../assets/styles/fade.css';
import { key } from './utils';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  state = {
    items: [
      {
        name: 'About',
        hash: '#about',
      },
      {
        name: 'Projects',
        hash: '#projects',
      },
      {
        name: 'Skills',
        hash: '#skills',
      },
      {
        name: 'Experience',
        hash: '#exp',
      },
      {
        name: 'Contact',
        hash: '#contact',
      },
    ],
    showMenu: false,
    offset: -99,
  };

  componentDidMount = () => {
    configureAnchors({ offset: this.state.offset, scrollDuration: 400 });
    // window.addEventListener('resize', this.windowResizer);
  };

  // windowResizer = () => {
  //   if (window.innerWidth <= 1200) {
  //     this.setState({ offset: -213 });
  //   }
  // };

  toggleMenu = () => this.setState(prevState => ({ showMenu: !prevState.showMenu }));

  Navigation = () => {
    const { hash } = this.props.location;
    const { items, showMenu } = this.state;
    return (
      <Fragment>
        <Nav>
          {items.map(e => (
            <a href={e.hash} key={key()}>
              <NavItem isActive={hash === e.hash}>{e.name}</NavItem>
            </a>
          ))}
        </Nav>
        <ResponsiveNav showMenu={showMenu}>
          <div className="responsiveNav__grid">
            <div>
              <Logo size="100%" />
            </div>
            <div className="responsiveNav__logo">
              <span className="responsiveNav__name">Gainor Bostwick</span>
              <span className="responsiveNav__title">Full Stack Developer</span>
            </div>
            <div className="responsiveNav__menu">
              <button onClick={this.toggleMenu}>
                {!showMenu ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
              </button>
            </div>
          </div>
          <div className="responsiveNav__items">
            {items.map(e => (
              <a href={e.hash} key={key()}>
                <ResponsiveNavItem isActive={hash === e.hash} onClick={this.toggleMenu}>
                  {e.name}
                </ResponsiveNavItem>
              </a>
            ))}
          </div>
          <ResponsiveNavSocial>
            <SocialIcons />
          </ResponsiveNavSocial>
        </ResponsiveNav>
      </Fragment>
    );
  };

  mainLayout = () => (
    <Fragment>
      {this.Navigation()}
      <ScrollableAnchor id="about">
        <About />
      </ScrollableAnchor>
      <ScrollableAnchor id="projects">
        <Projects />
      </ScrollableAnchor>
      <ScrollableAnchor id="skills">
        <Technical />
      </ScrollableAnchor>
      <ScrollableAnchor id="exp">
        <Experience />
      </ScrollableAnchor>
      <ScrollableAnchor id="contact">
        <Contact />
      </ScrollableAnchor>
    </Fragment>
  );

  render() {
    return (
      <PageWrapper>
        <div className="sidebar">
          <SideMenu />
        </div>
        <div className="miniWrapper">
          <Switch>
            <Route exact path="/" render={() => this.mainLayout()} />
            <Route exact path="/case-study/:id/:project" component={CaseStudy} />
            <Route exact path="/projects" component={ProjectsPerTech} />
            <Route exact path="/changelog" component={Changelog} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </PageWrapper>
    );
  }
}

export default App;
