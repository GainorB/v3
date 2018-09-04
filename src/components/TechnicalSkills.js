import React, { Component, Fragment } from 'react';
import { debounce } from 'lodash';
import { v1 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import { SectionDesc, SectionHeader, SectionWrapper, SkillWrapper, SkillContainer } from './Styled';

const theme = {
  fontColor: '#d8d8e0',
};

class TechnicalSkills extends Component {
  state = {
    loading: true,
    techSkills: [],
    displayedSkills: [],
  };

  componentDidMount = async () => {
    const skills = await fetch('https://gainorportfolio.firebaseio.com/skills/.json').then(res => res.json());
    await this.setStateAsync({ techSkills: skills, displayedSkills: skills, loading: false });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  setDisplayedSkills = debounce(query => {
    this.setState({
      displayedSkills: this.state.techSkills.filter(c => c.toLowerCase().includes(query)),
    });
  }, 500);

  handleChange = e => {
    const query = e.target.value.toLowerCase();
    this.setDisplayedSkills(query);
  };

  mapTech = tech => {
    const key = {
      HTML5: { src: '../../assets/images/tech/html5.png', tech },
      CSS3: { src: '../../assets/images/tech/css3.png', tech },
      SASS: { src: '../../assets/images/tech/sass.png', tech },
      Javascript: { src: '../../assets/images/tech/javascript.png', tech },
      jQuery: { src: '../../assets/images/tech/jquery.png', tech },
      React: { src: '../../assets/images/tech/react.png', tech },
      TypeScript: { src: '../../assets/images/tech/typescript.png', tech },
      GraphQL: { src: '../../assets/images/tech/graphql.png', tech },
      Node: { src: '../../assets/images/tech/nodejs.png', tech },
      Express: { src: '../../assets/images/tech/expressjs.png', tech },
      PostgreSQL: { src: '../../assets/images/tech/postgresql.png', tech },
      'RESTful APIs': { src: '../../assets/images/tech/restful.png', tech },
      MongoDB: { src: '../../assets/images/tech/mongodb.png', tech },
      Heroku: { src: '../../assets/images/tech/heroku.png', tech },
      Github: { src: '../../assets/images/tech/github.png', tech },
      Bootstrap: { src: '../../assets/images/tech/bootstrap.png', tech },
      Materialize: { src: '../../assets/images/tech/materialize.png', tech },
      Foundation: { src: '../../assets/images/tech/foundation.png', tech },
      Firebase: { src: '../../assets/images/tech/firebase.png', tech },
      Wordpress: { src: '../../assets/images/tech/wordpress.png', tech },
      Ruby: { src: '../../assets/images/tech/ruby.png', tech },
      Rails: { src: '../../assets/images/tech/rails.png', tech },
      Webpack: { src: '../../assets/images/tech/webpack.png', tech },
      Handlebars: { src: '../../assets/images/tech/handlebars.png', tech },
      Gulp: { src: '../../assets/images/tech/gulp.png', tech },
      Mocha: { src: '../../assets/images/tech/mocha.png', tech },
      Babel: { src: '../../assets/images/tech/babel.png', tech },
      Next: { src: '../../assets/images/tech/next.png', tech },
      'CSS Grid': { src: '../../assets/images/tech/cssgrid.png', tech },
      'Digital Ocean': { src: '../../assets/images/tech/digitalocean.png', tech },
    };

    return key[tech];
  };

  renderSkills = skills => {
    const output = skills.map(this.mapTech).map(t => (
      <SkillWrapper key={v1()}>
        <img src={t.src} alt={t.tech} />
        <span>{t.tech}</span>
      </SkillWrapper>
    ));

    return <SkillContainer>{output}</SkillContainer>;
  };

  render() {
    const { displayedSkills, loading } = this.state;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <SectionWrapper bg="#2f2f3a">
            <SectionHeader>Technical Skills</SectionHeader>
            <SectionDesc>Currently in ❤️ with TypeScript, React, Node, GraphQL, PostgreSQL</SectionDesc>
            <input type="text" name="searchTerm" placeholder="Search for a skill..." onChange={this.handleChange} />
            <span className="totalSkills">Currently viewing {displayedSkills.length} skill(s).</span>
          </SectionWrapper>
        </ThemeProvider>
        {loading ? 'Loading...' : this.renderSkills(displayedSkills)}
      </Fragment>
    );
  }
}

export default TechnicalSkills;
