import React from 'react';

// import { Route } from 'react-router-dom';

// PAGES
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import { PageWrapper } from './components/Styled';
import Technical from './components/Technical';

const App = () => (
  <PageWrapper>
    <div className="sidebar">
      <SideMenu />
    </div>
    <div className="miniWrapper">
      <Navigation />
      <Work />
      <Technical />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </PageWrapper>
);

export default App;
