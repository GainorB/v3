import React from 'react';
import PortfolioData from './api/PortfolioData.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Introduction from './components/Introduction.jsx';
// import Map from './components/Map.jsx';
import Portfolio from './components/Portfolio.jsx';
import SideMenu from './components/SideMenu.jsx';
import { PageWrapper } from './components/Styled';
// import PropTypes from 'prop-types';
// import { Route } from 'react-router-dom';
import TechnicalSkills from './components/TechnicalSkills.jsx';

const App = () => (
  <PageWrapper>
    <div className="sidebar">
      <SideMenu />
    </div>
    <div className="miniWrapper">
      <Introduction />
      <Portfolio />
      <PortfolioData />
      {/* <Route path="/" exact component={Home} /> */}
      <TechnicalSkills />
      <Contact />
      {/* <Map /> */}
      <Footer />
    </div>
  </PageWrapper>
);

// App.PropTypes {}

export default App;
