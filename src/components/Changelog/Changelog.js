import React from 'react';
import Commits from '../../api/Commits';
import { PageHeader } from '../Styled';
import ReturnHome from '../../utils/ReturnHome';

const Changelog = () => (
  <div style={{ padding: '20px' }}>
    <PageHeader>
      <span className="title">Changelog</span>
    </PageHeader>
    <ReturnHome />
    <Commits />
  </div>
);

export default Changelog;
