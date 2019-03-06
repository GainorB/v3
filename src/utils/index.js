import { v1 } from 'uuid';

export const mapTech = tech => {
  const map = {
    HTML5: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/html5.png', tech },
    CSS3: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/css3.png', tech },
    SASS: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/sass.png', tech },
    Javascript: {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/javascript.png',
      tech,
    },
    ES6: {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1538341441/portfolio/es6_logo.jpg',
      tech,
    },
    jQuery: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/jquery.png', tech },
    'React.js': { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/react.png', tech },
    TypeScript: {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/typescript.png',
      tech,
    },
    GraphQL: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028381/portfolio/graphql.png', tech },
    'Node.js': { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/nodejs.png', tech },
    'Express.js': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/expressjs.png',
      tech,
    },
    PostgreSQL: {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/postgresql.png',
      tech,
    },
    'RESTful APIs': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028384/portfolio/restful.png',
      tech,
    },
    MongoDB: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/mongodb.png', tech },
    'Heroku Deployment': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028382/portfolio/heroku.png',
      tech,
    },
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
    'Next.js': { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028383/portfolio/next.png', tech },
    'CSS Grid': { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/cssgrid.png', tech },
    'Digital Ocean Deployment': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536028380/portfolio/digitalocean.png',
      tech,
    },
    'Semantic UI': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536513240/portfolio/semantic.png',
      tech,
    },
    Redux: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536513431/portfolio/redux.png', tech },
    JSON: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536513551/portfolio/json.png', tech },
    AJAX: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536513765/portfolio/ajax.png', tech },
    Chai: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536514159/portfolio/chai.png', tech },
    'Responsive Design Principles': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536514290/portfolio/responsive.png',
      tech,
    },
    Bitbucket: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536550083/portfolio/bitbucket.png', tech },
    'Styled Components': {
      src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1536755033/portfolio/styledComponents.png',
      tech,
    },
    Cloudinary: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1538272733/portfolio/cloudinary.png', tech },
    Apollo: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1538272913/portfolio/apollo.png', tech },
    Trello: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1539478488/portfolio/trello.png', tech },
    Jira: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1547686590/portfolio/jira.png', tech },
    Docker: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1547686590/portfolio/docker.png', tech },
    Jest: { src: 'https://res.cloudinary.com/dplvzflkc/image/upload/v1547686590/portfolio/jest.png', tech },
  };

  return map[tech];
};

export const key = () => v1();
export const removeWhiteSpace = str => str.replace(/\s/g, '_');
export const removeUnderline = str => str.replace(/_/g, ' ');
export const mediaLinks = [
  {
    icon: 'fas fa-user-tie',
    link: 'https://www.dropbox.com/s/tdksg2d3qolwb6d/GainorBostwickResume.pdf?dl=0',
    network: 'resume',
    showOnSideMenu: false,
    color: '#fcc846',
  },
  {
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/GainorBostwick',
    network: 'twitter',
    showOnSideMenu: true,
    color: '#1e95dc',
  },
  {
    icon: 'fab fa-linkedin-in',
    link: 'https://www.linkedin.com/in/gainorbostwick/',
    network: 'linkedin',
    showOnSideMenu: true,
    color: '#0577b2',
  },
  // {
  //   icon: 'fab fa-instagram',
  //   link: 'https://www.instagram.com/gainorbos/',
  //   network: 'instagram',
  //   showOnSideMenu: true,
  //   color: '#B13DAC',
  // },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/GainorB',
    network: 'github',
    showOnSideMenu: true,
    color: '#24292E',
  },
  // {
  //   icon: 'fab fa-stack-overflow',
  //   link: 'https://stackoverflow.com/users/7965894/gainorb',
  //   network: 'stack',
  //   showOnSideMenu: true,
  //   color: '#F38134',
  // },
  {
    icon: 'fas fa-envelope',
    link: 'mailto:gainorbostwick@gmail.com',
    network: 'email',
    showOnSideMenu: true,
    color: '#ba4444',
  },
];
