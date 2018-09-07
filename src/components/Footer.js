import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionWrapper } from './Styled';

const date = new Date();
const theme = {
  fontColor: '#FFFFFF',
  height: '200px',
};

const Footer = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#090909">
      <p className="footer">&copy; {date.getFullYear()} Gainor Bostwick. Made with ❤️ in New York.</p>
      <p className="footer__bottom">hi@gainorbostwick.com</p>
    </SectionWrapper>
  </ThemeProvider>
);

export default Footer;
