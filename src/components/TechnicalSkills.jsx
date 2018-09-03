import React, { Component, Fragment } from 'react';
import { debounce } from 'lodash';
import { ThemeProvider } from 'styled-components';
import TheSkills from '../api/TheSkills.jsx';
import { SectionDesc, SectionHeader, SectionWrapper } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

const techSkills = [
  'HTML5',
  'CSS3',
  'Javascript',
  'TypeScript',
  'jQuery',
  'React',
  'Ruby',
  'Rails',
  'SASS',
  'GraphQL',
  'Node',
  'Next',
  'Express',
  'PostgreSQL',
  'RESTful APIs',
  'MongoDB',
  'Heroku',
  'Github',
  'Bootstrap',
  'Materialize',
  'Foundation',
  'Firebase',
  'Wordpress',
  'Webpack',
  'Handlebars',
  'Gulp',
  // 'Flexbox',
  'CSS Grid',
  'Digital Ocean',
  'Mocha',
  'Babel',
];

class TechnicalSkills extends Component {
  state = {
    techSkills,
    displayedSkills: techSkills,
  };

  setDisplayedSkills = debounce(query => {
    this.setState({
      displayedSkills: this.state.techSkills.filter(c => c.toLowerCase().includes(query)),
    });
  }, 500);

  handleChange = e => {
    const input = e.target.value.toLowerCase();
    this.setDisplayedSkills(input);
  };

  render() {
    const { displayedSkills } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <SectionWrapper bg="#2f2f3a">
            <SectionHeader>Technical Skills</SectionHeader>
            <SectionDesc>Currently in ❤️ with TypeScript, React, Node, GraphQL, PostgreSQL</SectionDesc>
            <input type="text" name="searchTerm" placeholder="Search for a skill..." onChange={this.handleChange} />
            <span className="totalSkills">Currently viewing {displayedSkills.length} skill(s).</span>
          </SectionWrapper>
        </ThemeProvider>
        <TheSkills skills={displayedSkills} />
      </Fragment>
    );
  }
}

export default TechnicalSkills;
