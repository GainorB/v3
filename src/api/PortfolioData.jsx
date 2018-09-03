import React, { Component } from 'react';
import { PortfolioWrapper } from '../components/Styled';

class PortfolioData extends Component {
  state = {
    dataFetched: true,
    data: [
      {
        name: 'MaskOFF',
        image: '../../assets/images/maskoff.png',
        description:
          "A marketplace designed to trade your most hyped items (grails). A grail is a thing that is being earnestly pursued or sought after. An unregistered user is able to browse the marketplace to view active trades but to create a trade or view detailed information relating to a listing, you'll need to create an account. A registered user, is able to create listings and view detailed information regarding each listing. Furthermore, when registered you can accept trades and interact with users.",
        technologies: ['Javascript', 'jQuery', 'PostgreSQL', 'Express.js', 'Node.js'],
        resources: ['https://github.com/GainorB/MaskOFF', 'https://maskoff.herokuapp.com/'],
      },
      {
        name: 'Memedr',
        image: '../../assets/images/memedr.png',
        description:
          'Memedr is an application that brings people together based on their choice of memes. A meme is a humorous image, video, piece of text, etc., that is copied (often with slight variations) and spread rapidly by Internet users. A user is presented with a meme, they can choose if they like it or not. Upon liking a meme, users are matched with other users who share the same liked meme. Once matched, users see each others profile and are able to contact each other from there.',
        technologies: ['Javascript', 'RESTful API', 'Express.js', 'Node.js', 'PostgreSQL', 'React.js'],
        resources: ['https://git.generalassemb.ly/GainorB/memedr', 'https://memedrapp.herokuapp.com/'],
      },
      {
        name: 'GoodNews',
        image: '../../assets/images/goodNews.png',
        description:
          'An application that finds churches surrounding a user utilizing Google Places and Maps API. A user can leave reviews on churches they visited and SMS location information for easier accessibility. Reviews are published publically to help other users find churches.',
        technologies: ['Javascript', "RESTful API's", 'Express.js', 'Node.js', 'PostgreSQL'],
        resources: ['https://github.com/GainorB/churchfindr', 'https://churchfindr.herokuapp.com/'],
      },
      {
        name: 'Typr',
        image: '../../assets/images/typr.png',
        description:
          'A game built primarily with vanilla Javascript, utilizing axios to fetch an API to display random unrepeating words. Focused on testing and improving typing skills and speed. The user can select the difficulty of the game by choosing the word length. At the end, high scores are saved in a Google Firebase database.',
        technologies: ['Javascript', 'RESTful API', 'Google Firebase'],
        resources: ['https://github.com/GainorB/typr', 'https://gainorb.github.io/typr/'],
      },
    ],
  };

  parseData = () => {
    const { data } = this.state;

    const imgStyle = {
      width: '100%',
      height: '100%',
    };

    const output = data.map((p, idx) => {
      const bg = idx % 2 === 1 ? '#713036' : '#a23339';
      const divStyle = {
        width: '100%',
        height: '100%',
        color: '#fff',
        fontSize: '1rem',
        backgroundColor: bg,
        padding: '50px',
      };

      return (
        <div style={divStyle}>
          <img src={p.image} alt={p.name} style={imgStyle} />
        </div>
      );
    });
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
