import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

// PAGES
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import Technical from './components/Technical';
import CaseStudy from './components/CaseStudy';
import ProjectsPerTech from './components/ProjectsPerTech';

// UTILS
import NotFound from './utils/NotFound';

// CSS
import { PageWrapper, Nav, NavItem } from './components/Styled';
import '../assets/styles/fade.css';

configureAnchors({ offset: -99, scrollDuration: 400 });

const Navigation = props => {
  const { hash } = props.location;
  return (
    <Nav>
      <a href="#about">
        <NavItem isActive={hash === '#about'}>About</NavItem>
      </a>
      <a href="#work">
        <NavItem isActive={hash === '#work'}>Work</NavItem>
      </a>
      <a href="#skills">
        <NavItem isActive={hash === '#skills'}>Skills</NavItem>
      </a>
      <a href="#exp">
        <NavItem isActive={hash === '#exp'}>Experience</NavItem>
      </a>
      <a href="#contact">
        <NavItem isActive={hash === '#contact'}>Contact</NavItem>
      </a>
    </Nav>
  );
};

const mainLayout = props => (
  <Fragment>
    <Navigation {...props} />
    <ScrollableAnchor id="work">
      <Work />
    </ScrollableAnchor>
    <ScrollableAnchor id="skills">
      <Technical />
    </ScrollableAnchor>
    <ScrollableAnchor id="about">
      <About />
    </ScrollableAnchor>
    <ScrollableAnchor id="exp">
      <Experience />
    </ScrollableAnchor>
    <ScrollableAnchor id="contact">
      <Contact />
    </ScrollableAnchor>
  </Fragment>
);

const App = props => (
  <PageWrapper>
    <div className="sidebar">
      <SideMenu />
    </div>
    <div className="miniWrapper">
      <Switch>
        <Route exact path="/" render={() => mainLayout(props)} />
        <Route exact path="/case-study/:id/:project" component={CaseStudy} />
        <Route exact path="/work" component={ProjectsPerTech} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </PageWrapper>
);

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
};

export default App;
