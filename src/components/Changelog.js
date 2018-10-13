import React, { Fragment, Component } from 'react';
import Commits from '../api/Commits';
import { PageHeader } from '../components/Styled';

class Changelog extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader>
          <span>Changelog</span>
        </PageHeader>
        <Commits />
      </Fragment>
    );
  }
}

export default Changelog;
