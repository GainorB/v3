import React, { Fragment, Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Loading from './Loading';
import { SectionHeader, Section, ExpGrid, ExpHeaderGrid, ExpFooter, ExpContainer } from './Styled';
import { key } from '../utils';

const theme = {
  fontColor: '#fff',
};

class Experience extends Component {
  state = {
    loading: true,
    experience: [],
  };

  componentDidMount = async () => {
    const experience = await fetch('https://gainorportfolio.firebaseio.com/experience/.json').then(res => res.json());
    await this.setStateAsync({ experience, loading: false });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  renderExperience = experience => {
    const output = experience.map(e => (
      <Fragment key={key()}>
        <ExpGrid>
          <ExpHeaderGrid>
            <img src={e.companyLogo} alt={e.companyName} />
            <div className="exp__companyName">
              {e.companyName}
              <span className="exp__jobTitle">{e.jobTitle}</span>
            </div>
          </ExpHeaderGrid>
          <div className="exp__companyDescription">{e.companyDescription}</div>
          <ol className="exp__responsibilities">
            <span>Responsibilities</span>
            {e.responsibilities.map(r => <li key={key()}>{r}</li>)}
          </ol>
        </ExpGrid>
        <ExpFooter>
          {e.date} | {e.location}
        </ExpFooter>
      </Fragment>
    ));

    return <ExpContainer>{output}</ExpContainer>;
  };

  render() {
    const { experience, loading } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            <SectionHeader>experience.</SectionHeader>
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderExperience(experience)}
      </Fragment>
    );
  }
}

export default Experience;
