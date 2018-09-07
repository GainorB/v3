import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, Section, Button } from './Styled';

const theme = {
  fontColor: '#FFFFFF',
  height: '500px',
};

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Section bg="#2447F9">
      <SectionHeader>Like my work?</SectionHeader>
      <SectionDesc>Let’s talk about your project and how I can help you.</SectionDesc>
      <a href="mailto:hi@gainorbostwick.com" target="_blank" rel="noopener noreferrer">
        <Button>
          <i className="fas fa-paper-plane" /> <span>Shoot me a message</span>
        </Button>
      </a>
    </Section>
  </ThemeProvider>
);

export default Contact;
