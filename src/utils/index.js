// import 'React' from 'react'

// MAP my skills to an object containing an image
export const mapTech = tech => {
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