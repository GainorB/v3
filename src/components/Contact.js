import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, SectionWrapper } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

const Contact = () => (
  <ThemeProvider theme={theme}>
    <SectionWrapper bg="#1c4e8a">
      <SectionHeader>By now, you're blown away. Let's 🎉.</SectionHeader>
      <SectionDesc>I am available for hire and seeking new job opportunities.</SectionDesc>
      <a href="mailto:hi@gainorbostwick.com" target="_blank" rel="noopener noreferrer">
        <button>
          <i className="fas fa-paper-plane" /> <span>Get in Touch</span>
        </button>
      </a>
    </SectionWrapper>
  </ThemeProvider>
);

export default Contact;
