import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { SkillContainer, SkillWrapper } from '../components/Styled';

const mapTech = tech => {
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

const TheSkills = props => {
  const output = props.skills.map(mapTech).map(t => (
    <SkillWrapper key={v1()}>
      <img src={t.src} alt={t.tech} />
      <span>{t.tech}</span>
    </SkillWrapper>
  ));

  return <SkillContainer>{output}</SkillContainer>;
};

TheSkills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default TheSkills;
