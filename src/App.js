import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

// PAGES
// import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import Technical from './components/Technical';
// import CaseStudy from './components/CaseStudy';

// CSS
import { PageWrapper, Nav } from './components/Styled';
import '../assets/styles/fade.css';

configureAnchors({ offset: -100, scrollDuration: 400 });

const Navigation = () => (
  <Nav>
    <a href="#about">
      <li>About</li>
    </a>
    <a href="#work">
      <li>Work</li>
    </a>
    <a href="#skills">
      <li>Skills</li>
    </a>
    <a href="#exp">
      <li>Experience</li>
    </a>
    <a href="#contact">
      <li>Contact</li>
    </a>
  </Nav>
);

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
      <Navigation />
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

export default App;
