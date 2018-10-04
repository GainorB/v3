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
import ProjectsPerTech from './components/ProjectsPerTech';

// UTILS
import NotFound from './utils/NotFound';
import { Logo } from './utils/Logo';

// CSS
import { PageWrapper, Nav, ResponsiveNav, NavItem, ResponsiveNavItem } from './components/Styled';
import '../assets/styles/fade.css';
import { key } from './utils';

configureAnchors({ offset: -99, scrollDuration: 400 });

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
        name: 'Work',
        hash: '#work',
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
  };

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
        <ResponsiveNav>
          <div className="responsiveNav__grid">
            <div>
              <Logo />
            </div>
            <div className="responsiveNav__logo">Gainor Bostwick</div>
            <div className="responsiveNav__menu">
              <button onClick={this.toggleMenu}>
                {!showMenu ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
              </button>
            </div>
          </div>
          {showMenu &&
            items.map(e => (
              <a href={e.hash} key={key()}>
                <ResponsiveNavItem onClick={this.toggleMenu}>{e.name}</ResponsiveNavItem>
              </a>
            ))}
        </ResponsiveNav>
      </Fragment>
    );
  };

  mainLayout = () => (
    <Fragment>
      {this.Navigation()}
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
            <Route exact path="/work" component={ProjectsPerTech} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </PageWrapper>
    );
  }
}

export default App;
