import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { v1 } from 'uuid';
import {
  SectionDesc,
  SectionHeader,
  SectionWrapper,
  ListGroup,
  MoreDetails,
  Online,
  PortfolioWrapper,
  Project,
  ProjectDesc,
  ProjectGrid,
  ProjectTitle,
  Tech,
} from './Styled';

class Portfolio extends Component {
  state = { loading: true, projects: [] };

  componentDidMount = async () => {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    await this.setStateAsync({ projects, loading: false });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  renderProjects = projects => {
    const output = projects.map(p => (
      <ProjectGrid key={v1()}>
        <img src={p.image} alt={p.name} />
        <Project>
          <ListGroup>
            <li>
              <ProjectTitle>{p.name}</ProjectTitle>
            </li>
            <li>
              <ProjectDesc>{p.description.substring(0, 200)}...</ProjectDesc>
            </li>
            <li>{p.technologies.map(t => <Tech key={v1()}>{t}</Tech>)}</li>
            <li>
              <a href={p.resources[1]} target="_blank" rel="noopener noreferrer">
                <Online>View Online</Online>
              </a>
            </li>
            <li>
              <Link to={`/projects/${p.name}`}>
                <MoreDetails>Case study</MoreDetails>
              </Link>
            </li>
          </ListGroup>
        </Project>
      </ProjectGrid>
    ));
    return <PortfolioWrapper>{output}</PortfolioWrapper>;
  };

  render() {
    const { loading, projects } = this.state;
    return (
      <Fragment>
        <SectionWrapper bg="#f4f3f3">
          <SectionHeader>Portfolio</SectionHeader>
          <SectionDesc>
            Unless stated otherwise, all the back-end and front-end parts were completely done by me.
          </SectionDesc>
        </SectionWrapper>
        {loading ? 'Loading...' : this.renderProjects(projects)}
      </Fragment>
    );
  }
}

export default Portfolio;
