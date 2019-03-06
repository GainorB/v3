import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, Section, Button } from '../Styled';
import Config from '../../utils/Config';

const theme = {
  fontColor: '#FFFFFF',
  height: '500px',
};

class Contact extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Section bg="#2447F9">
          <SectionHeader>Like my work?</SectionHeader>
          <SectionDesc>Let’s talk about your project and how I can help you.</SectionDesc>
          <a href={`mailto:${Config.global.email}`} target="_blank" rel="noopener noreferrer">
            <Button footer>
              <i className="fas fa-paper-plane" /> <span>Shoot me a message</span>
            </Button>
          </a>
        </Section>
      </ThemeProvider>
    );
  }
}

export default Contact;
