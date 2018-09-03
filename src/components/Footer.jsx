import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionWrapper } from './Styled';

const date = new Date();
const theme = {
  fontColor: '#d8d8e0',
};

const Footer = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#2f2f3a">
      <p className="footer">&copy; {date.getFullYear()} Gainor Bostwick. Made with ❤️ in New York.</p>
    </SectionWrapper>
  </ThemeProvider>
);

export default Footer;
