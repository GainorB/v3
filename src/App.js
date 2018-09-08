import React, { Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom';

// PAGES
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import Technical from './components/Technical';
// import CaseStudy from './components/CaseStudy';

// CSS
import { PageWrapper } from './components/Styled';

// const Routes = () => (
//   <Switch>
//     <Route exact path="/case-study/:project" component={CaseStudy} />
//   </Switch>
// );

const App = () => (
  <PageWrapper>
    <div className="sidebar">
      <SideMenu />
    </div>
    <div className="miniWrapper">
      <Navigation />
      <Fragment>
        <Work />
        <Technical />
        <Experience />
        <Contact />
      </Fragment>
      <Footer />
    </div>
  </PageWrapper>
);

export default App;
