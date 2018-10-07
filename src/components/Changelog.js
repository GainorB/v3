import React, { Component } from 'react';
import Commits from '../api/Commits';
import { StudySplash } from '../components/Styled';

class Changelog extends Component {
  render() {
    return (
      <div>
        <StudySplash>
          <span>Changelog</span>
        </StudySplash>
        <Commits />
      </div>
    );
  }
}

export default Changelog;
