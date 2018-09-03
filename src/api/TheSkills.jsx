import React from 'react';
import { v1 } from 'uuid';

const skills = [
  'HTML5',
  'CSS3',
  'SASS',
  'Javascript',
  'jQuery',
  'React',
  'TypeScript',
  'GraphQL',
  'Node',
  'Express',
  'PostgreSQL',
  'RESTful APIs',
  'MongoDB',
  'Heroku',
  'Github',
  'Bootstrap',
  'Materialize',
  'Foundation',
  'Firebase',
  'Wordpress',
  'Ruby',
  'Rails',
  'Webpack',
  // 'Flexbox',
  // 'CSS Grid',
  // 'Digital Ocean',
];

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
  };

  return key[tech];
};

const TheSkills = () => {
  const grid = {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    gridGap: '10px',
    fontSize: '0.9rem',
    textAlign: 'center',
    margin: '0.5em',
  };

  const outputGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 100px))',
    gridGap: '15px',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const output = skills.map(mapTech).map(t => (
    <div key={v1()}>
      <img src={t.src} alt={t.tech} style={imgStyle} />
    </div>
  ));

  return <div style={outputGrid}>{output}</div>;
};

export default TheSkills;
