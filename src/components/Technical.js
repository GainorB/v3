import React, { Component, Fragment } from 'react';
import { debounce } from 'lodash';
// import FlipMove from 'react-flip-move';
import { v1 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import Loading from './Loading';
import { Section, Skill, SkillContainer, ReturnedResults, Input, Replace } from './Styled';
import { mapTech } from '../utils';

const theme = {
  fontColor: '#fff',
};

class Technical extends Component {
  state = {
    loading: true,
    skills: [],
    displayedSkills: [],
    typing: false,
  };

  componentDidMount = async () => {
    const skills = await fetch('https://gainorportfolio.firebaseio.com/skills/.json').then(res => res.json());
    await this.setStateAsync({ skills, displayedSkills: skills, loading: false });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  filterSkills = debounce(query => {
    this.setState({
      displayedSkills: this.state.skills.filter(s => s.toLowerCase().includes(query)),
    });
  }, 700);

  handleChange = e => {
    const query = e.target.value.toLowerCase();
    this.filterSkills(query);
    if (e.target.value.length > 0) {
      this.setState({ typing: true });
    } else {
      this.setState({ typing: false });
    }
  };

  renderSkills = skills => {
    const output = skills.map(mapTech).map(t => (
      <Skill key={v1()}>
        <img src={t.src} alt={t.tech} />
        <span>{t.tech}</span>
      </Skill>
    ));

    return <SkillContainer>{output}</SkillContainer>;
  };

  render() {
    const { displayedSkills, loading, typing } = this.state;
    const { length } = displayedSkills;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            <Input type="text" name="searchTerm" placeholder="technical." onChange={this.handleChange} />
            <ReturnedResults>
              Currently displaying {length} skill{length > 0 ? 's' : ''}.
            </ReturnedResults>
            {!typing && <Replace>replace 'technical' above with a technology to filter skills</Replace>}
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderSkills(displayedSkills)}
      </Fragment>
    );
  }
}

export default Technical;
