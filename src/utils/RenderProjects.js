import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { key, removeWhiteSpace } from './index';
import { ProjectGrid, PortfolioWrapper } from '../components/Styled';

const RenderProjects = ({ projects }) => {
  if (projects.length === 0) return <div>Something went wrong. Try refreshing.</div>;

  const output = projects.map(p => (
    <Link to={{ pathname: `/case-study/${p.id}/${removeWhiteSpace(p.name)}`, state: { project: p } }} key={key()}>
      <ProjectGrid>
        <div className="toolbar">
          <div className="dot dot-one" />
          <div className="dot dot-two" />
          <div className="dot dot-third" />
        </div>
        <div className="project__meta">
          <div className="project__image">
            <img src={p.image} alt={p.name} />
            <div className="overlay">
              <div className="overlay__text">
                <i className="fas fa-eye" />
              </div>
            </div>
          </div>
        </div>
        <div className="project__name">
          <span>{p.name}</span>
          <span>{p.oneLiner}</span>
        </div>
      </ProjectGrid>
    </Link>
  ));

  return <PortfolioWrapper>{output}</PortfolioWrapper>;
};

RenderProjects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default RenderProjects;
