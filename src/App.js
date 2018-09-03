import React from 'react';
import PortfolioData from './api/PortfolioData';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import { PageWrapper } from './components/Styled';
// import { Route } from 'react-router-dom';
import TechnicalSkills from './components/TechnicalSkills';

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
      <Experience />
      <Contact />
      <Footer />
    </div>
  </PageWrapper>
);

export default App;
