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
    this.search.focus();
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
      HTML5: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/html5.png', tech },
      CSS3: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/css3.png', tech },
      SASS: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/sass.png', tech },
      Javascript: {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/javascript.png',
        tech,
      },
      jQuery: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/jquery.png', tech },
      React: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/react.png', tech },
      TypeScript: {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/typescript.png',
        tech,
      },
      GraphQL: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028381/portfolio/graphql.png', tech },
      Node: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/nodejs.png', tech },
      Express: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/expressjs.png', tech },
      PostgreSQL: {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/postgresql.png',
        tech,
      },
      'RESTful APIs': {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/restful.png',
        tech,
      },
      MongoDB: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/mongodb.png', tech },
      Heroku: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/heroku.png', tech },
      Github: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028381/portfolio/github.png', tech },
      Bootstrap: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/bootstrap.png', tech },
      Materialize: {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/materialize.png',
        tech,
      },
      Foundation: {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028381/portfolio/foundation.png',
        tech,
      },
      Firebase: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/firebase.png', tech },
      Wordpress: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028385/portfolio/wordpress.png', tech },
      Ruby: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/ruby.png', tech },
      Rails: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/rails.png', tech },
      Webpack: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028385/portfolio/webpack.png', tech },
      Handlebars: {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028381/portfolio/handlebars.png',
        tech,
      },
      Gulp: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028381/portfolio/gulp.png', tech },
      Mocha: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/mocha.png', tech },
      Babel: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/babel.png', tech },
      Next: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/next.png', tech },
      'CSS Grid': { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/cssgrid.png', tech },
      'Digital Ocean': {
        src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/digitalocean.png',
        tech,
      },
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
            <input
              type="text"
              name="searchTerm"
              placeholder="Search for a skill..."
              onChange={this.handleChange}
              ref={input => {
                this.search = input;
              }}
            />
            <span className="totalSkills">Currently viewing {displayedSkills.length} skill(s).</span>
          </SectionWrapper>
        </ThemeProvider>
        {loading ? 'Loading...' : this.renderSkills(displayedSkills)}
      </Fragment>
    );
  }
}

export default TechnicalSkills;
