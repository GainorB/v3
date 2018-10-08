import React from 'react';
import PropTypes from 'prop-types';
import { uniq } from 'lodash';
import { Link } from 'react-router-dom';
import { key, removeWhiteSpace } from './index';
import { TechListItem, UnorderedList } from '../components/Styled';

export const TallyTech = tech => {
  const tally = tech.reduce((obj, skill) => {
    if (!obj[skill]) {
      obj[skill] = 0;
    }
    obj[skill] += 1;
    return obj;
  }, {});
  const avg = Object.values(tally).reduce((acc, cV) => acc + cV) / Object.values(tally).length;
  return { tally, avg };
};

const RenderTechnologies = ({ technologies }) => {
  const { tally, avg } = TallyTech(technologies);
  if (technologies.length === 0) return <div>Something went wrong. Try refreshing.</div>;
  const output = uniq(technologies).map(t => (
    <Link key={key()} to={`/projects?tech=${removeWhiteSpace(t.toLowerCase())}`}>
      <TechListItem hot={tally[t] > avg}>{t}</TechListItem>
    </Link>
  ));

  return <UnorderedList>{output}</UnorderedList>;
};

RenderTechnologies.propTypes = {
  technologies: PropTypes.array.isRequired,
};

export default RenderTechnologies;
