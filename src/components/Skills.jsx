import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, SectionWrapper } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

const Contact = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#45425c">
      <SectionHeader>Skills</SectionHeader>
      <SectionDesc>I work primarily with Javascript, Node.js and React.js.</SectionDesc>
    </SectionWrapper>
  </ThemeProvider>
);

export default Contact;
