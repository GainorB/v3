import React, { PureComponent } from 'react';
import { debounce, flattenDeep, uniq } from 'lodash';
import { ThemeProvider } from 'styled-components';
import Select from '../../utils/MySelect';
import { Section, ReturnedResults, Replace } from '../Styled';
import Loading from '../../utils/Loading';
import RenderProjects from '../../utils/RenderProjects';
import api from '../../api';

const theme = {
  fontColor: '#fff',
};

class Projects extends PureComponent {
  state = {
    loading: true,
    typing: false,
    projects: [],
    displayedProjects: [],
    displayedProjectsTech: null,
    techUsed: null,
  };

  componentDidMount = async () => {
    const projects = await api.projects();
    // AN ARRAY OF STRINGS
    // REPRESENTING ALL THE TECH USED BETWEEN ALL PROJECTS
    const techUsed = uniq(flattenDeep(projects.map(e => e.technologies))).map(e => ({
      value: e,
      label: `${e.toLowerCase()}.`,
    }));

    await this.setState({ projects, displayedProjects: projects, loading: false, techUsed });
  };

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

  render() {
    const { loading, displayedProjects, typing, techUsed, displayedProjectsTech } = this.state;
    const { length } = displayedProjects;
    return (
      <div style={{ background: '#fff' }}>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            {techUsed && <Select placeholder="projects." onChange={this.handleChange} options={techUsed} />}
            <ReturnedResults>
              Currently displaying {length} project
              {length > 1 ? 's' : ''} with{' '}
              {(displayedProjectsTech && displayedProjectsTech.length) || (techUsed && techUsed.length)} technologies.
            </ReturnedResults>
            {!typing && <Replace>replace 'projects' above with a technology to filter</Replace>}
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : <RenderProjects projects={displayedProjects} />}
      </div>
    );
  }
}

export default Projects;
