import React, { Component } from 'react';
import Commits from '../api/Commits';
import { PageHeader } from '../components/Styled';

class Changelog extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <span>Changelog</span>
        </PageHeader>
        <Commits />
      </div>
    );
  }
}

export default Changelog;
