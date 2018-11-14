import React, { PureComponent } from 'react';
import { debounce, flattenDeep } from 'lodash';
// import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loading from '../../utils/Loading';
import { Section, Skill, SkillWrapper, ReturnedResults, Replace } from '../Styled';
import { mapTech, key, removeWhiteSpace } from '../../utils';
import Select from '../../utils/MySelect';
import api from '../../api';
import { TallyTech } from '../../utils/RenderTechnologies';

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
    const skills = await api.skills();
    const projects = await api.projects();
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
    const { tally, avg } = TallyTech(projectTech);

    const output = skills.map(mapTech).map(t => {
      const plural = tally[t.tech] !== 1 ? 's' : '';
      return (
        <Skill key={key()} stack={tally[t.tech] > avg}>
          <div className="skill__rows">
            <img src={t.src} alt={t.tech} />
            <span className="skill__Tech">{t.tech}</span>
          </div>
          {tally[t.tech] && (
            <Link to={`/projects?tech=${removeWhiteSpace(t.tech.toLowerCase())}`}>
              <div className="skill__projectCount">
                Used in {tally[t.tech]} project
                {plural}
              </div>
            </Link>
          )}
        </Skill>
      );
    });

    return <SkillWrapper>{output}</SkillWrapper>;
  };

  render() {
    const { displayedSkills, techUsed, loading, typing, selectOptions } = this.state;
    const { length } = displayedSkills;

    return (
      <div style={{ background: '#fff' }}>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            {selectOptions && <Select placeholder="technical." onChange={this.handleChange} options={selectOptions} />}
            <ReturnedResults>
              Currently displaying {length} skill
              {length > 1 ? 's' : ''}.
            </ReturnedResults>
            {!typing && <Replace>replace 'technical' above with a technology to filter</Replace>}
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderSkills(displayedSkills, techUsed)}
      </div>
    );
  }
}

export default Technical;
