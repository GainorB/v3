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

  return <PortfolioWrapper>{output}</PortfolioWrapper>;
};

RenderProjects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default RenderProjects;
