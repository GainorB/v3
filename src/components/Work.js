import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { v1 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import { Section, PortfolioWrapper, WorkWrapper, ProjectGrid, ReturnedResults, Input, Replace } from './Styled';
import Loading from './Loading';

const theme = {
  fontColor: '#fff',
};
class Work extends Component {
  state = { loading: true, projects: [], displayedProjects: [], typing: false };

  componentDidMount = async () => {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    await this.setStateAsync({ projects, displayedProjects: projects, loading: false });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  filterProjects = debounce(query => {
    if (query) {
      this.setState({
        displayedProjects: this.state.projects.filter(p => p.technologies.map(t => t.toLowerCase()).includes(query)),
      });
    } else {
      this.setState({ displayedProjects: this.state.projects });
    }
  }, 700);

  handleChange = e => {
    const query = e.target.value.toLowerCase();
    this.filterProjects(query);
    if (e.target.value.length > 0) {
      this.setState({ typing: true });
    } else {
      this.setState({ typing: false });
    }
  };

  renderProjects = projects => {
    const output = projects.map((p, idx) => (
      <Link to={{ pathname: `/case-study/${idx}/${p.name}`, state: { project: p } }} key={v1()}>
        <ProjectGrid>
          <img src={p.image} alt={p.name} />
          <div className="overlay">
            <div className="overlay__text">
              {p.name}
              <div className="technologies">
                {p.technologies.map((t, idx) => {
                  const noComma = idx === p.technologies.length - 1 ? '' : ', ';
                  return (
                    <span key={v1()}>
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
    const { loading, displayedProjects, typing } = this.state;
    const { length } = displayedProjects;
    return (
      <WorkWrapper>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            <Input type="text" name="searchTerm" placeholder="work." onChange={this.handleChange} />
            <ReturnedResults>
              Currently displaying {length} project{length > 0 ? 's' : ''}.
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
