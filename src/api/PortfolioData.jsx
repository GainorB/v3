import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  MoreDetails,
  Online,
  PortfolioWrapper,
  Project,
  ProjectDesc,
  ProjectGrid,
  ProjectTitle,
  Tech,
} from '../components/Styled';

class PortfolioData extends Component {
  state = {
    dataFetched: true,
    data: [
      {
        name: 'MaskOFF',
        image: '../../assets/images/maskoff.png',
        description:
          "A marketplace designed to trade your most hyped items (grails). A grail is a thing that is being earnestly pursued or sought after. An unregistered user is able to browse the marketplace to view active trades but to create a trade or view detailed information relating to a listing, you'll need to create an account. A registered user, is able to create listings and view detailed information regarding each listing. Furthermore, when registered you can accept trades and interact with users.",
        technologies: ['js', 'jquery', 'postgres', 'express', 'node'],
        resources: ['https://github.com/GainorB/MaskOFF', 'https://maskoff.herokuapp.com/'],
      },
      {
        name: 'Memedr',
        image: '../../assets/images/memedr.png',
        description:
          'Memedr is an application that brings people together based on their choice of memes. A meme is a humorous image, video, piece of text, etc., that is copied (often with slight variations) and spread rapidly by Internet users. A user is presented with a meme, they can choose if they like it or not. Upon liking a meme, users are matched with other users who share the same liked meme. Once matched, users see each others profile and are able to contact each other from there.',
        technologies: ['js', 'restful', 'express', 'node', 'postgres', 'react'],
        resources: ['https://git.generalassemb.ly/GainorB/memedr', 'https://memedrapp.herokuapp.com/'],
      },
      {
        name: 'GoodNews',
        image: '../../assets/images/goodNews.png',
        description:
          'An application that finds churches surrounding a user utilizing Google Places and Maps API. A user can leave reviews on churches they visited and SMS location information for easier accessibility. Reviews are published publically to help other users find churches.',
        technologies: ['js', 'restful', 'express', 'node', 'postgres'],
        resources: ['https://github.com/GainorB/churchfindr', 'https://churchfindr.herokuapp.com/'],
      },
      {
        name: 'Typr',
        image: '../../assets/images/typr.png',
        description:
          'A game built primarily with vanilla Javascript, utilizing axios to fetch an API to display random unrepeating words. Focused on testing and improving typing skills and speed. The user can select the difficulty of the game by choosing the word length. At the end, high scores are saved in a Google Firebase database.',
        technologies: ['js', 'restful', 'firebase'],
        resources: ['https://github.com/GainorB/typr', 'https://gainorb.github.io/typr/'],
      },
    ],
  };

  // mapTech = tech => {
  //   const key = {
  //     react: '../../assets/images/tech/react.png',
  //     js: '../../assets/images/tech/javascript.png',
  //     html: '../../assets/images/tech/html5.png',
  //     css: '../../assets/images/tech/css3.png',
  //     webpack: '../../assets/images/tech/webpack.png',
  //     node: '../../assets/images/tech/nodejs.png',
  //     postgres: '../../assets/images/tech/postgresql.png',
  //     mongo: '../../assets/images/tech/mongodb.png',
  //     jquery: '../../assets/images/tech/jquery.png',
  //     express: '../../assets/images/tech/expressjs.png',
  //     restful: '../../assets/images/tech/restful.png',
  //     firebase: '../../assets/images/tech/firebase.png',
  //   };

  //   return key[tech];
  // };

  parseData = () => {
    const { data } = this.state;

    // const divStyle = {
    //   maxWidth: '110px',
    //   maxHeight: '110px',
    //   display: 'inline-block',
    //   margin: '0.3em 0.3em 0.3em 0',
    // };

    // const imgStyle = {
    //   width: '100%',
    //   height: '100%',
    // };

    const output = data.map((p, idx) => (
      <ProjectGrid key={`${p.name}_${idx}`}>
        <img src={p.image} alt={p.name} />
        <Project>
          <ListGroup>
            <li>
              <ProjectTitle>{p.name}</ProjectTitle>
            </li>
            <li>
              <ProjectDesc>{p.description.substring(0, 200)}...</ProjectDesc>
            </li>
            {/* <li>
              {p.technologies.map(this.mapTech).map(t => (
                <div style={divStyle}>
                  <img style={imgStyle} src={t} alt={p.name} />
                </div>
              ))}
            </li> */}
            <li>{p.technologies.map(t => <Tech>{t}</Tech>)}</li>
            <li>
              <a href={p.resources[1]} target="_blank" rel="noopener noreferrer">
                <Online>View Online</Online>
              </a>
            </li>
            <li>
              <Link to={`/projects/${p.name}`}>
                <MoreDetails>Case study</MoreDetails>
              </Link>
            </li>
          </ListGroup>
        </Project>
      </ProjectGrid>
    ));
    return <PortfolioWrapper>{output}</PortfolioWrapper>;
  };

  render() {
    const { data, dataFetched } = this.state;
    if (dataFetched) {
      return this.parseData();
    }

    return <div>Error</div>;
  }
}

export default PortfolioData;
