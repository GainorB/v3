import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, SectionWrapper } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

const Contact = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#45425c">
      <SectionHeader>By now, you're blown away. Let's 🎉.</SectionHeader>
      <SectionDesc>I am available for hire and open to any ideas of cooperation.</SectionDesc>
    </SectionWrapper>
  </ThemeProvider>
);

export default Contact;
