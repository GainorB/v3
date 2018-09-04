import React, { Fragment, Component } from 'react';
import { v1 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import { SectionHeader, SectionWrapper, ExpGrid, ExpHeaderGrid, ExpFooter } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
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
      <Fragment key={v1()}>
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
            {e.responsibilities.map(r => <li key={v1()}>{r}</li>)}
          </ol>
        </ExpGrid>
        <ExpFooter>
          {e.date} | {e.location}
        </ExpFooter>
      </Fragment>
    ));

    return output;
  };

  render() {
    const { experience, loading } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <SectionWrapper bg="#2f2f3a">
            <SectionHeader>Experience</SectionHeader>
          </SectionWrapper>
        </ThemeProvider>
        {loading ? 'Loading...' : this.renderExperience(experience)}
      </Fragment>
    );
  }
}

export default Experience;
