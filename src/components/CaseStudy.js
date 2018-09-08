import React, { Component } from 'react';
import { v1 } from 'uuid';
import PropTypes from 'prop-types';
import {
  StudyGrid,
  StudySplash,
  StudyContainer,
  StudyButton,
  StudyContent,
  Study,
  StudyHeader,
  StudyInner,
  StudyGallery,
  GalleryGrid,
  ListGroup,
  StudyTech,
  GoBack,
} from '../components/Styled';

class CaseStudy extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = { project: null, loading: true };

  async componentDidMount() {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    const requested = this.props.match.params.project;
    const project = projects.filter(p => p.name === requested)[0];
    await this.setStateAsync({ project, loading: false });
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  renderProject = project => (
    <StudyGrid>
      <StudySplash>
        <span>{project.name}</span>
      </StudySplash>
      <StudyContainer>
        <Study>
          <StudyHeader>About the Project</StudyHeader>
          <StudyContent>
            {project.description}
            <p>
              <StudyButton>
                <i className="fab fa-github" />{' '}
                <a href={project.resources[0]} target="_blank" rel="noopener noreferrer">
                  <span>View Repo</span>
                </a>
              </StudyButton>
              <StudyButton>
                <i className="fas fa-plug" />{' '}
                <a href={project.resources[1]} target="_blank" rel="noopener noreferrer">
                  <span>View Online</span>
                </a>
              </StudyButton>
            </p>
          </StudyContent>
        </Study>
        <StudyInner>
          <Study>
            <StudyHeader>Technical Information</StudyHeader>
            <StudyContent>
              <ol>{project.technicalInformation.map(f => <li key={v1()}>{f}</li>)}</ol>
            </StudyContent>
            <StudyHeader>Powered by</StudyHeader>
            <StudyContent>
              <ListGroup>{project.technologies.map(t => <StudyTech key={v1()}>{t}</StudyTech>)}</ListGroup>
            </StudyContent>
          </Study>
          <Study>
            <StudyHeader>Features</StudyHeader>
            <StudyContent>
              <ol>{project.features.map(f => <li key={v1()}>{f}</li>)}</ol>
            </StudyContent>
          </Study>
        </StudyInner>
      </StudyContainer>
      <GalleryGrid>
        <StudyHeader>Gallery</StudyHeader>
        <StudyGallery>
          {project.gallery.map(p => (
            <div key={v1()}>
              <img src={p} alt={project.name} />
            </div>
          ))}
        </StudyGallery>
      </GalleryGrid>
      <GoBack onClick={() => this.props.history.goBack()}>Go back</GoBack>
    </StudyGrid>
  );

  render() {
    const { project, loading } = this.state;
    if (loading) {
      return <div>Loading..</div>;
    }
    return this.renderProject(project);
  }
}

export default CaseStudy;
