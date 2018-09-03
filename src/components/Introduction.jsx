import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MyName, SectionDesc, SectionWrapper } from './Styled';

// const logo = require('../../assets/images/logo.jpeg');
const theme = {
  fontColor: '#d8d8e0',
};

const Introduction = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#2f2f3a">
      <MyName>Gainor Bostwick</MyName>
      <SectionDesc>
        Skilled Full Stack Developer, passionate about developing applications that will bring about change in peoples’
        lives by utilizing my personal experiences, interests, and expertise to provide unforgettable experiences. A
        lifelong learner dedicated to continuously learning and implementing new practices to perfect my craft and
        create innovative applications.
      </SectionDesc>
    </SectionWrapper>
  </ThemeProvider>
);

export default Introduction;
