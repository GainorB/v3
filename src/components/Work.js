import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { debounce, flattenDeep, uniq } from 'lodash';
import { ThemeProvider } from 'styled-components';
import MySelect from './MySelect';
import { Section, PortfolioWrapper, WorkWrapper, ProjectGrid, ReturnedResults, Input, Replace } from './Styled';
import Loading from './Loading';
import { key } from '../utils';

const theme = {
  fontColor: '#fff',
};

class Work extends Component {
  state = { loading: true, projects: [], displayedProjects: [], typing: false, techUsed: null, selectedOption: null };

  componentDidMount = async () => {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    // AN ARRAY OF STRINGS
    // REPRESENTING ALL THE TECH USED BETWEEN ALL PROJECTS
    const techUsed = uniq(flattenDeep(projects.map(e => e.technologies))).map(e => ({ value: e, label: e }));

    await this.setStateAsync({ projects, displayedProjects: projects, loading: false, techUsed });
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

  // handleChange = e => {
  //   const query = e.target.value.toLowerCase();
  //   this.filterProjects(query);
  //   if (e.target.value.length > 0) {
  //     this.setState({ typing: true });
  //   } else {
  //     this.setState({ typing: false });
  //   }
  // };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  renderProjects = projects => {
    const output = projects.map((p, idx) => (
      <Link to={{ pathname: `/case-study/${idx}/${p.name}`, state: { project: p } }} key={key()}>
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
    const { loading, displayedProjects, typing, techUsed, selectedOption } = this.state;
    console.log(techUsed && techUsed);
    // const { length } = displayedProjects;
    return (
      <WorkWrapper>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            {techUsed && (
              <MySelect placeholder="work." value={selectedOption} onChange={this.handleChange} options={techUsed} />
            )}
            {/* <Input type="text" name="searchTerm" placeholder="work." onChange={this.handleChange} /> */}
            {/* {techUsed && <Suggestions data={techUsed} />} */}
            {/* <ReturnedResults>
              Currently displaying {length} project{length > 0 ? 's' : ''}.
            </ReturnedResults> */}
            {!typing && <Replace>replace 'work' above with a technology to filter projects</Replace>}
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderProjects(displayedProjects)}
      </WorkWrapper>
    );
  }
}

export default Work;
