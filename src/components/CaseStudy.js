import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CaseStudy extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = { project: null, loading: true };

  async componentDidMount() {
    const projects = await fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json());
    const requested = this.props.match.params.project;
    const project = projects.filter(p => p.name === requested)[0];
    await this.setStateAsync({ project, loading: false });
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  render() {
    const { project, loading } = this.state;
    if (loading) {
      return <div>Loading..</div>;
    }
    return <div>CaseStudy {project.name}</div>;
  }
}

export default CaseStudy;
