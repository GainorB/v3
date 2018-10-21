import React, { Component } from 'react';
import Loading from '../utils/Loading';
import { SideMenuBio } from '../components/Styled';

class MyBio extends Component {
  state = {
    loadingBio: true,
    error: false,
    bio: '',
  };

  componentDidMount() {
    this.fetchBio();
  }

  fetchBio = async () => {
    const ENDPOINT = 'https://api.github.com/users/GainorB';
    const { bio } = await fetch(ENDPOINT).then(res => res.json());
    if (bio) {
      this.setState({ bio, loadingBio: false, error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { loadingBio, bio, error } = this.state;
    if (error) return null;
    if (loadingBio) return <Loading />;
    return <SideMenuBio>{bio}</SideMenuBio>;
  }
}

export default MyBio;
