import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { debounce, flattenDeep, uniq } from 'lodash';
import { ThemeProvider } from 'styled-components';
import MySelect from './MySelect';
import { Section, PortfolioWrapper, WorkWrapper, ProjectGrid, ReturnedResults, Replace } from './Styled';
import Loading from './Loading';
import { key, sortSkills, removeWhiteSpace } from '../utils';

const theme = {
  fontColor: '#fff',
};

class Work extends PureComponent {
  state = {
    loading: true,
    typing: false,
    projects: [],
    displayedProjects: [],
    displayedProjectsTech: null,
    techUsed: null,
  };

  componentDidMount = async () => {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    // AN ARRAY OF STRINGS
    // REPRESENTING ALL THE TECH USED BETWEEN ALL PROJECTS
    const techUsed = uniq(flattenDeep(projects.map(e => e.technologies)))
      // .sort(sortSkills)
      .map(e => ({
        value: e,
        label: `${e.toLowerCase()}.`,
      }));

    await this.setStateAsync({ projects, displayedProjects: projects, loading: false, techUsed });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  filterProjects = debounce(query => {
    if (query) {
      const filteredProjects = this.state.projects.filter(p =>
        p.technologies.map(t => t.toLowerCase()).includes(query)
      );
      const filteredProjectsTech = uniq(flattenDeep(filteredProjects.map(e => e.technologies)));

      this.setState({
        displayedProjects: filteredProjects,
        displayedProjectsTech: filteredProjectsTech,
      });
    } else {
      this.setState({ displayedProjects: this.state.projects, displayedProjectsTech: this.state.techUsed });
    }
  }, 700);

  handleChange = data => {
    if (data === null) {
      this.setState({ displayedProjects: this.state.projects, displayedProjectsTech: this.state.techUsed });
      return;
    }
    const { value } = data;
    const query = value.toLowerCase();
    this.filterProjects(query);
    if (query.length > 0) {
      this.setState({ typing: true });
    } else {
      this.setState({ typing: false });
    }
  };

  renderProjects = projects => {
    const output = projects.map(p => (
      <Link to={{ pathname: `/case-study/${p.id}/${removeWhiteSpace(p.name)}`, state: { project: p } }} key={key()}>
        <ProjectGrid>
          <img src={p.image} alt={p.name} />
          <div className="overlay">
            <div className="overlay__text">
              {p.name}
              <div className="technologies">
                {p.technologies.map((t, index) => {
                  const noComma = index === p.technologies.length - 1 ? '' : ', ';
                  return (
                    <span key={key()}>
                      {t}
                      {noComma}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </ProjectGrid>
      </Link>
    ));
    return <PortfolioWrapper>{output}</PortfolioWrapper>;
  };

  render() {
    const { loading, displayedProjects, typing, techUsed, displayedProjectsTech } = this.state;
    const { length } = displayedProjects;
    return (
      <WorkWrapper>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            {techUsed && <MySelect placeholder="work." onChange={this.handleChange} options={techUsed} />}
            <ReturnedResults>
              Currently displaying {length} project
              {length > 1 ? 's' : ''} with{' '}
              {(displayedProjectsTech && displayedProjectsTech.length) || (techUsed && techUsed.length)} technologies.
            </ReturnedResults>
            {!typing && <Replace>replace 'work' above with a technology to filter projects</Replace>}
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderProjects(displayedProjects)}
      </WorkWrapper>
    );
  }
}

export default Work;
