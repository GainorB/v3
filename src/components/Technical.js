import React, { PureComponent, Fragment } from 'react';
import { debounce, flattenDeep } from 'lodash';
// import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loading from './Loading';
import { Section, Skill, SkillContainer, ReturnedResults, Replace } from './Styled';
import { mapTech, key, removeWhiteSpace } from '../utils';
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
    techUsed: null,
  };

  componentDidMount = async () => {
    const skills = await fetch('https://gainorportfolio.firebaseio.com/skills/.json').then(res => res.json());
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    const techUsed = flattenDeep(projects.map(e => e.technologies));
    const selectOptions = skills.map(s => ({ value: s, label: `${s.toLowerCase()}.` }));
    if (skills.length > 5 && techUsed.length > 5) {
      await this.setStateAsync({ skills, displayedSkills: skills, loading: false, selectOptions, techUsed });
    }
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

  renderSkills = (skills, projectTech) => {
    const tally = projectTech.reduce((obj, skill) => {
      if (!obj[skill]) {
        obj[skill] = 0;
      }
      obj[skill] += 1;
      return obj;
    }, {});

    const output = skills.map(mapTech).map(t => {
      const plural = tally[t.tech] !== 1 ? 's' : '';
      return (
        <Skill key={key()} usedSkill={!!tally[t.tech]}>
          <div className="skill__rows">
            <img src={t.src} alt={t.tech} />
            <span className="skill__Tech">{t.tech}</span>
          </div>
          {tally[t.tech] && (
            <Link to={`/work?tech=${removeWhiteSpace(t.tech.toLowerCase())}`}>
              <div className="skill__projectCount">
                Used in {tally[t.tech]} project
                {plural}
              </div>
            </Link>
          )}
        </Skill>
      );
    });

    return <SkillContainer>{output}</SkillContainer>;
  };

  render() {
    const { displayedSkills, techUsed, loading, typing, selectOptions } = this.state;
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
        {loading ? <Loading /> : this.renderSkills(displayedSkills, techUsed)}
      </Fragment>
    );
  }
}

export default Technical;
