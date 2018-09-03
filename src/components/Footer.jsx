import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, SectionWrapper } from './Styled';

const date = new Date();
const theme = {
  fontColor: '#d8d8e0',
};

const Footer = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#2f2f3a">
      <SectionHeader>By now, you're blown away. Let's 🎉.</SectionHeader>
      <SectionDesc>I am available for hire and open to any ideas of cooperation.</SectionDesc>
      <p className="footer">&copy; {date.getFullYear()} Gainor Bostwick. Made with ❤️ in New York.</p>
    </SectionWrapper>
  </ThemeProvider>
);

export default Footer;
