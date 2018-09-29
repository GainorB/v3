import React, { Component } from 'react';
import queryString from 'query-string';
import { flattenDeep, uniq } from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
import NotFound from './NotFound';
import { key, removeWhiteSpace, removeUnderline } from '../utils';

export default class ProjectsPerTech extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  state = {
    loading: true,
    techUsed: null,
    projects: null,
    projectsPerTech: null,
    query: '',
  };

  componentDidMount = async () => {
    const { location } = this.props;
    const parsed = removeUnderline(queryString.parse(location.search).tech);
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    const projectsPerTech = projects.filter(p => p.technologies.map(t => t.toLowerCase()).includes(parsed));
    const techUsed = uniq(flattenDeep(projects.map(e => e.technologies)));
    await this.setStateAsync({
      loading: false,
      techUsed,
      projects,
      projectsPerTech,
      query: parsed,
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { location } = nextProps;
    const { query, projects } = nextState;

    const parsed = removeUnderline(queryString.parse(location.search).tech);
    const projectsPerTech = projects.filter(p => p.technologies.map(t => t.toLowerCase()).includes(parsed));
    if (parsed !== query) {
      this.setState({ projectsPerTech, query: parsed });
      return true;
    }
    return true;
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  renderTechnologies = tech => {
    const output = tech.map(t => (
      <Link key={key()} to={`/work?tech=${removeWhiteSpace(t.toLowerCase())}`}>
        <StudyTech>{t}</StudyTech>
      </Link>
    ));

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
    if (projects.length === 0) return null;
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
    const { location } = this.props;
    const parsed = queryString.parse(location.search);
    if (location.search === '' || parsed.tech === '') return <NotFound />;
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
