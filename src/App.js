import React from 'react';
import PortfolioData from './api/PortfolioData.jsx';
import TheSkills from './api/TheSkills.jsx';
import Footer from './components/Footer.jsx';
import Introduction from './components/Introduction.jsx';
import Portfolio from './components/Portfolio.jsx';
import SideMenu from './components/SideMenu.jsx';
// import PropTypes from 'prop-types';
// import { Route } from 'react-router-dom';
import Skills from './components/Skills.jsx';
import { PageWrapper } from './components/Styled';

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
      <Skills />
      <TheSkills />
      <Footer />
    </div>
  </PageWrapper>
);

// App.PropTypes {}

export default App;
