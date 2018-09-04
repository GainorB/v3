import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

// PAGES
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import { PageWrapper } from './components/Styled';
import TechnicalSkills from './components/TechnicalSkills';

class App extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <PageWrapper>
        <div className="sidebar">
          <SideMenu />
        </div>
        <div className="miniWrapper">
          <Introduction />
          <Portfolio />
          <TechnicalSkills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </PageWrapper>
    );
  }
}

export default App;
