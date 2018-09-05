import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MyName, SectionDesc, SectionWrapper } from './Styled';

const theme = {
  fontColor: '#5D5D5D',
};

const Introduction = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#fff">
      {/* <MyName>Gainor Bostwick</MyName> */}
      {/* <SectionDesc>
        Skilled Full Stack Developer, passionate about developing applications that will bring about change in peoples’
        lives by utilizing my personal experiences, interests, and expertise to provide unforgettable experiences. A
        lifelong learner dedicated to continuously learning and implementing new practices to perfect my craft and
        create innovative applications.
      </SectionDesc> */}
    </SectionWrapper>
  </ThemeProvider>
);

export default Introduction;
