import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  UnorderedList,
  BrowserHeader,
  BrowserWrapper,
  BrowserBookmarks,
  Project,
  ProjectGallery,
  BrowserBar,
  ProjectHeadline,
  ProjectInnerGrid,
  ProjectContent,
  ProjectColumns,
  ProjectTitle,
  ProjectHeader,
  ProjectDescription,
} from '../components/Styled';
import Loading from '../utils/Loading';
import ErrorMessage from '../utils/ErrorMessage';
import { removeUnderline, key } from '../utils';
import RenderTechnologies from '../utils/RenderTechnologies';
import api from '../api';
import ReturnHome from '../utils/ReturnHome';

class CaseStudy extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired,
    showSideMenu: PropTypes.bool.isRequired,
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
    const { toggle, showSideMenu } = this.props;
    console.log(project);
    return (
      <BrowserWrapper>
        <BrowserHeader>
          <div className="dot dot-one" />
          <div className="dot dot-two" />
          <div className="dot dot-third" />
        </BrowserHeader>
        <BrowserBar>
          <button onClick={() => this.newProject('prev')} disabled={currentIndex <= 0}>
            <i className="fas fa-arrow-left" />
          </button>
          <button onClick={() => this.newProject('next')} disabled={currentIndex === projects.length - 1}>
            <i className="fas fa-arrow-right" />
          </button>
          <ReturnHome />
          <div className="browser__searchBar">
            <a href={project.resources[1]} target="_blank" rel="noopener noreferrer">
              {project.resources[1]}
            </a>
          </div>
          {this.whichRepo(project.resources[0])}
          <button onClick={() => toggle('showSideMenu')}>
            {showSideMenu ? <i className="fas fa-toggle-on" /> : <i className="fas fa-toggle-off" />}
          </button>
        </BrowserBar>
        <BrowserBookmarks>
          <div className="bookmark">
            <i className="fas fa-folder" /> <span>Frontend</span>
          </div>
          <div className="bookmark">
            <i className="fas fa-folder" /> <span>Backend</span>
          </div>
          <div className="bookmark">
            <i className="fas fa-folder" /> <span>Fullstack</span>
          </div>
        </BrowserBookmarks>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectHeadline>{project.oneLiner}</ProjectHeadline>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectInnerGrid>
          <ProjectColumns>
            <Project>
              <ProjectHeader>Features</ProjectHeader>
              <ProjectContent>
                <UnorderedList>
                  {project.features.map(f => (
                    <li className="techFeature" key={key()}>
                      {f}
                    </li>
                  ))}
                </UnorderedList>
              </ProjectContent>
            </Project>
            <Project>
              <ProjectHeader>Technical Information</ProjectHeader>
              <ProjectContent>
                <UnorderedList>
                  {project.technicalInformation.map(f => (
                    <li className="techFeature" key={key()}>
                      {f}
                    </li>
                  ))}
                </UnorderedList>
              </ProjectContent>
            </Project>
          </ProjectColumns>
          <Project>
            <ProjectHeader>Powered by</ProjectHeader>
            <ProjectContent>
              <RenderTechnologies technologies={project.technologies} />
            </ProjectContent>
          </Project>
          <Project>
            <ProjectHeader>Gallery</ProjectHeader>
            <ProjectContent>
              <ProjectGallery>
                {project.gallery.map(p => (
                  <div key={key()}>
                    <img src={p} alt={project.name} />
                  </div>
                ))}
              </ProjectGallery>
            </ProjectContent>
          </Project>
        </ProjectInnerGrid>
      </BrowserWrapper>
    );
  };

  render() {
    const { project, loading, error } = this.state;
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <ErrorMessage error={error} />;
    }
    return this.renderProject(project);
  }
}

export default CaseStudy;
