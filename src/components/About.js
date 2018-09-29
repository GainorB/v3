import React, { PureComponent, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionHeader, Section, Me } from './Styled';

const theme = {
  fontColor: '#fff',
};

class About extends PureComponent {
  render() {
    return (
      <Fragment>
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
        </Me>
      </Fragment>
    );
  }
}

export default About;
