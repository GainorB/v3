import React, { Fragment } from 'react';
import Commits from '../api/Commits';
import { PageHeader } from '../components/Styled';

const Changelog = () => (
  <Fragment>
    <PageHeader>
      <span className="title">Changelog</span>
    </PageHeader>
    <Commits />
  </Fragment>
);

export default Changelog;
