import React, { Component } from 'react';
import queryString from 'query-string';
import { flattenDeep, uniq } from 'lodash';
import { Link } from 'react-router-dom';
import {
  StudySplash,
  StudyContent,
  Study,
  StudyHeader,
  ListGroup,
  StudyTech,
  ProjectGrid,
  PortfolioWrapper,
} from '../components/Styled';
import Loading from './Loading';
import { key, removeWhiteSpace, removeUnderline } from '../utils';

export default class ProjectsPerTech extends Component {
  state = {
    loading: true,
    techUsed: null,
    projectsPerTech: null,
    query: '',
  };

  componentDidMount = async () => {
    const { location } = this.props;
    const parsed = removeUnderline(queryString.parse(location.search).tech);
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    const projectsPerTech = projects.filter(p => p.technologies.map(t => t.toLowerCase()).includes(parsed));
    const techUsed = uniq(flattenDeep(projects.map(e => e.technologies)));
    await this.setStateAsync({ loading: false, techUsed, projectsPerTech, query: parsed });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  renderTechnologies = tech => {
    const output = tech.map(t => <StudyTech key={key()}>{t}</StudyTech>);

    return (
      <Study>
        <StudyHeader>Filterable technologies</StudyHeader>
        <StudyContent>
          <ListGroup>{output}</ListGroup>
        </StudyContent>
      </Study>
    );
  };

  renderProjects = (projects, query) => {
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

    return (
      <Study>
        <StudyHeader>Projects Powered by {query} </StudyHeader>
        <StudyContent>
          <PortfolioWrapper>{output}</PortfolioWrapper>
        </StudyContent>
      </Study>
    );
  };

  render() {
    const { techUsed, loading, projectsPerTech, query } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <StudySplash>
          <span>{query}</span>
        </StudySplash>
        {this.renderTechnologies(techUsed)}
        {this.renderProjects(projectsPerTech, query)}
      </div>
    );
  }
}
