import React, { Component } from 'react';
import { distanceInWords } from 'date-fns';
import api from './index';
import Loading from '../utils/Loading';
import { UnorderedList, CommitListItem } from '../components/Styled';
import { key } from '../utils';
import ErrorMessage from '../utils/ErrorMessage';
import ReturnHome from '../utils/ReturnHome';

class Commits extends Component {
  state = {
    loading: true,
    response: null,
    error: null,
  };

  componentDidMount = async () => {
    const data = await api.fetchCommits();
    if (data.length > 5) {
      this.setState({ response: data, loading: false });
    } else {
      this.setState({ error: 'API Error: please try again shortly.', loading: false });
    }
  };

  parseCommits = commits => {
    const output = commits.map((c, idx) => (
      <CommitListItem key={key()} isAlt={idx % 2 === 0}>
        <div className="commit__index">{idx === 0 ? <span className="commit__current">Recent</span> : idx}</div>
        <div className="commit__meta">
          <a href={c.html_url} target="_blank" rel="noopener noreferrer">
            {c.commit.message}
          </a>
          <span className="commit__date">
            commited {distanceInWords(new Date(), c.commit.committer.date, { addSuffix: true, includeSeconds: true })}{' '}
            by{' '}
            <a href={c.author.html_url} target="_blank" rel="noopener noreferrer">
              {c.author.login}
            </a>
          </span>
        </div>
      </CommitListItem>
    ));

    return <UnorderedList>{output}</UnorderedList>;
  };

  render() {
    const { response, loading, error } = this.state;
    if (error) return <ErrorMessage error={error} />;
    if (loading) return <Loading />;
    return this.parseCommits(response);
  }
}

export default Commits;
