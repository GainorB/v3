import React, { Fragment, PureComponent } from 'react';
import Loading from '../utils/Loading';
import { SideMenuHub, UnorderedList, SideMenuSectionTitle } from '../components/Styled';

class Github extends PureComponent {
  state = {
    loadingProfile: true,
    loadingRepos: true,
    profile: {},
    myRepos: [],
    error: null,
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
    } else {
      this.setState({ error: true });
    }
  };

  recentRepos = async () => {
    const ENDPOINT = 'https://api.github.com/users/GainorB/repos';
    const repos = await fetch(ENDPOINT).then(res => res.json());
    if (repos.length >= 0) {
      const myRepos = repos.filter(r => r.fork === false).map(r => ({
        name: r.name,
        created_at: r.created_at,
        updated_at: r.updated_at,
        url: `https://github.com/GainorB/${r.name}`,
        description: r.description,
      }));

      this.setState({
        loadingRepos: false,
        myRepos,
      });
    } else {
      this.setState({ error: true });
    }
  };

  notSoRandomRepo = repos => {
    const random = Math.floor(Math.random() * repos.length);

    return (
      <a href={repos[random].url} target="_blank" rel="noopener noreferrer">
        <span>{repos[random].name}</span>
        <div>{repos[random].description === null ? `Repo doesn't have a description` : repos[random].description}</div>
      </a>
    );
  };

  render() {
    const { loadingProfile, loadingRepos, profile, myRepos, error } = this.state;
    if (error) return null;
    if (loadingProfile || loadingRepos) {
      return <Loading />;
    }
    return (
      <Fragment>
        <SideMenuSectionTitle>Github Snapshot</SideMenuSectionTitle>
        <SideMenuHub>
          <UnorderedList>
            <li>
              <a href="https://github.com/GainorB?tab=repositories" target="_blank" rel="noopener noreferrer">
                {profile.public_repos} repositories
              </a>
            </li>
            {/* <li>
              <a href="https://github.com/GainorB?tab=followers" target="_blank" rel="noopener noreferrer">
                {profile.followers} followers
              </a>
            </li> */}
            {/* <li>
              <a href="https://github.com/GainorB?tab=following" target="_blank" rel="noopener noreferrer">
                Following {profile.following} cool devs
              </a>
            </li> */}
            <li>{this.notSoRandomRepo(myRepos)}</li>
          </UnorderedList>
        </SideMenuHub>
      </Fragment>
    );
  }
}

export default Github;
