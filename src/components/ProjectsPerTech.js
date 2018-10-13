import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { flattenDeep } from 'lodash';
import PropTypes from 'prop-types';
import { PageHeader, ProjectContent, Project, ProjectHeader } from '../components/Styled';
import api from '../api';
import Loading from '../utils/Loading';
import NotFound from '../utils/NotFound';
import { removeUnderline } from '../utils';
import RenderProjects from '../utils/RenderProjects';
import RenderTechnologies from '../utils/RenderTechnologies';
import ReturnHome from '../utils/ReturnHome';

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
    error: null,
  };

  componentDidMount = async () => {
    const { location } = this.props;
    const parsed = this.parseQuery(location.search);
    const projects = await api.projects();
    const projectsPerTech = projects.filter(p => p.technologies.map(t => t.toLowerCase()).includes(parsed));
    const techUsed = flattenDeep(projects.map(e => e.technologies));
    const isThisTechValid = techUsed.map(t => t.toLowerCase()).includes(parsed);
    if (isThisTechValid) {
      await this.setStateAsync({
        loading: false,
        techUsed,
        projects,
        projectsPerTech,
        query: parsed,
      });
    } else {
      await this.setStateAsync({ error: 'Invalid Technology', loading: false });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { projects, query } = this.state;
    const { location } = this.props;
    const parsed = this.parseQuery(location.search);
    if (query !== parsed && prevState.query !== parsed && projects !== null) {
      const projectsPerTech = projects.filter(p => p.technologies.map(t => t.toLowerCase()).includes(parsed));
      this.setState({ query: parsed, projectsPerTech });
    }
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  parseQuery = query => {
    const parsed = queryString.parse(query);
    if (parsed.tech === undefined) return;
    if (query === '') return;
    return removeUnderline(parsed.tech);
  };

  render() {
    const { techUsed, loading, projectsPerTech, query, error } = this.state;
    if (loading) return <Loading />;
    if (error) return <NotFound />;
    return (
      <div>
        <PageHeader>
          <Link to="/">
            <span>{query}</span>
          </Link>
        </PageHeader>
        <Project>
          <ProjectHeader>Find more projects using</ProjectHeader>
          <ProjectContent>
            <RenderTechnologies technologies={techUsed} />
          </ProjectContent>
        </Project>
        <ProjectHeader>Projects powered with {query} </ProjectHeader>
        <RenderProjects projects={projectsPerTech} />
        <ReturnHome />
      </div>
    );
  }
}
