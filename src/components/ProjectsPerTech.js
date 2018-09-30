import React, { Component } from 'react';
import queryString from 'query-string';
import { flattenDeep, uniq } from 'lodash';
import PropTypes from 'prop-types';
import { StudySplash, StudyContent, Study, StudyHeader, PortfolioWrapper } from '../components/Styled';
import Loading from './Loading';
import NotFound from './NotFound';
import { removeUnderline } from '../utils';
import RenderProjects from '../utils/RenderProjects';
import RenderTechnologies from '../utils/RenderTechnologies';

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
    const parsed = this.parseQuery(location.search);
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

    const parsed = this.parseQuery(location.search);
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

  parseQuery = query => {
    console.log('query', query);
    if (query === '') return;
    return removeUnderline(queryString.parse(query).tech);
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
        <Study>
          <StudyHeader>Filterable technologies</StudyHeader>
          <StudyContent>
            <RenderTechnologies technologies={techUsed} />
          </StudyContent>
        </Study>
        <Study>
          <StudyHeader>Projects Powered by {query} </StudyHeader>
          <PortfolioWrapper>
            <RenderProjects projects={projectsPerTech} />
          </PortfolioWrapper>
        </Study>
      </div>
    );
  }
}
