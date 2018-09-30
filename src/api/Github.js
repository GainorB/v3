// import { distanceInWordsStrict } from 'date-fns';
import React, { PureComponent } from 'react';
import Loading from '../utils/Loading';
import { Hub, ListGroup } from '../components/Styled';

class Github extends PureComponent {
  state = {
    loadingProfile: true,
    loadingRepos: true,
    profile: {},
    myRepos: [],
  };

  componentDidMount() {
    this.profileInformation();
    this.recentRepos();
  }

  profileInformation = async () => {
    const ENDPOINT = 'https://api.github.com/users/GainorB';
    const { id, public_repos, followers, following, updated_at } = await fetch(ENDPOINT).then(res => res.json());

    if (id) {
      this.setState({
        loadingProfile: false,
        profile: { id, public_repos, followers, following, updated_at },
      });
    }
  };

  recentRepos = async () => {
    const ENDPOINT = 'https://api.github.com/users/GainorB/repos';
    const repos = await fetch(ENDPOINT).then(res => res.json());
    const myRepos = repos.filter(r => r.fork === false).map(r => ({
      name: r.name,
      created_at: r.created_at,
      updated_at: r.updated_at,
      url: `https://github.com/GainorB/${r.name}`,
      description: r.description,
    }));

    if (myRepos.length) {
      this.setState({
        loadingRepos: false,
        myRepos,
      });
    }
  };

  render() {
    const { loadingProfile, loadingRepos, profile, myRepos } = this.state;
    const random = Math.floor(Math.random() * myRepos.length);
    if (loadingProfile || loadingRepos) {
      return <Loading />;
    }
    return (
      <ListGroup>
        {/* <Hub>Last updated {distanceInWordsStrict(new Date(), profile.updated_at, { addSuffix: true })}</Hub> */}
        <a href="https://github.com/GainorB?tab=repositories" target="_blank" rel="noopener noreferrer">
          <Hub>{profile.public_repos} repositories</Hub>
        </a>
        <a href="https://github.com/GainorB?tab=followers" target="_blank" rel="noopener noreferrer">
          <Hub>{profile.followers} followers</Hub>
        </a>
        <a href="https://github.com/GainorB?tab=following" target="_blank" rel="noopener noreferrer">
          <Hub>Following {profile.following} cool devs</Hub>
        </a>
        <a href={myRepos[random].url} target="_blank" rel="noopener noreferrer">
          <Hub>
            <span>{myRepos[random].name}</span>
            <div>{myRepos[random].description}</div>
          </Hub>
        </a>
      </ListGroup>
    );
  }
}

export default Github;
