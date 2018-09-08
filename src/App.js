import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
// import CaseStudy from './components/CaseStudy';

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

// const PageFade = props => (
//   <CSSTransition {...props} classNames="fadeTranslate" timeout={1000} mountOnEnter unmountOnExit />
// );

// const Routes = props => {
//   const locationKey = props.location.pathname;

//   return (
//     <TransitionGroup>
//       <PageFade key={locationKey}>
//         <Switch location={props.location}>
//           <Route exact path="/case-study/:project" component={CaseStudy} />
//         </Switch>
//       </PageFade>
//     </TransitionGroup>
//   );
// };

const App = props => (
  <PageWrapper>
    <div className="sidebar">
      <SideMenu />
    </div>
    <div className="miniWrapper">
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
      <Footer />
    </div>
  </PageWrapper>
);

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
};

export default App;
