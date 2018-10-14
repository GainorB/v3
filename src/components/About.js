import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { AboutWrapper, SectionHeader, Section, Me } from './Styled';

const theme = {
  fontColor: '#fff',
};

class About extends PureComponent {
  render() {
    return (
      <AboutWrapper>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            <SectionHeader>me.</SectionHeader>
          </Section>
        </ThemeProvider>
        <Me>
          <h1>Hi. I'm Gainor, a full stack web developer from New York.</h1>I am passionate about developing
          applications that will bring about change in peoples’ lives by utilizing my personal experiences, interests,
          and expertise to provide unforgettable experiences. A lifelong learner dedicated to continuously learning and
          implementing new practices to perfect my craft and create innovative applications.
          <p className="developedWith">
            This site is developed with{' '}
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React.js
            </a>
            . I used{' '}
            <a href="https://github.com/GainorB/create-gainor-app" target="_blank" rel="noopener noreferrer">
              my own version
            </a>{' '}
            of{' '}
            <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">
              create-react-app
            </a>{' '}
            to build this site. I have nothing against CRA, I created my own version to learn{' '}
            <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">
              webpack
            </a>
            's ecosystem and to get more granular control of my react apps. This project is hosted on{' '}
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
              Netlify
            </a>{' '}
            bundled with webpack, and images are served from Cloudinary's CDN. This project is entirely{' '}
            <a href="https://github.com/GainorB/v3" target="_blank" rel="noopener noreferrer">
              opened sourced
            </a>{' '}
            because I love collaborating with other developers. With that being said if there is anything you see that
            can be made better: clone and submit a pull request!
          </p>
        </Me>
      </AboutWrapper>
    );
  }
}

export default About;
