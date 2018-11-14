import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import Loading from '../../utils/Loading';
import { SectionHeader, Section, ExpGrid, ExpHeaderGrid, ExpFooter, ExpContainer } from '../Styled';
import { key } from '../../utils';
import api from '../../api';

const theme = {
  fontColor: '#fff',
};

class Experience extends PureComponent {
  state = {
    loading: true,
    experience: [],
  };

  componentDidMount = async () => {
    const experience = await api.experience();
    await this.setState({ experience, loading: false });
  };

  renderExperience = experience => {
    const output = experience.map(e => (
      <div key={key()}>
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
            {e.responsibilities.map(r => (
              <li key={key()}>{r}</li>
            ))}
          </ol>
        </ExpGrid>
        <ExpFooter>
          {e.date} | {e.location}
        </ExpFooter>
      </div>
    ));

    return <ExpContainer>{output}</ExpContainer>;
  };

  render() {
    const { experience, loading } = this.state;
    return (
      <div style={{ background: '#fff' }}>
        <ThemeProvider theme={theme}>
          <Section bg="#090909">
            <SectionHeader>experience.</SectionHeader>
          </Section>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderExperience(experience)}
      </div>
    );
  }
}

export default Experience;
