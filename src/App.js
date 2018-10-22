import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Switch } from 'react-router-dom';
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
import ProgressRoute from './utils/ProgressRoute';

// CSS
import { PageWrapper, Nav, ResponsiveNav, NavItem, ResponsiveNavItem, ResponsiveNavSocial } from './components/Styled';
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
    showSideMenu: true,
    windowWidth: 0,
  };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    const spinner = document.getElementById('spinner');

    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = debounce(() => {
    this.setState({ windowWidth: window.innerWidth }, () => {
      if (this.state.windowWidth <= 1200) {
        configureAnchors({ offset: -212, scrollDuration: 400 });
      } else {
        configureAnchors({ offset: -99, scrollDuration: 400 });
      }
    });
  }, 700);

  toggle = str => this.setState(prevState => ({ [str]: !prevState[str] }));

  Navigation = () => {
    const { hash } = this.props.location;
    const { items, showMenu, showSideMenu } = this.state;
    return (
      <Fragment>
        <Nav>
          <button onClick={() => this.toggle('showSideMenu')}>
            {showSideMenu ? <i className="fas fa-toggle-on" /> : <i className="fas fa-toggle-off" />}
          </button>
          {items.map(e => (
            <a href={e.hash} key={key()}>
              <NavItem isActive={hash === e.hash}>{e.name}</NavItem>
            </a>
          ))}
        </Nav>
        <ResponsiveNav showMenu={showMenu}>
          <div className="responsiveNav__grid">
            <Logo size="100%" />
            <div className="responsiveNav__logo">
              <span className="responsiveNav__name">Gainor Bostwick</span>
              <span className="responsiveNav__title">Full Stack Developer</span>
            </div>
            <div className="responsiveNav__menu">
              <button onClick={() => this.toggle('showMenu')}>
                {!showMenu ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
              </button>
            </div>
          </div>
          <div className="responsiveNav__items">
            {items.map(e => (
              <a href={e.hash} key={key()}>
                <ResponsiveNavItem isActive={hash === e.hash} onClick={() => this.toggle('showMenu')}>
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
    const { showSideMenu } = this.state;
    return (
      <PageWrapper showSideMenu={showSideMenu}>
        <div className="relativelyPositioned">
          <div className="sidebar">
            <SideMenu />
          </div>
        </div>
        <div className="relativelyPositioned">
          <div className="miniWrapper">
            <Switch>
              <ProgressRoute exact path="/" render={() => this.mainLayout()} />
              <ProgressRoute
                exact
                path="/case-study/:id/:project"
                render={props => <CaseStudy toggle={this.toggle} showSideMenu={showSideMenu} {...props} />}
              />
              <ProgressRoute exact path="/projects" component={ProjectsPerTech} />
              <ProgressRoute exact path="/changelog" component={Changelog} />
              <ProgressRoute component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default App;
