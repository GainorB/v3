import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, SectionWrapper } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

const Contact = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#45425c">
      <SectionHeader>Technical Skills</SectionHeader>
      <SectionDesc>Currently in ❤️ with TypeScript, React, Node, GraphQL, Postgresql</SectionDesc>
    </SectionWrapper>
  </ThemeProvider>
);

export default Contact;
