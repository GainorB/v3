import React, { Component } from 'react';

class CaseStudy extends Component {
  state = { project: null, loading: true };

  componentDidMount() {
    console.log(this.props.project);
    if (this.props.project) {
      this.setState({ project: this.props.project, loading: false });
    }

    console.log(this.props.location.state.project);
    if (this.props.location.state.project) {
      this.setState({ project: this.props.location.state.project, loading: false });
    }
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
