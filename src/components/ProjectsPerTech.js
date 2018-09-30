import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { flattenDeep, uniq } from 'lodash';
import PropTypes from 'prop-types';
import { StudySplash, StudyContent, Study, StudyHeader } from '../components/Styled';
import Loading from './Loading';
import NotFound from './NotFound';
import { removeUnderline } from '../utils';
import RenderProjects from '../utils/RenderProjects';
import RenderTechnologies from '../utils/RenderTechnologies';
import api from '../api';

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
    const techUsed = uniq(flattenDeep(projects.map(e => e.technologies)));
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
        <StudySplash>
          <Link to="/">
            <span>{query}</span>
          </Link>
        </StudySplash>
        <Study>
          <StudyHeader>Find more projects using</StudyHeader>
          <StudyContent>
            <RenderTechnologies technologies={techUsed} />
          </StudyContent>
        </Study>
        <Study>
          <StudyHeader>Projects Powered with {query} </StudyHeader>
          <RenderProjects projects={projectsPerTech} />
        </Study>
      </div>
    );
  }
}
