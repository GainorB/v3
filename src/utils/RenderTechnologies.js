import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { key, removeWhiteSpace } from './index';
import { StudyTech, ListGroup } from '../components/Styled';

const RenderTechnologies = ({ technologies }) => {
  const output = technologies.map(t => (
    <Link key={key()} to={`/work?tech=${removeWhiteSpace(t.toLowerCase())}`}>
      <StudyTech>{t}</StudyTech>
    </Link>
  ));

  return <ListGroup>{output}</ListGroup>;
};

RenderTechnologies.propTypes = {
  technologies: PropTypes.array.isRequired,
};

export default RenderTechnologies;
