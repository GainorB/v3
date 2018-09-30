import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StudyGrid,
  StudySplash,
  StudyContent,
  StudySplit,
  Study,
  StudyHeader,
  StudyInner,
  StudyGallery,
  ListGroup,
  ButtonGrid,
  NewProjectButton,
} from '../components/Styled';
import Loading from '../utils/Loading';
import InvalidProject from '../utils/InvalidProject';
import { removeUnderline, key } from '../utils';
import RenderTechnologies from '../utils/RenderTechnologies';
import api from '../api';
import ReturnHome from '../utils/ReturnHome';

class CaseStudy extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    project: null,
    loading: true,
    projects: null,
    currentIndex: null,
    error: null,
  };

  async componentDidMount() {
    // eslint-disable-next-line
    let { id, project } = this.props.match.params;
    project = removeUnderline(project);
    const projects = await api.projects();
    const currentProjects = projects.map((e, i) => i);
    const currentProjectNames = projects.map(e => e.name);
    const currentIndex = Number(id);
    if (currentProjects.includes(currentIndex) && currentProjectNames.includes(project)) {
      await this.setStateAsync({ project: projects[currentIndex], projects, loading: false, currentIndex });
    } else {
      await this.setStateAsync({ error: 'Invalid Project', loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex, projects } = this.state;
    if (prevState.currentIndex !== currentIndex && prevState.currentIndex !== null) {
      this.props.history.push(`/case-study/${currentIndex}/${projects[currentIndex].name}`);
    }
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  whichRepo = repoLink => {
    if (repoLink === '') return;
    const className = repoLink.includes('github') ? 'fab fa-github' : 'fab fa-bitbucket';
    // const where = repoLink.includes('github') ? 'Github' : 'Bitbucket';

    return (
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <div>
          <i className={className} />
        </div>
      </a>
    );
  };

  newProject = dir => {
    let { currentIndex } = this.state;
    const { projects } = this.state;
    const max = projects.length;
    if (currentIndex !== max || currentIndex !== -1) {
      switch (dir) {
        case 'next':
          currentIndex += 1;
          break;
        case 'prev':
          currentIndex -= 1;
          break;
        default:
          break;
      }
      this.setState({ project: projects[currentIndex], currentIndex });
    }
  };

  renderProject = project => {
    const { projects, currentIndex } = this.state;
    return (
      <StudyGrid>
        <StudySplash>
          <a href={project.resources[1]} target="_blank" rel="noopener noreferrer">
            <span>{project.title}</span>
          </a>
        </StudySplash>
        <Study>
          <StudyHeader>About the Project</StudyHeader>
          <StudyContent>{project.description}</StudyContent>
          <StudySplit>
            {this.whichRepo(project.resources[0])}
            <a href={project.resources[1]} target="_blank" rel="noopener noreferrer">
              <div>
                <i className="fas fa-eye" />
              </div>
            </a>
          </StudySplit>
        </Study>
        <StudyInner>
          <Study>
            <StudyHeader>Technical Information</StudyHeader>
            <StudyContent>
              <ListGroup>
                {project.technicalInformation.map(f => (
                  <li className="techFeature" key={key()}>
                    {f}
                  </li>
                ))}
              </ListGroup>
            </StudyContent>
          </Study>
          <Study>
            <StudyHeader>Features</StudyHeader>
            <StudyContent>
              <ListGroup>
                {project.features.map(f => (
                  <li className="techFeature" key={key()}>
                    {f}
                  </li>
                ))}
              </ListGroup>
            </StudyContent>
          </Study>
        </StudyInner>
        <Study>
          <StudyHeader>Powered by</StudyHeader>
          <StudyContent>
            <RenderTechnologies technologies={project.technologies} />
          </StudyContent>
        </Study>
        {project.gallery.length > 1 && (
          <Study>
            <StudyHeader>Gallery</StudyHeader>
            <StudyContent>
              <StudyGallery>
                {project.gallery.map(p => (
                  <div key={key()}>
                    <img src={p} alt={project.name} />
                  </div>
                ))}
              </StudyGallery>
            </StudyContent>
          </Study>
        )}
        <ButtonGrid>
          <NewProjectButton onClick={() => this.newProject('prev')} disabled={currentIndex <= 0}>
            Previous Project
          </NewProjectButton>
          <ReturnHome />
          <NewProjectButton onClick={() => this.newProject('next')} disabled={currentIndex === projects.length - 1}>
            Next Project
          </NewProjectButton>
        </ButtonGrid>
      </StudyGrid>
    );
  };

  render() {
    const { project, loading, error } = this.state;
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <InvalidProject error={error} />;
    }
    return this.renderProject(project);
  }
}

export default CaseStudy;
