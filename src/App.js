import React, { Component, Fragment } from 'react';
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

// CSS
import { PageWrapper, Nav, NavItem } from './components/Styled';
import '../assets/styles/fade.css';

configureAnchors({ offset: -100, scrollDuration: 400 });

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

class App extends Component {
  state = { ProjectComponent: null, project: null, loading: true };
  async componentDidMount() {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    const projectNames = projects.map(p => p.name);
    const { pathname } = this.props.location;
    const path = pathname.replace('/case-study/', '');
    const project = projects.filter(p => p.name === path)[0];
    if (projectNames.includes(path)) {
      await this.setStateAsync({ ProjectComponent: true, project, loading: false });
    }

    await this.setStateAsync({ project, loading: false });
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  render() {
    const { ProjectComponent, project, loading } = this.state;
    return (
      <PageWrapper>
        <div className="sidebar">
          <SideMenu />
        </div>
        <div className="miniWrapper">
          <Switch>
            <Route
              exact
              path="/case-study/:project"
              render={() => (loading ? 'Loading..' : <CaseStudy {...this.props} project={project} />)}
            />
          </Switch>
          {ProjectComponent === null && (
            <Fragment>
              <Navigation {...this.props} />
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
              <Footer />
            </Fragment>
          )}
        </div>
      </PageWrapper>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
};

export default App;
