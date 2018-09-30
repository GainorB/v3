import React, { Component } from 'react';
import Loading from '../utils/Loading';
import { Bio } from '../components/Styled';

class MyBio extends Component {
  state = {
    loadingBio: true,
    bio: '',
  };

  componentDidMount() {
    this.fetchBio();
  }

  fetchBio = async () => {
    const ENDPOINT = 'https://api.github.com/users/GainorB';
    const { bio } = await fetch(ENDPOINT).then(res => res.json());
    this.setState({ bio, loadingBio: false });
  };

  render() {
    const { loadingBio, bio } = this.state;
    if (loadingBio) return <Loading />;
    return <Bio>{bio}</Bio>;
  }
}

export default MyBio;
