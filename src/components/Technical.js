import React, { PureComponent, Fragment } from 'react';
import { debounce } from 'lodash';
// import FlipMove from 'react-flip-move';
import { ThemeProvider } from 'styled-components';
import Loading from './Loading';
import { Section, Skill, SkillContainer, ReturnedResults, Replace } from './Styled';
import { mapTech, key } from '../utils';
import MySelect from './MySelect';

const theme = {
  fontColor: '#fff',
};

class Technical extends PureComponent {
  state = {
    loading: true,
    skills: [],
    displayedSkills: [],
    typing: false,
    selectOptions: null,
  };

  componentDidMount = async () => {
    const skills = await fetch('https://gainorportfolio.firebaseio.com/skills/.json').then(res => res.json());
    const selectOptions = skills.map(s => ({ value: s, label: `${s.toLowerCase()}.` }));
    await this.setStateAsync({ skills, displayedSkills: skills, loading: false, selectOptions });
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

  handleChange = data => {
    if (data === null) {
      this.setState({ displayedSkills: this.state.skills });
      return;
    }
    const { value } = data;
    const query = value.toLowerCase();
    this.filterSkills(query);
    if (query.length > 0) {
      this.setState({ typing: true });
    } else {
      this.setState({ typing: false });
    }
  };

  renderSkills = skills => {
    const output = skills.map(mapTech).map(t => (
      <Skill key={key()}>
        <img src={t.src} alt={t.tech} />
        <span>{t.tech}</span>
      </Skill>
    ));

    return <SkillContainer>{output}</SkillContainer>;
  };

  render() {
    const { displayedSkills, loading, typing, selectOptions } = this.state;
    const { length } = displayedSkills;

    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            {selectOptions && (
              <MySelect placeholder="technical." onChange={this.handleChange} options={selectOptions} />
            )}
            <ReturnedResults>
              Currently displaying {length} skill
              {length > 1 ? 's' : ''}.
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
