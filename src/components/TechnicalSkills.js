import React, { Component, Fragment } from 'react';
import { debounce } from 'lodash';
// import FlipMove from 'react-flip-move';
import { v1 } from 'uuid';
import { ThemeProvider } from 'styled-components';
import Loading from './Loading';
import { SectionWrapper, SkillWrapper, SkillContainer, ReturnedResults } from './Styled';

const theme = {
  fontColor: '#fff',
};

class TechnicalSkills extends Component {
  state = {
    loading: true,
    skills: [],
    displayedSkills: [],
    typing: false,
  };

  componentDidMount = async () => {
    const skills = await fetch('https://gainorportfolio.firebaseio.com/skills/.json').then(res => res.json());
    await this.setStateAsync({ skills, displayedSkills: skills, loading: false });
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  filterSkills = debounce(query => {
    this.setState({
      displayedSkills: this.state.skills.filter(s => s.toLowerCase().includes(query)),
    });
  }, 700);

  handleChange = e => {
    const query = e.target.value.toLowerCase();
    this.filterSkills(query);
    if (e.target.value.length > 0) {
      this.setState({ typing: true });
    } else {
      this.setState({ typing: false });
    }
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
    const { displayedSkills, loading, typing } = this.state;
    const { length } = displayedSkills;
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <SectionWrapper bg="#090909">
            <input type="text" name="searchTerm" placeholder="technical." onChange={this.handleChange} />
            <ReturnedResults>
              Currently displaying {length} skill{length > 0 ? 's' : ''}.
            </ReturnedResults>
            {!typing && <p className="replace">replace 'technical' with a technology to filter skills</p>}
          </SectionWrapper>
        </ThemeProvider>
        {loading ? <Loading /> : this.renderSkills(displayedSkills)}
      </Fragment>
    );
  }
}

export default TechnicalSkills;
