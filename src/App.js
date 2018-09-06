import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

// PAGES
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Work from './components/Work';
import Experience from './components/Experience';
import SideMenu from './components/SideMenu';
import { PageWrapper } from './components/Styled';
import Technical from './components/Technical';

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
          <Work />
          <Technical />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </PageWrapper>
    );
  }
}

export default App;
